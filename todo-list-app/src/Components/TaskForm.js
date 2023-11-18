// Import React and useState from React
import React, { useState } from 'react';

// Functional component for the task form
const TaskForm = ({ addTask }) => {
  // State for the task description input
  const [taskDescription, setTaskDescription] = useState('');

  // Event handler for input change
  const handleInputChange = (e) => {
    setTaskDescription(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the input is not empty before adding a task
    if (taskDescription.trim() !== '') {
      addTask(taskDescription);
      setTaskDescription('');
    }
  };

  // Return the form JSX
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskDescription}
        onChange={handleInputChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

// Export the TaskForm component
export default TaskForm;
