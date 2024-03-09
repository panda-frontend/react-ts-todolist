import { IRootState } from "../../../store"
import { ToDo } from "../../types"
import Item from "./Item"
import classNames from "classnames";

import { useSelector } from "react-redux"
import "./index.css"
import { useState } from "react"

export default () => {
  let { todos } = useSelector((state: IRootState) => state.todolist)

  const [active, setActive] = useState('all')


  todos = todos.filter((item: ToDo) => {
    switch (active) {
      case 'completed':
        return item.completed
      case 'uncompleted':
        return !item.completed

      default:
        return true
    }
  })

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

      <div>
        <button
          className={classNames({ "active": active === 'all' })}
          onClick={() => setActive('all')}>所有
        </button >

        <button
          className={classNames({ "active": active === 'completed' })}
          onClick={() => setActive('completed')}>完成
        </button >

        <button
          className={classNames({ "active": active === 'uncompleted' })}
          onClick={() => setActive('uncompleted')}>未完成
        </button >
      </div >
    </div >
  )
}