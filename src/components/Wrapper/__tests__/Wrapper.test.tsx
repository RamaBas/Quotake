import { render, screen } from '@testing-library/react';
import AppWrapper from '../Wrapper';

// Mock de los componentes hijos para simplificar los snapshots
jest.mock('../../AppHead/AppHead', () => () => <div data-testid="app-head-mock" />);
jest.mock('../../AddPhrases/AddPhrasesButton', () => () => <div data-testid="add-phrase-button-mock" />);

describe('AppWrapper Component', () => {
  it('renders correctly with main structure', () => {
    const { container, getByTestId } = render(
      <AppWrapper>
        <div>Child Content</div>
      </AppWrapper>
    );
    
    expect(getByTestId('app-head-mock')).toBeInTheDocument();
    expect(getByTestId('add-phrase-button-mock')).toBeInTheDocument();
    
    expect(screen.getByText('Child Content')).toBeInTheDocument();
    
    // Snapshot del wrapper completo
    expect(container.firstChild).toMatchSnapshot();
  });
});