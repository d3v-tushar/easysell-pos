import React, { useContext } from 'react';
import loginimg from "../../assets/login.jpg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/authcontext/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const {emailPassSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();

        //sign in with email and password
        emailPassSignIn(email, password)
            .then(res => {
                if(res.user){
                    navigate(from, { replace: true });
                    toast.success('Successfully logged in!!!');
                }
    }).catch(err => console.log(err.messages))
    };

    return (
        <section className="bg-white dark:bg-gray-900">
    <div className="container flex items-center justify-center px-6 mx-auto my-32">
    <div className="text-center lg:text-left  p-5">
          <img className="w-full rounded-lg" src={loginimg} alt=""></img>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md">


            <h1 className="mt-3 text-center items-center  text-2xl font-semibold text-indigo-800 capitalize sm:text-3xl dark:text-white">Login now!</h1>

            <div className="relative flex items-center mt-8">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>

                <input type="email" name='email' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"/>
            </div>

            <div className="relative flex items-center mt-4">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

                <input type="password" name='password' className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password"/>
            </div>

            <div className="mt-6">
                <button type='submit' className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
                Login
                </button>


                <div className="mt-6 text-center ">
                    <Link to="/register" className="text-sm text-indigo-500 hover:underline dark:text-indigo-400">
                        Don’t have an account yet? Sign up
                    </Link>
                </div>
            </div>
        </form>
    </div>
</section>
    );
};

export default Login;