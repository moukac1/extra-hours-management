package net.back.backend_proj.repository;

import net.back.backend_proj.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Optional<Employee> findById(Long id);
    List<Employee> findAll();
    @Override
    void deleteById(Long id);
}
