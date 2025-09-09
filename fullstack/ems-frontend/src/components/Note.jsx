import React, { useState,useEffect } from 'react'
import { getEmployeeById } from "../services/EmployeeService";
import {  useParams } from "react-router-dom";


function Note(){
  const [note,setNote] = useState() ; 
  const {id} =useParams();
  ///
  useEffect( () => {
      getEmployeeById(id).then((response) => {
          setNote(response.data.note)
        }).catch( error => {console.error(error); })
      }
      , [id]); 
  ///


  return (
    <div className='container mt-4'>
      <div className="card">
      <div className="form-group mb-2">
        <label className="badge text-bg-primary text-wrap" style={{color:"red"}}>Note : "immodifiable dans cette section" </label>
          <input
            type="text"
            value={note}
            placeholder="Entrez une note "
            className="form-control"
            
          />
      </div>

      </div>
    </div>
  )}
export default Note ; 
