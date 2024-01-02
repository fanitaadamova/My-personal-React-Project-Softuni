import App from './App';
import { render , screen} from '@testing-library/react';


test('Always true test', () => {
    expect(true).toBe.true;
});

test('Heading should be Tech Shop', () => {
    render(<App />);

   const headingElement =  screen.getByText('Tech Shop');

   expect(headingElement).toBeInTheDocument();
});