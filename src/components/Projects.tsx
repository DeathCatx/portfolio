import {
  Box,
  Heading,
	Badge,
  Center,
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

type ProjectList = {
	name: string;
	desc: string;
	tags: string[];
	stacks: string[];
	link: string;
	pic: string;
}

const CreateCard = ( {name, desc, tags, stacks, link, pic}: ProjectList ) => (
	<Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
				transition= {"transform 0.25s ease-in-out"}
				_hover={{transform: 'scale(1.05, 1.05)'}}
				marginInline={'5'}>
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
            src={`/portfolio/assets/${pic}.png`}
						alt={name}
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
					<Link href={link} isExternal style={{ textDecoration: 'none' }}>
						<Button aria-label="Link">
							More
						</Button>
					</Link>
				</Stack>
      </Box>
    </Center>
);

export default function Projects() {
  return (
		<Box>
			<Heading fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} textAlign={'center'} marginY={'5'}>
				Projects
			</Heading>
			<Box>
				<Wrap justify={'center'}>
					{Object.entries(Project).map((Objects) => (
						<CreateCard 
							name={Objects[1].name}
							desc={Objects[1].desc}
							tags={Objects[1].tags}
							stacks={Objects[1].stacks}
							link={Objects[1].link}
							pic={Objects[1].pic}
							key={Objects[0]}/>
						))}
				</Wrap>
			</Box>
		</Box>
  );
}