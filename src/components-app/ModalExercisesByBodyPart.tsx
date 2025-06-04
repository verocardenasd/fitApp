import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import { Exercise } from "../hooks/useExcersies";

interface ModalExercisesByBodyPartProps {
  open: boolean;
  onClose: () => void;
  exercise: Exercise | null;
}

function ModalExercisesByBodyPart(props: ModalExercisesByBodyPartProps) {
  const { open, onClose, exercise } = props;

  if (!exercise) {
    return null;
  }

  return (
    <Modal isOpen={open} onClose={onClose} isCentered size="lg">
      <ModalOverlay bg="rgba(0, 0, 0, 0.6)" backdropFilter="blur(4px)" />
      <ModalContent justifyContent="center">
        <Box
          maxWidth="600px"
          p="4"
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
          mx="auto"
          mt="3"
        >
          <ModalHeader fontWeight="bold" fontSize="lg" textAlign="center">
            {exercise.name.toUpperCase()}
          </ModalHeader>
          <ModalBody>
            <VStack borderSpacing="4">
              <Image
                src={exercise.gifUrl}
                alt={exercise.name}
                borderRadius="md"
                mb="2"
                objectFit="contain"
                maxHeight="200px"
                width="100%"
              />
              <VStack align="start" borderSpacing={2}>
                <Text fontWeight="bold">Instructions:</Text>
                {exercise.instructions.map((step, index) => (
                  <Text key={index} fontSize="sm">
                    {index + 1}. {step}
                  </Text>
                ))}
              </VStack>
            </VStack>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              mt="3"
              bg="blue.800"
              color="white"
              _hover={{
                boxShadow: "xl",
                transform: "scale(1.02)",
                bg: "blue.200",
                color: "blue.900",
              }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </Box>
      </ModalContent>
    </Modal>
  );
}

export default ModalExercisesByBodyPart;
