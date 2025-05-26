import { render } from '@testing-library/react';
import PhraseCard from '../PhraseCard';

// Mock para los iconos de MUI
jest.mock('@mui/icons-material', () => ({
  Close: () => <div>CloseIcon</div>,
  Undo: () => <div>UndoIcon</div>,
  FormatQuote: () => <div>FormatQuoteIcon</div>,
}));

describe('PhraseCard Component Snapshots', () => {
  const mockPhrase = {
    id: '1',
    text: 'Esta es una frase de prueba para el componente'
  };

  it('matches default variant snapshot', () => {
    const { container } = render(
      <PhraseCard 
        phrase={mockPhrase}
        onDelete={jest.fn()}
        variant="default"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches deleted variant snapshot', () => {
    const { container } = render(
      <PhraseCard 
        phrase={mockPhrase}
        onRestore={jest.fn()}
        variant="deleted"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches snapshot without actions', () => {
    const { container } = render(
      <PhraseCard 
        phrase={mockPhrase}
        variant="default"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});