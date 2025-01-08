import PricingPage from "@/components/pricing-page";

import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaPager } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { MdDisplaySettings } from "react-icons/md";

import { MdOutlineLanguage } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { loginAction } from "./actions/googlelogin";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const features = [
  {
    icons: <AiOutlineThunderbolt />,
    id: 1,
    title: "Quick Integration",
    description:
      "Simple copy-paste code snippet to add the chatbot to your website in minutes.",
  },

  {
    icons: <FaPager />,
    id: 2,
    title: "Custom Training",
    description:
      "Train the chatbot on your own data to respond to specific queries.",
  },
  {
    icons: <IoStatsChart />,
    id: 3,
    title: "Analytics Dashboard",
    description:
      "Track user interactions, conversations, and chatbot performance.",
  },
  {
    icons: <MdDisplaySettings />,
    id: 4,
    title: "Customizable Design",
    description:
      "Customize the chatbot's appearance to match your website's branding.",
  },
  {
    icons: <MdOutlineLanguage />,
    id: 5,
    title: "Multi-Language Support",
    description:
      "Support multiple languages, including English, French, and German.",
  },
  {
    icons: <RiCustomerService2Line />,
    id: 6,
    title: "24/7 Customer Support",
    description: "Get help from our team of experts whenever you need it.",
  },
];
export default async function Home() {
  const session = await auth();
  if (!session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className=" relative w-full z-10 h-full flex flex-col bg-[#191919] ">
      {/* hero section */}
      <div className="  p-9 flex relative z-20 flex-col items-center justify-center h-full w-full ">
        <div className="absolute   z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(190, 215, 84),rgba(190, 215, 84))]"></div>
        <h1 className=" text-5xl md:text-7xl w-[70%] mt-24 mb-9  font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d8f45e] via-[#d8f45e] to-white  text-center">
          Build Smart AI Chatbots for Your Website
        </h1>
        <p className=" text-sm tracking-wide w-[50%] text-neutral-700 text-center mt-4">
          &quot Create customized AI-powered chatbots that understand your
          website content and provide instant answers to your visitors &apos
          questions &quot .
        </p>
        <div className=" z-50 transition-all duration-300  flex items-center justify-center mt-8 gap-10">
          <form action={loginAction}>
            <button className=" p-3 px-4 hover:scale-105 active:scale-95  bg-green text-dark  font-bold  rounded-lg">
              Get Started
            </button>
          </form>
          <button className="  border-green text-white  px-4 p-3 rounded-lg border  ">
            Start Demo
          </button>
        </div>
        <div className=" relative w-full flex items-center justify-center flex-col">
          <div className=" absolute w-[70%] bg-gradient-to-r  from-green/70 to-transparent  rounded-lg blur h-96"></div>
          <div className=" relative w-[70%] h-96 bg-dark rounded-lg  m-9 "></div>
        </div>
      </div>
      {/* Features section */}
      <div className=" text-white   flex flex-col items-center justify-center w-full h-full">
        <h1 className=" text-4xl font-bold mt-6 mb-2 "> Powerfull features </h1>
        <p className="text-neutral-500 font-normal text-lg">
          Everything you need to create intelligent chatbots
        </p>
        <div className=" grid lg:grid-cols-3 gap-4 p-6 md:grid-cols-2 grid-cols-1 ">
          {features.map((feature) => (
            <div
              key={feature.id}
              className=" border rounded-lg  border-neutral-800 bg-neutral-900/50 flex flex-col items-center justify-center p-4"
            >
              <div className=" bg-green p-4 rounded-full text-dark">
                {feature.icons}
              </div>
              <h1 className=" text-xl font-bold mt-4">{feature.title}</h1>
              <p className=" text-neutral-500 text-center mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <PricingPage />
    </div>
  );
}
