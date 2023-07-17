package com.peercoreProject.fullstack_backend.controller;

import com.peercoreProject.fullstack_backend.entity.CustomerEntity;
import com.peercoreProject.fullstack_backend.service.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/customer")
public class CustomerController {
    private final CustomerService  customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public List<CustomerEntity> findAllCustomers(){
        return  customerService.findAllCustomers();
    }
    @GetMapping("/{id}")
    public Optional<CustomerEntity> findCustomerById(@PathVariable("id") Long id){
        return customerService.findById(id);
    }
    @CrossOrigin(origins = "http://localhost:3000/")
    @GetMapping("/email={email}")
    public ResponseEntity<?> findByEmail(@PathVariable("email") String email) {
        Optional<CustomerEntity> customerOptional = customerService.findByEmail(email);
        if (customerOptional.isPresent()) {
            CustomerEntity customer = customerOptional.get();
            return ResponseEntity.ok(customer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
   /* @PostMapping
    public CustomerEntity saveCustomer(@RequestBody CustomerEntity customerEntity){
        String email = customerEntity.getEmail();
        // Check if email already exists in the database
        if (customerService.existsByEmail(email)) {
            return null; // or return an appropriate error response
        }
        return customerService.saveCustomer(customerEntity);
    }*/
   @CrossOrigin(origins = "http://localhost:3000/")
    @PostMapping
    public ResponseEntity<?> saveCustomer(@RequestBody CustomerEntity customerEntity) {
        String email = customerEntity.getEmail();

        // Check if email already exists in the database
        if (customerService.existsByEmail(email)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Item Already Exists");
        }

        CustomerEntity savedCustomer = customerService.saveCustomer(customerEntity);
        return ResponseEntity.ok(savedCustomer);
    }

    @PutMapping
    public CustomerEntity updateCustomer(@RequestBody CustomerEntity customerEntity){
        return customerService.updateCustomer(customerEntity);
    }


    @DeleteMapping ("/{id}")
    public void deleteEmployee(@PathVariable("id") Long id){
        customerService.deleteCustomer(id);
    }

}
