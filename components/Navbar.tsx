import Image from 'next/image'
import { Flex, Heading, Menu, MenuButton, MenuList, MenuItem, IconButton, Spacer } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from '../resources/images/logo.png';
import ColorModeToggle from './ColorModeToggle';

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
      {/* <Flex
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
      </Flex> */}
      <ColorModeToggle />
    </Flex>
  </Flex>
);

export default Navbar