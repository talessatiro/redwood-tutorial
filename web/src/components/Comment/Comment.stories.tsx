// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/7/writing-stories/args

import type { Meta, StoryObj } from '@storybook/react'

import Comment from './Comment'

const meta: Meta<typeof Comment> = {
  component: Comment,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Comment>

export const Primary: Story = {}
