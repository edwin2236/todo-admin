import { Header } from '../../components'
import { useTask } from '../../hooks/useTask'
// enhacement
function TodoPage() {
  const { tasks } = useTask()

  return (
    <>
      <Header />
      {tasks.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  )
}

export default TodoPage
