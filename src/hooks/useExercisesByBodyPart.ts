import { useEffect, useState } from "react";
import { Exercise } from "./useExcersies";
import apiClient from "@/services/api-client";

const useExercisesByBodyPart = (part: String) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    console.log("Fetching exercises for body part:", part);
    const controller = new AbortController();

    apiClient
      .get<Exercise[]>("/exercises/bodyPart/" + part, {
        signal: controller.signal,
        params: {
          limit: 12,
        },
      })
      .then((res) => {
        setExercises(res.data);
      })
      .catch((err) => {
        console.error("Error fetching exercises:", err);
      });

    return () => {
      controller.abort();
    };
  }, [part]);

  return exercises;
};

export default useExercisesByBodyPart;
