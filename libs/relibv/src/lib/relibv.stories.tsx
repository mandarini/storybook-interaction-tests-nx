import type { Meta, StoryObj } from '@storybook/react';
import { Relibv } from './relibv';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Relibv> = {
  component: Relibv,
  title: 'Relibv',
};
export default meta;
type Story = StoryObj<typeof Relibv>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Relibv!/gi)).toBeTruthy();
  },
};
