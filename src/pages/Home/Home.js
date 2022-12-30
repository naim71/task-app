import React, { useContext, useEffect, useState } from 'react';
import { json, Link } from 'react-router-dom';
import img from '../../assets/image/image1.png'
import { AuthContext } from '../../AuthContext/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext);
    const [taskNum, setTaskNum] = useState([]);

    //console.log(user);

    useEffect(() => {
        fetch(`https://y-phi-one.vercel.app/task?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTaskNum(data))
    })



    return (
        <div className='mt-10 mb-10'>
            <p className='text-3xl mb-5 text-[#747474]'>Overview</p>
            <div></div>
            {
                user ? <>
                    <div className='bg-[#1874EE] w-full h-96 rounded-xl flex justify-evenly p-10'>
                        <div className='py-24 w-3/4'>
                            <p className='text-3xl font-bold text-white mb-3'>Welcome Back, {user?.displayName}</p>
                            <p className='mb-5 text-white pr-60 text-justify'>Design your own custom daily planner and get organized for free with easy to use online planner maker. Complete your daily tasks. To check your tasks click here.</p>
                            <Link to='/mytask' className='py-2 px-4 shadow-md bg-white rounded-lg text-[#1874EE] font-medium'>My Tasks</Link>
                        </div>
                        <img src={img} alt="" className='w-auto' />
                    </div></>
                    :
                    <><p className='text-lg text-center my-10 font-bold mb-20'>No Task Added Yet.</p></>
            }
            <div className='grid grid-cols-3 mt-8 h-60 gap-20'>
                <div className='bg-[#FFF4DE] flex flex-col justify-center items-center   shadow-md rounded-xl'>
                    <p className='text-[#FE947A] font-semibold text-6xl'>0</p>
                    <p className='text-2xl mt-2'>Pending Task</p>
                </div>
                <div className='bg-[#DCFCE7]  flex flex-col justify-center items-center shadow-md rounded-xl'>
                    <p className='text-[#3CD756] font-semibold text-6xl'>0</p>
                    <p className='text-2xl mt-2'>Completed Task</p>
                </div>
                <div className='bg-[#F4E8FF] flex flex-col justify-center items-center shadow-md rounded-xl'>
                    {
                        user ?
                            <>
                                <p className='text-[#BE83FE] font-semibold text-6xl'>{taskNum.length}</p>
                            </>
                            :
                            <><p className='text-[#BE83FE] font-semibold text-6xl'>0</p>
                            </>
                    }

                    <p className='text-2xl mt-2'>Total Added Task</p>
                </div>
            </div>
        </div>
    );
};

export default Home;