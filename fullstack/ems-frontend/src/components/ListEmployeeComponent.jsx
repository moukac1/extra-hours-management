import React , {useEffect, useState} from 'react'
import { deleteById, listEmployees} from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
import EmployeeComponent from './EmployeeComponent'

function ListEmployeeComponent() {

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

  
//Add new employee
  const navigator = useNavigate(); 
  function addNewEmployee(){
  
    navigator("/add-employee") ; 
   
  }

//update employee
  function updateEmployee(id){
    navigator(`/update-employee/${id}`)
  }

//update Note
  function seeNoteByid(id){
    navigator(`/see-note/${id}`)
  }
//delete employee
  function deleteEmployee(id){ 
    deleteById(id).then(() => {
       getAllEmployees();
      })
      .catch((error)=>console.error(error))    
     navigator('/employees') ;
  } 

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
                <td>{employee.id} </td>
                <td>{employee.fullName} </td>
                <td>{employee.level} </td>
                <td>{employee.status}</td>
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
    </div>
    </>
  )
}

export default ListEmployeeComponent;