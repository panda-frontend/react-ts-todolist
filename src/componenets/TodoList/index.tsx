import ItemList from "./ItemList";
import Filter from "./Filter";
import Title from "./Title";
import Input from "./Input";

export default function TodoList() {
  return (
    <div>
      <Title />
      <Input />
      <ItemList />
      <Filter />
    </div>
  )
}