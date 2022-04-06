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
    
    //Adding item to cart
    public Cart addToCart(Cart cart) {
        return cartRepository.save(cart);
    }

    //Retrieve All items from cart for paticular userId
    public List<Cart> showCart(String id) {
        return cartRepository.findByUserId(id);
    }

    //Delete the cart item
    public void deleteCartItem(String id) {
        cartRepository.deleteById(id);
    }
    
}
