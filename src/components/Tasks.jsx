import { useState } from 'react';
import styles from './Tasks.module.css'
import { PlusCircle, Trash } from "phosphor-react"
import { v4 as uuidv4 } from "uuid"

export function Tasks() {
    const [task, setTask] = useState([])
    // console.log(task)
    const [isChecked, setIsChecked] = useState();

    const [newTask, setNewTask] = useState('')

    function handleCreateNewTask() {
        event.preventDefault();
        setTask(prevTask => [...prevTask, {id:uuidv4(), content:newTask, isComplete: false}])
        setNewTask('');
    }

    function handleNewTaskChange() {
        event.target.setCustomValidity('')
        setNewTask(event.target.value)
    }

    function handleDeleteTask(taskToDelete) {
        const taskDeleted = task.filter(tasks => {
            return tasks.id !== taskToDelete;
        })
        setTask(taskDeleted);
    }

    function handleNewTaskInvalid() {
        event.target.setCustomValidity('Este campo é obrigatório!')
    }

    function actionCheckedTask(idTask) {
        const taskChecked = task.findIndex(tasks => {
            return tasks.id === idTask
        })
        const prevTask = [...task];
        prevTask[taskChecked].isComplete = !prevTask[taskChecked].isComplete;

        setTask(prevTask)
    }

    const countTask = task.length
    const checkedTask = task.filter(tasks => tasks.isComplete === true).length;
    const teste = (checkedTask === 0 ? 0 : 2)
    console.log(teste)

    return (
        <>
            <div className={styles.newtask}>
                <form onSubmit={handleCreateNewTask} className={styles.newTaskForm}>
                    <input
                        type="text"
                        placeholder='Adicione uma nova tarefa.'
                        value={newTask}
                        onChange={handleNewTaskChange}
                        onInvalid={handleNewTaskInvalid}
                        required
                    />
                    <button>Criar <p><PlusCircle /></p></button>
                </form>
            </div>
            <div className={styles.tasks}>
                <header>
                    <p className={styles.createdTask}>Tarefas criadas <span>{countTask}</span></p>
                    <p className={styles.stateTask}>Concluidas <span>{checkedTask}{checkedTask === 0 ? "" :<> de {countTask}</>}</span></p>
                </header>
                <div className={styles.listTask}>
                    {task.map(list => {
                        return (
                            <div key={list.id} className={styles.tasksList}>
                                <input name="task" type="checkbox" checked={list.isComplete} onChange={() => actionCheckedTask(list.id)} />
                                <div className={styles.tasksContent}>
                                    <span>{list.content}</span>
                                    <button onClick={() => handleDeleteTask(list.id)}><Trash size={16} /></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>

    );

}