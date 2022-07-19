import Chat from '..';
import { render } from '@testing-library/react';
describe('test Chat', () => {
  it('should render Chat to match snapshot', () => {
    const { container } = render(<Chat />);
    expect(container).toMatchSnapshot();
  });
});
