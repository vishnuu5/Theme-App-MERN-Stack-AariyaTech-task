import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center text-center gap-6">
        <h1 className="text-4xl md:text-6xl font-bold text-balance">
          Light & Dark Mode Theme App
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-pretty">
          Experience seamless theme switching with persistent preferences. Built
          with Next.js, TypeScript, and ShadCN UI components.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="/about">
            <Button size="lg">Explore Features</Button>
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              View on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
