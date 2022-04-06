package com.examly.springapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.models.Product;
import com.examly.springapp.service.ProductService;
import java.util.*;

@CrossOrigin(origins = "https://8081-eaeeadbaffecdceaddadfedfeceadbceedce.examlyiopb.examly.io")
@RestController
public class ProductController {
    
    @Autowired
    private ProductService productService;

    //Get all products -> (Admin)
    @RequestMapping("/admin")
    public List<Product> getProduct(){
        return productService.getAllProducts();
    }

    //Get all products -> (Customer)
    @RequestMapping("/home")
    public List<Product> getHomeProduct(){
        return productService.getAllProducts();
    }

    //Adding a Product -> (Admin)
    @RequestMapping(method = RequestMethod.POST, value = "/admin/addProduct")
    public Product productSave(@RequestBody Product product){
        return productService.productSave(product);
    }

    //Deleting a Product -> (Admin)
    @RequestMapping("/admin/delete/{id}")
    public void productDelete(@PathVariable String id){
        productService.productDelete(id);
    }

    //Getting details of one particular product -> (Admin)
    @RequestMapping("/admin/productEdit/{id}")
    public Optional<Product> getSingleProduct(@PathVariable String id){
        return productService.getSingleProduct(id);
    }

    //Editing the product details -> (Admin)
    @RequestMapping(method = RequestMethod.POST, value = "/admin/productEdit/{id}")
    public Product productEditSave(@RequestBody Product product, @PathVariable String id){
        return productService.productEditSave(product, id);
    }

    //Getting details of one particular product -> (Customer)
    @RequestMapping("/home/getProduct/{id}")
    public Optional<Product> getSingleProductCustomer(@PathVariable String id){
        return productService.getSingleProduct(id);
    }

}
