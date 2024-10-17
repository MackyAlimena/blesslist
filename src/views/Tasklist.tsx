import * as React from 'react';

const TaskList: React.FC = () => {
    const [tasks, setTasks] = React.useState<string[]>([]);
    const [task, setTask] = React.useState<string>('');

    React.useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (task && !tasks.includes(task)) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const removeTask = (taskToRemove: string) => {
        setTasks(tasks.filter(t => t !== taskToRemove));
    };

    return (
        <section>
            <h2>Today's Plan</h2>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add new task"
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>
                        {t}
                        <button onClick={() => removeTask(t)}>Remove</button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TaskList;