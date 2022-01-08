import * as React from 'react'
import Image from 'next/image'
import { Flex, Heading, Menu, MenuButton, MenuList, MenuItem, IconButton, Container, Spacer } from '@chakra-ui/react'
import { HamburgerIcon, MoonIcon } from '@chakra-ui/icons'
import Logo from '../resources/images/logo.png';

const Navbar = () => (
  <Flex p={2} position='sticky'>
    <Flex align='center'>
      <Image 
        width={40}
        height={40}
        src={Logo} 
        alt='Alex Caulfield Logo'
        placeholder='blur'
      /> 
      <Flex
        display={['none', 'none', 'flex','flex']}
        ml="0.5rem"
      >
        <Heading as='h3' size='md'>Alex Caulfield</Heading>
      </Flex>
    </Flex>
    <Spacer />
    <Flex>
      <Flex
        display={['flex', 'flex', 'none', 'none']}
      >
        <Menu isLazy>
          <MenuButton
            as={IconButton}
            aria-label='Menu'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList>
            <MenuItem command='🙂'>
              Work in progress 
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <IconButton aria-label="Toggle Mode" variant='outline' ml={2}>
        <MoonIcon/>
      </IconButton>
    </Flex>
  </Flex>
);

export default Navbar