package net.back.backend_proj.repository;

import net.back.backend_proj.entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
    Schedule save(Schedule schedule);

    List<Schedule> findAll();

    Optional<Schedule> findById(Long id);

    @Override
    void deleteById(Long id);

}
