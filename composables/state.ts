export const useDarkModeEnabled = () => useState('darkModeEnabled', () => useColorMode().value === 'dark')
