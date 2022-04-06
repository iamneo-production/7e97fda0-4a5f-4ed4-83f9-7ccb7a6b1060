package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.*;

import java.util.*;
import com.examly.springapp.models.Cart;

public interface CartRepository extends JpaRepository<Cart, String>{
    
    //Custom query to retrieve all cart items for particular userId
    @Query(value = "SELECT * FROM cart WHERE user_id=?1", nativeQuery = true)
    List<Cart> findByUserId(String userId);
}

