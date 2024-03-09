import { ToDo } from "../../../types"
import { deleteTodo } from "../../../../store/modules/todoStore"
import { useDispatch } from "react-redux"

interface Props {
  item: ToDo
}

export default (props: Props) => {
  const dispatch = useDispatch()
  // 删除条目
  const deleteItem = (id: number) => {
    dispatch(deleteTodo(id))
  }

  const { item } = props
  return (
    <li>
      <span>{item.title}</span>
      <button>完成</button>
      <button onClick={() => { deleteItem(item.id) }}>删除</button>
    </li>
  )
}