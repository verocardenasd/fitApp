import { Box, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Exercise } from "../hooks/useExcersies";

interface ExercisesByBodyPartProps {
  exercises: Exercise[];
  onExerciseClick: (exercise: Exercise) => void;
}

function ExercisesByBodyPart(props: ExercisesByBodyPartProps) {
  const { exercises, onExerciseClick } = props;

  return (
    <>
      <Box flex="1" p="4" overflowY="auto" bg="gray.50" minHeight="100vh">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} borderSpacing="6">
          {exercises.map((exercise) => (
            <Box
              key={exercise.id}
              p="4"
              bg="white"
              borderRadius="lg"
              boxShadow="md"
              _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
              transition="all 0.3s"
              cursor="pointer"
              onClick={() => onExerciseClick(exercise)}
            >
              <VStack borderSpacing="4">
                <Image
                  src={exercise.gifUrl}
                  alt={exercise.name}
                  borderRadius="md"
                  mb="2"
                  objectFit="cover"
                  height="200px"
                  width="100%"
                />
                <Text fontWeight="bold" fontSize="lg" textAlign="center">
                  {exercise.name}
                </Text>
                <Text fontSize="sm">
                  <strong>Body Part:</strong> {exercise.bodyPart}
                </Text>
                <Text fontSize="sm">
                  <strong>Equipment:</strong> {exercise.equipment}
                </Text>
                <Text fontSize="sm">
                  <strong>Target:</strong> {exercise.target}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default ExercisesByBodyPart;
