package com.peercoreProject.fullstack_backend.service.impl;

import com.peercoreProject.fullstack_backend.entity.CustomerEntity;
import com.peercoreProject.fullstack_backend.repository.CustomerRepository;
import com.peercoreProject.fullstack_backend.repository.ProductRepository;
import com.peercoreProject.fullstack_backend.service.CustomerService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;
    private final ProductRepository productRepository;

    public CustomerServiceImpl(CustomerRepository customerRepository, ProductRepository productRepository) {
        this.customerRepository = customerRepository;
        this.productRepository = productRepository;
    }

    @Override
    public List<CustomerEntity> findAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Optional<CustomerEntity> findById(Long id) {
        return customerRepository.findById(id);
    }

    @Override
    public CustomerEntity saveCustomer(CustomerEntity customerEntity) {
        return customerRepository.save(customerEntity);
    }

    @Override
    public CustomerEntity updateCustomer(CustomerEntity customerEntity) {
        return customerRepository.save(customerEntity);
    }

    @Override
    public Optional<CustomerEntity> findByEmail(String email) {
      return customerRepository.findByEmail(email);
    }

    @Override
    public boolean existsByEmail(String email) {
        return customerRepository.existsByEmail(email);
    }


    @Override
    public void deleteCustomer(Long id) {
       customerRepository.deleteById(id);
    }
}
