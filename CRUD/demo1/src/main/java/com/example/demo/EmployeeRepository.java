package com.example.demo;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.persistence.Entity;
import java.util.Date;
import java.util.List;

/**
 * Created by KirK on 06.07.2017.
 */
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
    List<Employee> findAll();
    Employee save(Employee employee);
    void delete(Long id);
}
