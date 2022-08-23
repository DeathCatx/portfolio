import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
  Divider,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./components/ColorModeSwitcher"
import Foot from "./components/Foot"
import Head from "./components/Head"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import BacktoTop from "./components/BacktoTop"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box position={'fixed'} bottom={'2vh'} right={'2vh'} zIndex={'1'}>
      <BacktoTop/>
      <ColorModeSwitcher/>
    </Box>
    <Box textAlign="center" fontSize="xl">
      <Head/>
    </Box>
    <Divider maxW={'90%'} marginY={'3vh'} height={'5'} marginX={'5%'}/>
    <Projects/>
    <Divider maxW={'90%'} marginY={'3vh'} height={'5'} marginX={'5%'}/>
    <Skills/>
    <Divider maxW={'90%'} marginY={'3vh'} height={'5'} marginX={'5%'}/>
    <Contact/>
    <Foot/>
  </ChakraProvider>
)
