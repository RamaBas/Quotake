// components/__tests__/LanguageSwitcher.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useLanguage } from '../../../hooks/useLanguage';


// Mock del hook useLanguage
jest.mock('../../../hooks/useLanguage');

const mockUseLanguage = useLanguage as jest.MockedFunction<typeof useLanguage>;

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    mockUseLanguage.mockReturnValue({
      currentLanguage: 'es',
      changeLanguage: jest.fn(),
    });
  });

  it('should render LanguageIcon', () => {
    const { asFragment } = render(<LanguageSwitcher />);
    expect(screen.getByTestId('LanguageIcon')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should call changeLanguage when selecting English', async () => {
    const changeLanguageMock = jest.fn();
    mockUseLanguage.mockReturnValue({
      currentLanguage: 'es',
      changeLanguage: changeLanguageMock,
    });
  
    render(<LanguageSwitcher />);
    
    // abro el menú
    const button = screen.getByTestId('LanguageIcon').closest('button');
    fireEvent.click(button as HTMLElement);
  
    // Cuando aparece la opcion
    const englishOption = await screen.findByText('English');
    fireEvent.click(englishOption);

    expect(changeLanguageMock).toHaveBeenCalledWith('en');
  });
});