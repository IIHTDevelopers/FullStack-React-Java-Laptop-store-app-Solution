import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useEffect: jest.fn(),
}));

describe('appComponent', () => {
    describe('boundary', () => {
        test('AppComponent boundary renders without crashing', () => {
            render(<App />);
        });

        test('AppComponent boundary has "Welcome to Laptop Store" h2', () => {
            render(<App />);
            expect(screen.queryByText('Welcome to Laptop Store')).toBeInTheDocument();
        });

        test('AppComponent boundary has "Laptop Store" h2', () => {
            render(<App />);
            expect(screen.queryByText('Laptop Store')).toBeInTheDocument();
        });
    });
});
