// Tag.stories.ts
import { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'default',
          'keycolor5',
          'keycolor2',
          'warning',
          'token_number',
        ],
      },
    },
    text: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    text: 'Tag',
    variant: 'default',
  },
};

export const Keycolor5: Story = {
  args: {
    text: 'KeyColor5',
    variant: 'keycolor5',
  },
};

export const Keycolor2: Story = {
  args: {
    text: 'Keycolor2',
    variant: 'keycolor2',
  },
};

export const Warning: Story = {
  args: {
    text: 'Warning',
    variant: 'warning',
  },
};

export const TokenNumber: Story = {
  args: {
    text: 'tokenNumber',
    boldText: 'tokenNumber',
    variant: 'token_number',
  },
};
