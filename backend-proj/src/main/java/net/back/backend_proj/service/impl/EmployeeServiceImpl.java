package net.back.backend_proj.service.impl;

import lombok.AllArgsConstructor;
import net.back.backend_proj.dto.EmployeeDto;
import net.back.backend_proj.entity.Employee;
import net.back.backend_proj.exception.ResourceNotFoundException;
import net.back.backend_proj.mapper.EmployeeMapper;
import net.back.backend_proj.repository.EmployeeRepository;
import net.back.backend_proj.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private  EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto){
        Employee employee = EmployeeMapper.maptoEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.maptoEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(()-> new ResourceNotFoundException("employee doesn't exist with id : " ));
        return EmployeeMapper.maptoEmployeeDto(employee) ;
    }


    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map((employee)->EmployeeMapper.maptoEmployeeDto(employee))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long id , EmployeeDto newEmployeeDto) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("employee doesn't exist with id : " ));

        employee.setFullName(newEmployeeDto.getFullName()) ;
        employee.setLevel(newEmployeeDto.getLevel()) ;
        employee.setNote(newEmployeeDto.getNote());
        employee.setStatus(newEmployeeDto.getStatus());
        employee.setDuration(newEmployeeDto.getDuration());
        Employee savedNewEmployee = employeeRepository.save(employee) ;
        return EmployeeMapper.maptoEmployeeDto(savedNewEmployee);
    }
    public String seeNote(Long id ) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("employee doesn't exist with id : " ));
        //String oldNote = employee.getNote();
        //employee.setNote(newNote);
        employeeRepository.save(employee);
        return employee.getNote();
    }

    @Override
    public String deleteEmployee(Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("employee doesn't exist with id : " ));
        EmployeeDto employeeDto = EmployeeMapper.maptoEmployeeDto(employee);
        employeeRepository.deleteById(id);

        return "success" ;
    }
}
