import React from "react";
import {
  Route,
  Routes,
  HashRouter  
} from "react-router-dom";
import './App.scss';
import Users from "./components/Users/Users";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./components/SideBar/SideBar";
import Posts from "./components/Posts/Posts";
import Todos from "./components/Todos/Todos"

function App() {
  return (
    <div className="page">
      <HashRouter>
        
        
        <SideBar />

        <div className="content">
          <Routes>
            <Route exact path='/' element={<Users />}/>
            <Route path='/posts' element={<Posts />}/>
            <Route path='/todos' element={<Todos />}/>
            
          </Routes>
          
          </div>

          

      </HashRouter>
      
      </div>
  );
}

export default App;
