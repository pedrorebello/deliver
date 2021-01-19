package com.example.deliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.deliver.entities.Order;
import com.example.deliver.entities.Product;

public interface OrderRepository extends JpaRepository<Order, Long>{

	@Query("SELECT DISTINCT obj"
			 + " FROM Order obj" 
			 + " JOIN FETCH obj.products"
			 + " WHERE obj.status = 0"
			 + " ORDER BY obj.moment ASC")
	List<Order> findPendingOrders();
}
