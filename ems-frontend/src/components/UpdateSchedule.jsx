
import React, { useState, useEffect } from 'react'
import { useNavigate ,  useParams } from "react-router-dom";
import { getScheduleById, updateScheduleById } from '../services/EmployeeService';



const UpdateSchedule = () => {
  const {id} =useParams();
  const navigator = useNavigate() ; 

  const [lundi , setLundi] =useState() ; 
  const [mardi, setMardi]=useState() ; 
  const [mercredi , setMercredi]=useState();
  const [jeudi , setJeudi]=useState() ; 
  const [vendredi , setVendredi]=useState();
  const [samedi , setSamedi]=useState();
  const [dimanche , setDimanche]=useState();



  const handleInputChangeLundi = (e) => {
    setLundi(e.target.value);
  };
  const handleInputChangeMardi = (e) => {
    setMardi(e.target.value);
  };
  const handleInputChangeMercredi = (e) => {
    setMercredi(e.target.value);
  };
  const handleInputChangeJeudi = (e) => {
    setJeudi(e.target.value);
  };
  const handleInputChangeVendredi = (e) => {
    setVendredi(e.target.value);
  };
  const handleInputChangeSamedi = (e) => {
    setSamedi(e.target.value);
  };
  const handleInputChangeDimanche = (e) => {
    setDimanche(e.target.value);
  };
  

function saveSchedule(e){
  e.preventDefault();
  if(id){
    const schedule = {lundi,mardi,mercredi,jeudi,vendredi,samedi,dimanche}
    updateScheduleById(id,schedule).then((response => {
      console.log(response.data) ; 
      navigator("/employees") ; 
    })).catch(error=>{console.error(error) ;})
      
  }
}
  
useEffect( () => {
    if(id){
    getScheduleById(id).then((response) => {
        setLundi(response.data.lundi);
        setMardi(response.data.mardi) ; 
        setMercredi(response.data.mercredi) ; 
        setJeudi(response.data.jeudi);
        setVendredi(response.data.vendredi);
        setSamedi(response.data.samedi);
        setDimanche(response.data.dimanche);


      }).catch( error => {console.error(error); })
    }
    } , [id]); 

  return (
    <>
    <div className="container mt-4">
     <div className="row">
     <div className="card col-md-4 offset-md-3">
       <div className="card-body">
         <form >
           <div className="form-group mb-2">
             <label className="block text-sm font-medium text-gray-700 mb-2 form-label">Lundi : </label>
             <input
               type="text"
               value={lundi}
               placeholder="Entrez votre Nom "
               onChange={handleInputChangeLundi}
               className={`form-control`}
               
             />
           </div>
           <div className="form-group mb-2">
             <label className="block text-sm font-medium text-gray-700 mb-2 form-label">Mardi : </label>
             <input
               type="text"
               value={mardi}
               placeholder="Entrez votre Nom "
               onChange={handleInputChangeMardi}
               className={`form-control`}
               
             />
           </div>
           <div className="form-group mb-2">
             <label className="block text-sm font-medium text-gray-700 mb-2 form-label">Mercredi : </label>
             <input
               type="text"
               value={mercredi}
               placeholder="Entrez votre Nom "
               onChange={handleInputChangeMercredi}
               className={`form-control`}
               
             />
           </div>
           <div className="form-group mb-2">
             <label className="block text-sm font-medium text-gray-700 mb-2 form-label">Jeudi : </label>
             <input
               type="text"
               value={jeudi}
               placeholder="Entrez votre Nom "
               onChange={handleInputChangeJeudi}
               className={`form-control`}
               
             />
           </div>
           <div className="form-group mb-2">
             <label className="block text-sm font-medium text-gray-700 mb-2 form-label">Vendredi : </label>
             <input
               type="text"
               value={vendredi}
               placeholder="Entrez votre Nom "
               onChange={handleInputChangeVendredi}
               className={`form-control`}
               
             />
           </div>
           <div className="form-group mb-2">
             <label className="block text-sm font-medium text-gray-700 mb-2 form-label">Samedi : </label>
             <input
               type="text"
               value={samedi}
               placeholder="Entrez votre Nom "
               onChange={handleInputChangeSamedi}
               className={`form-control`}
               
             />
           </div>
           <div className="form-group mb-2">
             <label className="block text-sm font-medium text-gray-700 mb-2 form-label">Dimanche : </label>
             <input
               type="text"
               value={dimanche}
               placeholder="Entrez votre Nom "
               onChange={handleInputChangeDimanche}
               className={`form-control`}
               
             />
           </div>
           
     
      </form>
      
      </div>
      </div>
      </div>
      <button
            onClick={saveSchedule}
            className="btn btn-primary mt-2 col-md-2 offset-md-3"
            >Save Schecule</button>
      </div>

    </>

  )
}

export default UpdateSchedule 