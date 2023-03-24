import { Container, Grid } from '@mui/material'
import { ChangeEvent } from 'react'
import { Task } from '../../data/models/task'
import { useTask } from '../hooks/useTask'
import Filter from './Filter'
import ListItem from './ListItem'

const ListContainer = () => {
  const { tasks, filter, onToggleFilter, updateTask } = useTask()

  const handleCompleteTask = async (task: Task, status: boolean) => {
    task.isCompleted = status
    await updateTask(task)
  }

  const handleChangeFilter = (event: ChangeEvent<HTMLInputElement>) => {
    onToggleFilter(event.target.checked)
  }

  return (
    <Container>
      <Filter
        label="Completed 1"
        value={filter}
        onChange={handleChangeFilter}
      />
      <Grid
        container
        spacing={1}
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        {tasks.map((item) => (
          <ListItem
            key={item.id}
            title={item.title}
            completed={item.isCompleted}
            onCompleteTask={(status) => handleCompleteTask(item, status)}
          />
        ))}
      </Grid>
    </Container>
  )
}
export default ListContainer
