import "./App.css";
import NavBar from "./components-app/NavBar";
import ExercisesByBodyPart from ".//components-app/ExercisesByBodyPart";
import { useState } from "react";
import AllExercises from "./components-app/AllExercises";
import { Exercise } from "./hooks/useExcersies";
import { Flex, useDisclosure } from "@chakra-ui/react";
import ModalExercisesByBodyPart from ".//components-app/ModalExercisesByBodyPart";

function App() {
  const [excersise, setExcersise] = useState<Exercise[]>([]);
  const [ClickedExercise, setClickedExercise] = useState<Exercise | null>(null);
  const { open, onOpen, onClose } = useDisclosure();

  const handleExerciseClick = (exercise: Exercise) => {
    setClickedExercise(exercise);
    onOpen();
  };

  return (
    <>
      <Flex direction="row" justifyContent="space-between" height="100vh">
        <NavBar setExcersise={setExcersise} />
        {excersise.length > 0 ? (
          <ExercisesByBodyPart
            exercises={excersise}
            onExerciseClick={handleExerciseClick}
          />
        ) : (
          <AllExercises />
        )}
      </Flex>
      <ModalExercisesByBodyPart
        open={open}
        onClose={onClose}
        exercise={ClickedExercise}
      />
    </>
  );
}

export default App;
