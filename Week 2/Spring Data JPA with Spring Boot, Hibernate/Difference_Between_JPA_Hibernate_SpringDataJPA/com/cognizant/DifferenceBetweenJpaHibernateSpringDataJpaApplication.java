package com.cognizant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.model.Employee;
import com.cognizant.repository.EmployeeRepository;

@SpringBootApplication
public class DifferenceBetweenJpaHibernateSpringDataJpaApplication
        implements CommandLineRunner {

    @Autowired
    private EmployeeRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(
                DifferenceBetweenJpaHibernateSpringDataJpaApplication.class,
                args);
    }

    @Override
    public void run(String... args) throws Exception {

        System.out.println("===== JPA =====");
        System.out.println("JPA is a specification for ORM.");

        System.out.println("\n===== Hibernate =====");
        System.out.println("Hibernate is an implementation of JPA.");

        System.out.println("\n===== Spring Data JPA =====");
        System.out.println("Spring Data JPA is an abstraction over JPA/Hibernate.");

        repository.save(new Employee(1, "Aravind"));

        System.out.println("\nSaved Employee:");
        System.out.println(repository.findById(1).get());
    }
}