import { useEffect, useState } from 'react'
import { Task } from '../../../data/models/task'
import { TaskService } from '../../../data/services/task.service'
import { GetAllTaskUseCase } from '../../../domain'
import Header from '../../components/Header'

function TodoPage() {
  const [data, setData] = useState<Task[]>([])
  const useCase = new GetAllTaskUseCase(new TaskService())

  useEffect(() => {
    useCase.call().then((tasks) => {
      setData(tasks)
    })
  }, [])

  return (
    <>
      <Header />
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  )
}

export default TodoPage
