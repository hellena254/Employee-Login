package com.hellen.LoginForm;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository <Employee, Long> {
    Employee findByUsername(String username);
}
