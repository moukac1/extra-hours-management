package net.back.backend_proj.controller;

import jakarta.servlet.http.HttpServletRequest;
import net.back.backend_proj.dto.EmployeeDto;
import net.back.backend_proj.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/employees")
public class EmployeeController {
    @Autowired
    //build add employee rest api
    private EmployeeService employeeService;

    @PostMapping("createEmployee")
    public ResponseEntity<EmployeeDto>  createEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return  new ResponseEntity<>(savedEmployee , HttpStatus.CREATED);
    }



    @GetMapping("id/{employeeId}")
    public ResponseEntity<EmployeeDto> getEmployeebyId(@PathVariable("employeeId") Long employeeId) {
        EmployeeDto employeeDto = employeeService.getEmployeeById(employeeId);
        return ResponseEntity.ok(employeeDto);
    }

    @GetMapping("allEmployees")
    public List<EmployeeDto> getAllEmployees() {
        List<EmployeeDto> employees = employeeService.getAllEmployees() ;
        return employees ;
    }

    @PutMapping("update/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable Long id , @RequestBody EmployeeDto newEmployeeDto) {
        EmployeeDto employeeDto1 =  employeeService.updateEmployee(id , newEmployeeDto) ;
        return ResponseEntity.ok(employeeDto1);
    }
    @GetMapping("note/{id}")
    public ResponseEntity<String> seeNote(@PathVariable Long id ) {
        String Note = employeeService.seeNote(id) ;
        return ResponseEntity.ok(Note);
    }


    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
        String employeeDto =  employeeService.deleteEmployee(id) ;
        return ResponseEntity.ok("success") ;
    }
}
