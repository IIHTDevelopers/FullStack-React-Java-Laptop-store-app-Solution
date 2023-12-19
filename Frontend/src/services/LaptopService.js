import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8081';
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const LaptopService = {
    getAllLaptops: async () => {
        try {
            const response = await axiosInstance.get('/laptopstore/laptops');
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getLaptopById: async (id) => {
        try {
            const response = await axiosInstance.get(`/laptopstore/laptops/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    createLaptop: async (laptop) => {
        try {
            const response = await axiosInstance.post('/laptopstore/laptops', laptop);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    updateLaptop: async (id, laptop) => {
        try {
            const response = await axiosInstance.put(`/laptopstore/laptops/${id}`, laptop);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    deleteLaptop: async (id) => {
        try {
            const response = await axiosInstance.delete(`/laptopstore/laptops/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    searchLaptopsByName: async (name) => {
        try {
            const response = await axiosInstance.get(`/laptopstore/laptops/search?name=${name}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    searchLaptopsByPrice: async (price) => {
        try {
            const response = await axiosInstance.get(`/laptopstore/laptops/search?price=${price}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    searchLaptopsByBrand: async (brand) => {
        try {
            const response = await axiosInstance.get(`/laptopstore/laptops/search?brand=${brand}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default LaptopService;
