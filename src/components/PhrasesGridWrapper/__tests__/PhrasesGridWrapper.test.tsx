import { render, screen } from '@testing-library/react';
import PhrasesGridWrapper from '../PhrasesGridWrapper';

describe('PhrasesGridWrapper Component', () => {
  const mockPhrases = [
    { id: '1', text: 'Frase de prueba 1' },
    { id: '2', text: 'Frase de prueba 2' },
  ];

  it('renders grid with phrases correctly', () => {
    const { container } = render(
      <PhrasesGridWrapper 
        phrases={mockPhrases} 
        onDelete={jest.fn()} 
      />
    );
    
    const grid = screen.getByTestId('phrases-grid');
    expect(grid).toBeInTheDocument();
    
    // Snapshot test
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders empty state with default message', () => {
    render(
      <PhrasesGridWrapper phrases={[]} />
    );
    
    expect(screen.getByText('noPhrasesFound')).toBeInTheDocument();

  });

  it('renders empty state with custom message', () => {
    const customMessage = 'No se encontraron resultados';
    render(
      <PhrasesGridWrapper 
        phrases={[]} 
        emptyMessage={customMessage}
      />
    );

    expect(screen.getByText(customMessage)).toBeInTheDocument();
    expect(screen.queryByText('noPhrasesFound')).not.toBeInTheDocument();

  });
});