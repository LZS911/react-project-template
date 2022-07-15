import ThemeBase from '..';
import { render } from '@testing-library/react';
describe('test ThemeBase', () => {
  it('should render ThemeBase to match snapshot', () => {
    const { container } = render(<ThemeBase />);
    expect(container).toMatchSnapshot();
  });
});
