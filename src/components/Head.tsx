import {
	Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaRegFileAlt } from 'react-icons/fa';

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
					<Text as={'span'} color={'gray.500'}>
						I'm
					</Text>
					<Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Eugene Tan Kok Yew
            </Text>
          </Heading>
					<Text color={'blue.400'} as={'span'}>
						Web Developer / Cybersecurity
					</Text>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
					Self-motivated and passionate fresh graduate looking for hands-on experience in the real working environment and situations in the IT field. Proficient in a range of modern technologies including Python and Java.
          </Text>
					<Box>
						<Button
							verticalAlign={'true'}
							rightIcon={<FaRegFileAlt/>}
							bg={'blue.400'}
							color={'white'}
							_hover={{
								bg: 'blue.500',
							}}>
							Get Resume
						</Button>
					</Box>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}