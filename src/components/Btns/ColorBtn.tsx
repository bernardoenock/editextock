import { useState } from 'react';
import { useEditorInstance } from '../../hooks/useEditorInstance';
import { CirclePicker } from 'react-color';

type ColorBtnProps = {
  handleColor: (color?: any | null) => void
  colorValue: string
}


export default function ColorBtn({handleColor, colorValue}: ColorBtnProps) {

  return (
        <CirclePicker 
          color={colorValue}
          onChangeComplete={handleColor}
        />
  )
}
