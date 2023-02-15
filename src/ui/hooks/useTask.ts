import { useEffect, useState } from 'react'
import { Task } from '../../data/models/task'
import { TaskService } from '../../data/services/task.service'
import { GetAllTaskUseCase } from '../../domain'

export function useTask() {
  const [data, setData] = useState<Task[]>([])
  const useCase = new GetAllTaskUseCase(new TaskService())

  useEffect(() => {
    useCase.call().then((tasks) => {
      setData(tasks)
    })
  }, [])

  const addTask = (userId: number, title: string) => {
    console.log('run...')
  }

  const updateTask = (taskId: number, task: Task) => {
    console.log('run...')
  }

  const removeTask = (taskId: number) => {
    console.log('run...')
  }

  return { tasks: data, addTask, updateTask, removeTask }
}
