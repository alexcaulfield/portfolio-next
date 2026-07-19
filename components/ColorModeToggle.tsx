import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode'
import {
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button'

const ColorModeToggle = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  const icon: React.ReactElement = colorMode === 'light' ? <MoonIcon /> : <SunIcon />
  const Button = IconButton as React.ElementType
  return (
    <Button
      aria-label="Toggle Color Theme"
      variant='outline'
      ml={2}
      onClick={toggleColorMode}
      icon={icon}
    />
  )
}

export default ColorModeToggle