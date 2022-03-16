package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.*;
import com.examly.springapp.models.Order;

public interface OrderRepository extends JpaRepository<Order, String>{
    
}
