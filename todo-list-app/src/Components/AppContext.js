// Import necessary dependencies from React
import React, { createContext, useReducer } from 'react';

// Initial state for the context
const initialState = {
  tasks: [],
};

// Create a context with the initial state
const AppContext = createContext(initialState);

// Define a reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      // Add a new task to the state
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'DELETE_TASK':
      // Remove a task from the state based on its ID
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case 'TOGGLE_COMPLETE':
      // Toggle the completion status of a task in the state
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    default:
      // Return the current state if the action type is not recognized
      return state;
  }
};

// Create a provider component to wrap the app and provide the context
const AppProvider = ({ children }) => {
  // Use the reducer and initial state to create the state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState);

  // Provide the state and dispatch as values to the context
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Export the context and provider for use in other components
export { AppContext, AppProvider };
