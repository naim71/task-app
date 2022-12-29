import React from 'react';
import { Link } from 'react-router-dom';

const MyTask = ({ task, refetch }) => {
    console.log(task);

    const handleDeleteTask = user => {
        fetch(`http://localhost:5000/tasks/${task._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    //toast.success(`${user.name} deleted successfully`)
                }
            })
    }

    const handleComplete = () => {
        fetch(`http://localhost:5000/tasks/${task._id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log('Done');
                    //toast.success('Seller Verified!😃');
                }
            })

    }


    return (
        <div className='h-full border-l-4 border-blue-600 flex justify-center rounded-md shadow-lg'>
            <div className='flex flex-col'>
                <p className='text-2xl font-semibold'>{task.title}</p>
                <p>{task.details}</p>
                <div className='flex space-x-5'>
                    <button className='bg-red-500 py-2 px-3 hover:bg-red-700 rounded-md text-white' onClick={handleDeleteTask}>Delete</button>
                    <button className='bg-blue-500 py-2 px-3 hover:bg-blue-700 rounded-md text-white'>Edit</button>
                    <div>
                        {
                            task.status !== "completed" ?
                                <>
                                    <Link onClick={handleComplete} className='bg-green-500 py-2 px-3 hover:bg-green-700 rounded-md text-white'>Complete</Link>
                                </>
                                :
                                <>
                                    <Link to="/completedtask" className='bg-green-500 py-2 px-3 hover:bg-green-700 rounded-md text-white'>Completed</Link>
                                </>
                        }
                    </div>




                </div>
            </div>
            <img src={task.image} className="w-32 h-32" alt="" />

        </div>
    );
};

export default MyTask;