import {
  Box,
  Center,
  Heading,
	Tag,
	Wrap,
} from '@chakra-ui/react';
import Skillsets from "../assets/Skillsets.json";

type Skillset = {
	skills: string[];
}

const CreateTags = ( {skills}: Skillset ) => (
	<Center py={6}>
		<Wrap justify={'center'}>
			{skills.map((tag) => (
				<Tag key={tag} size={{ base: 'sm', md: 'md', lg: 'lg' }} borderRadius='full'>
					{tag}
				</Tag>
			))}
		</Wrap>
	</Center>
);

export default function Skills() {
  return (
    <Box>
			<Heading fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} textAlign={'center'} marginY={'5'}>
				Professional Skills
			</Heading>
			{Object.entries(Skillsets).map((Objects) => (
				<CreateTags 
					skills={Objects[1]}
					key={Objects[0]}/>
				))}
		</Box>
  );
}