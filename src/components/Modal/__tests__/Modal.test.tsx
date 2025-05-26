import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../Modal';

jest.mock('@mui/icons-material', () => ({
  Close: () => <div>CloseIcon</div>,
}));

describe('Modal Component', () => {
  const mockOnClose = jest.fn();
  const defaultProps = {
    open: true,
    onClose: mockOnClose,
    children: <div>Modal Content</div>,
  };

  it('renders correctly when open', () => {
    const { container } = render(<Modal {...defaultProps} />);
    
    const modalContent = screen.getByTestId('modal-content');
    expect(modalContent).toBeInTheDocument();
    
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
    
    // Snapshot test
    expect(container.firstChild).toMatchSnapshot();
  });

  it('does not render when closed', () => {
    render(<Modal {...defaultProps} open={false} />);
    
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('calls onClose when clicking the close button', () => {
    render(<Modal {...defaultProps} />);
    
    const closeButton = screen.getByLabelText('close');
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});