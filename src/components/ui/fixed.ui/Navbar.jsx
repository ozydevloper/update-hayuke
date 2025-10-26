import { Box, Flex, Text } from "@radix-ui/themes";

const Navbar = () => {
  return (
    <Flex
      className="bg-(--accent-10) text-(--accent-1)"
      align={"center"}
      justify={"between"}
      px={"3"}
    >
      <Text weight={"bold"} size={"6"}>
        Hayuke!
      </Text>
      <Box>Tes</Box>
    </Flex>
  );
};
export default Navbar;
