export const computedCssVars = (coloursRef: Ref<ColourContext>) => computed(() => {
  return {
    '--text-colour': coloursRef.value.light.textColour,
    '--bg-colour': coloursRef.value.light.backgroundColour,
    '--text-colour-dark': coloursRef.value.dark.textColour,
    '--bg-colour-dark': coloursRef.value.dark.backgroundColour
  }
})
