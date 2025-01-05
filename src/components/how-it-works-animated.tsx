"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Settings, Code2, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: <Settings className="w-6 h-6" />,
      title: "Configure Your Bot",
      description:
        "Simply input your website URL and customize the bot's behavior. Our AI will automatically scan and understand your content to provide accurate responses.",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500",
      numberBg: "bg-blue-500",
      align: "right",
    },
    {
      number: 2,
      icon: <Code2 className="w-6 h-6" />,
      title: "Copy Integration Code",
      description:
        "Get your unique integration code snippet. It's just a simple copy and paste process to add the chatbot to your website.",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-500",
      numberBg: "bg-purple-500",
      align: "left",
    },
    {
      number: 3,
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Monitor Performance",
      description:
        "Track your chatbot's performance through our comprehensive analytics dashboard. Get insights about user interactions and improve your bot's responses.",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-500",
      numberBg: "bg-green-500",
      align: "right",
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="min-h-screen  text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
          <p className="text-zinc-400">
            Get your AI chatbot up and running in minutes
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Animated center timeline line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-500/20 transform -translate-x-1/2"
            style={{ scaleY: 0, originY: 0 }}
            animate={controls}
            initial="hidden"
            variants={{
              visible: {
                scaleY: 1,
                transition: { duration: 1.5, ease: "easeInOut" },
              },
              hidden: { scaleY: 0 },
            }}
          >
            {/* Glowing effect */}
            <motion.div
              className="absolute top-0 left-1/2 w-[6px] h-[50px] bg-blue-500 rounded-full blur-[2px] transform -translate-x-1/2"
              animate={{
                y: ["0%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </motion.div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial="hidden"
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.2 },
                  },
                  hidden: { opacity: 0, y: 50 },
                }}
              >
                {/* Number circle in center */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    className={`${step.numberBg} w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium z-10`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Content */}
                <div
                  className={`grid grid-cols-2 gap-8 ${
                    step.align === "left" ? "direction-rtl" : ""
                  }`}
                >
                  <div
                    className={`${
                      step.align === "right" ? "col-start-2" : "col-start-1"
                    }`}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Card className="bg-zinc-900/50 border-zinc-800 transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                        <CardContent className="p-6">
                          <div
                            className={`${step.iconBg} ${step.iconColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                          >
                            {step.icon}
                          </div>
                          <h3 className="text-xl font-semibold mb-2">
                            {step.title}
                          </h3>
                          <p className="text-zinc-400 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                  <div
                    className={`${
                      step.align === "right" ? "col-start-1" : "col-start-2"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
