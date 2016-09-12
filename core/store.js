import { createStore } from 'redux';

// Centralized application state
const store = createStore((state, action) => {
  // TODO: Add action handlers (aka "reducers")
  switch (action) {
    case 'COUNT':
      return { ...state, count: (state.count || 0) + 1 };
    default:
      return state;
  }
});

export default store;
