import { render } from '@testing-library/react';

import Relibv from './relibv';

describe('Relibv', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Relibv />);
    expect(baseElement).toBeTruthy();
  });
});
