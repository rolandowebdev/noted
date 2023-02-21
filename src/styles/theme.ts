import { theme as DefaultTheme, extendTheme } from '@chakra-ui/react'

const fonts = {
  heading: `'Poppins', ${DefaultTheme.fonts.heading}`,
  body: `'Poppins', ${DefaultTheme.fonts.body}`,
}

const colors = {
  brand: {
    primary: '#16ABF8',
    lightPrimary: '#42bcfa',
    'very-high': '#ED4C5C',
    'very-high-hover': '#f32439',
    high: '#FFCE31',
    normal: '#00A790',
    low: '#428BC1',
    'very-low': '#B01AFF',
  },
}

const theme = extendTheme({ fonts, colors })

export default theme
