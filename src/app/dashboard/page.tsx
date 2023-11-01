'use client'
import Link from 'next/link';
import {
    Table,
    Thead,
    Tbody,
    Input,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex,
    Button,
    Container,
} from '@chakra-ui/react'
import Image from 'next/image';



const page = () => {


    return (
        <Container minW={"100%"}>
            <Flex my={15} justifyContent={'space-between'}>
                <Input type="text" placeholder='search by name or author' width={"200px"}  />
                <Button type="submit" colorScheme="blue" width="100px">
                    Add Book
                </Button>
            </Flex>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>List of books and the authors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>S/N</Th>
                            <Th>Image</Th>
                            <Th>Name</Th>
                            <Th>Description</Th>
                            <Th>Author</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td>
                                <Image src="https://d3i5mgdwi2ze58.cloudfront.net/7hqv6ddaqv363p4hadx6lymotow1" height={100} width={100} alt="" />
                            </Td>
                            <Td>In Search of Lost Time</Td>
                            <Td>Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work</Td>
                            <Td>Marcel Proust</Td>
                        </Tr>
                        <Tr>
                            <Td>1</Td>
                            <Td>
                                <Image src="https://d3i5mgdwi2ze58.cloudfront.net/7hqv6ddaqv363p4hadx6lymotow1" height={100} width={100} alt="" />
                            </Td>
                            <Td>In Search of Lost Time</Td>
                            <Td>Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work</Td>
                            <Td>Marcel Proust</Td>
                        </Tr>
                        <Tr>
                            <Td>1</Td>
                            <Td>
                                <Image src="https://d3i5mgdwi2ze58.cloudfront.net/7hqv6ddaqv363p4hadx6lymotow1" height={100} width={100} alt="" />
                            </Td>
                            <Td>In Search of Lost Time</Td>
                            <Td>Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work</Td>
                            <Td>Marcel Proust</Td>
                        </Tr>
                    </Tbody>
                    {/* <Tfoot>
                        <Tr>
                            <Th>4</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Tfoot> */}
                </Table>
            </TableContainer>
        </Container>
    );
};

export default page;
