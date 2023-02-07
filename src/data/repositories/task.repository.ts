import { Task } from '../models/task'

export interface TaskRepository {
  getAllTasks(): Promise<Task[]>
  finTaskById(taskId: number): Promise<Task>
  createTask(userId: number, title: string): Promise<Task>
  updateTask(task: Task): Promise<void>
  deleteTask(taskId: number): Promise<void>
}
