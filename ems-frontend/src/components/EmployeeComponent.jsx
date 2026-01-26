import { useState,useEffect } from "react"
import React  from 'react'
import { createEmployee, getEmployeeById, updateEmployeeByid } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeComponent = () => {

///useState
  const [fullName , setFullName]=useState(""); 
  const [level , setLevel]=useState("");
  const [note , setNote]=useState("");
  const[status,setStatus] = useState("") ; 
  const[duration,setDuration] = useState("") ; 

///

    

  const navigator = useNavigate() ; 
/// onclick
  const handleInputChangeFN = (e) => {
    setFullName(e.target.value);
  };
  
  const handleInputChangeLevel = (e) => {
    setLevel(e.target.value);
  };
  const handleInputChangeNote = (e) => {
    setNote(e.target.value);
  };
  const handleInputChangeStatus = (e) => {
    setStatus(e.target.value);
  };
  const handleInputChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  function validateForm(){return true ; }

  function saveOrUpdateEmployee(e){
    e.preventDefault() ; 
    if(validateForm()){
      const employee = { level, note , status , duration , fullName} ; 
      if(id){
        updateEmployeeByid(id,employee).then((response => {
          console.log(response.data) ; 
          navigator("/employees")
        })).catch(error=>{console.error(error) ;})
          
      }else{
        createEmployee(employee).then((response) => {
          console.log(response.data);
          navigator('/employees');
    
          }).catch((error)=>console.log(error));
      }
      
    };
    
  }
  


  

  const {id} =useParams();
//Page Title  :  (add or update)
  function PageTitle(){
    if(id){return  <h2>Update Student :  </h2>}else{return <h2>Add Student :  </h2> }
  }

  useEffect( () => {
    if(id){
    getEmployeeById(id).then((response) => {
        setFullName(response.data.fullName);
        setLevel(response.data.level) ; 
        setNote(response.data.note) ; 
        setStatus(response.data.status);
        setDuration(response.data.duration)
      }).catch( error => {console.error(error); })
    }
    } , [id]); 


    const getColor = () => {
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
   <div className="container mt-4">
    <div className="row">
    <div className="card col-md-4 offset-md-3">
      {PageTitle()}
      <div className="card-body">
        <form >
          <div className="form-group mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-2 form-label">Nom : </label>
            <input
              type="text"
              value={fullName}
              placeholder="Entrez votre Nom "
              onChange={handleInputChangeFN}
              className={`form-control`}
              
            />
          </div>
         

          <div className="form-group mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-2 form-label">Level :</label>
        
            <select className="form-select" aria-label="Default select example" value={level} onChange={handleInputChangeLevel}  >
              <option selected>Level</option>
              <option value="1 Bac Sc. EX">1 Bac Sc. EX</option>
              <option value="5ème ">5ème </option>

              <option value="1 Bac Sc. MATHS">1 Bac Sc. MATHS</option>
              <option value="2 Bac Sc. MATHS">2 Bac Sc. MATHS</option>
              <option value="2 Bac Sc. PC">2 Bac Sc. PC</option>
              <option value="2 Bac Sc. SVT">2 Bac Sc. SVT</option>
              <option value="inconnu">inconnu</option>
              <option value="1ere année collège mission">1ere année collège mission</option>
            </select>
    
          </div>
          <div className="form-group mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-2 form-label">Note :</label>
            <input
              type="text"
              value={note}
              placeholder="Entrez une note "
              onChange={handleInputChangeNote}
              className="form-control"
              
            />
    
          </div>
          <div className="form-group mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-2 form-label">Statut d'étudiant :</label>
           
            <select className="form-select" aria-label="Default select example" value={status} onChange={handleInputChangeStatus} style={{ color: getColor() }} >
              <option selected>Statut</option>
              <option value="confirmé" >confirmé</option>
              <option value="presque confirmé" >presque confirmé</option>
              <option value="en cours de vérification" >en cours de vérification</option>
            </select>
    
          </div>
          <div className="form-group mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-2 form-label">Duration :</label>
            <input
              type="text"
              value={duration}
              placeholder="Entrez la duration "
              onChange={handleInputChangeDuration}
              className="form-control"
              
            />
    
          </div>
        </form>
        </div>
      </div>
      </div>

      
  
    <button
    onClick={saveOrUpdateEmployee}
      className="btn btn-primary mt-2 col-md-2 offset-md-3"
    >Save Student</button>
  </div>
  
    </>
  )
}

export default EmployeeComponent