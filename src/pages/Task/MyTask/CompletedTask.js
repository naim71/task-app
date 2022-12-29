import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthContext/AuthProvider';
import Complete from './Complete';

const CompletedTask = () => {
    const { user } = useContext(AuthContext);


    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await fetch(`https://y-phi-one.vercel.app/task?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='grid grid-cols-1 gap-5'>
            {
                tasks.map(task => <Complete task={task} refetch={refetch}></Complete>)
            }
        </div>
    );
};

export default CompletedTask;