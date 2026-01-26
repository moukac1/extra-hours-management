import axios from "axios" ; 

const REST_API_BASE_URL="http://localhost:8080/api/employees/allEmployees" ;
const Create_Employee = "http://localhost:8080/api/employees/createEmployee" ; 
const Get_Employee_By_Id = 'http://localhost:8080/api/employees/id/' ; 
const Update_Employee_By_Id = 'http://localhost:8080/api/employees/update/' ;
const See_Note_By_Id = 'http://localhost:8080/api/employees/note/' ;

//const Create_Schedule = 'http://localhost:8080/api/employees/send-schedule';
const Get_All_Schedule = 'http://localhost:8080/api/employees/getSchedule';
const Delete_By_Id ='http://localhost:8080/api/employees/delete' ; 
const Update_Schedule_By_Id  ='http://localhost:8080/api/employees/update-schedule' ;
const Get_Schedule_By_Id =    'http://localhost:8080/api/employees/schedule';
const Delete_Schedule_By_Id =  'http://localhost:8080/api/employees/delete-schedule'

const Get_All_Earnings = 'http://localhost:8080/api/employees/AllEarnings' ; 
const Create_Earning = 'http://localhost:8080/api/employees/add-earning' ; 
const Delete_Earning_By_Id ='http://localhost:8080/api/employees/delete-earning' ; 
 

export const listEmployees =()=> axios.get(REST_API_BASE_URL) ; 
export const createEmployee=(employee) => axios.post(Create_Employee , employee) ; 
export const getEmployeeById=(id) => axios.get(Get_Employee_By_Id+id );
export const updateEmployeeByid=(id , employee) => axios.put(Update_Employee_By_Id+id , employee);
export const seeNoteByid=(id ) => axios.get(See_Note_By_Id+id);

export const deleteById=(id) => axios.delete(Delete_By_Id +'/'+id);
// export const createSchedule=(schedule) =>axios.post(Create_Schedule) ; 
export const getAllSchedule = ()=>axios.get(Get_All_Schedule) ; 
export const getAllEarnings = () => axios.get(Get_All_Earnings) ; 
export const createEarning = (earning)=>axios.post(Create_Earning , earning) ; 
export const deleteEarningById = (id) => axios.delete(Delete_Earning_By_Id + "/"+id);
export const updateScheduleById = (id , schedule)=>axios.put(Update_Schedule_By_Id+"/"+id ,schedule );
export const getScheduleById = (id)=>axios.get(Get_Schedule_By_Id + "/"+id) ; 
export const deleteScheduleById = (id)=>axios.delete(Delete_Schedule_By_Id+"/"+id) ;