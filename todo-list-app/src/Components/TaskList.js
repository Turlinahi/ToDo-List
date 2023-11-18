// Import React from React and TaskItem from the same directory
import React from 'react';
import TaskItem from './TaskItem';

// Functional component for a list of tasks
const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  // Return JSX representing an unordered list of tasks
  return (
    <ul>
      {/* Map through tasks and render TaskItem for each */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
};

// Export the TaskList component
export default TaskList;
