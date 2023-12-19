import React, { useState, useEffect } from 'react';
import LaptopService from '../services/LaptopService';

const LaptopComponent = () => {
    const [laptops, setLaptops] = useState([]);
    const [filteredLaptops, setFilteredLaptops] = useState([]);
    const [laptopForm, setLaptopForm] = useState({
        name: '',
        price: '',
        brand: '',
        storage: '',
        ram: '',
        processor: ''
    });
    const [searchForm, setSearchForm] = useState({
        searchName: '',
        searchPrice: '',
        searchBrand: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        getAllLaptops();
    }, []);

    const getAllLaptops = () => {
        LaptopService.getAllLaptops().then(laptops => {
            setLaptops(laptops);
            setFilteredLaptops(laptops);
        }).catch(error => {
            console.error('Error fetching laptops:', error);
        });
    };

    const onSearch = () => {
        const { searchName, searchPrice, searchBrand } = searchForm;

        const filtered = laptops.filter(laptop => {
            return (
                laptop.name.toLowerCase().includes(searchName.toLowerCase()) &&
                (isNaN(parseFloat(searchPrice)) || laptop.price <= parseFloat(searchPrice)) &&
                laptop.brand.toLowerCase().includes(searchBrand.toLowerCase())
            );
        });

        setFilteredLaptops(filtered);
    };

    const deleteLaptop = (id) => {
        LaptopService.deleteLaptop(id).then(() => {
            getAllLaptops();
        }).catch(error => {
            console.error('Error deleting laptop:', error);
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        if (
            laptopForm.name &&
            laptopForm.price &&
            laptopForm.brand &&
            laptopForm.storage &&
            laptopForm.ram &&
            laptopForm.processor
        ) {
            const newLaptop = {
                name: laptopForm.name,
                price: parseFloat(laptopForm.price),
                brand: laptopForm.brand,
                storage: laptopForm.storage,
                ram: laptopForm.ram,
                processor: laptopForm.processor,
                id: 0
            };

            LaptopService.createLaptop(newLaptop).then(() => {
                getAllLaptops();
                setLaptopForm({
                    name: '',
                    price: '',
                    brand: '',
                    storage: '',
                    ram: '',
                    processor: ''
                });
                setFormSubmitted(false);
            }).catch(error => {
                console.error('Error creating laptop:', error);
            });
        }
    };

    const editLaptop = (id) => {
        const laptopToEdit = laptops.find(laptop => laptop.id === id);
        if (laptopToEdit) {
            setLaptopForm({
                name: laptopToEdit.name,
                price: laptopToEdit.price.toString(),
                brand: laptopToEdit.brand,
                storage: laptopToEdit.storage,
                ram: laptopToEdit.ram,
                processor: laptopToEdit.processor
            });
        }
    };

    const resetForm = () => {
        setLaptopForm({
            name: '',
            price: '',
            brand: '',
            storage: '',
            ram: '',
            processor: ''
        });
        setSearchForm({
            searchName: '',
            searchPrice: '',
            searchBrand: ''
        });
        setFilteredLaptops(laptops);
        setFormSubmitted(false);
    };

    return (
        <div className="container">
            <h2>Add Laptop</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={laptopForm.name}
                        onChange={(e) => setLaptopForm({ ...laptopForm, name: e.target.value })}
                        required
                    />
                    {formSubmitted && !laptopForm.name && (
                        <div className="text-danger">Name is required.</div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        value={laptopForm.price}
                        onChange={(e) => setLaptopForm({ ...laptopForm, price: e.target.value })}
                        required
                    />
                    {formSubmitted && !laptopForm.price && (
                        <div className="text-danger">Price is required.</div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="brand">Brand:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="brand"
                        value={laptopForm.brand}
                        onChange={(e) => setLaptopForm({ ...laptopForm, brand: e.target.value })}
                        required
                    />
                    {formSubmitted && !laptopForm.brand && (
                        <div className="text-danger">Brand is required.</div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="storage">Storage:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="storage"
                        value={laptopForm.storage}
                        onChange={(e) => setLaptopForm({ ...laptopForm, storage: e.target.value })}
                        required
                    />
                    {formSubmitted && !laptopForm.storage && (
                        <div className="text-danger">Storage is required.</div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="ram">RAM:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="ram"
                        value={laptopForm.ram}
                        onChange={(e) => setLaptopForm({ ...laptopForm, ram: e.target.value })}
                        required
                    />
                    {formSubmitted && !laptopForm.ram && (
                        <div className="text-danger">RAM is required.</div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="processor">Processor:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="processor"
                        value={laptopForm.processor}
                        onChange={(e) => setLaptopForm({ ...laptopForm, processor: e.target.value })}
                        required
                    />
                    {formSubmitted && !laptopForm.processor && (
                        <div className="text-danger">Processor is required.</div>
                    )}
                </div>

                <button type="submit" className="btn btn-primary" disabled={!laptopForm.name || !laptopForm.price || !laptopForm.brand}>
                    Add Laptop
                </button>
            </form>

            <h2>Laptop List</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="searchName">Search by Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="searchName"
                        value={searchForm.searchName}
                        onChange={(e) => setSearchForm({ ...searchForm, searchName: e.target.value })}
                        onKeyUp={onSearch}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="searchPrice">Search by Price:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="searchPrice"
                        value={searchForm.searchPrice}
                        onChange={(e) => setSearchForm({ ...searchForm, searchPrice: e.target.value })}
                        onKeyUp={onSearch}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="searchBrand">Search by Brand:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="searchBrand"
                        value={searchForm.searchBrand}
                        onChange={(e) => setSearchForm({ ...searchForm, searchBrand: e.target.value })}
                        onKeyUp={onSearch}
                    />
                </div>
            </form>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Storage</th>
                        <th>Ram</th>
                        <th>Processor</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredLaptops.map(laptop => (
                        <tr key={laptop.id}>
                            <td>{laptop.id}</td>
                            <td>{laptop.name}</td>
                            <td>{laptop.price}</td>
                            <td>{laptop.brand}</td>
                            <td>{laptop.storage}</td>
                            <td>{laptop.ram}</td>
                            <td>{laptop.processor}</td>
                            <td>
                                <button
                                    className="btn btn-primary btn-sm"
                                    onClick={() => editLaptop(laptop.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteLaptop(laptop.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LaptopComponent;
