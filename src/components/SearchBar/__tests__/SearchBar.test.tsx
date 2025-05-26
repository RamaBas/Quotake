import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';


describe('SearchBar Component', () => {
  const mockSearchChange = jest.fn();
  const initialProps = {
    searchTerm: '',
    onSearchChange: mockSearchChange,
  };

  it('renders correctly with initial props', () => {
    const { asFragment } = render(<SearchBar {...initialProps} />);

    
    const textField = screen.getByRole('textbox');
    expect(textField).toBeInTheDocument();
    expect(textField).toHaveValue('');

    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onSearchChange when typing', () => {
    render(<SearchBar {...initialProps} />);
    
    const textField = screen.getByRole('textbox');
    const testValue = 'test search';
    
    fireEvent.change(textField, { target: { value: testValue } });
    
    expect(mockSearchChange).toHaveBeenCalledTimes(1);
    expect(mockSearchChange).toHaveBeenCalledWith(testValue);
  });
});