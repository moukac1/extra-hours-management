package net.back.backend_proj.service.impl;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import net.back.backend_proj.dto.EmployeeDto;
import net.back.backend_proj.dto.ScheduleDto;
import net.back.backend_proj.entity.Employee;
import net.back.backend_proj.entity.Schedule;
import net.back.backend_proj.exception.ResourceNotFoundException;
import net.back.backend_proj.mapper.EmployeeMapper;
import net.back.backend_proj.mapper.ScheduleMapper;
import net.back.backend_proj.repository.ScheduleRepository;
import net.back.backend_proj.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class ScheduleServiceImpl implements ScheduleService {
    @Autowired
    private ScheduleRepository scheduleRepository ;
    @Override
    public ScheduleDto sendSchedule(ScheduleDto scheduleDto){
        Schedule schedule = ScheduleMapper.maptoschedule(scheduleDto);
        Schedule savedSchedule = scheduleRepository.save(schedule) ;
        return ScheduleMapper.maptoscheduleDto(savedSchedule);
    }


    @Override
    public List<ScheduleDto> getSchedules(){
        List<Schedule> schedules = scheduleRepository.findAll();
        return schedules.stream().map((schedule)-> ScheduleMapper.maptoscheduleDto(schedule))
                .collect(Collectors.toList());
    }

    @Override
    public ScheduleDto updateEmployee(Long id, ScheduleDto newScheduleDto) {
        Schedule schedule = scheduleRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("employee doesn't exist with id : " ));

        schedule.setLundi(newScheduleDto.getLundi());
        schedule.setMardi(newScheduleDto.getMardi()) ;
        schedule.setMercredi(newScheduleDto.getMercredi());
        schedule.setJeudi(newScheduleDto.getJeudi());
        schedule.setVendredi(newScheduleDto.getVendredi());
        schedule.setSamedi(newScheduleDto.getSamedi());
        schedule.setDimanche(newScheduleDto.getDimanche());

        Schedule savedNewSchedule = scheduleRepository.save(schedule) ;
        return ScheduleMapper.maptoscheduleDto(savedNewSchedule);
    }

    @Override
    public ScheduleDto getEmployeeById(Long scheduleId) {
        Schedule schedule = scheduleRepository.findById(scheduleId)
                .orElseThrow(()-> new ResourceNotFoundException("schedule doesn't exist with id : " ));
        return ScheduleMapper.maptoscheduleDto(schedule) ;    }

    @Override
    public String deleteSchedule(Long id) {
        Schedule schedule = scheduleRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("employee doesn't exist with id : " ));
        ScheduleDto scheduleDto = ScheduleMapper.maptoscheduleDto(schedule);
        scheduleRepository.deleteById(id);

        return "success" ;
    }

    @Override
    public ScheduleDto addSchedule(ScheduleDto scheduleDto) {
        Schedule schedule = ScheduleMapper.maptoschedule(scheduleDto);
        Schedule savedSchedule = scheduleRepository.save(schedule) ;
        return ScheduleMapper.maptoscheduleDto(savedSchedule);
    }
}
