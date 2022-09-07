import { Story, Meta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Welcome',
  },
} as Meta

export const Default: Story = (args) => <Main {...args} />
