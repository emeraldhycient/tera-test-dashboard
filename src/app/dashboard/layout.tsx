import type { Metadata } from 'next'
import { Container, Grid, GridItem, Box, Button } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'dashboard',
  description: 'using next js, nest js, graphql and sqlite',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container minH="100vh" minW="100vw" p={0}>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav main"`}
        gridTemplateRows={'60px 1fr 50px'}
        gridTemplateColumns={'150px 1fr'}
        h='100vh'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem bg='white' area={'header'}>
          <Box boxShadow='md' p='3' w="100%" h="100%" rounded='md' bg='gray.50'>
            <Image src={"/images/terawork.svg"} alt={'terawork logo'} width={150} height={80} />
          </Box>
        </GridItem>
        <GridItem bg='white' area={'nav'}>
          <Box boxShadow='md' w="100%" h="100%" p='6' rounded='md' bg='gray.50'>
            <Link href="/dashboard">
              <Button variant="outline" width="full" mt="4">
               Dashboard
              </Button>
            </Link>  <Link href="/dashboard/books">
              <Button variant="outline" width="full" mt="4">
                Books
              </Button>
            </Link>
            <Link href="/dashboard/authors">
              <Button variant="outline" width="full" mt="4">
               Authors
              </Button>
            </Link>
          </Box>
        </GridItem>
        <GridItem pl='2' w="100%" h="100%" bg='white' area={'main'}>
          {children}
        </GridItem>
      </Grid>
    </Container>

  )
}
