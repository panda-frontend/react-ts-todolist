import { ToDo } from "../../../types"
import { deleteTodo, switchTodoState } from "../../../../store/modules/todoStore"
import { useDispatch } from "react-redux"
import './index.css'
import classNames from "classnames"
import { useState } from "react"

interface Props {
  item: ToDo
}

export default (props: Props) => {

  // const { item } = props
  const { id, title, completed } = props.item

  const [completeValue, setCompleteValue] = useState<string>("完成")
  const dispatch = useDispatch()
  // 删除条目
  const deleteItem = (id: number) => {
    dispatch(deleteTodo(id))
  }
  const switchItemState = (id: number) => {
    dispatch(switchTodoState(id))
    if (!completed) {
      setCompleteValue("重开")
    } else {
      setCompleteValue("完成")
    }
  }


  return (
    <li>
      <span
        className={classNames(
          completed && "completed"
        )}
      >{title}</span>
      <button onClick={() => { switchItemState(id) }}>{completeValue}</button>
      <button onClick={() => { deleteItem(id) }}>删除</button>
    </li>
  )
}