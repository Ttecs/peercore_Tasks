package com.peercoreProject.fullstack_backend.controller;

import com.peercoreProject.fullstack_backend.entity.GroupEntity;
import com.peercoreProject.fullstack_backend.entity.ProductEntity;
import com.peercoreProject.fullstack_backend.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    @CrossOrigin(origins = "http://localhost:3000/")
    @GetMapping
    public List<ProductEntity> findAllProducts(){
        return  productService.findAllProducts();
    }
    @GetMapping("/{id}")
    public Optional<ProductEntity> findProductById(@PathVariable("id") Long id){
        return productService.findById(id);
    }
    @CrossOrigin(origins = "http://localhost:3000/")
    @PostMapping
    public ProductEntity saveProduct(@RequestBody ProductEntity productEntity){
        return productService.saveProduct(productEntity);
    }
    @PutMapping
    public ProductEntity updateProduct(@RequestBody ProductEntity productEntity){
        return productService.updateProduct(productEntity);
    }
    @DeleteMapping ("/{id}")
    public void deleteGroup(@PathVariable("id") Long id){
        productService.deleteProduct(id);
    }
}
