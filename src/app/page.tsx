"use client"

import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Logo from '../../public/psiconexion-logo.svg'
import { SiGmail } from "react-icons/si"
import { BsArrowDown } from "react-icons/bs"

const COMPANY_NAME = "Psiconexion"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center fixed w-full z-20 top-0 start-0 bg-white bg-opacity-50">
        <Link className="flex items-center justify-center" href="/">
          <Image src={Logo}
            alt="Logo"
            height="64"
            width="192"
          />
          <span className="sr-only">{COMPANY_NAME}</span>
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

        <Filosofia />

        <Contacto />
      </main >
      <Footer />
    </div >
  )
}

function Header() {
  return (
    <section id="header" className="w-full py-32 border-t">
      <div className="container grid items-center gap-6 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Cuida tu salud mental de manera remota
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
        <div className='flex flex-col lg:flex-row gap-4'>
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
  const parragraphs = [
    'Nosotros somos jóvenes orgullosamente sonorenses en busca de una meta, la cual es: contribuir a un desarrollo óptimo en la salud mental de la sociedad.',
    'Todo relacionado al análisis sistemático desde una perspectiva ética y profesional de los principios básicos de la psicología y de sus aplicaciones social, evolutiva y de la personalidad que explican el comportamiento humano.',
    'Nuestra preparación en la carrera de psicología educativa nos brindó herramientas necesarias para llevar a cabo intervenciones preventivas, promocionales y de rehabilitación psicoeducativa, todo esto orientado a potenciar el desarrollo de las capacidades del individuo, así como elaborar diagnósticos diferenciados adecuados a cada caso en diversos escenarios de psicología educativa, con pleno dominio de los fundamentos de la evaluación psicológica y pedagógica, manteniendo un comportamiento ético. De la misma manera empleamos las tecnologías de la comunicación, la información y software multimedia.',
  ]
  return (
    <section className="w-full py-24 md:py-24 lg:py-32 border-t">
      <div className="container flex flex-col items-center gap-9 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Conócenos</h2>
          <div className="flex flex-col gap-2">
            {parragraphs.map((paragraph, index) => (
              <p key={index} className="mx-auto max-w-[1000px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Filosofia() {
  const content = [
    {
      title: 'Objetivo',
      content: 'El objetivo de este proyecto es proporcionar acceso a servicios de consejería en psicología educativa de manera conveniente y asequible para una amplia gama de personas. Esto contribuirá a mejorar el bienestar emocional y académico de los estudiantes, fortalecer las relaciones entre padres e hijos, y apoyar a los educadores en el manejo de situaciones difíciles en el entorno educativo.'
    },
    {
      title: 'Beneficio social',
      content: 'El principal beneficio social de este proyecto es proporcionar acceso a servicios de consejería en psicología educativa de manera conveniente y asequible para una amplia gama de personas. Esto contribuirá a mejorar el bienestar emocional y académico de los estudiantes, fortalecer las relaciones entre padres e hijos, y apoyar a los educadores en el manejo de situaciones difíciles en el entorno educativo.'
    },
    {
      title: 'Misión',
      content: 'Brindar apoyo psicológico en forma de consejería respetando la ética y confidencialidad del usuario dentro del proceso de consejería a un costo accesible a las personas de Cajeme.'
    },
    {
      title: 'Visión',
      content: 'Ayudar a la sociedad de Cajeme, y en 5 años ampliarnos a otros estados de la república para ayudar a mejorar la calidad de vida de las personas.',
    },
    {
      title: 'Valores',
      content: 'Un espacio de confidencialidad y de trabajo responsable, empatico y respetuoso'
    }
  ]
  return (
    <section className="w-full py-24 border-t">
      <div className="container grid items-center gap-4 px-4 md:px-6 max-w-4xl">
        <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Filosofía</h2>
        {content.map((paragraph, index) => (
          <div key={index} className="flex flex-col gap-2">
            <p key={index} className="mb-3 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {paragraph.title}:
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              {paragraph.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contacto() {
  return (
    <section className="w-full py-12 border-t">
      <div className="container grid items-center gap-4 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="py-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contactanos</h2>
          <p className="pb-12 mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            ¿Listo para dar el primer paso hacia una mejor salud mental?
            <br className="sm:hidden lg:hidden xl:hidden" />
            Contáctenos para programar una cita o hacer cualquier pregunta sobre nuestros servicios.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2: lg:grid-cols-3 gap-4 items-center justify-center">
          <div className="flex flex-col gap-2">
            <ContactCard name="Alejandro Solís Bórquez" email="alejandro.solis.e@lasallenoroeste.edu.mx" />
          </div>
          <div className="flex flex-col gap-2">

            <ContactCard name="Joel Alberto Gastelum Ochoa" email="joelalbertogastelum@gmail.com" />
          </div>
          <div className="flex flex-col gap-2">
            <ContactCard name="Paolina Yoselyn Mendoza Huicosa" email="paolina.huicosa.e@lasallenoroeste.edu.mx" />
          </div>
        </div>
        <div className="mx-auto max-w-[600px] flex flex-col gap-4 justify-center items-center text-center">
          <div>
            <p>Dinámica de consejería</p>
          </div>
          <p>
            Llamar al celular <a href="tel:6444511543" className="underline">6444511543</a> o mandar un correo electrónico a <a href="mailto:joelalbertogastelum@gmail.com" className="underline">joelalbertogastelum@gmail.com</a> pidiendo información del programa.
          </p>
          <BsArrowDown className="w-6 h-6" />
          <p>
            Acordar mediante la llamada o el correo los horarios y fechas disponibles, la cuenta de banco para los pagos y el método de videollamada.
          </p>
          <BsArrowDown className="w-6 h-6" />
          <p>
            Teniendo acordados los puntos anteriores se espera al cliente para la primera sesión de consejería en línea.
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 {COMPANY_NAME}. Derechos reservados.
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


function ContactCard({ name, email }: { name: string, email: string }) {
  return (
    <Card>
      <CardHeader className="border-b-[1px] border-gray-200">
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="pt-3 flex gap-2 items-center">
        <span><SiGmail /></span>
        <a href={`mailto:${email}`} className="underline sm:text-lg md:text-md lg:text-sm">{email}</a>
      </CardContent>
    </Card>
  )
}