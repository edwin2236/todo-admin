import { Task } from '../models/task'
import { TaskRepository } from '../repositories/task.repository'
import { Router } from '../../common/utils'
import {
  fromJsonToTaskMapper,
  JsonProps,
} from '../mappers/fromJsonToTask.mapper'

const BASE_URL = import.meta.env.VITE_TASK_SERVICE_URL

export class TaskService implements TaskRepository {
  async getAllTasks(): Promise<Task[]> {
    return fetch(BASE_URL + Router.todos)
      .then((resp) => resp.json())
      .then((data) => data.map((item: JsonProps) => fromJsonToTaskMapper(item)))
  }

  finTaskById(taskId: number): Promise<Task> {
    throw new Error('Method not implemented.')
  }
  createTask(userId: number, title: string): Promise<Task> {
    throw new Error('Method not implemented.')
  }
  async updateTask(task: Task): Promise<void> {
    await fetch(`${BASE_URL + Router.todos}/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
    })
  }
  deleteTask(taskId: number): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
