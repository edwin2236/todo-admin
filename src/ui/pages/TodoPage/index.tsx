import { useEffect, useState } from 'react'
import { Task } from '../../../data/models/task'
import { TaskService } from '../../../data/services/task.service'
import { GetAllTaskUseCase } from '../../../domain'
import Header from '../../components/Header'

import { Box, Grid, Typography } from '@mui/material'

function TodoPage() {
  
  const [data, setData] = useState<Task[]>([])
  const useCase = new GetAllTaskUseCase(new TaskService())

  useEffect(() => {
    useCase.call().then((tasks) => {
      setData(tasks)
    })
  }, [])

  const columns = [
    {
      field: 'title',
      headerName: 'Todo',
      width: 550,
      editable: true,
    }
  ];

  return (
    <>
      <Header /> 

      <Grid container spacing={1} sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        {data.map((item) => (
          <Grid item xs={6} sx={{border: 1, borderColor: '#7a7979', borderRadius: 1, margin: '2px'}}>
            <Typography key={item.id}>{item.title}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default TodoPage
