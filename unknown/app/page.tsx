import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <>
      <section className="container flex items-center  min-h-screen">
        <div className="flex max-w-[980px]  mx-auto flex-col items-center gap-2 ">
          <h1 className="text-3xl font-extrabold  leading-tight tracking-tighter md:text-4xl">
            Make meetings across the borders with the power of AI
          </h1>
          <p className="p-4 text-lg text-muted-foreground">
            We provide perfomant video conferencing that provide realtime
            translation for you for free
          </p>
          <div className="flex space-x-2">
            <Link href="/signup" className={buttonVariants()}>
              Get started
            </Link>
            <Link
              href="/signup"
              className={buttonVariants({ variant: "outline" })}
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
      <div className="flex gap-4">
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </>
  )
}
