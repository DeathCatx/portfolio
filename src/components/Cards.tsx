import {
	Badge,
  Box,
  Center,
  Heading,
	Image,
  Text,
	Tag,
  Stack,
  Button,
	Link,
  useColorModeValue,
	Wrap,
} from '@chakra-ui/react';
import Project from "../assets/ProjectData.json";

type Projects = {
	name: string;
	desc: string;
	tags: string[];
	stacks: string[];
	link: string;
}

const CreateCard = ( {name, desc, tags, stacks, link}: Projects ) => (
	<Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
						minInlineSize={'100%'}
						height={'100%'}
						fit={'cover'}
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
        </Box>
        <Stack>
					<Wrap>
						{stacks.map((stack) => (
							<Tag key={stack}>
								{stack}
							</Tag>
						))}
					</Wrap>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {name}
          </Heading>
					<Wrap>
						{tags.map((tag) => (
							<Badge key={tag} colorScheme='green'>
								{tag}
							</Badge>
						))}
					</Wrap>
          <Text color={'gray.500'}>
						{desc}
          </Text>
        </Stack>
        <Stack direction={'row-reverse'} marginTop={'5'}>
					<Link href={link} isExternal>
						<Button aria-label="Link">
							More
						</Button>
					</Link>
				</Stack>
      </Box>
    </Center>
);

export default function Cards() {
  return (
    <Box>
			<Wrap justify={'center'}>
			{Object.entries(Project).map((Objects) => (
				<CreateCard 
					name={Objects[1].name}
					desc={Objects[1].desc}
					tags={Objects[1].tags}
					stacks={Objects[1].stacks}
					link={Objects[1].link}
					key={Objects[0]}/>
				))}
			</Wrap>
		</Box>
  );
}