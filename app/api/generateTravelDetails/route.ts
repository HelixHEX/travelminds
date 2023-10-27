import { ChatGPTUnofficialProxyAPI } from 'chatgpt'
import { NextApiRequest } from 'next'

export const POST = async (request: NextApiRequest) => {
  const {destination, budget} = await request.body

  const gptAPI = new ChatGPTUnofficialProxyAPI({
    accessToken: process.env.OPENAI_ACCESS_TOKEN!
  })

  const res = await gptAPI.sendMessage(`Generate a travel plan for ${destination} with a budget of ${budget}.`) 
  console.log(res)
}