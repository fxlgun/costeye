import React, { useEffect, useState } from 'react'
import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import logo from '../assets/react.svg'
import google from '../assets/google.svg'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { GoogleApi } from '../utils/auth'
import toast from 'react-hot-toast'

const Login = () => {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            if (res?.accessToken) {
                navigate("/");
            } else {
                setLoading(false);
            }
        });
    }, []);

    const googleSignIn = async () => {
        const res = await GoogleApi()
        toast.success("Succesfully signed in.")
        console.log(res);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100vw', height: '100vh', backgroundColor: '#100F0F' }}>
            <Stack
                spacing={10}
                w={'full'}
                maxW={'md'}
                bg={'#100F0F'}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={'auto'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <img className='animate-top' src={logo} style={{ width: '100px', height: '100px' }} />

                <Heading className='animate-top' color={'white'} fontFamily={'Kalnia'} lineHeight={1.1} fontSize={{ base: '5xl', md: '6xl' }}>
                    Costeye
                </Heading>
                <Text
                    className='animate-top'
                    fontSize={{ base: 'sm', sm: 'lg' }}
                    color={useColorModeValue('gray.400', 'gray.400')}>
                    Join us. Track the cost of your products.
                </Text>
                <Button className='animate-top' onClick={googleSignIn} colorScheme='teal' variant='outline' width={'100%'}>
                    Continue using <img src={google} style={{ width: '20px', height: '20px', marginLeft: '10px' }} />
                </Button>
            </Stack>
        </div>
    )
}



export default Login