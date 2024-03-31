import { Route, Routes } from 'react-router-dom/dist/umd/react-router-dom.development';
import './App.css';
import Message from './components/Message';
import SidebarDash from './components/SidebarDash';

function App() {
  return (
    <div className="dash d-flex">
       <Routes>
        <Route element ={<SidebarDash/>} path="/message-app/"></Route>
        <Route element={<Message/>} path="/message-app/"></Route>
      </Routes></div>
     
    
  );
}

export default App;
