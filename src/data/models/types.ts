export interface Task {
  id: number
  userId: number
  title: string
  isCompleted: boolean
}

export interface CreateTask extends Omit<Task, 'id' | 'userId'> {}
