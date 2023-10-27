interface AIResponse {
  rawResponse: string;
  formattedResponse: FormatedResponse
}

interface FormatedResponse {
  details: string;
  estimatedTotalCost: number;
  destination: string;
  destinationImgURL: string;
}

interface GenerateTravelDetailsProps {
  destination: string;
  budget
}