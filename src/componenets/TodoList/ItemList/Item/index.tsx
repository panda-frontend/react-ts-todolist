import { ToDo } from "../../../types"

interface Props {
  item: ToDo
}
export default (props: Props) => {
  const { item } = props
  return (
    <li>
      <span>{item.title}</span>
      <button>完成</button>
      <button>删除</button>
    </li>
  )
}