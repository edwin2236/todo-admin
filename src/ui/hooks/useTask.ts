import { useEffect, useState } from 'react'
import { Task } from '../../data/models/task'
import { TaskService } from '../../data/services/task.service'
import { GetAllTaskUseCase, UpdateTaskUseCase } from '../../domain'

export function useTask() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<boolean>(false)
  const getAllTaskUseCase = new GetAllTaskUseCase(new TaskService())
  const updateTaskUseCase = new UpdateTaskUseCase(new TaskService())

  useEffect(() => {
    getAllTaskUseCase.call().then((respTasks) => {
      if (filter) {
        setTasks(respTasks.filter((item) => item.isCompleted))
      } else {
        setTasks(respTasks)
      }
    })
  }, [filter])

  const onToggleFilter = (state: boolean) => {
    setFilter(state)
  }

  const addTask = (userId: number, title: string) => {
    console.log('run...')
  }

  const updateTask = async (task: Task) => {
    return await updateTaskUseCase.call(task).then(() => {
      const list: Task[] = structuredClone(tasks)
      setTasks(
        list.map((item) => {
          if (item.id === task.id) return task
          return item
        })
      )
    })
  }

  const removeTask = (taskId: number) => {
    console.log('run...')
  }

  return { tasks, filter, onToggleFilter, addTask, updateTask, removeTask }
}
