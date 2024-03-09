
// 导入 addTodo
import { addTodo } from "../../../store/modules/todoStore";
import { useDispatch } from "react-redux";
import { ToDo } from "../../types";
import { useRef } from "react";

export default () => {
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const addItem = () => {
    // 如果值为空，不添加
    if (!inputRef.current?.value) {
      return
    }

    const item: ToDo = {
      id: Date.now(),
      title: inputRef.current?.value,
      completed: false
    }

    // dispath 调用 action 添加新条目
    dispatch(addTodo(item))
    // 添加完成后清空 input 框
    inputRef.current!.value = ""
  }

  return (
    <>
      <input ref={inputRef}
        type="text" placeholder="输入任务" />
      <button
        onClick={() => addItem()}
      >添加</button>
    </>
  )
}