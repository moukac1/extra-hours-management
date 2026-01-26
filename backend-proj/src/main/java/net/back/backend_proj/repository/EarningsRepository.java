package net.back.backend_proj.repository;

import net.back.backend_proj.entity.Earnings;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EarningsRepository extends JpaRepository<Earnings, Long> {

    @Override
    void deleteById(Long id);

}
