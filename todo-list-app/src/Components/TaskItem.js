// Import React from React
import React from 'react';

// Functional component for a task item
const TaskItem = ({ task, deleteTask, toggleTaskCompletion }) => {
  // Return JSX representing a task item
  return (
    <li className={task.completed ? 'completed' : ''}>
      <span>{task.description}</span>
      <div>
        {/* Button to toggle task completion */}
        <button onClick={() => toggleTaskCompletion(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        {/* Button to delete a task */}
        <button className="delete" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

// Export the TaskItem component
export default TaskItem;
