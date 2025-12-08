package net.back.backend_proj.service;

import net.back.backend_proj.dto.EmployeeDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long id,EmployeeDto newEmployeeDto);
    String seeNote(Long id ) ;
    String deleteEmployee(Long id);
}
