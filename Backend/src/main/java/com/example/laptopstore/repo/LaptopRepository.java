package com.example.laptopstore.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.laptopstore.entity.Laptop;

@Repository
public interface LaptopRepository extends JpaRepository<Laptop, Long> {
    
}

