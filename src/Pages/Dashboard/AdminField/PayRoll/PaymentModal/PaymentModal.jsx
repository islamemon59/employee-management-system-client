import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const PaymentModal = ({ payEmployee }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();

  const salary = payEmployee.salary;
  const salaryInCents = parseInt(salary) * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { data } = await axiosSecure.post("create-payment-intent", {
      salaryInCents,
    });

    const clientSecret = data.clientSecret;
    console.log(clientSecret);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        toast.success("Payment successful!");
      }
    }

    // document.getElementById("my_modal_1").closeModal();
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <form onSubmit={handleSubmit}>
          <CardElement
            className="border-1 p-4 rounded"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn w-full mt-3 bg-emerald-500 hover:bg-emerald-600 text-white"
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
