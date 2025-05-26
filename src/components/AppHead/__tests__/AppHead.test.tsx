import { render, screen } from '@testing-library/react';
import AppHead from '../AppHead';


describe('AppHead Component', () => {
  it('renders the header is correct', () => {
    const { asFragment } = render(<AppHead />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    
    // Verifica que contiene un h1
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

});
