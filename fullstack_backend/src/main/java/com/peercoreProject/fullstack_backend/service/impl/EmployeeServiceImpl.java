package com.peercoreProject.fullstack_backend.service.impl;

import com.peercoreProject.fullstack_backend.entity.EmployeeEntity;
import com.peercoreProject.fullstack_backend.repository.EmployeeRepository;
import com.peercoreProject.fullstack_backend.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository, EmployeeRepository employeeRepository1) {
        this.employeeRepository = employeeRepository1;

    }

    @Override
    public List<EmployeeEntity> findAllEmployee() {
        return employeeRepository.findAll();
    }

    @Override
    public Optional<EmployeeEntity> findById(Long id) {
        return employeeRepository.findById(id);
    }

    @Override
    public EmployeeEntity saveEmployee(EmployeeEntity employeeEntity) {
        return employeeRepository.save(employeeEntity);
    }

    @Override
    public EmployeeEntity updateEmployee(EmployeeEntity employeeEntity) {
        return employeeRepository.save(employeeEntity);
    }

    @Override
    public void deleteEmployee(Long id) {
      employeeRepository.deleteById(id);
    }
}
