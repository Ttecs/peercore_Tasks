package com.peercoreProject.fullstack_backend.service;

import com.peercoreProject.fullstack_backend.entity.CustomerEntity;

import java.util.List;
import java.util.Optional;

public interface CustomerService {
    List<CustomerEntity> findAllCustomers();
    Optional<CustomerEntity> findById(Long id);
    CustomerEntity saveCustomer(CustomerEntity customerEntity);
    CustomerEntity updateCustomer(CustomerEntity customerEntity);
    Optional<CustomerEntity> findByEmail(String email);

    boolean existsByEmail(String email);
    void deleteCustomer(Long id);

}