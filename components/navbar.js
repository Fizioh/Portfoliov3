import Logo from './logo'
import NextLink from 'next/link'
import { 
    Container,
    Box, 
    Flex, 
    Link, 
    IconButton, 
    MenuButton, 
    Menu, 
    MenuItem,
    MenuList,
    Heading,
    Stack, 
    Text, 
    useColorModeValue 
} from '@chakra-ui/react'
import { HumbergerIcon, CloseIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, children }) => {
    const active = path  === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link 
                p={2} 
                bg={active ? 'glassTeal' : undefined} color={active ? "#202023" : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#202023')}
            style={{backdropFilter:'blur(10px)'}}
            zIndex={1}
            {...props}
        >
            Navbar
        </Box>
    )
}

export default Navbar