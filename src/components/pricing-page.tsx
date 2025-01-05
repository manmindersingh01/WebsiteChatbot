"use client";
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

export default function PricingPage() {
  return (
    <div className="min-h-screen  text-white py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Simple, Transparent Pricing
          </h1>
          <p className="text-muted-foreground">
            Choose the perfect plan for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/* Starter Plan */}
          <Card className="relative  bg-neutral-900/50 border border-neutral-800">
            <CardHeader className="space-y-1 pb-3">
              <h3 className="text-xl text-green font-bold">Starter</h3>
              <div className="flex items-baseline text-white">
                <span className="text-3xl font-bold">$29</span>
                <span className="text-sm font-medium text-zinc-400 ml-1">
                  /month
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-white/50">
              <div className="space-y-2 ">
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-blue-500" />
                  <span>Up to 1,000 chat interactions</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-blue-500" />
                  <span>Basic analytics</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-blue-500" />
                  <span>Standard support</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-zinc-800 hover:bg-zinc-700">
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Professional Plan */}
          <div className=" relative">
            <Card className="relative h-96 w-full blur   bg-[#e0ff55] border border-neutral-800">
              {" "}
            </Card>
            <Card className=" absolute w-full h-full top-0 bg-dark border border-neutral-800 ">
              <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <span className="bg-blue-500 text-white text-sm font-medium px-3 py-0.5 rounded-full">
                  Most Popular
                </span>
              </div>
              <CardHeader className="space-y-1 pb-3">
                <h3 className="text-xl text-green  font-bold">Professional</h3>
                <div className="flex items-baseline text-white">
                  <span className="text-3xl font-bold">$79</span>
                  <span className="text-sm font-medium text-zinc-400 ml-1">
                    /month
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-white/50">
                <div className="space-y-2">
                  <div className="flex items-center text-white/50">
                    <Check className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Up to 10,000 chat interactions</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Advanced analytics</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Priority support</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Custom bot training</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </div>
          {/* Enterprise Plan */}
          <Card className="relative bg-neutral-900/50 border border-neutral-800">
            <CardHeader className="space-y-1 pb-3">
              <h3 className="text-xl text-green font-bold">Enterprise</h3>
              <div className="flex items-baseline text-white">
                <span className="text-3xl font-bold">$199</span>
                <span className="text-sm font-medium text-zinc-400 ml-1">
                  /month
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-white/50">
              <div className="space-y-2">
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-blue-500" />
                  <span>Unlimited chat interactions</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-blue-500" />
                  <span>Enterprise analytics</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-blue-500" />
                  <span>24/7 dedicated support</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-blue-500" />
                  <span>Custom integrations</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-zinc-800 hover:bg-zinc-700">
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
