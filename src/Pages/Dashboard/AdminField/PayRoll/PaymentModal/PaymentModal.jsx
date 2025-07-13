import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { MdClose } from "react-icons/md";

const PaymentModal = ({ payEmployee, refetch }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();

  const requestId = payEmployee?._id;
  const salary = payEmployee.salary;
  const salaryInCents = parseInt(salary) * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      toast.error(error.message);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { data } = await axiosSecure.post("create-payment-intent", {
      salaryInCents,
    });

    const clientSecret = data.clientSecret;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error(result.error.message);
      toast.error(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        toast.success("Payment successful!");

        const paymentData = {
          id: payEmployee.id,
          name: payEmployee.name,
          email: payEmployee.email,
          amount: payEmployee.salary,
          month: payEmployee.month,
          year: payEmployee.year,
          createdAt: new Date().toISOString(),
          transactionId: result.paymentIntent.id,
        };

        const { data } = await axiosSecure.post(
          `employee/payment/data/${requestId}`,
          paymentData
        );

        refetch();
        console.log(data);
        document.getElementById("my_modal_1").close();
      }
    }
  };

  const handleModal = () => {
    document.getElementById("my_modal_1").close();
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box relative bg-white dark:bg-gray-900 dark:text-gray-200">
        <button
          onClick={handleModal}
          className="absolute bottom-3 left-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer"
          aria-label="Close Modal"
        >
          <MdClose size={24} />
        </button>
        <form onSubmit={handleSubmit}>
          <CardElement
            className="p-4 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#1f2937", // dark text for light mode
                  "::placeholder": {
                    color: "#6b7280", // placeholder gray for light mode
                  },
                  fontFamily: "Arial, sans-serif",
                  iconColor: "#10b981", // emerald green icon
                },
                invalid: {
                  color: "#ef4444", // red for invalid input
                  iconColor: "#ef4444",
                },
                dark: {
                  color: "#d1d5db", // light gray text in dark mode
                  "::placeholder": {
                    color: "#9ca3af",
                  },
                  iconColor: "#10b981",
                },
              },
            }}
          />
          <button
            className="btn w-full mt-3 bg-emerald-500 hover:bg-emerald-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={!stripe}
          >
            Pay
          </button>
        </form>
        <div className="modal-action"></div>
      </div>
    </dialog>
  );
};

export default PaymentModal;
