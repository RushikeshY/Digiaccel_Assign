import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import AddQestions from "./Components/TeacherSide/AddQestions";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addquestion" element={<AddQestions />}></Route>
        <Route path="/taketest" element={<AddQestions />}></Route>
      </Routes>
    </div>
  );
}

export default App;
