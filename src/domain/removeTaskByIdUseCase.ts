import { TaskRepository } from '../data/repositories/task.repository'

export class RemoveTaskByIdUseCase {
  constructor(private repository: TaskRepository) {}

  async call(taskId: number) {
    return this.repository.deleteTask(taskId)
  }
}
