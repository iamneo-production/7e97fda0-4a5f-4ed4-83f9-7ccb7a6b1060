package com.examly.springapp.service;

import java.util.*;
import com.examly.springapp.models.Product;
import com.examly.springapp.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {

        List<Product> products = new ArrayList<>();
		productRepository.findAll()
		.forEach(products :: add);
		
		return products;
    }

    public void productSave(Product product) {
        productRepository.save(product);
    }


    
}
