/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/vGn1304MOXe
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Gabarito } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

gabarito({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-8 shadow-sm">
        <div className="container flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2 animate-fade-in-up" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Spreadsheet</span>
          </Link>
          <Button className="px-6 py-3 rounded-md bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors animate-fade-in-up delay-100">
            Get Started
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-16 md:py-28 lg:py-36">
          <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-4xl font-bold tracking-tight animate-fade-in-up delay-100">
                Unlock the Power of Spreadsheets
              </h1>
              <p className="text-muted-foreground text-lg animate-fade-in-up delay-200">
                Our intuitive spreadsheet tool makes data analysis a breeze. Collaborate with your team, automate
                workflows, and unlock insights with ease.
              </p>
              <div className="flex gap-4 animate-fade-in-up delay-300">
                <Button className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="px-6 py-3 rounded-md text-primary hover:bg-primary/10 transition-colors"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-up delay-400">
              <img
                src="/placeholder.svg"
                width="600"
                height="400"
                alt="Spreadsheet"
                className="rounded-lg shadow-lg"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section className="bg-muted py-16 md:py-28 lg:py-36">
          <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 animate-fade-in-up delay-100">
              <img
                src="/placeholder.svg"
                width="600"
                height="400"
                alt="Collaboration"
                className="rounded-lg shadow-lg"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
            </div>
            <div className="space-y-4 animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tight animate-fade-in-up delay-200">
                Collaborate with Your Team
              </h2>
              <p className="text-muted-foreground text-lg animate-fade-in-up delay-300">
                Share your spreadsheets, assign tasks, and track progress seamlessly. Our real-time collaboration
                features keep your team in sync.
              </p>
              <div className="flex gap-4 animate-fade-in-up delay-400">
                <Button className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  Try it Now
                </Button>
                <Button
                  variant="outline"
                  className="px-6 py-3 rounded-md text-primary hover:bg-primary/10 transition-colors"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-28 lg:py-36">
          <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tight animate-fade-in-up delay-100">
                Automate Your Workflows
              </h2>
              <p className="text-muted-foreground text-lg animate-fade-in-up delay-200">
                Streamline your processes with our powerful automation features. Create custom formulas, triggers, and
                actions to save time and boost productivity.
              </p>
              <div className="flex gap-4 animate-fade-in-up delay-300">
                <Button className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  Explore Automation
                </Button>
                <Button
                  variant="outline"
                  className="px-6 py-3 rounded-md text-primary hover:bg-primary/10 transition-colors"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-up delay-400">
              <img
                src="/placeholder.svg"
                width="600"
                height="400"
                alt="Automation"
                className="rounded-lg shadow-lg"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section className="bg-muted py-16 md:py-28 lg:py-36">
          <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 animate-fade-in-up delay-100">
              <img
                src="/placeholder.svg"
                width="600"
                height="400"
                alt="Insights"
                className="rounded-lg shadow-lg"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
            </div>
            <div className="space-y-4 animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tight animate-fade-in-up delay-200">
                Unlock Powerful Insights
              </h2>
              <p className="text-muted-foreground text-lg animate-fade-in-up delay-300">
                Our advanced analytics and visualization tools help you uncover hidden trends and make data-driven
                decisions with confidence.
              </p>
              <div className="flex gap-4 animate-fade-in-up delay-400">
                <Button className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  Explore Analytics
                </Button>
                <Button
                  variant="outline"
                  className="px-6 py-3 rounded-md text-primary hover:bg-primary/10 transition-colors"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-8 shadow-sm">
        <div className="container flex items-center justify-between">
          <p className="text-sm animate-fade-in-up">&copy; 2024 Spreadsheet</p>
          <nav className="flex items-center gap-4 animate-fade-in-up delay-100">
            <Link href="#" className="text-sm hover:underline underline-offset-4 transition-colors" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4 transition-colors" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4 transition-colors" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
