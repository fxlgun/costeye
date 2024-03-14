'use client'

import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    TabIndicator,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import Navbar from '../components/Navbar'
import Info from '../components/Info'

const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = (props) => {
    const { children } = props

    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: '#100F0F',
            }}
            href={'#'}>
            {children}
        </Box>
    )
}

export default function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, async (res) => {
            if (!res?.accessToken) {
                navigate("/login");
            } else {
                setUser(res);
                setLoading(false);
            }
        });
    }, []);

    return (
        <div style={{backgroundColor:'#100F0F'}}>
            <Navbar user={user} />
            <Tabs my={0} defaultIndex={0} align='center' variant='soft-rounded' colorScheme='#0F3D3E' bg={'#100F0F'} border={'none'}>
                <TabList className='animate-top' >
                    <Tab mx={5} _selected={{ bg: '#0F3D3E', color: 'gray.200' }} color={'gray.200'} >About Us</Tab>
                    <Tab mx={5} _selected={{ bg: '#0F3D3E', color: 'gray.200' }} color={'gray.200'}>Your Eyes</Tab>
                </TabList>
                <TabIndicator display={'none'} color={'#0F3D3E'} />
                <TabPanels>
                    <TabPanel color={'gray.200'}>
                        <Info />
                    </TabPanel>
                    <TabPanel color={'gray.200'}>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}