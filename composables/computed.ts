export const computedCssVars = (coloursRef: Ref<ColourContext>) => computed(() => {
  return {
    '--text-colour': coloursRef.value.light.textColour,
    '--background-colour': coloursRef.value.light.backgroundColour,
    '--text-colour-dark': coloursRef.value.dark.textColour,
    '--background-colour-dark': coloursRef.value.dark.backgroundColour
  }
})
