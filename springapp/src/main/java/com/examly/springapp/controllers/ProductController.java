package com.examly.springapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.models.Product;
import com.examly.springapp.service.ProductService;
import java.util.*;


@RestController
public class ProductController {
    
    @Autowired
    private ProductService productService;

    @RequestMapping("/admin")
    public List<Product> getProduct(){
        return productService.getAllProducts();
    }

    @RequestMapping("/home")
    public List<Product> getHomeProduct(){
        return productService.getAllProducts();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/admin/addProduct")
    public void productSave(@RequestBody Product product){
        productService.productSave(product);
    }

}
