import { render } from '@testing-library/react';

import Relibr from './relibr';

describe('Relibr', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Relibr />);
    expect(baseElement).toBeTruthy();
  });
});
