import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter , Routes , Route} from 'react-router-dom' 
import EmployeeComponent from './components/EmployeeComponent'
import EarningComponent from './components/EarningComponent'
import Note from './components/Note'
import UpdateSchedule from './components/UpdateSchedule'



function App() {
  
  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path='/' element={<ListEmployeeComponent/>}>  </Route>
        <Route path='/students' element={<ListEmployeeComponent/>}  ></Route>
        <Route path='/add-student' element={<EmployeeComponent/>} ></Route>
        <Route path='/update-student/:id' element={<EmployeeComponent/>} ></Route>
        <Route path='/see-note/:id' element={<Note/>} ></Route>
        <Route path='/delete-student/:id' element={<ListEmployeeComponent/>} ></Route>
        <Route path='/add-earning' element= {<EarningComponent/>}></Route>
        <Route path='/update-schedule/:id' element={<UpdateSchedule/>} ></Route> 
      </Routes>
      
     
    </BrowserRouter>
    </>
  )
}

export default App
