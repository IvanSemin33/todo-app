import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TextField, IconButton, Grid } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import * as Actions from '../actions/index'
import '../common/styles/add-todo.css'

class AddTodo extends React.Component {
  static propTypes = {
    addTodo: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      error: false,
      helperText: '',
      newTodo: '',
    }
  }

  handleInput = (event) => {
    this.setState({ newTodo: event.target.value, error: false, helperText: '' })
  }

  onPressEnter = (event) => {
    event.charCode === 13 && this.addTodo()
  }

  addTodo = () => {
    const { newTodo } = this.state
    const { addTodo } = this.props

    if (newTodo.trim().length < 3) {
      this.setState({ error: true, helperText: 'Must contains more than 2 characters.' })
    } else {
      addTodo(newTodo)
      this.setState({ newTodo: '' })
    }
  }

  render() {
    const { newTodo, error, helperText } = this.state
    return (
      <Grid
        className="add-todo"
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item id="add-btn">
          <IconButton aria-label="add" onClick={this.addTodo}>
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid item id="add-field">
          <TextField
            error={error}
            helperText={helperText}
            id="add-todo_field"
            label="Add todo"
            variant="outlined"
            value={newTodo}
            onChange={this.handleInput}
            onKeyPress={this.onPressEnter}
            autoFocus
            fullWidth
          />
        </Grid>
      </Grid>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  const addTodo = (text) => dispatch(Actions.addTodo(text))

  return { addTodo }
}

export default connect(null, mapDispatchToProps)(AddTodo)
