package com.examly.springapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.models.Cart;
import com.examly.springapp.service.CartService;
import java.util.*;

@CrossOrigin(origins = "https://8081-eaeeadbaffecdceaddadfedfeceadbceedce.examlyiopb.examly.io")
// @CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CartController {
    
    @Autowired
    private CartService cartService;

    //id -> userId
    @RequestMapping(method = RequestMethod.POST, value = "/home/{id}")
    public Cart addToCart(@RequestBody Cart cart){
        // cart.setUserId(id);
        return cartService.addToCart(cart);
    }

    //id -> userId
    @RequestMapping("/cart/{id}")
    public List<Cart> showCart(@PathVariable String id){
        return cartService.showCart(id);
    }

    //id -> productId
    @RequestMapping("/cart/delete/{id}")
    public void deleteCartItem(@PathVariable String id){
        cartService.deleteCartItem(id);
    }

}
