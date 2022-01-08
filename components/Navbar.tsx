import * as React from 'react'
import Image from 'next/image'
import { Flex, Heading, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from '../resources/images/logo.png';

const Navbar = () => (
  <Flex>
    <Flex position="fixed" top="1rem" left="3rem" align="center">
      <Image 
        width={40}
        height={40}
        src={Logo} 
        alt='Alex Caulfield Logo'
        placeholder='blur'
      /> 
      <Flex
        display={['none', 'none', 'flex','flex']}
        paddingLeft="0.5rem"
      >
        <Heading as='h3' size='md'>Alex Caulfield</Heading>
      </Flex>
    </Flex>
    <Flex position="fixed" top="1rem" right="3rem" align="center">
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
    </Flex>
  </Flex>
);

export default Navbar