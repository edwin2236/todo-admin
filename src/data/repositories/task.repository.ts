import { CreateTask, Task } from '../models/types'

export abstract class TaskRepository {
  abstract getAllTasks(): Task[]
  abstract finTaskById(taskId: number): Task
  abstract createTask(task: CreateTask): Task
  abstract updateTask(task: Task): void
  abstract deleteTask(taskId: number): void
}
