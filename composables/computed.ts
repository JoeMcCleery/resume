export const computedCssVars = (coloursRef: Ref<ColourContext>) => computed(() => {
  return {
    '--text-colour': coloursRef.value.textColour,
    '--background-colour': coloursRef.value.backgroundColour
  }
})
