import Login from '..';
import { render } from '@testing-library/react';
describe('test Login', () => {
  it('should render Login to match snapshot', () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });
});
