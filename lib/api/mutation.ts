import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getBaseURL } from "./utils";
import { useToast } from "@chakra-ui/react";

const generateTravelDetails = async ({
  destination,
  budget,
}: GenerateTravelDetailsProps) => {
  const baseURL = getBaseURL();

  const res = await axios.post(`${baseURL}/api/generate`, {
    destination,
    budget,
  });
  return res.data;
};

export const useGenerateTravelDetails = ({ref}: {ref: RefType}) => {
  const toast = useToast();
  return useMutation({
    mutationFn: generateTravelDetails,
    onError: () => {
      toast({
        status: "error",
        title: "Error",
        description: "Unable to generate travel details :(",
      });
    },
    onSuccess: () => {
      toast({
        status: "success",
        title: "Success",
        description: "Travel details generated",
      });
      ref.current?.scrollIntoView({behavior: "smooth"})
    },
  });
  // console.log(data)
};
