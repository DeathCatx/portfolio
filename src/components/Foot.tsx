import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
	IconButton,
  Link,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaRegFileAlt, FaLinkedinIn } from 'react-icons/fa';

export default function Foot() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      
      <Box py={5}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <Container as={Stack} maxW={'6xl'} centerContent>
						<Stack direction={'row'} spacing={6}>
              <Tooltip label='LinkedIn'>
                <Link href={'https://www.linkedin.com/in/eugene-tan-kok-yew/'}>
                  <IconButton aria-label='LinkedIn' isRound icon={<FaLinkedinIn />}/>
                </Link>
              </Tooltip>
              <Tooltip label='Resume'>
                <Link href={'#'}>
                  <IconButton aria-label='Resume' isRound icon={<FaRegFileAlt />}/>
                </Link>
              </Tooltip>
              <Tooltip label='GitHub'>
                <Link href={'https://github.com/DeathCatx'}>
                  <IconButton aria-label='GitHub' isRound icon={<FaGithub />}/>
                </Link>
              </Tooltip>
						</Stack>
					</Container>
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          Made with ❤️ by <Link href='https://github.com/DeathCatx'>DeathCatx</Link>
        </Text>
      </Box>
    </Box>
  );
}