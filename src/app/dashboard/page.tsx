'use client'
import { Button, FormControl, FormLabel, Input, VStack, Flex } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react'
import Link from 'next/link';

const page = () => {


    return (
        <Container>
            <Flex mt={15} justifyContent={'flex-end'}>
                <Button type="submit" colorScheme="blue" width="100px">
                    Add Book
                </Button>
            </Flex>
        </Container>
    );
};

export default page;
