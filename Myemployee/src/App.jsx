 import './App.css';
 import{BrowserRouter, Navigate, Route, Routes}from 'react-router-dom';
 import EmployeeDetails from './Components/EmployeeDetails';
 import EmployeeManagementApp from './Components/EmployeeManagementApp';

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="employees"/>}/>
        <Route path="/employees" element={<EmployeeManagementApp/>}/>
        <Route path="/employees/:id" element={<EmployeeDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
     
}

export default App;
