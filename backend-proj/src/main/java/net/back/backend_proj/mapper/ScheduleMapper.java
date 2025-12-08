package net.back.backend_proj.mapper;

import net.back.backend_proj.dto.ScheduleDto;
import net.back.backend_proj.entity.Schedule;

public class ScheduleMapper {
    public static Schedule maptoschedule(ScheduleDto scheduleDto) {
        return new Schedule(
                scheduleDto.getId(), scheduleDto.getLundi(), scheduleDto.getMardi(), scheduleDto.getMercredi(), scheduleDto.getJeudi(),
                scheduleDto.getVendredi(), scheduleDto.getSamedi(), scheduleDto.getDimanche()
        ) ;

    }
    public static ScheduleDto maptoscheduleDto(Schedule schedule) {
        return new ScheduleDto(
                schedule.getId(), schedule.getLundi(), schedule.getMardi(), schedule.getMercredi(), schedule.getJeudi(),
                schedule.getVendredi(), schedule.getSamedi(), schedule.getDimanche()
        );
    }
}
