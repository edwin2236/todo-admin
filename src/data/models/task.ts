export class Task {
  id: number
  userId: number
  title: string
  isCompleted: boolean

  constructor(id: number, userId: number, title: string, isCompleted: boolean) {
    this.id = id
    this.userId = userId
    this.title = title
    this.isCompleted = isCompleted
  }
}
