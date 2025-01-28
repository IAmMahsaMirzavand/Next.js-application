import React from 'react'
import TaskCard from './TaskCard'
import { useParams } from 'react-router-dom';

export default function TaskType ({ tasks }) {
    const {type} = useParams()
  const mainTasks = tasks.filter(task => task.type === 'main');

  return (
    <>
    {type ==='main' && (
      <div className="d-flex flex-wrap justify-content-around">
        {mainTasks.length > 0 ? (
          mainTasks.map((task) => (
            <TaskCard 
              key={task.id}
              title={task.title}
              description={task.description}
              date={task.date}
              status={task.status}
              isImportant={task.isImportant}
              onEdit={''}
              onDelete={''}
              type={task.type}
            />
          ))
        ) : (
          <p>No Tasks</p> 
        )}
      </div>
  
  )}

    </>
  );
}
