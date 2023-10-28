import { ChatGPTAPI } from "chatgpt";
import { NextApiRequest } from "next";
import { type NextRequest, NextResponse } from "next/server";

import { createApi } from "unsplash-js";
import * as nodeFetch from "node-fetch";

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
  fetch: nodeFetch.default as unknown as typeof fetch,
});


export const POST = async (request: NextRequest) => {
  const { destination, budget } = await request.json();
  const gptAPI = new ChatGPTAPI({
    apiKey: process.env.OPENAI_SECRET_KEY!,
  });
  // console.log(destination)
  const response = await gptAPI.sendMessage(
    `Generate a travel plan for ${destination} with a budget of ${budget}. Create a bulleted list using the character ">" for each new list. Each list should be 3 sentences only. Also generate a short description of what ${destination} has to offer at the beginning`
  );

  let formattedList = response.text.split(">");
  let photo = await unsplash.search.getPhotos({
    query: destination,
    perPage: 5,
    orientation: "landscape",
  });

  const res = {
    rawResponse: response.text,
    formattedResponse: {
      details: formattedList[0],
      estimatedTotalCost: 5000,
      destination: "Hawaii",
      destinationImgURL:
        photo.response?.results[Math.floor(Math.random() * 5)].urls.full,
      itinerary: formattedList,
    },
  };
  return NextResponse.json(res);

  // const res = await gptAPI.sendMessage(`Generate a travel plan for ${destination} with a budget of ${budget}.`)
};
