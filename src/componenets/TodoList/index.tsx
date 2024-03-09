import ItemList from "./ItemList";
import Title from "./Title";
import Input from "./Input";

import { Provider } from "react-redux";
import store from "../../store";

export default function TodoList() {
  return (
    <div>
      <Provider store={store}>
        <Title />
        <Input />
        <ItemList />
      </Provider>
    </div>
  )
}