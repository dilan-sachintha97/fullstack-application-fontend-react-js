
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/add-user" element={<AddUser/>} />
          <Route exact path="/edit-user/:id" element={<EditUser/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
