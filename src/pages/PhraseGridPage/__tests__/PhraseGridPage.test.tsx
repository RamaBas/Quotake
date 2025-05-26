import { render, screen, fireEvent } from '@testing-library/react';
import PhrasesGridPage from '../PhraseGridPage';
import { usePhrases } from '../../../contexts/PhrasesContext';

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}
  
interface PhrasesGridWrapperProps {
    phrases: Array<{ id: string; text: string }>;
    onDelete?: (id: string) => void;
    emptyMessage?: string;
}
  
interface DeleteModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

jest.mock('../../../components/SearchBar/SearchBar', () => ({
    __esModule: true,
    default: ({ onSearchChange }: SearchBarProps) => (
        <input
        data-testid="search-bar-mock"
        type="text"
        onChange={(e) => onSearchChange(e.target.value)}
        />
    )
}));

jest.mock('../../../components/PhrasesGridWrapper/PhrasesGridWrapper', () => ({
    __esModule: true,
    default: ({ onDelete }: PhrasesGridWrapperProps) => (
        <div 
        data-testid="phrases-grid-mock"
        onClick={() => onDelete && onDelete('1')}
        />
    )
}));

jest.mock('../../../components/DeleteModal/DeleteModal', () => ({
    __esModule: true,
    default: ({ open, onConfirm }: DeleteModalProps) => (
        <div 
        data-testid="delete-modal-mock"
        data-open={open ? 'true' : 'false'}
        onClick={() => onConfirm()}
        />
    )
}));

jest.mock('../../../contexts/PhrasesContext');

interface MockPhrase {
    id: string;
    text: string;
}

interface MockUsePhrases {
    phrases: MockPhrase[];
    deletePhrase: jest.Mock;
    searchPhrases: (term: string) => MockPhrase[];
    addPhrase: jest.Mock;
}
  
const mockUsePhrases: MockUsePhrases = {
    phrases: [
        { id: '1', text: 'Frase de prueba 1' },
        { id: '2', text: 'Frase de prueba 2' }
    ],
    deletePhrase: jest.fn(),
    searchPhrases: jest.fn((term: string) => 
        mockUsePhrases.phrases.filter(p => p.text.includes(term))
    ),
    addPhrase: jest.fn() // Añadido para cumplir con la interfaz
};

beforeEach(() => {
    (usePhrases as jest.Mock).mockReturnValue(mockUsePhrases);
});

describe('PhrasesGridPage', () => {
    it('renders correctly with phrases', () => {
        const { asFragment } = render(<PhrasesGridPage />);

        expect(screen.getByTestId('phrases-grid-mock')).toBeInTheDocument();
        expect(screen.getByTestId('search-bar-mock')).toBeInTheDocument();

        expect(asFragment()).toMatchSnapshot();
    });

    it('renders empty state when no phrases', () => {
        (usePhrases as jest.Mock).mockReturnValueOnce({
        ...mockUsePhrases,
        phrases: [],
        searchPhrases: jest.fn(() => [])
        });
    
        render(<PhrasesGridPage />);
        
        expect(screen.getByTestId('phrases-grid-mock')).toBeInTheDocument();
        expect(screen.queryByTestId('search-bar-mock')).not.toBeInTheDocument();
    });

    it('handles delete flow correctly', () => {
        render(<PhrasesGridPage />);
        
        // Simular click en delete
        fireEvent.click(screen.getByTestId('phrases-grid-mock'));
        
        // Verificar que el modal se abre
        const deleteModal = screen.getByTestId('delete-modal-mock');
        expect(deleteModal).toHaveAttribute('data-open', 'true');
        
        // Simular confirmación
        fireEvent.click(deleteModal);
        
        expect(mockUsePhrases.deletePhrase).toHaveBeenCalledWith('1');
    });

    it('Search phrases flow correctly', () => {
        render(<PhrasesGridPage />);
        
        // Simular cambio en el search bar
        const searchInput = screen.getByTestId('search-bar-mock');
        fireEvent.change(searchInput, { target: { value: 'prueba 1' } });
        
        expect(mockUsePhrases.searchPhrases).toHaveBeenCalledWith('prueba 1');
    });
});