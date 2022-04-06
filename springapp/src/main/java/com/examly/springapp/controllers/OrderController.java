package com.examly.springapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.service.OrderService;
import com.examly.springapp.service.CartService;
import com.examly.springapp.models.Order;
import java.util.*;

@CrossOrigin(origins = "https://8081-eaeeadbaffecdceaddadfedfeceadbceedce.examlyiopb.examly.io")
@RestController
public class OrderController {
    
    @Autowired
    private OrderService orderService;

    @Autowired
    private CartService cartService;
    
    //Return List of orders based on userId
    @RequestMapping("/orders")
    public List<Order> getUserProducts(@PathVariable String id){
        return orderService.getUserProducts(id);
    }

    //Save cart items as orders
    @RequestMapping(method = RequestMethod.POST, value = "/saveOrder")
    public void saveProduct(@PathVariable String id){
        orderService.saveProduct(id);
    }

    // @RequestMapping(method = RequestMethod.POST, value = "/placeOrder")
    public void placeOrder(@RequestBody Order order){
        orderService.placeOrder(order);
    }

    //Retrieve All orders -> (Admin)
    @RequestMapping("/admin/orders")
    public List<Order> getAllUsersProducts(){
        return orderService.getAllUsersProducts();
    } 
}
