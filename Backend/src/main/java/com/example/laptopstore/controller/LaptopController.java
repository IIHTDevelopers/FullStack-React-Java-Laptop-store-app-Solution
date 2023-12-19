package com.example.laptopstore.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.laptopstore.service.LaptopService;

@RestController
@CrossOrigin
public class LaptopController {
	
	@Autowired
	private final LaptopService laptopService;

	
	public LaptopController(LaptopService laptopService) {
		this.laptopService = laptopService;
	}


}
