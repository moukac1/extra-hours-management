package net.back.backend_proj.controller;


import net.back.backend_proj.dto.EarningsDto;
import net.back.backend_proj.dto.EmployeeDto;
import net.back.backend_proj.entity.Earnings;
import net.back.backend_proj.repository.EarningsRepository;
import net.back.backend_proj.service.EarningsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;


@CrossOrigin("*")
@RestController
@RequestMapping("api/employees")
public class EarningsController {
    @Autowired
    private EarningsService earningsService;

    @GetMapping("AllEarnings")
    public List<EarningsDto> getEarnings() {
        List<EarningsDto> earnings = earningsService.getEarnings() ;
        return earnings ;
    }

    @PostMapping("add-earning")
    public ResponseEntity<?> createEarning(@RequestBody EarningsDto earningsDto) {

        try{
            EarningsDto earningsDto1 =  earningsService.addEarning(earningsDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(earningsDto1)  ;
        }catch (Exception e){
            return   ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }

    }

    @DeleteMapping("delete-earning/{id}")
    public ResponseEntity<String> deleteEarning(@PathVariable Long id) {
        String earningDto =  earningsService.deleteEarning(id) ;
        return ResponseEntity.ok("success") ;
    }

}
