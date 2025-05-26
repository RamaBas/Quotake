import { render, screen, fireEvent } from '@testing-library/react';
import DeleteModal from '../DeleteModal';

// Mock del Modal base para simplificar testing
jest.mock('../../Modal/Modal', () => ({ 
  __esModule: true,
  default: ({ open, children }: { open: boolean; children: React.ReactNode }) => 
    open ? <div data-testid="modal-mock">{children}</div> : null
}));

describe('DeleteModal Component', () => {
  const mockOnClose = jest.fn();
  const mockOnConfirm = jest.fn();
  const defaultProps = {
    open: true,
    onClose: mockOnClose,
    onConfirm: mockOnConfirm
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly when open', () => {
    render(<DeleteModal {...defaultProps} />);
    
    expect(screen.getByTestId('modal-mock')).toBeInTheDocument();

    expect(screen.getByText('deleteConfirmation')).toBeInTheDocument();
    expect(screen.getByText('denyButton')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(<DeleteModal {...defaultProps} open={false} />);
    
    expect(screen.queryByTestId('modal-mock')).not.toBeInTheDocument();
  });

  it('calls onClose when clicking cancel button', () => {
    render(<DeleteModal {...defaultProps} />);
    
    const cancelButton = screen.getByText('denyButton');
    fireEvent.click(cancelButton);
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
    expect(mockOnConfirm).not.toHaveBeenCalled();
  });

  it('matches snapshot when open', () => {
    const { asFragment } = render(<DeleteModal {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});