import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero Component', () => {
    test('renders the hero title', () => {
        render(<Hero title="Welcome to Our Website" />);
        const titleElement = screen.getByText(/Welcome to Our Website/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders the hero subtitle', () => {
        render(<Hero subtitle="Your journey starts here" />);
        const subtitleElement = screen.getByText(/Your journey starts here/i);
        expect(subtitleElement).toBeInTheDocument();
    });

    test('renders the hero image', () => {
        render(<Hero imageSrc="hero-image.jpg" />);
        const imageElement = screen.getByAltText(/hero image/i);
        expect(imageElement).toBeInTheDocument();
    });
});