import { TaskRepository } from '../data/repositories/task.repository'

export class GetAllTaskUseCase {
  constructor(private repository: TaskRepository) {}

  async call() {
    return this.repository.getAllTasks()
  }
}
