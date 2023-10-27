import { useMutation, useQuery } from "@tanstack/react-query"
import axios from 'axios'
import { getBaseURL } from "./utils"

const generateTravelDetails = async (description: GenerateTravelDetailsProps) => {
  const baseURL = getBaseURL()

  return await axios.post(`${baseURL}/generate`, {description})
}

export const useGenerateTravelDetails = () => {
  return useMutation({
    mutationFn: generateTravelDetails,
    onError: () => {

    }
  })
}

