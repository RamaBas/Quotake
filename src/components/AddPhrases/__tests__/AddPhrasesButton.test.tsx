import { render, screen, fireEvent } from '@testing-library/react';
import { usePhrases } from '../../../contexts/PhrasesContext';
import AddPhraseButton from '../AddPhrasesButton';

const mockAddPhrase = jest.fn();

beforeEach(() => {
  (usePhrases as jest.Mock).mockReturnValue({
    addPhrase: mockAddPhrase
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('AddPhraseButton', () => {
  it('renders the component', () => {
    const { asFragment } = render(<AddPhraseButton />);
    expect(screen.getByLabelText('add')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('opens modal when button is clicked', () => {
    render(<AddPhraseButton />);
    fireEvent.click(screen.getByLabelText('add'));
    expect(screen.getByText('addPhrase')).toBeInTheDocument();
  });

  it('shows error when submitting empty phrase', async () => {
    render(<AddPhraseButton />);
    fireEvent.click(screen.getByLabelText('add'));
    fireEvent.click(screen.getByText('saveButton'));
    
    expect(screen.getByText('emptyPhraseError')).toBeInTheDocument();
    expect(mockAddPhrase).not.toHaveBeenCalled();
  });
});