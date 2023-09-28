import { Routes,Route,Navigate } from "react-router-dom";
import Home from "./Home";
import Room from "./Room";
import './index.css';
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <Toaster/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/room/:roomID"  element={<Room/>}/>
     </Routes>
    </div>
  );
}

export default App;
