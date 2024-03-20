import type { Meta, StoryObj } from '@storybook/react'
import { EditorProvider } from '../hooks/useEditorInstance'
import  {ThemeEditextock, darkTheme} from '../hooks/useTheme'
import Template from '../components/Template'
import React from 'react'

const meta = {
  title: 'Example/Template',
  component: Template,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Template>

export default meta
type Story = StoryObj<typeof meta>

export const TemplateInitial: Story = {
  render: () => (
    <ThemeEditextock theme={darkTheme}>
      <EditorProvider>
        <Template />
      </EditorProvider>
    </ThemeEditextock>
  ),
}

