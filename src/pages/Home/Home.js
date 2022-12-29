import React from 'react';
import img from '../../assets/image/image1.png'

const Home = () => {
    return (
        <div className='mt-10'>
            <p className='text-3xl mb-5 text-[#747474]'>Overview</p>
            <div className='bg-[#1874EE] w-full h-96 rounded-xl'>
                <div>
                    <p>Welcome Back Jennie!</p>
                    <img src={img} alt="" className='w-64' />
                </div>
            </div>
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
                    <p className='text-[#BE83FE] font-semibold text-6xl'>0</p>
                    <p className='text-2xl mt-2'>Total Added Task</p>
                </div>
            </div>
        </div>
    );
};

export default Home;