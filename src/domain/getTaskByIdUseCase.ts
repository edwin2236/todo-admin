import { TaskRepository } from '../data/repositories/task.repository'

export class GetTaskBYIdUseCase {
  constructor(private repository: TaskRepository) {}

  async call(taskId: number) {
    return this.repository.finTaskById(taskId)
  }
}
