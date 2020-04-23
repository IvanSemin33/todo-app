import React from 'react'
import Header from './Header'
import DeleteButton from './DeleteButton'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../common/styles/theme'
import { Grid, Paper } from '@material-ui/core'
import '../common/styles/app.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="row" justify="center" alignItems="center" className="mb_hidden">
        <Paper elevation={3} id="paper" className="mb_hidden">
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
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Header />
              </Grid>
              <Grid item>
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
        </Paper>
      </Grid>
    </ThemeProvider>
  )
}

export default App
