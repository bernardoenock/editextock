import type { Meta, StoryObj } from '@storybook/react';
import { EditorProvider } from '../hooks/useEditorInstance'
import Template from '../components/Template';
import React from 'react';

const meta = {
  title: 'Example/Template',
  component: Template,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Template>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TemplateInitial: Story = {
  render: () => (
    <EditorProvider>
      <Template />
    </EditorProvider>
  ),
};

