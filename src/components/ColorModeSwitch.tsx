import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack padding="10px">
      <Switch
        isChecked={colorMode === "dark"}
        colorScheme="blue"
        onChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
