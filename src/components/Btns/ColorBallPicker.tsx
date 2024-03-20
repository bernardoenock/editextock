type ColorBallPickerProps = {
  handleColor: (color?: any | null) => void
  colorValue: string
}

export default function ColorBallPicker({colorValue, handleColor}: ColorBallPickerProps) {
  return (
    <div>
      <style>
        {`
          input[type="color"]::-webkit-color-swatch {
            border-radius: 50%;
            border: none;
          }
          input[type="color"]::-moz-color-swatch {
            border-radius: 50%;
            border: none;
          }
          input[type="color"]:hover {
            width: 37px;
            height: 40px;
          }
        `}
      </style>
      <input
        type='color'
        onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleColor(event.target.value);
        }}
        value={colorValue}
        data-testid='setHighlight'
        style={{
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          appearance: 'none',
          backgroundColor: 'transparent',
          width: '35px',
          height: '38px',
          border: 'none',
          cursor: 'pointer',
          margin: 0,
          padding: 0
        }}
      />
    </div>
  )
}