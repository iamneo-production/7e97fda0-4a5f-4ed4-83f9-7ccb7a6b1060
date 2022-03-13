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

    //Retrieve ALL products
    public List<Product> getAllProducts() {

        List<Product> products = new ArrayList<>();
		productRepository.findAll()
		.forEach(products :: add);
		
		return products;
    }

    //Add a Product
    public void productSave(Product product) {
        productRepository.save(product);
    }

    //Delete a Product
    public void productDelete(String id) {
        productRepository.deleteById(id);
    }

    //Retireve a single Product
    public Optional<Product> productEditData(String id) {
        return productRepository.findById(id);
    }

    //Edit a Product
    public void productEditSave(Product product, String id) {
        productRepository.save(product);
    }
    
}
