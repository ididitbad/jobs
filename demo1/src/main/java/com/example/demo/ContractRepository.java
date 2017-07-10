package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

/**
 * Created by KirK on 09.07.2017.
 */
public interface ContractRepository extends CrudRepository<Contract, Long> {
    List<Contract> findAll();
    Contract save(Contract contract);
    void delete(Long id);
}
