import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return(
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I'm a full-stack developer based in Paris, France.
            </Box>
            
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Yassine Benosmane
                    </Heading>
                    <p>Digital Autodidact (Developer / Blogger / Mentor)</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page