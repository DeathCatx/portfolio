import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
  Divider,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Foot from "./components/Foot"
import Head from "./components/Head"
import SideBar from "./components/SideBar"
import Projects from "./components/Projects"

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher justifySelf="flex-end" position={'fixed'}/>
    <Box textAlign="center" fontSize="xl">
      <Head/>
    </Box>
    <Divider maxW={'90%'} marginY={'3vh'} height={'5'} marginX={'5%'}/>
    <Projects/>
    <Foot/>
  </ChakraProvider>
)
