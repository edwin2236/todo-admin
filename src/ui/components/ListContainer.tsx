import { Grid } from '@mui/material'
import { useTask } from '../hooks/useTask'
import ListItem from './ListItem'

const ListContainer = () => {
  const { tasks } = useTask()

  return (
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
        />
      ))}
    </Grid>
  )
}
export default ListContainer
