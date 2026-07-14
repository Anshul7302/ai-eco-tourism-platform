"use client";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PlannerForm from "../../components/PlannerForm";

import { generateTravelPlan } from "../../services/gemini";

export default function AIPlannerPage() {

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

async function handleGenerate(data: any) {
  setLoading(true);

  try {
    const response = await generateTravelPlan(data);

    console.log("Gemini Response:", response);

    const cleanResponse = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleanResponse);

    setResult(parsed);

  } catch (err: any) {
    console.error("Gemini Error:", err);
    alert(err.message || "Failed to generate plan.");
  } finally {
    setLoading(false);
  }
}
  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold text-center text-green-700">
          AI Travel Planner
        </h1>

        <PlannerForm onGenerate={handleGenerate} />

        {loading && (
          <div className="text-center mt-10">
            <h2 className="text-xl font-semibold">
              Generating your travel plan...
            </h2>
          </div>
        )}

        {result && (

          <div className="mt-10 bg-white shadow rounded-xl p-8">

            <h2 className="text-3xl font-bold text-green-700">
              {result.destination}
            </h2>

            <p className="mt-2">
              Budget: {result.budget}
            </p>

            <p>
              Duration: {result.duration}
            </p>

            <p>
              Transport: {result.transport}
            </p>

            <hr className="my-6"/>

            <h3 className="text-2xl font-semibold">
              Recommended Homestays
            </h3>

            {result.homestays.map((home:any,index:number)=>(
              <div
                key={index}
                className="border rounded-lg p-4 mt-4"
              >
                <h4 className="font-bold">
                  {home.name}
                </h4>

                <p>{home.price}</p>

                <p>{home.reason}</p>
              </div>
            ))}

            <hr className="my-6"/>

            <h3 className="text-2xl font-semibold">
              Itinerary
            </h3>

            {result.itinerary.map((day:any,index:number)=>(
              <div
                key={index}
                className="border rounded-lg p-4 mt-4"
              >
                <h4 className="font-bold">
                  {day.day}
                </h4>

                <ul className="list-disc ml-6 mt-2">
                  {day.activities.map((a:string,i:number)=>(
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}

            <hr className="my-6"/>

            <h3 className="text-2xl font-semibold">
              Food
            </h3>

            <ul className="list-disc ml-6">
              {result.food.map((f:string,i:number)=>(
                <li key={i}>{f}</li>
              ))}
            </ul>

            <hr className="my-6"/>

            <h3 className="text-2xl font-semibold">
              Packing List
            </h3>

            <ul className="list-disc ml-6">
              {result.packing.map((p:string,i:number)=>(
                <li key={i}>{p}</li>
              ))}
            </ul>

            <hr className="my-6"/>

            <h3 className="text-2xl font-semibold">
              Sustainability Tips
            </h3>

            <ul className="list-disc ml-6">
              {result.tips.map((t:string,i:number)=>(
                <li key={i}>{t}</li>
              ))}
            </ul>

          </div>

        )}

      </section>

      <Footer />

    </>
  );
}