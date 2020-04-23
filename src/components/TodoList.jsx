import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { List, ListItem, ListItemIcon, ListItemText, Checkbox } from '@material-ui/core'
import { ReactComponent as CheckedIcon } from '../common/images/checked-icon.svg'
import { ReactComponent as UncheckedIcon } from '../common/images/unchecked-icon.svg'
import * as Actions from '../actions/index'
import '../common/styles/todo-list.css'

class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.array,
    toggleTodo: PropTypes.func,
  }

  handleToggle = (id) => () => this.props.toggleTodo(id)

  render() {
    const { todos } = this.props

    return (
      <List className="todo-list">
        {todos.map((todo) => {
          const todoText = todo.completed ? <i>{todo.text}</i> : todo.text
          return (
            <ListItem
              key={todo.id}
              id={todo.id}
              role={undefined}
              dense
              button
              onClick={this.handleToggle(todo.id)}
            >
              <ListItemIcon>
                <Checkbox
                  icon={<UncheckedIcon />}
                  checkedIcon={<CheckedIcon />}
                  color="default"
                  edge="start"
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': todo.id }}
                />
              </ListItemIcon>
              <ListItemText id={todo.id} primary={todoText} />
            </ListItem>
          )
        })}
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  const todos = state.todosReducer

  return { todos }
}

const mapDispatchToProps = (dispatch) => {
  const toggleTodo = (id) => dispatch(Actions.toggleTodo(id))

  return { toggleTodo }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
