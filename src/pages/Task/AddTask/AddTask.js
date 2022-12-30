import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../AuthContext/AuthProvider';

const AddTask = () => {
    const { user } = useContext(AuthContext);
    const [imgurl, setImgurl] = useState(null);
    const imageHostKey = "2d03eac47e129304982d54bfd7428629";
    const [error, setError] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const details = form.details.value;
        const image = form.picture.files[0];
        const email = user.email;

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            if(imgData.success){

                const addTask = {
                    title,
                    details,
                    email,
                    image: imgData.data.url,
                    status: "False",
                }
                console.log(addTask);
                setImgurl(imgData.data.url);

                fetch('https://y-phi-one.vercel.app/tasks',{
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(addTask)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    form.reset();
                    if(result.acknowledged){
                        toast.success('Task Added Successfully!')
                    }
                })
                .catch(error => {
                    console.error(error);
                    setError(error.message);
                })
        }
        
    })
    }


    return (
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={handleSubmit} className='bg-gradient-to-b from-[#0086d9] to-[#3a82d5] w-96 max-h-fit flex flex-col justify-center items-center rounded-lg shadow-2xl'>
                <p className='text-lg font-medium text-white mt-5'>Add Task</p>
                <div className='bg-white flex flex-col justify-center items-center w-3/4 p-5 rounded-lg mt-5 shadow-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    <div className="text-sm flex flex-col justify-center items-center space-y-3">
                        <label className="label">
                            <span className="label-text">Upload Picture:</span>
                        </label>
                        <input type="file" name='picture' className="text-[#2F80EC] w-2/3" required />
                    </div>
                </div>
                <div className="my-5 text-md w-full px-4">
                    <input type="text" name="title" id="title" placeholder="Task Title" className="px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600 w-full" required />
                </div>
                <div className="mb-5 text-md w-full px-4">
                    <textarea type="text" name="details" id="details" placeholder="Task Details" className=" px-4 py-3 rounded-md border border-primary bg-gray-50 text-gray-800 focus:border-green-600 h-20 w-full" required />
                </div>
                <button type='submit' value='Submit' className="border-2 border-white hover:bg-white hover:text-[#2F80EC] block px-4 py-2 text-center rounded-md hover:shadow-lg text-white btn btn-primary normal-case mb-5">Submit</button>

            </form>
        </div>
    );
};

export default AddTask;