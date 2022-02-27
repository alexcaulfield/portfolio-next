import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { createBreakpoints } from '@chakra-ui/theme-tools'

// 2. Add your color mode config
const config : ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '900px',
  lg: '1200px',
  xl: '1600px',
})

// 3. extend the theme
const theme = extendTheme({ config, breakpoints })

export default theme