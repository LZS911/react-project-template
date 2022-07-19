import Component from '..';
import { render } from '@testing-library/react';
describe('test Component', () => {
  it('should render Component to match snapshot', () => {
    const { container } = render(<Component />);
    expect(container).toMatchSnapshot();
  });
});
