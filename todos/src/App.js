import './App.css';
import Calculater from './Component/Calculater';
import Todo from './Component/Todo';
import Todo_class from './Component/Todo_class';
import {
  BrowserRouter ,
   Routes,
  Route,
} from "react-router-dom";
import Todo_Local from './Component/Todo_Local';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Todo_class name="add"/>}></Route>
        <Route path='/todo' element={<Todo/>}></Route>
        <Route path='/calc' element={<Calculater/>}></Route>
        <Route path='/todo-local' element={<Todo_Local/>}></Route>
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
