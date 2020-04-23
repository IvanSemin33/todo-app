import { ADD_TODO, TOGGLE_TODO, DELETE_TODOS } from '../constants/actionsTypes'

const initState = JSON.parse(localStorage.getItem('todos')) || []

const todos = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newAddState = [
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
        ...state,
      ]
      localStorage.setItem('todos', JSON.stringify(newAddState))
      return newAddState

    case TOGGLE_TODO:
      const newToggleState = state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      )
      localStorage.setItem('todos', JSON.stringify(newToggleState))
      return newToggleState

    case DELETE_TODOS:
      const newDeleteState = state.filter((todo) => !todo.completed)
      localStorage.setItem('todos', JSON.stringify(newDeleteState))
      return newDeleteState

    default:
      return state
  }
}

export default todos
