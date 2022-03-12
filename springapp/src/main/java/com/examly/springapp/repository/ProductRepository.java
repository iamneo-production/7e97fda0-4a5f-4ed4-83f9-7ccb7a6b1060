package com.examly.springapp.repository;

import org.springframework.data.repository.CrudRepository;
import com.examly.springapp.models.Product;

public interface ProductRepository extends CrudRepository<Product, String>{
    
}
