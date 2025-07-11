import Lottie from 'lottie-react';
import React from 'react';
import error from '../../../error.json'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex justify-center flex-col items-center gap-4'>
            <Lottie style={{width: '400px'}} animationData={error} loop={true} />
            <Link to="/" className='btn bg-emerald-500 hover:bg-emerald-600 text-white font-bold'>Back to Home</Link>
        </div>
    );
};

export default ErrorPage;