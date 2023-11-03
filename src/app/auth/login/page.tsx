'use client'
import { Button, FormControl, FormLabel, Input, VStack, Center } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Container } from '@chakra-ui/react'
import Link from 'next/link';
import Image from 'next/image';

const LoginPage = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        // Perform login logic here
    };

    return (
        <Container maxW="md">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Center my={30}>
                    <Image src={"/images/terawork.svg"} alt={'terawork logo'} width={200} height={90} />
                </Center>
                <VStack spacing="4" p="8">
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" {...register('email')} />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" {...register('password')} />
                    </FormControl>
                    <Button type="submit" colorScheme="blue" width="full">
                        Login
                    </Button>
                    <Link href="/auth/signup">
                        <Button  variant="outline" width="full" mt="4">Dont have an account?  Sign Up</Button>
                    </Link>
                </VStack>
            </form>
        </Container>
    );
};

export default LoginPage;
