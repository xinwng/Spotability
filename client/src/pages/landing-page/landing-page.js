import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Flex,
  Grid,
  theme,
} from '@chakra-ui/react';

//compoents
import LoginButton from './helper-components/button'


function LandingPage () {
  return (
  <VStack>
  <Box fontSize="xl">
    <Text>
      Spotability
    </Text>
  </Box>

  <LoginButton/>
  </VStack>
  )
}

export default LandingPage