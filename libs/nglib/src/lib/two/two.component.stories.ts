import type { Meta, StoryObj } from '@storybook/angular';
import { TwoComponent } from './two.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TwoComponent> = {
  component: TwoComponent,
  title: 'TwoComponent',
};
export default meta;
type Story = StoryObj<TwoComponent>;

export const Primary: Story = {
  args: {
    name: 'Two',
    age: 2,
    isIt: false,
  },
};

export const Heading: Story = {
  args: {
    name: 'Two',
    age: 2,
    isIt: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/two works!/gi)).toBeTruthy();
  },
};
