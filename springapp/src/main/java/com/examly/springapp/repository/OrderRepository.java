package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.*;
import com.examly.springapp.models.Order;
import java.util.*;

public interface OrderRepository extends JpaRepository<Order, String>{
    
    @Query(value = "SELECT * FROM order WHERE user_id=?1", nativeQuery = true)
    List<Order> findByUserId(String userId);
}
