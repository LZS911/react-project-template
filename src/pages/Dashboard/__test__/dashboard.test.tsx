import Dashboard from '..';
import { render } from '@testing-library/react';
describe('test Dashboard', () => {
  it('should render Dashboard to match snapshot', () => {
    const { container } = render(<Dashboard />);
    expect(container).toMatchSnapshot();
  });
});
