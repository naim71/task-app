import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Complete = ({ task, refetch }) => {

    const handleDeleteTask = user => {
        fetch(`https://y-phi-one.vercel.app/tasks/${task._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${task.title} deleted successfully`)
                }
            })
    }
    return (
        <div className='h-full border-l-4 border-green-600 rounded-md shadow-lg'>
            <div className='flex justify-between p-8'>
                {
                    task.status !== "completed" ?
                        <>
                            <div className='flex flex-col justify-center items-start'>
                                <p className='text-2xl font-semibold mb-3'>{task.title}</p>
                                <p className='mb-3'>{task.details}</p>
                                <div className='flex justify-center items-center space-x-5'>
                                    <button className='bg-red-500 py-2 px-3 hover:bg-red-700 rounded-md text-white' onClick={handleDeleteTask}>Delete</button>
                                    <Link  to='/mytask' className='bg-green-500 py-2 px-3 hover:bg-green-700 rounded-md text-white'>Not Completed</Link>
                                </div>
                            </div>
                            <img src={task.image} className="w-32 h-32" alt="" />
                        </>
                        :
                        <>
                            <div className='flex flex-col justify-center items-start'>
                                <p className='text-2xl font-semibold mb-3'>{task.title}</p>
                                <p className='mb-3'>{task.details}</p>
                                <div className='flex justify-center items-center space-x-5'>
                                    <button className='bg-red-500 py-2 px-3 hover:bg-red-700 rounded-md text-white' onClick={handleDeleteTask}>Delete</button>
                                    <Link disabled to="/completed" className='bg-green-500 py-2 px-3 hover:bg-green-700 rounded-md text-white'>Completed</Link>
                                    <textarea placeholder='type your comment' className='border-2 rounded-lg px-2'></textarea>

                                </div>
                            </div>
                            <img src={task.image} className="w-32 h-32" alt="" />

                        </>
                }


            </div>
        </div>
    );
};

export default Complete;