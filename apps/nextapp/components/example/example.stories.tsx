import type { Meta, StoryObj } from '@storybook/react';
import { Example } from './example';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Example> = {
  component: Example,
  title: 'Example',
};
export default meta;
type Story = StoryObj<typeof Example>;

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
    expect(canvas.getByText(/Welcome to Example!/gi)).toBeTruthy();
  },
};
