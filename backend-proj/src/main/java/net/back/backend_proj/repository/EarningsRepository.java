package net.back.backend_proj.repository;

import net.back.backend_proj.entity.Earnings;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EarningsRepository extends JpaRepository<Earnings, Long> {
    List<Earnings> findAll();

    @Override
    void deleteById(Long id);

}
