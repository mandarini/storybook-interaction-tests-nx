import type { Meta, StoryObj } from '@storybook/react';
import { Relibr } from './relibr';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Relibr> = {
  component: Relibr,
  title: 'Relibr',
};
export default meta;
type Story = StoryObj<typeof Relibr>;

export const Primary = {
  args: {
    name: '',
    age: 0,
    isItTrue: false,
  },
};

export const Heading: Story = {
  args: {
    name: '',
    age: 0,
    isItTrue: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Relibr!/gi)).toBeTruthy();
  },
};
