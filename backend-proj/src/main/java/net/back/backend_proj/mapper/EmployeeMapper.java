package net.back.backend_proj.mapper;

import net.back.backend_proj.dto.EmployeeDto;
import net.back.backend_proj.entity.Employee;

public class EmployeeMapper {
    public static Employee maptoEmployee(EmployeeDto employeeDto){
       return new Employee(
        employeeDto.getId(),
        employeeDto.getFullName(),
        employeeDto.getLevel(),
        employeeDto.getNote(),
         employeeDto.getStatus(),
               employeeDto.getDuration()
        ) ;
    }
    public static EmployeeDto maptoEmployeeDto(Employee employee){
        return new EmployeeDto(

                employee.getId(),
                employee.getFullName(),
                employee.getLevel(),
                employee.getNote(),
                employee.getStatus(),
                employee.getDuration()
        );
    }


}
