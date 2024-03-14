'use client'

import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react'
import { LogOutAPI } from '../utils/auth'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'



export default function Navbar({ user }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box bg={'#100F0F'} px={10} py={3} >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} color={'gray.200'}>

                    <Box className='animate-top' fontSize={'4xl'} fontWeight={'bold'} fontFamily={'Kalnia'}>Costeye</Box>

                    <Flex className='animate-top' alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                position={'relative'}
                                right={'0'}
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={user?.photoURL}
                                />
                            </MenuButton>
                            <MenuList bg={'gray.900'} border={'none'}>
                                <MenuItem bg={'gray.900'} color={'gray.300'} onClick={LogOutAPI}>Log Out  </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>


            </Box>
        </>
    )
}