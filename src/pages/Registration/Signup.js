import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Signup = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [createdUserEmail, setcreatedUserEmail] = useState('');

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        //console.log(name,email,password);

        const user = {
            name,
            email
        }
        
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data);
            form.reset();
            // if(data.acknowledged){
            //     toast.success('Product Added Successfully!')
            //     navigate('/dashboard/myproducts')
            // }
        }
        )

        

        if(password.length < 6){
            setError('*Password must be at least 6 characters long')
            return;
        }


        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            handleUpdateUserProfile(name);
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })

    }
    const handleUpdateUserProfile = (name, photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error))
    }


    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
            <div className='bg-[#F2F5FF] h-[550px] w-[550px] shadow-sm rounded-lg flex flex-col  justify-center items-center'>
                <p className='text-[#31507D] text-3xl font-semibold mt-4'>Create a New Account</p>
                <p className='text-[#A9B5C7]'>Enter your credentials to create your account.</p>
                <form onSubmit={handleSignup}  className="space-y-6 ng-untouched ng-pristine ng-valid ng-submitted w-4/5 mt-16 mb-8">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block text-[#31507D] text-lg">Full Name</label>
                        <input type="text" name="name" id="name" placeholder="John Doe" className="w-full px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-[#31507D] text-lg">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600" required />
                    </div>
                    <div className="space-y-1 text-sm mb-5">
                        <label htmlFor="password" className="block text-[#31507D] text-lg">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600" required />
                    </div>
                    {/* <p className='text-red-400 text-sm text-center mb-4'></p> */}
                    <button type='submit' value='Submit' className=" bg-[#267FFF] block w-full p-3 text-center rounded-sm text-white btn btn-primary normal-case">Create Account</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Signup;