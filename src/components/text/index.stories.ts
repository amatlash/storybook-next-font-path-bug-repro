import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '.';

const meta: Meta<typeof Text> = {
  title: 'Example/Text',
  component: Text,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};