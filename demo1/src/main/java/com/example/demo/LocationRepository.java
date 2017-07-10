package com.example.demo;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by KirK on 10.07.2017.
 */
public interface LocationRepository extends CrudRepository<Location, Long> {
    List<Location> findAll();
    Location save(Location location);
    void delete(Long id);
}
