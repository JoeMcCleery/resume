export const hexToRgb = (hex: string) : string => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  // const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  // hex = hex.replace(shorthandRegex, function (m, r, g, b) {
  //   return r + r + g + g + b + b
  // })
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
    : '255 255 255'
}

export const rgbToHex = (r: number, g: number, b: number) : string => {
  return '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)
}

export const defaultColourContext = () => ref({
  light: {
    textColour: '29 31 33',
    backgroundColour: '239 238 238'
  },
  dark: {
    textColour: '255 255 255',
    backgroundColour: '29 31 33'
  }
})
