import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import * as Actions from '../actions/index'

class DeleteButton extends React.Component {
  static propTypes = {
    deleteTodos: PropTypes.func,
  }

  render() {
    return (
      <IconButton aria-label="delete" onClick={this.props.deleteTodos}>
        <DeleteIcon style={{ color: 'black' }} />
      </IconButton>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  const deleteTodos = () => dispatch(Actions.deleteTodos())

  return { deleteTodos }
}

export default connect(null, mapDispatchToProps)(DeleteButton)
