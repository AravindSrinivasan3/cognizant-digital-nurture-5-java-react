package com.cognizant;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.entity.Employee;
import com.cognizant.repository.EmployeeRepository;

@SpringBootApplication
public class SpringDataJpaQuickExampleApplication
        implements CommandLineRunner {

    @Autowired
    private EmployeeRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(
                SpringDataJpaQuickExampleApplication.class,
                args);
    }

    @Override
    public void run(String... args) throws Exception {

        System.out.println("===== INSERT =====");

        repository.save(
                new Employee(1, "Aravind", 50000));

        repository.save(
                new Employee(2, "Rahul", 60000));

        System.out.println("===== FIND BY ID =====");

        Optional<Employee> emp =
                repository.findById(1);

        emp.ifPresent(System.out::println);

        System.out.println("===== FIND BY NAME =====");

        repository.findByName("Aravind")
                  .forEach(System.out::println);

        System.out.println("===== DELETE =====");

        repository.deleteById(2);

        System.out.println("Employee with ID 2 deleted.");
    }
}