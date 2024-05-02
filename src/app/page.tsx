/* eslint-disable react/no-unescaped-entities */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4j35rpFjMT7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Logo from '../../public/psiconexion-logo.svg'
import { EnvelopeClosedIcon } from "@radix-ui/react-icons"
import { SiGmail } from "react-icons/si"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Image src={Logo}
            alt="Logo"
            height="64"
            width="192"
          />
          <span className="sr-only">Psiconexion</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#consulta">
            Consulta
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#conocenos">
            Conócenos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contacto">
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <Header />

        <Consulta />

        <Conocenos />

        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <section id="header" className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container grid items-center gap-6 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Cuida tu salud mental de manera remota
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Estamos aquí para ayudarte a afrontar los desafíos de la vida. Permítenos ayudarte a encontrar la tranquilidad.
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Aparta tu consulta
          </Link>
        </div>
      </div>
    </section>
  )
}

function Consulta() {
  return (
    <section className="w-full py-24 border-t">
      <div className="container grid items-center gap-4 px-4 md:px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Consulta</h2>
        <div className="flex flex-row gap-4">
          <div className="max-w-[600px]">
            <p className="mb-3 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Precio por consulta
              El servicio de consultoría tiene un valor determinado de <span className="underline">$400</span> pesos por hora, que incluye las siguientes modalidades:
            </p>
            <p className="mb-3">
              Una hora de consejería tiene el mismo valor por una persona o por toda la familia, lo que distingue el precio es el tiempo de calidad.
            </p>
            <ul className="list-disc list-inside text-gray-500">
              <li>
                Consulta personal – se busca una promoción en la salud mental tomando en cuenta los cambios de hábitos y conductas, psicoeducación, toma de conciencia y desarrollo personal.
              </li>
              <li>
                Consulta Familiar – Se busca ayudar a mantener relaciones positivas dentro de una familia que está enfrentando una situación estresante o un episodio desgastante.
              </li>
              <li>
                Consulta en pareja – Se buscan herramientas orientadas a restablecer el equilibrio y la funcionalidad de la pareja que está sufriendo una crisis.
              </li>
              <li>
                Consulta por mediación – Se busca una comunicación afectiva, al igual que alcanzar soluciones consensuadas acerca de algún asunto de disputa interpersonal.
              </li>
            </ul>
          </div>
          <Image
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="400"
            src="/therapy.jpg"
            width="600"
          />
        </div>
      </div>
    </section>
  )
}

function Conocenos() {
  return (
    <section className="w-full py-24 md:py-24 lg:py-32 border-t">
      <div className="container grid items-center gap-4 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Conócenos</h2>
          <p className="mx-auto max-w-[1000px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Nosotros somos jóvenes orgullosamente sonorenses en busca de una meta, la cual es: contribuir a un desarrollo óptimo en la salud mental de la sociedad.
            Nuestra preparación en la carrera de psicología educativa nos brindó herramientas necesarias para llevar a cabo intervenciones preventivas, promocionales y de rehabilitación psicoeducativa, todo esto orientado a potenciar el desarrollo de las capacidades del individuo, así como elaborar diagnósticos diferenciados adecuados a cada caso en diversos escenarios de psicología educativa, con pleno dominio de los fundamentos de la evaluación psicológica y pedagógica, manteniendo un comportamiento ético. De la misma manera empleamos las tecnologías de la comunicación, la información y software multimedia.
            Todo relacionado al análisis sistemático desde una perspectiva ética y profesional de los principios básicos de la psicología y de sus aplicaciones social, evolutiva y de la personalidad que explican el comportamiento humano.
          </p>
        </div>
      </div>
    </section>
  )
}

function Contacto() {
  return (
    <section className="w-full py-24 border-t">
      <div className="container grid items-center gap-4 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contactanos</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            ¿Listo para dar el primer paso hacia una mejor salud mental?
            <br className="sm:hidden lg:hidden xl:hidden" />
            Contáctenos para programar una cita o hacer cualquier pregunta sobre nuestros servicios.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-2 gap-4 items-center justify-center">
          <div className="flex flex-col gap-2">
            <Card>
              <CardHeader className="border-b-[1px] border-gray-200">
                <CardTitle>Alejandro Solís Bórquez</CardTitle>
              </CardHeader>
              <CardContent className="pt-3 flex gap-2 items-center">
              <span><SiGmail /></span>
                <a href="mailto:alejandro.solis.e@lasallenoroeste.edu.mx" className="underline">alejandro.solis.e@lasallenoroeste.edu.mx</a>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-2">
            <Card>
              <CardHeader className="border-b-[1px] border-gray-200">
                <CardTitle>Joel Alberto Gastelum Ochoa</CardTitle>
              </CardHeader>
              <CardContent className="pt-3 flex gap-2 items-center">
                <span><SiGmail /></span>
                <a href="mailto:joelalbertogastelum@gmail.com" className="underline">joelalbertogastelum@gmail.com</a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
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
  )
}
