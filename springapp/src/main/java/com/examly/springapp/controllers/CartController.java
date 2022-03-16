package com.examly.springapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.models.Cart;
import com.examly.springapp.service.CartService;
import java.util.*;

@RestController
public class CartController {
    
    @Autowired
    private CartService cartService;

    //id -> productId
    @RequestMapping(method = RequestMethod.POST, value = "/home/{id}")
    public void addToCart(@RequestBody Cart cart, @PathVariable String id){
        cart.setCartItemId(id);
        cartService.addToCart(cart);
    }

    //id -> userId
    @RequestMapping("/cart/{id}")
    public List<Cart> showCart(@PathVariable String id){
        return cartService.showCart(id);
    }

    //id -> productId
    @RequestMapping(method = RequestMethod.POST, value = "/home/delete/{id}")
    public void deleteCartItem(@PathVariable String id){
        cartService.deleteCartItem(id);
    }

}
