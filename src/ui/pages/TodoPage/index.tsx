import { useEffect, useState } from 'react'
import { Task } from '../../../data/models/task'
import { TaskService } from '../../../data/services/task.service'
import { GetAllTaskUseCase } from '../../../domain'
import Header from '../../components/Header'

import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

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

      <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <Box sx={{ height: 371, width: '50%', }}>
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
      </Box>
    </>
  )
}

export default TodoPage
