import React from 'react'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

import { createEarning } from "../services/EmployeeService";
const EarningComponent = () => {
  ///useState
    const [idDonneur , setIdDonneur]=useState(""); 
    const [montant , setMontant]=useState("");
    const [date , setDate]=useState("");
    const [note , setNote] =useState("") ; 
///
const navigator = useNavigate() ; 


const handleInputChangeIdDonneur = (e) => {
  setIdDonneur(e.target.value);
};
const handleInputChangeMontant = (e) => {
  setMontant(e.target.value);
};
const handleInputChangeDate = (e) => {
  setDate(e.target.value);
};
const handleInputChangeNote = (e) => {
  setNote(e.target.value);
};

function saveEarning(e){
  e.preventDefault() ; 
  const earning = {idDonneur , montant , date ,note}
  createEarning(earning).then((response) => {
      console.log(response.data);
      navigator('/');

      }).catch((error)=>console.log(error));

}


  return (
    <>
   <div className="container mt-4">
    <div className="row">
    <div className="card col-md-4 offset-md-3">
      <h2>Add earning : </h2>
      <div className="card-body">
        <form >
          <div className="form-group mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-2 form-label">Id de donneur : </label>
            <input
              type="text"
              value={idDonneur}
              placeholder="Entrez L'Id de donneur "
              onChange={handleInputChangeIdDonneur}
              className={`form-control`}
              
            />
          </div>
         

          <div className="form-group mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-2 form-label">Montant  :</label>
        
            <input
              type="text"
              value={montant}
              placeholder="Entrez le montant "
              onChange={handleInputChangeMontant}
              className={`form-control`}
              
            />            
    
          </div>
          <div className="form-group mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-2 form-label">Date :</label>
            <input
              type="text"
              value={date}
              placeholder="Entrez une date "
              onChange={handleInputChangeDate}
              className="form-control"
              
            />
    
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
        
        </form>
        </div>
      </div>
      </div>

      
  
    <button
    onClick={saveEarning}
      className="btn btn-primary mt-2 col-md-2 offset-md-3"
      
    >Save Earning </button>
  </div>
  
    </>
    


  ) 
}

export default EarningComponent