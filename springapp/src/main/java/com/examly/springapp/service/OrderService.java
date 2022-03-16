package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.models.Order;
import com.examly.springapp.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getUserProducts(String id) {
        return null;
    }

    public void saveProduct(String id) {

    }

    public void placeOrder(Order order) {

    }

    public List<Order> getAllUsersProducts() {
        return orderRepository.findAll();
    }
    
}
