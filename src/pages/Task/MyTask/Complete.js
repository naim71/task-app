import React from 'react';
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
                    //toast.success(`${user.name} deleted successfully`)
                }
            })
    }
    return (
        <div className='h-full border-l-4 border-green-600 flex justify-center rounded-md shadow-lg'>
            <div className='flex flex-col'>
                {
                    task.status !== "completed" ?
                    <> 
                    <p className='text-2xl font-semibold'>{task.title}</p>
                    <p>{task.details}</p>
                    <div className='flex space-x-5'>
                        <button className='bg-red-500 py-2 px-3 hover:bg-red-700 rounded-md text-white' onClick={handleDeleteTask}>Delete</button>
                        <div>
    
                            <Link className='bg-green-500 py-2 px-3 hover:bg-green-700 rounded-md text-white'>Not Completed</Link>
                           
                        </div>
                    </div>
                <img src={task.image} className="w-32 h-32" alt="" />
                    
                    </>
            :
            <>
              <p className='text-2xl font-semibold'>{task.title}</p>
                    <p>{task.details}</p>
                    <div className='flex space-x-5'>
                        <button className='bg-red-500 py-2 px-3 hover:bg-red-700 rounded-md text-white' onClick={handleDeleteTask}>Delete</button>
                        <div>
                            <Link disabled to="/completed" className='bg-green-500 py-2 px-3 hover:bg-green-700 rounded-md text-white'>Completed</Link>
                            <textarea placeholder='type your comment here'></textarea>
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