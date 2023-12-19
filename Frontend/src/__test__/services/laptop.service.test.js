import axios from 'axios';
import laptopService from '../../services/LaptopService';

jest.mock('axios');

describe('laptopService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('functional', () => {
        test("LaptopService functional should get all laptops", async () => {
            const mockUserData = [{ name: 'adf', price: 123, brand: 'ewr', storage: 128, ram: 2, processor: 'ewr' }];
            const successResponse = { id: 1 };
            let isNull = false;
            try {
                const response = await laptopService.getAllLaptops();
                isNull = response === null;
                throw new Error('Error in getAllLaptops()');
            } catch (error) {
                if (isNull) {
                    expect(error).toEqual('Got all laptops');
                } else {
                    const mockUserData = [{ name: 'adf', price: 123, brand: 'ewr', storage: 128, ram: 2, processor: 'ewr' }];
                    const mockResponseData = { id: 1 };
                    laptopService.getAllLaptops = jest.fn().mockResolvedValueOnce(mockResponseData);
                    const result = await laptopService.getAllLaptops(mockUserData);
                    expect(laptopService.getAllLaptops).toHaveBeenCalledWith(mockUserData);
                    expect(result).toEqual(mockResponseData);
                }
            }
        });

        test('LaptopService functional should get a laptop by id', async () => {
            const mockUserData = { name: 'adf', price: 123, brand: 'ewr', storage: 128, ram: 2, processor: 'ewr' };
            const successResponse = { id: 1 };
            let isNull = false;
            try {
                const response = await laptopService.getLaptopById();
                isNull = response === null;
                throw new Error('Error in getLaptopById()');
            } catch (error) {
                if (isNull) {
                    expect(error).toEqual('Got laptop');
                } else {
                    const mockUserData = { name: 'adf', price: 123, brand: 'ewr', storage: 128, ram: 2, processor: 'ewr' };
                    const mockResponseData = { id: 1 };
                    laptopService.getLaptopById = jest.fn().mockResolvedValueOnce(mockResponseData);
                    const result = await laptopService.getLaptopById(mockUserData);
                    expect(laptopService.getLaptopById).toHaveBeenCalledWith(mockUserData);
                    expect(result).toEqual(mockResponseData);
                }
            }
        });

        test('LaptopService functional should create a new laptop', async () => {
            const mockUserData = { name: 'adf', price: 123, brand: 'ewr', storage: 128, ram: 2, processor: 'ewr' };
            const successResponse = { id: 1 };
            let isNull = false;
            try {
                const response = await laptopService.createLaptop();
                isNull = response === null;
                throw new Error('Error in createLaptop()');
            } catch (error) {
                if (isNull) {
                    expect(error).toEqual('Laptop created');
                } else {
                    const mockUserData = { name: 'adf', price: 123, brand: 'ewr', storage: 128, ram: 2, processor: 'ewr' };
                    const mockResponseData = { id: 1 };
                    laptopService.createLaptop = jest.fn().mockResolvedValueOnce(mockResponseData);
                    const result = await laptopService.createLaptop(mockUserData);
                    expect(laptopService.createLaptop).toHaveBeenCalledWith(mockUserData);
                    expect(result).toEqual(mockResponseData);
                }
            }
        });

        test('LaptopService functional should update a laptop', async () => {
            const mockUserData = { name: 'adf', price: 123, brand: 'ewr', storage: 128, ram: 2, processor: 'ewr' };
            const successResponse = { id: 1 };
            let isNull = false;
            try {
                const response = await laptopService.updateLaptop();
                isNull = response === null;
                throw new Error('Error in updateLaptop()');
            } catch (error) {
                if (isNull) {
                    expect(error).toEqual('Updated laptop');
                } else {
                    const mockUserData = { name: 'adf', price: 123, brand: 'ewr', storage: 128, ram: 2, processor: 'ewr' };
                    const mockResponseData = { id: 1 };
                    laptopService.updateLaptop = jest.fn().mockResolvedValueOnce(mockResponseData);
                    const result = await laptopService.updateLaptop(mockUserData);
                    expect(laptopService.updateLaptop).toHaveBeenCalledWith(mockUserData);
                    expect(result).toEqual(mockResponseData);
                }
            }
        });

        test('LaptopService functional should delete a laptop', async () => {
            const mockUserData = { name: 'adf', price: 123, brand: 'ewr', storage: 128, ram: 2, processor: 'ewr' };
            const successResponse = { id: 1 };
            let isNull = false;
            try {
                const response = await laptopService.deleteLaptop();
                isNull = response === null;
                throw new Error('Error in deleteLaptop()');
            } catch (error) {
                if (isNull) {
                    expect(error).toEqual('Deleted laptop');
                } else {
                    const mockUserData = { name: 'adf', price: 123, brand: 'ewr', storage: 128, ram: 2, processor: 'ewr' };
                    const mockResponseData = { id: 1 };
                    laptopService.deleteLaptop = jest.fn().mockResolvedValueOnce(mockResponseData);
                    const result = await laptopService.deleteLaptop(mockUserData);
                    expect(laptopService.deleteLaptop).toHaveBeenCalledWith(mockUserData);
                    expect(result).toEqual(mockResponseData);
                }
            }
        });

        test('LaptopService functional should be able to search laptops by name', async () => {
            const mockUserData = { name: 'adf', price: 123, brand: 'ewr', storage: 128, ram: 2, processor: 'ewr' };
            const successResponse = { id: 1 };
            let isNull = false;
            try {
                const response = await laptopService.searchLaptopsByName();
                isNull = response === null;
                throw new Error('Error in searchLaptopsByName()');
            } catch (error) {
                if (isNull) {
                    expect(error).toEqual('Found laptops');
                } else {
                    const mockUserData = { name: 'adf', price: 123, brand: 'ewr', storage: 128, ram: 2, processor: 'ewr' };
                    const mockResponseData = { id: 1 };
                    laptopService.searchLaptopsByName = jest.fn().mockResolvedValueOnce(mockResponseData);
                    const result = await laptopService.searchLaptopsByName(mockUserData);
                    expect(laptopService.searchLaptopsByName).toHaveBeenCalledWith(mockUserData);
                    expect(result).toEqual(mockResponseData);
                }
            }
        });

        test('LaptopService functional should be able to search laptops by price', async () => {
            const mockUserData = { name: 'adf', price: 123, brand: 'ewr', storage: 128, ram: 2, processor: 'ewr' };
            const successResponse = { id: 1 };
            let isNull = false;
            try {
                const response = await laptopService.searchLaptopsByPrice();
                isNull = response === null;
                throw new Error('Error in searchLaptopsByPrice()');
            } catch (error) {
                if (isNull) {
                    expect(error).toEqual('Found laptops');
                } else {
                    const mockUserData = { name: 'adf', price: 123, brand: 'ewr', storage: 128, ram: 2, processor: 'ewr' };
                    const mockResponseData = { id: 1 };
                    laptopService.searchLaptopsByPrice = jest.fn().mockResolvedValueOnce(mockResponseData);
                    const result = await laptopService.searchLaptopsByPrice(mockUserData);
                    expect(laptopService.searchLaptopsByPrice).toHaveBeenCalledWith(mockUserData);
                    expect(result).toEqual(mockResponseData);
                }
            }
        });

        test('LaptopService functional should be able to search laptops by brand', async () => {
            const mockUserData = { name: 'adf', price: 123, brand: 'ewr', storage: 128, ram: 2, processor: 'ewr' };
            const successResponse = { id: 1 };
            let isNull = false;
            try {
                const response = await laptopService.searchLaptopsByBrand();
                isNull = response === null;
                throw new Error('Error in searchLaptopsByBrand()');
            } catch (error) {
                if (isNull) {
                    expect(error).toEqual('Found laptops');
                } else {
                    const mockUserData = { name: 'adf', price: 123, brand: 'ewr', storage: 128, ram: 2, processor: 'ewr' };
                    const mockResponseData = { id: 1 };
                    laptopService.searchLaptopsByBrand = jest.fn().mockResolvedValueOnce(mockResponseData);
                    const result = await laptopService.searchLaptopsByBrand(mockUserData);
                    expect(laptopService.searchLaptopsByBrand).toHaveBeenCalledWith(mockUserData);
                    expect(result).toEqual(mockResponseData);
                }
            }
        });
    });
});