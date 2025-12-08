import React , {useEffect, useState} from 'react'
import { deleteById, listEmployees , getAllSchedule , getAllEarnings, deleteEarningById, deleteScheduleById } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

import EmployeeComponent from './EmployeeComponent'

function ListEmployeeComponent() {
/// all informations about students :  ///
              //getAllStudents
  function getAllEmployees(){
    listEmployees().then((response) => {
      setEmployees(response.data)
    })
    .catch((error) => console.error(error))
  }
  const [employees , setEmployees] = useState([])
  useEffect( ()=>{
    getAllEmployees() ;
  },[])

          //update student
  function updateEmployee(id){
    navigator(`/update-employee/${id}`)
  }

          //update Note
  function seeNoteByid(id){
    navigator(`/see-note/${id}`)
  }
          //delete student
  function deleteEmployee(id){ 
    deleteById(id).then(() => {
       getAllEmployees();
      })
      .catch((error)=>console.error(error))    
     navigator('/employees') ;
  } 
  //Add new employee
  const navigator = useNavigate(); 
  function addNewEmployee(){
  
    navigator("/add-employee") ; 
   
  }
  function addEarning(){
    navigator("/add-earning") ; 
  }


/// all informations about Schedules table :  ///
function getAllSchedules(){
    getAllSchedule().then((response) => {
      setSchedules(response.data)
    })
    .catch((error) => console.error(error))
  }

  const [schedules , setSchedules] =useState([]);
  useEffect(()=>{
    // getSchedule 
    getAllSchedules() ; 
  }
  )
      ///update schedule 
    function updateSchedule(id){
        navigator(`/update-schedule/${id}`)
      } 




  /// all informations about earnings table :  ///
          ///get All Earinigs
  const [earnings,setEarnings] = useState([])
  function getAllEarnings1(){
    getAllEarnings().then((response)=>{
      setEarnings(response.data)
    } ).catch((error)=>console.error(error))
  }
  useEffect( ()=>{
    getAllEarnings1() ;
  },[])

        /// delete a wrong earning 
  function deleteEarning(id){
    deleteEarningById(id).then(() => {
      getAllEarnings();
     })
     .catch((error)=>console.error(error))    
    navigator('/')
  }

      /// delete a wrong schedule
  function deleteSchedule(id){
    deleteScheduleById(id).then(()=>{
      getAllSchedule();
    }).catch((error)=>console.error(error))
    navigator('/')
  }
      
    
  
  const getColor = (status) => {
    switch (status) {
      case "confirmé":
        return "green";
      case "en cours de vérification":
        return "red";
      case "presque confirmé":
        return "blue";
      default:
        return "black"; // couleur par défaut
    }
  };


  return (
    <>
    <div className='container'>
    <h2 className='text-center'>My Students List</h2>
    <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Student </button>

    <table className="table table-stripped table-bordered ">
      <thead className ="thead-dark">
        <tr>
          <th scope="col">Student Id</th>
          <th scope="col">Full Name</th>
          <th scope="col">Level</th>
          <th scope="col">Status</th>
          <th scope="col">duration</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>

      <tbody>
          {
            employees.map((employee) => 
              <tr key={employee.id} >
                <td  >{employee.id} </td>
                <td>{employee.fullName} </td>
                <td>{employee.level} </td>
                <td style={{ color: getColor(employee.status), fontFamily:'monospace' }} > {employee.status}</td>
                <td>{employee.duration}</td>
                <td>
                <button className='btn btn-success ' onClick={()=> seeNoteByid(employee.id)    } style={{marginLeft:"2px" , marginRight:"0px"}}>see note</button>
                  <button className='btn btn-primary ' style={{marginLeft:"2px"}} onClick={() => updateEmployee(employee.id) } >update</button>
                  <button className='btn btn-danger ' onClick={() => deleteEmployee(employee.id)} style={{marginLeft:"2px"}}>delete</button>
                </td>
                
              </tr>
            )
          }
      </tbody>
    </table>
{/* schedule begins */}
    <hr />
    <h2 className='text-center mb-2'>My Schedule </h2>
    <table className="table table-stripped table-bordered ">
      <thead className ="thead-dark">
        <tr>
          <th scope="col">Lundi</th>
          <th scope="col">Mardi</th>
          <th scope="col">Mercredi</th>
          <th scope="col">jeudi</th>
          <th scope='col'>Vendredi</th>
          <th scope='col'>Samedi</th>
          <th scope='col'>Dimanche</th>
          <th scope='col'>actions</th>
        </tr>
      </thead>

      <tbody>
          {
            schedules.map((schedule) => 
              <tr key={schedule.id} >
                <td >{schedule.lundi} </td>
                <td >{schedule.mardi} </td>
                <td className='text-danger'>{schedule.mercredi} </td>
                <td className='text-success'>{schedule.jeudi}</td>
                <td className='text-danger'>{schedule.vendredi}</td>
                <td className='text-primary'>{schedule.samedi}</td>
                <td className='text-primary'>{schedule.dimanche}</td>
                <td>
                <button className='btn btn-primary ' onClick={() => updateSchedule(schedule.id)} style={{marginLeft:"2px"}}>update</button>
                <button className='btn btn-danger ' onClick={() => deleteSchedule(schedule.id)} style={{marginLeft:"2px"}}>delete</button>

                </td>
              </tr>
            )
          }
      </tbody>
    </table>

    {/* Earnings begins */}
    <hr />
    <h2 className='text-center mb-2'>My Earnings </h2>
    <button className='btn btn-success mt-2 mb-2' onClick={addEarning}>$$$ Add Earning $$$ </button>

    <table className="table table-stripped table-bordered ">
      <thead className ="thead-dark">
        <tr>
          <th scope="col">Id donneur</th>
          <th scope="col">Montant</th>
          <th scope="col">Date</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
          {
            earnings.map((earning) => 
              <tr key={earning.id} >
                <td  >{earning.idDonneur} </td>
                <td>{earning.montant} </td>
                <td>{earning.date} </td>
                <td>
                  <button className='btn btn-danger '  style={{marginLeft:"2px"}} onClick={() => deleteEarning(earning.id) }>delete</button>
                </td>
                
              </tr>
            )
          }
      </tbody>
    </table>

    </div>
    
    
    </>
  )
}

export default ListEmployeeComponent;