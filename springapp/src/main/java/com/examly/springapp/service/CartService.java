package com.examly.springapp.service;

import java.util.List;
import com.examly.springapp.models.Cart;
import com.examly.springapp.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;
    
    public Cart addToCart(Cart cart) {
        return cartRepository.save(cart);
    }

    public List<Cart> showCart(String id) {
        return cartRepository.findByUserId(id);
    }

    public void deleteCartItem(String id) {
        cartRepository.deleteById(id);
    }
    
}
