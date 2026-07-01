package com.cognizant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.model.Employee;

public interface EmployeeRepository
        extends JpaRepository<Employee, Integer> {

}