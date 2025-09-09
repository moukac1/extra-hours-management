import axios from "axios" ; 

const REST_API_BASE_URL="http://localhost:8080/api/employees/allEmployees" ;
const Create_Employee = "http://localhost:8080/api/employees/createEmployee" ; 
const Get_Employee_By_Id = 'http://localhost:8080/api/employees/id/' ; 
const Update_Employee_By_Id = 'http://localhost:8080/api/employees/update/' ;
const See_Note_By_Id = 'http://localhost:8080/api/employees/note/' ;

const Delete_By_Id ='http://localhost:8080/api/employees/delete' ; 
export const listEmployees =()=> axios.get(REST_API_BASE_URL) ; 
export const createEmployee=(employee) => axios.post(Create_Employee , employee) ; 
export const getEmployeeById=(id) => axios.get(Get_Employee_By_Id+id );
export const updateEmployeeByid=(id , employee) => axios.put(Update_Employee_By_Id+id , employee);
export const seeNoteByid=(id ) => axios.get(See_Note_By_Id+id);

export const deleteById=(id) => axios.delete(Delete_By_Id +'/'+id);

