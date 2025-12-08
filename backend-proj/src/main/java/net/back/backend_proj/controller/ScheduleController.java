package net.back.backend_proj.controller;

import net.back.backend_proj.dto.EmployeeDto;
import net.back.backend_proj.dto.ScheduleDto;
import net.back.backend_proj.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/employees")
public class ScheduleController {
    //@Author mouadKacimi

    // Autowiring
    @Autowired
    private ScheduleService scheduleService;

    // Posting Data
    @PostMapping("send-schedule")
    public ResponseEntity<ScheduleDto> sendSchedule(@RequestBody ScheduleDto scheduleDto) {
        ScheduleDto savedSchedule = scheduleService.sendSchedule(scheduleDto);
        return  new ResponseEntity<>(savedSchedule , HttpStatus.CREATED);
    }
    @PostMapping("create-schedule")
    public ResponseEntity<ScheduleDto> addSchedule(@RequestBody ScheduleDto scheduleDto) {
        ScheduleDto scheduleDto1 = scheduleService.addSchedule(scheduleDto) ;
        return  new ResponseEntity<>(scheduleDto1 , HttpStatus.CREATED);
    }

    // Getting Data
    @GetMapping("getSchedule")
    public List<ScheduleDto> getSchedules() {
        List<ScheduleDto> schedules = scheduleService.getSchedules() ;
        return schedules;
    }
    @GetMapping("schedule/{scheduleId}")
    public ResponseEntity<ScheduleDto> getSchedulebyId(@PathVariable("scheduleId") Long scheduleId) {
        ScheduleDto scheduleDto = scheduleService.getEmployeeById(scheduleId);
        return ResponseEntity.ok(scheduleDto);
    }

    // Updating Data
    @PutMapping("update-schedule/{id}")
    public ResponseEntity<ScheduleDto> updateSchedule(@PathVariable Long id ,@RequestBody ScheduleDto newScheduleDto) {
        ScheduleDto scheduleDto =  scheduleService.updateEmployee(id , newScheduleDto) ;
        return ResponseEntity.ok(scheduleDto);
    }

    // Deleting Data
    @DeleteMapping("delete-schedule/{id}")
    public ResponseEntity<String> deleteSchedule(@PathVariable Long id) {
        String scheduleDto =  scheduleService.deleteSchedule(id) ;
        return ResponseEntity.ok("success") ;
    }

}
