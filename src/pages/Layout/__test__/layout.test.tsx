import Layout from '..';
import { render } from '@testing-library/react';
describe('test Layout', () => {
  it('should render Layout to match snapshot', () => {
    const { container } = render(<Layout />);
    expect(container).toMatchSnapshot();
  });
});
