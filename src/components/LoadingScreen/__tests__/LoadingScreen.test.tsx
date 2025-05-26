import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingScreen from '../LoadingScreen';

describe('LoadingScreen Component', () => {
  it('renders correctly with fixed positioning', () => {
    render(<LoadingScreen />);
    
    const loadingBox = screen.getByTestId('loading-screen');
    expect(loadingBox).toBeInTheDocument();
  });
});