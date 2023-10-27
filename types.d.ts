interface GeneratedDetailsResponse {
  rawResponse: string;
  formattedResponse: FormatedResponse
}

interface FormatedResponse {
  details: string;
  estimatedTotalCost: number;
  destination: string;
  destinationImgURL: string;
  itinerary: string[]
}

interface GenerateTravelDetailsProps {
  destination: string;
  budget
}