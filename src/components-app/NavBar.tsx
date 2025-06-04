import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useExercisesByBodyPart from "../hooks/useExercisesByBodyPart";
import { Exercise } from "../hooks/useExcersies";

interface NavBarProps {
  setExcersise: (excersise: Exercise[]) => void;
}

function NavBar(props: NavBarProps) {
  const { setExcersise } = props;

  const [BodyPart, setBodyPart] = useState<string>("");
  const exercises = useExercisesByBodyPart(BodyPart);

  const BodyParts = [
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ];

  useEffect(() => {
    if (BodyPart !== "") {
      setExcersise(exercises);
    }
  }, [BodyPart, exercises, setExcersise]);

  return (
    <>
      <Box
        width="250px"
        bg="blue.900"
        color="white"
        padding="6"
        overflowY="auto"
        height="100vh"
        boxShadow="lg"
      >
        <Heading
          size="md"
          mb="6"
          textAlign="center"
          letterSpacing="wider"
          color="blue.200"
        >
          Body Parts
        </Heading>

        <VStack borderSpacing={4} align="stretch">
          {BodyParts.map((part) => (
            <Button
              key={part}
              variant="ghost"
              background={BodyPart === part ? "blue.700" : "white"}
              color={BodyPart === part ? "white" : "blue.900"}
              justifyContent="flex-start"
              _hover={{ bg: "blue.700", color: "white" }}
              _active={{ bg: "blue.800" }}
              borderRadius="md"
              onClick={() => setBodyPart(part)}
            >
              {part.toUpperCase()}
            </Button>
          ))}
        </VStack>
      </Box>
    </>
  );
}

export default NavBar;
