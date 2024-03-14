import {
    Button, Modal, ModalContent, ModalOverlay, useDisclosure,
    Checkbox,
    Flex,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    Box,
    Spinner,
} from "@chakra-ui/react"
import { useState } from "react"
import CategoryRadio from "./CategoryRadio"
import Logo from "../assets/react.svg"
import { CloseIcon } from "@chakra-ui/icons"
import { scrapeAmazonPrice } from "../utils/scraper"

const NewEye = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [eyeData, setEyeData] = useState({
        name: null,
        category: null,
        url: null,
        currentPrice: null,
    })

    const [loading, setLoading] = useState(false)


    return (
        <>
            <Button
                onClick={onOpen}
                rounded={'full'}
                size={'lg'}
                colorScheme={'#E2DCC8'}
                bg={'#E2DCC8'}
                color={'gray.700'}
                _hover={{ bg: 'orange.300' }}>
                Create an eye
            </Button>

            <Modal isCentered isOpen={isOpen} onClose={onClose} size={'5xl'}>
                <ModalOverlay
                    backdropFilter='auto'
                    backdropInvert='80%'
                    backdropBlur='2px' />
                <ModalContent maxW={'95vw'} mx={'auto'}  >

                    <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }} >
                        <Flex flex={1} align={'center'} justify={'center'}>
                            <Stack py={5} px={5} spacing={4} w={'full'} maxW={'md'}>
                                <Button display={{ base: 'flex', md: 'none' }} background={'transparent'} alignSelf={'flex-end'} justifySelf={'flex-end'} onClick={onClose} width={'fit-content'} _hover={{ bg: 'orange.300' }} ><CloseIcon /></Button>
                                <Heading className='animate-top' fontWeight={800} fontFamily={'Karla'} fontSize={'2xl'}>An eye is the product whose cost you wanna track.</Heading>

                                <FormControl className='animate-top' id="name">
                                    <FormLabel>Product Name</FormLabel>
                                    <Input type="text" value={eyeData.name} onChange={(e) => setEyeData({ ...eyeData, name: e.target.value })} />
                                </FormControl>
                                <FormControl className='animate-top' id="category">
                                    <FormLabel>Store</FormLabel>
                                    <CategoryRadio value={eyeData.category} setEyeData={setEyeData} eyeData={eyeData} />
                                </FormControl>
                                <FormControl className='animate-top' id="url">
                                    <FormLabel>Product URL</FormLabel>
                                    <Input value={eyeData.url} type="text" onChange={(e) => setEyeData({ ...eyeData, url: e.target.value.split('?')[0] })} />
                                </FormControl>
                                <Stack className='animate-top' spacing={6}>
                                    {<Text> {loading ? <Spinner size={'sm'} /> : `Current Price: ${eyeData.currentPrice}`} </Text>}
                                    <Button colorScheme={'blue'} variant={'solid'} onClick={async () => { setLoading(true); const price = await scrapeAmazonPrice(eyeData.url); setEyeData({ ...eyeData, currentPrice: price }); setLoading(false) }}>
                                        Add Eye
                                    </Button>
                                </Stack>
                            </Stack>
                        </Flex>
                        <Flex className="" flex={1} align={'center'} justify={'center'} background={'#100F0F'} flexDirection={'column'}>

                            <Box className='up-n-down animate-top' fontSize={'6xl'} fontWeight={'bold'} fontFamily={'Kalnia'}>Costeye</Box>
                            <Image
                                className="animate-top up-n-down"
                                width={'60%'}
                                height={'55%'}
                                alt={'Login Image'}
                                objectFit={'cover'}
                                src={Logo}
                            />
                        </Flex>
                    </Stack>
                </ModalContent>
            </Modal>
        </>
    )
}

export default NewEye
