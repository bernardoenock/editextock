import { CirclePicker } from 'react-color'

type ColorCirclesPickerProps = {
  handleColor: (color?: any | null) => void
  colorValue: string
}

export default function ColorCirclesPicker({handleColor, colorValue}: ColorCirclesPickerProps) {

  return (
    <CirclePicker 
      color={colorValue}
      onChangeComplete={handleColor}
    />
  )
}
