import { useQuery } from '@tanstack/react-query';
import React, { useContext} from 'react';
import { AuthContext } from '../../../AuthContext/AuthProvider';
import MyTask from './MyTask';
import './AllTask.css'


const AllTasks = () => {
    const { user } = useContext(AuthContext);
    //const [task, setTask] = useState([]);


    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await fetch(`https://y-phi-one.vercel.app/task?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });



    //console.log(tasks);

  


    return (
        <div className='grid grid-cols-2 gap-5 mt-10 my-task'>
            {
                tasks.map(task =>
                    <MyTask task={task} refetch={refetch}></MyTask>
                )
            }
        </div>
    );
};

export default AllTasks;