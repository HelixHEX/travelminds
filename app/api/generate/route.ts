import { ChatGPTAPI } from "chatgpt";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

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
  const response = await gptAPI.sendMessage(
    `Generate a travel plan for ${destination} with a budget of ${budget}. Create a bulleted list using the character ">" for each new list. Each list should be 3 sentences only. Also generate a short description of what ${destination} has to offer at the beginning`
  );

  let formattedList = response.text.split(">");
  // let formattedList = [
  //   "Italy, renowned for its rich history, stunning landscapes, and mouthwatering cuisine, offers an unforgettable travel experience. From the romantic canals of Venice to the ancient ruins of Rome and the breathtaking coastline of Amalfi, there's something for everyone.\n" +
  //     "\n",
  //   " Start your journey in Rome, exploring iconic landmarks like the Colosseum and Vatican City. Indulge in delicious pizza and pasta while wandering the charming streets of Trastevere. \n",
  //   " Head to Florence, the birthplace of the Renaissance, where you can admire Michelangelo's David at the Accademia Gallery and marvel at the Duomo's magnificent dome. Don't miss a visit to the Uffizi Gallery, home to masterpieces by Botticelli, Leonardo da Vinci, and more.\n",
  //   " Proceed to the enchanting city of Venice, where you can take a gondola ride through the picturesque canals, visit St. Mark's Square and its stunning basilica, and explore the vibrant neighborhoods of Dorsoduro and Cannaregio.\n" +
  //     "\n",
  //   " Venture south to the Amalfi Coast, a picturesque region dotted with colorful cliffside towns. Explore Positano's narrow streets, relax on stunning beaches, and savor fresh seafood dishes. Take a boat tour to the idyllic island of Capri or hike the scenic Path of the Gods for breathtaking views.\n" +
  //     "\n",
  //   " Conclude your trip in the captivating city of Naples, known for its vibrant street life and world-famous pizza. Visit the archaeological site of Pompeii, perfectly preserved after the eruption of Mount Vesuvius, and immerse yourself in the city's lively atmosphere at Spaccanapoli, the historic center.\n" +
  //     "\n" +
  //     "Remember to allocate a portion of your budget for accommodations, meals, transportation, and entrance fees to attractions. Italy offers a plethora of cultural treasures, mesmerizing scenery, and delectable culinary delights that will create memories to last a lifetime.",
  // ];

  let photo = await unsplash.search.getPhotos({
    query: destination,
    perPage: 5,
    orientation: "landscape",
  });

   const res = {
    rawResponse: response.text,
    formattedResponse: {
      details: formattedList[0],
      estimatedTotalCost: budget,
      destination,
      destinationImgURL:
        photo.response?.results[Math.floor(Math.random() * 5)].urls.full,
      itinerary: formattedList,
    },
  };
  return NextResponse.json(res);
  // const res = await gptAPI.sendMessage(`Generate a travel plan for ${destination} with a budget of ${budget}.`)
};
