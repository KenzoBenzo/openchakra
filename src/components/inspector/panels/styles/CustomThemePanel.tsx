import React, { memo } from 'react'
import {
  theme,
  PseudoBox,
  Grid,
  FormLabel,
  Box,
  Stack,
  Text,
} from '@chakra-ui/core'
import omit from 'lodash/omit'

const CustomThemePanel = () => {
  const themeColors: any = omit(theme.colors, [
    'transparent',
    'current',
    'black',
    'white',
  ])
  const themeSpaces = theme.space
  const themeFonts = theme.fonts
  return (
    <>
      <FormLabel fontSize="xs" htmlFor="color" textTransform="capitalize">
        Colors
      </FormLabel>
      <Grid mb={2} templateColumns="repeat(5, 1fr)" gap={0}>
        {Object.keys(themeColors).map(colorName => (
          <PseudoBox
            border={colorName.includes('white') ? '1px solid lightgrey' : ''}
            key={colorName}
            _hover={{ shadow: 'lg' }}
            cursor="pointer"
            bg={`${colorName}.500`}
            mt={2}
            rounded="full"
            height="30px"
            width="30px"
          />
        ))}
      </Grid>

      <FormLabel fontSize="xs" htmlFor="spacing" textTransform="capitalize">
        Spaces
      </FormLabel>
      <Stack>
        {Object.keys(themeSpaces).map(space => (
          <Box key={space} height="8px" width={`${space}px`} bg="teal.500" />
        ))}
      </Stack>

      <FormLabel fontSize="xs" htmlFor="fonts" textTransform="capitalize">
        Fonts
      </FormLabel>
      <Stack>
        {Object.keys(themeFonts).map(font => (
          <Box border="1px solid gray" p="2">
            <Text key={font} fontFamily={font}>
              {font}
            </Text>
          </Box>
        ))}
      </Stack>
    </>
  )
}

export default memo(CustomThemePanel)
