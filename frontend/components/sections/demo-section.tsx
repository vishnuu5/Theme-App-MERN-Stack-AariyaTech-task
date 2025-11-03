"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function DemoSection() {
  const [count, setCount] = useState(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Interactive Demo
        </h2>
        <p className="max-w-2xl mx-auto">
          Try switching themes and customizing colors while interacting with
          components
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Component Showcase</CardTitle>
            <CardDescription>
              All components adapt to your chosen theme
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 space-x-2">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="destructive">Destructive Button</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interactive Counter</CardTitle>
            <CardDescription>
              Test responsiveness to state changes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center text-4xl font-bold text-primary">
              {count}
            </div>
            <div className="flex gap-2 justify-center">
              <Button variant="outline" onClick={() => setCount(count - 1)}>
                Decrease
              </Button>
              <Button onClick={() => setCount(count + 1)}>Increase</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
