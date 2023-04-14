import { ChangeEvent, FormEvent, useState } from 'react';
import useList from '../../hooks/useList';

const TaskList = () => {
    const [newTask, setNewTask] = useState('');
    const [tasks,, push, remove, isEmpty, clear, sort, reverse] = useList([]);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        push(newTask as never);
        setNewTask('');
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setNewTask(event.target.value);

    return (
        <div>
            <h1>Task List</h1>
            <form onSubmit={handleSubmit}>
                <input value={newTask} onChange={handleInputChange} placeholder="New Task" type="text" />
                <button type="submit">Create Task</button>
            </form>
            {isEmpty() ? (<p>Task List is Empty</p>) : (
                <div>
                    <button onClick={clear}>Clear</button>
                    <button onClick={sort}>Sort</button>
                    <button onClick={reverse}>Reverse</button>
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={index}>
                                <input type="checkbox" onClick={() => remove(index)} checked={false} />
                                {task}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TaskList;