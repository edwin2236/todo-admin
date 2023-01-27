import { TaskRepository } from '../data/repositories/task.repository'
import { Task } from '../data/models/types'

export class UpdateTaskUseCase {
  constructor(private repository: TaskRepository) {}

  async call(task: Task) {
    return this.repository.updateTask(task)
  }
}
