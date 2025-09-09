import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter , Routes , Route} from 'react-router-dom' 
import EmployeeComponent from './components/EmployeeComponent'
import Note from './components/Note'



function App() {
  
  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path='/' element={<ListEmployeeComponent/>}>  </Route>
        <Route path='/employees' element={<ListEmployeeComponent/>}  ></Route>
        <Route path='/add-employee' element={<EmployeeComponent/>} ></Route>
        <Route path='/update-employee/:id' element={<EmployeeComponent/>} ></Route>
        <Route path='/see-note/:id' element={<Note/>} ></Route>
        <Route path='/delete-employee/:id' element={<ListEmployeeComponent/>} ></Route>
      </Routes>
      
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
