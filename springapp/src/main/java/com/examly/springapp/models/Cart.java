package com.examly.springapp.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import org.hibernate.annotations.GenericGenerator;


@Entity
public class Cart {
	
	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(name = "id", unique = true)
	private String id;

	@Column(name = "productId")
	private String cartItemId;

	@Column(name = "userId")
	private String userId;

	@Column(name = "productName")
	private String productName;

	@Column(name = "quantity")
	private String quantity;

	@Column(name = "price")
	private String price;
	
	
	public Cart() {
		super();
	}
	public Cart(String id,String cartItemId, String userId, String productName, String quantity, String price) {
		super();
		this.id = id;
		this.cartItemId = cartItemId;
		this.userId = userId;
		this.productName = productName;
		this.quantity = quantity;
		this.price = price;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCartItemId() {
		return cartItemId;
	}
	public void setCartItemId(String cartItemId) {
		this.cartItemId = cartItemId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}

}
