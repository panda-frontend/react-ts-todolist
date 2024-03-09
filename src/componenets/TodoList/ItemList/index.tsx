import { IRootState } from "../../../store"
import { ToDo } from "../../types"
import Item from "./Item"

import { useSelector } from "react-redux"

export default () => {
  const { todos } = useSelector((state: IRootState) => state.todolist)
  return (
    <div>
      <ul>
        {
          todos.map(
            (item: ToDo) => {
              return <Item key={item.id} item={item} />
            }
          )
        }
      </ul>
    </div>
  )
}