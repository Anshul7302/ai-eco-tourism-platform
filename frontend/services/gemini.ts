import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY!,
});

export async function generateTravelPlan(data: any) {
  const prompt = `
You are an expert Eco Tourism Travel Planner.

Create a personalized travel plan.

Destination: ${data.destination}
Budget: ₹${data.budget}
Duration: ${data.duration}
Travelers: ${data.travelers}
Travel Style: ${data.travelStyle}
Accommodation: ${data.accommodation}
Transport: ${data.transport}

Return ONLY valid JSON in this format:

{
  "destination":"",
  "duration":"",
  "budget":"",
  "transport":"",
  "homestays":[
    {
      "name":"",
      "price":"",
      "reason":""
    }
  ],
  "itinerary":[
    {
      "day":"Day 1",
      "activities":[]
    }
  ],
  "food":[],
  "packing":[],
  "tips":[]
}
`;

  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return result.text;
}