import {
  Button,
  Link,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { VscMail } from "react-icons/vsc";

export default function Contact() {
  return (
    <Stack direction={'column'} align={'center'} justify={'center'} paddingBottom={'5vh'}>
			<Heading fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} textAlign={'center'} marginY={'5'}>
				Contact
			</Heading>
			<Text fontSize={{ base: 'md', lg: 'lg' }} maxW={'90%'} textAlign={'center'}>
				Reach out to me
			</Text>
			<Link href='mailto:eugenetan904@gmail.com' style={{ textDecoration: 'none' }}>
				<Button
					rightIcon={<VscMail/>}
					colorScheme='twitter'
					_hover={{
						bg: 'blue.500',
					}}>
					Email
				</Button>
			</Link>
		</Stack>
  );
}