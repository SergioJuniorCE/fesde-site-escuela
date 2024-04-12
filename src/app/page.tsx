/* eslint-disable react/no-unescaped-entities */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4j35rpFjMT7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Therapists
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Your mental health matters
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We're here to help you navigate life's challenges. Let us help you find peace of mind.
              </p>
            </div>
            <div className="mx-auto w-full max-w-2xl space-y-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 md:px-6 lg:grid-cols-[1fr_600px] lg:gap-10">
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-4xl/none">Our Services</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We offer a range of services to support your mental health, including individual therapy, group
                  therapy, and workshops.
                </p>
              </div>
              <ul className="grid gap-4">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Individual Therapy</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      One-on-one sessions with a therapist to explore your thoughts and feelings.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Group Therapy</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Join a supportive group to connect with others and explore common issues.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Workshops</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Participate in interactive workshops to learn new skills and strategies for managing stress and
                      improving your well-being.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from our clients about their experience with our therapy services.
              </p>
            </div>
            <div className="mx-auto max-w-3xl grid gap-4 items-start lg:grid-cols-2 lg:gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-500/40">
                  “Therapy has been a life-changing experience for me. I feel more confident and better equipped to
                  handle the challenges of everyday life. The therapists at Acme Consultancy are compassionate and
                  understanding, and I always feel supported during my sessions. I highly recommend their services to
                  anyone looking to improve their mental well-being.”
                </p>
                <strong className="text-sm font-semibold">Alice Johnson</strong>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-500/40">
                  “The group therapy sessions have been incredibly valuable to me. I've been able to connect with others
                  who understand what I'm going through, and the support and encouragement I've received have made a
                  real difference in my life. I'm grateful to the team at Acme Consultancy for creating a safe and
                  welcoming space for us to share and grow together.”
                </p>
                <strong className="text-sm font-semibold">David Smith</strong>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Therapists</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our team of experienced therapists is dedicated to providing compassionate and effective care to our
                clients.
              </p>
            </div>
            <div className="mx-auto max-w-4xl grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col gap-2">
                <Image
                  alt="Image"
                  className="mx-auto rounded-full object-cover aspect-square overflow-hidden sm:order-last sm:aspect-none sm:w-full sm:h-400"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold">Dr. Sarah Adams</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dr. Adams is a licensed clinical psychologist with over 10 years of experience. She specializes in
                    cognitive-behavioral therapy and has helped many clients overcome anxiety, depression, and trauma.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Image
                  alt="Image"
                  className="mx-auto rounded-full object-cover aspect-square overflow-hidden sm:order-last sm:aspect-none sm:w-full sm:h-400"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold">Dr. Mark Chen</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dr. Chen is a licensed marriage and family therapist with expertise in relationship counseling. He
                    is known for his empathetic approach and has helped couples improve communication and strengthen
                    their bonds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Ready to take the first step towards better mental health?
                <br className="sm:hidden lg:hidden xl:hidden" />
                Contact us to schedule an appointment or ask any questions about our services.
              </p>
            </div>
            <div className="mx-auto max-w-2xl space-y-4">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" required type="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" required />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Therapy Consultancy. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props: any) {
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