import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Signin = () => {
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const {loginUser, providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                setLoginUserEmail(email);
            navigate(from, {replace: true});
                
            })
            .catch(error => {
                console.error(error);
                setError('Invalid email/password');
            });

    }






    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-[#F2F5FF] h-[550px] w-[550px] shadow-sm rounded-lg flex flex-col  justify-center items-center'>
                <p className='text-[#31507D] text-3xl font-semibold mt-4'>Welcome Back</p>
                <p className='text-[#A9B5C7]'>Enter your credentials to access your account.</p>
                <form onSubmit={handleLogin} className="space-y-6 ng-untouched ng-pristine ng-valid ng-submitted w-4/5 mt-16">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-[#31507D] text-lg">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600" required />
                    </div>
                    <div className="space-y-1 text-sm mb-5">
                        <label htmlFor="password" className="block text-[#31507D] text-lg">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600" required />
                    </div>
                    {/* <p className='text-red-400 text-sm text-center mb-4'></p> */}
                    <button className=" bg-[#267FFF] block w-full p-3 text-center rounded-sm text-white btn btn-primary normal-case">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                    <p className="px-3 text-sm text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm border-2 hover:border-blue-600 mb-1 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>

                </div>
                <p className="text-sm text-center sm:px-6 text-gray-600 mb-5">Don't have an account?
                    <Link to='/signup' rel="noopener noreferrer" href="#" className="underline text-gray-800">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Signin;