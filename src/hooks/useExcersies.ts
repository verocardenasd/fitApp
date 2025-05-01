import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

export interface Exercise {
  id: number;
  name: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  target: string;
  instructions: string[];
}

const useExcersies = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    //Call the API to get the exercises
    const controller = new AbortController();

    apiClient
      .get<Exercise[]>("/exercises", {
        signal: controller.signal,
        params: {
          limit: 10,
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
  }, []);

  return {
    exercises,
  };
};

export default useExcersies;
