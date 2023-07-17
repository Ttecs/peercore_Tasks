package com.peercoreProject.fullstack_backend.repository;

import com.peercoreProject.fullstack_backend.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository <EmployeeEntity,Long>{
}
