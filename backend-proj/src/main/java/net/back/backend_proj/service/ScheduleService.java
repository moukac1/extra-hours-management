package net.back.backend_proj.service;

import net.back.backend_proj.dto.ScheduleDto;
import net.back.backend_proj.entity.Schedule;

import java.util.List;

public interface ScheduleService {
    ScheduleDto sendSchedule(ScheduleDto scheduleDto);
    List<ScheduleDto> getSchedules();

    ScheduleDto updateEmployee(Long id, ScheduleDto newScheduleDto);

    ScheduleDto getEmployeeById(Long scheduleId);

    String deleteSchedule(Long id);

    ScheduleDto addSchedule(ScheduleDto scheduleDto);
}
