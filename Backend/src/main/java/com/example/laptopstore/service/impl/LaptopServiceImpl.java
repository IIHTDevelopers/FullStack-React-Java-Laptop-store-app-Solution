package com.example.laptopstore.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.laptopstore.dto.LaptopDTO;
import com.example.laptopstore.entity.Laptop;
import com.example.laptopstore.repo.LaptopRepository;
import com.example.laptopstore.service.LaptopService;

@Service
public class LaptopServiceImpl implements LaptopService {
	
	@Autowired
    private final LaptopRepository laptopRepository;

    
    public LaptopServiceImpl(LaptopRepository laptopRepository) {
        this.laptopRepository = laptopRepository;
    }

    @Override
    public List<LaptopDTO> getAllLaptops() {
    	return null;
    }

    @Override
    public LaptopDTO getLaptopById(Long id) {
    	return null;
    }

    @Override
    public LaptopDTO createLaptop(LaptopDTO laptopDTO) {
    	return null;
    }

    @Override
    public LaptopDTO updateLaptop(Long id, LaptopDTO laptopDTO) {
    	return null;
    }

    @Override
    public boolean deleteLaptop(Long id) {
    	return false;
    }

    @Override
    public List<LaptopDTO> searchLaptopsByName(String name) {
    	return null;
    }

    @Override
    public List<LaptopDTO> searchLaptopsByPrice(Double price) {
    	return null;
    }

    @Override
    public List<LaptopDTO> searchLaptopsByBrand(String brand) {
    	return null;
    }

    private LaptopDTO mapLaptopToDTO(Laptop laptop) {
    	return null;
    }

    private List<LaptopDTO> mapLaptopsToDTOs(List<Laptop> laptops) {
    	return null;
    }

    private Laptop mapDTOToLaptop(LaptopDTO laptopDTO) {
    	return null;
    }
    
    @Override
    public List<LaptopDTO> searchLaptops(String name, Double price, String brand) {
    	return null;
    }
}
