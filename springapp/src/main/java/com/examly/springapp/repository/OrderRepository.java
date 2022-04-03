package com.examly.springapp.repository;

import org.springframework.data.repository.CrudRepository;
import com.examly.springapp.models.Order;

public interface OrderRepository extends CrudRepository<Order, String>{
    
    // @Query(value = "SELECT * FROM order WHERE user_id=?1", nativeQuery = true)
    // List<Order> findByUserId(String userId);
}
