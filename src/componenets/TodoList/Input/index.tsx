
// 导入 addTodo
import { addTodo } from "../../../store/modules/todoStore";
import { useDispatch } from "react-redux";
import { ToDo } from "../../types";


export default () => {
  const dispatch = useDispatch();


  const addItem = () => {

    const item: ToDo = {
      id: Date.now(),
      title: "Learn Redux Toolkit",
      completed: false
    }

    dispatch(addTodo(item))
  }

  return (
    <>
      <input type="text" placeholder="输入任务" />
      <button
        onClick={() => addItem()}
      >添加</button>
    </>
  )
}