import { useColorMode } from '@chakra-ui/color-mode'
import {
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button'

const ColorModeToggle = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <IconButton aria-label="Toggle Color Theme" variant='outline' ml={2} onClick={toggleColorMode}>
      { colorMode === 'light' ? <MoonIcon/> : <SunIcon/> }
    </IconButton>
  )
}

export default ColorModeToggle