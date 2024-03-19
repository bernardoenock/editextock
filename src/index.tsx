import { Content as ContentTipTap, Editor as EditorTipTap } from "@tiptap/react";
import { editorConfig } from "./hooks/editorConfig";

import {useEditorInstance, EditorProvider} from "./hooks/useEditorInstance";

import HeaderMenu from "./components/Menus/HeaderMenu";
import LineMenu from "./components/Menus/LineMenu";
import SelectedMenu from "./components/Menus/SelectedMenu";
import TextEditor from "./components/TextEditor";
import Template from "./components/Template";

export type {
  ContentTipTap,
  EditorTipTap,
}

export { 
  editorConfig,
  EditorProvider,
  useEditorInstance, 
  HeaderMenu,
  LineMenu,
  SelectedMenu,
  TextEditor,
  Template, 
}