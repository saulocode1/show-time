import { Header } from "./components/header/Header";
import { ToDoList } from "./components/to-do-list/ToDoList";

const App = () => (
   <div className="h-screen">
      <Header />
      <ToDoList />;
   </div>
);

export default App;
