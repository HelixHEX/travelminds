import { type RefType } from "./lib/api/mutation";

interface FormatedResponse {
  details: string;
  estimatedTotalCost: number;
  destination: string;
  destinationImgURL: string;
  itinerary: string[]
}

// QUERY RESPONSE TYPES
interface GeneratedDetailsResponse {
  rawResponse: string;
  formattedResponse: FormatedResponse
}


// QUERY FUNCTION PROPS
interface GenerateTravelDetailsProps {
  destination: string;
  budget: string;
}


// QUERY PROPS 

interface GeneratedDetailsQueryProps {
  refType:RefType,
  destination: string;
  budget: string;
  enabled: boolean;
}

