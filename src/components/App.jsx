import React from 'react'
import Header from './Header'
import DeleteButton from './DeleteButton'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../common/styles/theme'
import { Grid } from '@material-ui/core'
import '../common/styles/app.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        className="todo-app"
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        spacing={1}
      >
        <Grid
          className="header"
          item
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs>
            <Header />
          </Grid>
          <Grid item lg>
            <DeleteButton />
          </Grid>
        </Grid>
        <Grid item>
          <TodoList />
        </Grid>
        <Grid item>
          <AddTodo />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
