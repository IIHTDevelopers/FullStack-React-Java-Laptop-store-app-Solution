import React from 'react';
import { render, screen, act } from '@testing-library/react';
import LaptopComponent from '../../components/Laptop';

describe('laptop', () => {
    describe('boundary', () => {
        test('Laptop boundary should renders name input field', () => {
            act(() => {
                render(<LaptopComponent />);
            });
            const nameTextField = screen.getByLabelText('Name:');
            expect(nameTextField).toBeTruthy();
        });

        test('Laptop boundary should renders price input field', () => {
            act(() => {
                render(<LaptopComponent />);
            });
            const priceInput = screen.getByLabelText('Price:');
            expect(priceInput).toBeTruthy();
        });

        test('Laptop boundary should renders brand input field', () => {
            act(() => {
                render(<LaptopComponent />);
            });
            const brandInput = screen.getByLabelText('Brand:');
            expect(brandInput).toBeTruthy();
        });

        test('Laptop boundary should renders storage input field', () => {
            act(() => {
                render(<LaptopComponent />);
            });
            const storageInput = screen.getByLabelText('Storage:');
            expect(storageInput).toBeTruthy();
        });

        test('Laptop boundary should renders RAM input field', () => {
            act(() => {
                render(<LaptopComponent />);
            });
            const ramInput = screen.getByLabelText('RAM:');
            expect(ramInput).toBeTruthy();
        });

        test('Laptop boundary should renders processor input field', () => {
            act(() => {
                render(<LaptopComponent />);
            });
            const processorInput = screen.getByLabelText('Processor:');
            expect(processorInput).toBeTruthy();
        });

        test('Laptop boundary should renders Search by Name: input field', () => {
            act(() => {
                render(<LaptopComponent />);
            });
            const ramInput = screen.getByLabelText('Search by Name:');
            expect(ramInput).toBeTruthy();
        });

        test('Laptop boundary should renders Search by Price: input field', () => {
            act(() => {
                render(<LaptopComponent />);
            });
            const ramInput = screen.getByLabelText('Search by Price:');
            expect(ramInput).toBeTruthy();
        });

        test('Laptop boundary should renders Search by Brand: input field', () => {
            act(() => {
                render(<LaptopComponent />);
            });
            const ramInput = screen.getByLabelText('Search by Brand:');
            expect(ramInput).toBeTruthy();
        });
    });
});
