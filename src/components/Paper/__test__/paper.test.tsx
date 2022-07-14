import Paper from '..';
import { render } from '@testing-library/react';
describe('test Paper', () => {
  it('should render Paper to match snapshot', () => {
    const { container } = render(<Paper />);
    expect(container).toMatchSnapshot();
  });
});
