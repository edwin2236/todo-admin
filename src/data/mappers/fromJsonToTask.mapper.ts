import { Task } from '../models/task'

export interface JsonProps {
  id: number
  userId: number
  title: string
  completed: boolean
}

export const fromJsonToTaskMapper = (json: JsonProps): Task => {
  return new Task(json.id, json.userId, json.title, json.completed)
}
