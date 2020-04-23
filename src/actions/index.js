import {ADD_TODO, TOGGLE_TODO, DELETE_TODOS} from '../constants/actionsTypes'

let nextId = Number(localStorage.getItem('lastId')) || 0

export const addTodo = (text) => {
  localStorage.setItem('lastId', ++nextId)
  return {
    type: ADD_TODO,
    id: nextId,
    text,
  }
}

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
})

export const deleteTodos = () => ({
  type: DELETE_TODOS,
})
