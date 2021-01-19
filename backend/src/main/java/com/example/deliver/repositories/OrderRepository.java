package com.example.deliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.deliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
