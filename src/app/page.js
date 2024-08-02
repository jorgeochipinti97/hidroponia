'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  ChartSpline,
  Droplet,
  Leaf,
  PiggyBank,
  Shovel,
  Sprout,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();

  const featured = [
    {
      title: "Crecimiento Rápido de las Plantas",
      description:
        "Las plantas crecen más rápido y en menos tiempo que en un huerto tradicional gracias al sistema hidropónico. Esto se debe a que el sistema proporciona directamente a las plantas los nutrientes que necesitan para su desarrollo acelerado.",
      icon: <Sprout className="mr-2" />,
    },
    {
      title: "Nutrición Eficiente",
      description:
        "El sistema hidropónico suministra a las plantas los nutrientes necesarios de manera eficiente y rápida, optimizando su crecimiento y salud.",
      icon: <ChartSpline className="mr-2" />,
    },
    {
      title: "Negocio Rentable",
      description:
        "La hidroponía es un negocio sumamente rentable, permitiendo ahorrar hasta un 80% en agua. Además, puedes cosechar durante todo el año, asegurando una producción constante y sostenible.",
      icon: <Droplet className="mr-2" />,
    },
    {
      title: "Adaptabilidad de Espacio",
      description:
        "No importa si tienes espacio suficiente o no, existen sistemas horizontales y verticales que se adaptan a tus necesidades. Incluso si vives en un apartamento en la ciudad, puedes tener tu propio huerto hidropónico.",
      icon: <Shovel className="mr-2" />,
    },
    {
      title: "Ahorro en Costos",
      description:
        "Con el incremento del 200% en el costo de los vegetales en los mercados, producir tus propios vegetales se convierte en una opción económica y sostenible. Ahorra dinero y disfruta de alimentos frescos y saludables directamente desde tu hogar.",
      icon: <PiggyBank className="mr-2" />,
    },
  ];

  const handleClick = () => {
    push("https://go.hotmart.com/Y94718196F?ap=9d29");
  };

  return (
    <main className="bg-black">
      <div className="h-[10vh] w-screen fixed bottom-0 bg-green-950/90 rounded-t-xl z-50">
        <div className="flex items-center h-full justify-around">
          <div className="flex flex-col">
            <span className="text-white font-bold">+2535 alumnos</span>
            <span className="text-white font-bold text-xs">
              Oferta disponible hasta el 5/8
            </span>
          </div>
          <Button onClick={handleClick}>
            <Leaf className="mr-2" /> Ser parte
          </Button>
        </div>
      </div>
      <div className="bg-green-200 h-fit pb-10 rounded-b-[20px] w-screen">
        <p className="text-4xl md:text-7xl font-bold text-center text-gray-950 tracking-tighter pt-10">
          EL CURSO MÁS VENDIDO DE HABLA HISPANA
        </p>
        <p className=" md:text-4xl  tracking-tighter mx-5 text-center text-gray-800 pt-10">
          APRENDE CON NUESTRO CURSO <br />
          <span className=" text-sky-900 font-bold md:text-5xl text-xl">
            {" "}
            PASO A PASO
          </span>{" "}
        </p>

        <div className="flex justify-center mt-10">
          <div className="flex justify-center">
            <video
              src="/presentacion.mp4"
              className="w-10/12 md:w-8/12 rounded-xl"
              controls
            />
          </div>
        </div>
        <p className="text-center mt-10 text-2xl md:text-4xl  text-gray-950 tracking-tighter">
          CREA TU PROPIO HUERTO EN MENOS DE 15 DÍAS
        </p>
        <div className="flex justify-center mt-5">
          <Button size="lg" onClick={handleClick}>
            <Leaf className="mr-2" />
            Ver oferta
          </Button>
        </div>
      </div>
      <p className="text-start text-white tracking-tighter md:text-4xl mx-5 my-10">
        Conoce el programa de{" "}
        <span className="font-bold text-green-200">
          {" "}
          CURSO COMPLETO DE HIDROPONÍA
        </span>{" "}
        y aprende las técnicas más prácticas para cultivar tus alimentos un 50%
        más rápido y en 4 veces menos espacio y ahorrando hasta un 80% de agua
        en comparación con los cultivos tradicionales en tierra.
      </p>
      <div className="bg-sky-200 h-fit rounded-t-[20px] rounded-b-[20px]">
        <p className="text-2xl md:text-7xl font-bold pt-10 tracking-tighter text-center mb-10  ">
          {" "}
          ¿Por qué tener una huerta de Hidroponía?
        </p>

        <div className=" grid-cols-1 md:grid-cols-2 grid ">
          <div className="ml-10">
            {featured.map((e) => (
              <div className="my-3" key={e.title}>
                <span className="flex items-center">
                  {e.icon}
                  <span className="font-bold md:text-2xl">{e.title}</span>
                </span>
                <p className="mt-2 text-xs md:text-xl tracking-tighter md:w-10/12">
                  {e.description}
                </p>
              </div>
            ))}
          </div>
          <div className="">
            <div>
              <p className="text-2xl font-bold tracking-tighter text-center mt-10 ">
                APRENDE A CREAR ESTOS INCREÍBLES HUERTOS Y MUCHO MÁS...
              </p>
            </div>
            <div className="flex justify-center md:flex-row flex-wrap flex-col items-center">
              <img src="1.webp" className="rounded-xl m-2" />
              <img src="2.webp" className="rounded-xl m-2" />
              <img src="3.jpg" className="rounded-xl m-2" />
              <img src="4.webp" className="rounded-xl m-2" />
            </div>
          </div>
          <div className="flex justify-center my-5">
            <Button onClick={handleClick}>
              <Leaf className="mr-2" /> Inscribirme ahora
            </Button>
          </div>
        </div>
      </div>
      <p className="text-xl mt-10 mx-5 mb-5 text-center text-white">
        Modalidad de estudio Nuestro curso es 100% online
      </p>
      <div className="flex justify-center">
        <p className="tracking-tighter text-white md:text-xl w-10/12">
          El curso está en una de las mejores Plataformas de Educación Digital.
          El acceso a la plataforma está disponible 24/7 desde cualquier
          dispositivo, puedes ESTUDIAR a tu propio ritmo sin presiones y lo
          mejor en tus tiempos libres sin salir de tu Hogar. Además, el acceso
          es ilimitado, incluyendo a las actualizaciones sin costo alguno.
          Puedes compartir tu acceso con tus familiares y aprender todos juntos.
        </p>
      </div>
      <div className="my-10 bg-yellow-300 py-10 rounded-b-[20px] rounded-t-[20px]">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-6 text-center tracking-tighter">
            ¿Qué vas a lograr?
          </h2>
          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Contexto Histórico</h3>
              <p className="text-gray-700">
                Sumérgete en los inicios de las técnicas hidropónicas y
                comprende su evolución para tener una base sólida en el tema.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Dominio de Sustratos
              </h3>
              <p className="text-gray-700">
                Aprende sobre los principales sustratos usados en hidroponía,
                tanto orgánicos como minerales, y cómo elegir el mejor para tus
                cultivos.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Selección de Cultivos
              </h3>
              <p className="text-gray-700">
                Descubre qué cultivos son ideales para las técnicas hidropónicas
                y cuál es la técnica más adecuada para cada tipo de planta.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Diversas Técnicas de Cultivo
              </h3>
              <p className="text-gray-700">
                Familiarízate con diferentes métodos de cultivo hidropónico,
                como NFT, raíz flotante, cultivo en sustrato, entre otros.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Preparación de Soluciones Nutritivas
              </h3>
              <p className="text-gray-700">
                Aprende a preparar soluciones nutritivas y accede a fórmulas
                generales para nutrir tus plantas de manera óptima.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Control Natural de Plagas
              </h3>
              <p className="text-gray-700">
                Descubre cómo elaborar repelentes naturales para proteger tus
                cultivos de plagas y enfermedades sin químicos nocivos.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Capacitación Flexible
              </h3>
              <p className="text-gray-700">
                Capacítate desde la comodidad de tu hogar, adaptando el
                aprendizaje a tu ritmo y disponibilidad.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Emprendimiento Hidropónico
              </h3>
              <p className="text-gray-700">
                Inicia y desarrolla tu propio proyecto hidropónico,
                convirtiéndote en un emprendedor del cultivo sostenible.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Certificación Reconocida
              </h3>
              <p className="text-gray-700">
                Al finalizar el curso, obtén un certificado avalado por Hotmart
                que respalda tu conocimiento y habilidades en hidroponía.
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center tracking-tighter">
          ¿Cómo lo vas a lograr?
        </h2>
        <p className="text-center mb-10 mx-5 text-xl tracking-tighter font-semibold">
          A través de un programa completo con más de 27 clases en formato video
          prácticas.
        </p>
        <div className="flex justify-center mb-5">
          <Button onClick={handleClick}>
            <Leaf className="mr-2" /> Comenzar ya
          </Button>
        </div>
        <Accordion className="w-10/12 ml-5">
          <AccordionItem value="modulo1">
            <AccordionTrigger>Módulo 1: Bienvenida</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>
                  Clase 1: Aprenderás cuales son las temáticas a tratar en el
                  curso
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modulo2">
            <AccordionTrigger>
              Módulo 2: Introducción a la hidroponía
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Clase 2: Contexto e inicios de la hidroponía.</li>
                <li>Clase 3: Ventajas y desventajas de la hidroponía.</li>
                <li>
                  Clase 4: ¿Qué se puede cultivar en hidroponía? Preparación de
                  semilleros.
                </li>
                <li>
                  Clase 5: Factores importantes en los cultivos hidropónicos y
                  calibración de potenciómetro
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modulo3">
            <AccordionTrigger>
              Módulo 3: Elaboración de soluciones nutritivas
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Clase 6: Concepto de solución nutritiva</li>
                <li>
                  Clase 7: Materias primas a usar para la elaboración de SN.
                </li>
                <li>
                  Clase 8: Manejo de la herramienta de Excel para el cálculo de
                  SN.
                </li>
                <li>Clase 9: Ejemplo de elaboración de SN.</li>
                <li>
                  Clase 10: Ejemplo preparación de solución nutritiva comercial
                </li>
                <li>Clase 11: Formulación SN FAO, como elaborarla.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modulo4">
            <AccordionTrigger>
              Módulo 4: Manejo de plagas y enfermedades comunes
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Clase 12: Definiciones de plagas y enfermedades.</li>
                <li>Clase 13: Daños ocasionados por plagas y enfermedades</li>
                <li>
                  Clase 14: Elaboración de biopreparados para el control de
                  plagas y enfermedades
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modulo5">
            <AccordionTrigger>
              Módulo 5: Técnicas hidropónicas ejemplos
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Clase 15: Construir sistema de Raíz flotante Ejemplo</li>
                <li>Clase 16: Cama o mesa de cultivo en sustrato.</li>
                <li>Clase 17: Sistema de sustrato en bolsa.</li>
                <li>Clase 18: cilantro en diferentes sistemas</li>
                <li>
                  Clase 19: Seguimiento a cultivo de cilantro desde la siembra.
                </li>
                <li>Clase 20: Recorrido por policultivo hidropónico.</li>
                <li>Clase 21: Cultivos de participante del curso ejemplo.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modulo6">
            <AccordionTrigger>
              Módulo 6: Masterclass de hidroponía
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Lección 22: Conoce los Cultivos Hidropónicos</li>
                <li>Lección 23: Video de los participantes del curso</li>
                <li>Lección 24: Manual Práctico</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modulo7">
            <AccordionTrigger>
              Módulo 7: Nuevo contenido (actualizado)
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Lección 25: Calibración, Potenciómetro y PHmetro</li>
                <li>
                  Lección 26: Preparación de una solución Comercial – Ejemplo
                </li>
                <li>Lección 27: Como hacer un sistema Vertical Aeropónico</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modulo8">
            <AccordionTrigger>
              Módulo 8: Forraje Verde Hidropónico
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>
                  Lección 28: Pasos para producir forraje de calidad & ejem
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <p className=" text-white text-center text-4xl md:text-7xl">
        ¡Oferta disponible hasta el 5/8!
      </p>

      <div className="flex justify-center mt-5">
        <img src="/oferta.jpeg" className="rounded-xl md:w-auto w-10/12" />
      </div>
      <div className="mt-10 rounded-t-[20px] rounded-b-[20px] bg-red-200">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Bonos Exclusivos
          </h2>
          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                BONO #1: Acceso Grupos Privados
              </h3>
              <p className="text-gray-700 mb-4">
                ¡Acceso VIP a los Grupos exclusivos de WhatsApp, Telegram y
                Facebook donde podrás interactuar con otros miembros de la
                comunidad de Hidroponía más grande de habla hispana!
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Grupos de Hidroponía</li>
                <li>Grupos de Huertos Caseros</li>
                <li>Grupos de Forraje Verde Hidropónico</li>
              </ul>
              <p className="text-green-600 font-bold mt-4">Valor = ($25)</p>
              <p className="text-red-600 font-bold">HOY = GRATIS</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                BONO #2: Biblioteca Virtual
              </h3>
              <p className="text-gray-700 mb-4">
                Conjunto de libros sobre hidroponía donde descubrirás cómo
                producir alimentos limpios en casa y, por qué no, emprender un
                negocio con ello.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Acceso a mi Biblioteca personal con libros y videos que
                  utilizo en mi vida diaria con más de 2000 Documentos
                  recopilados.
                </li>
                <li>
                  Los Ebooks más importantes para reforzar tus conocimientos
                </li>
              </ul>
              <p className="text-green-600 font-bold mt-4">Valor = ($25)</p>
              <p className="text-red-600 font-bold">HOY = GRATIS</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                BONO #3: Herramientas de Excel
              </h3>
              <p className="text-gray-700 mb-4">
                Este bonus es increíble! Obtendrás un pack de herramientas de
                Excel que te ayudarán a formular tu propia solución nutritiva
                para cada diferente tipo de cultivo. Solo debes ingresar algunos
                datos clave como la concentración que deseas obtener y
                automáticamente tendrás la cantidad en gramos de cada sal para
                una correcta preparación de soluciones nutritivas.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Cálculos para diferentes tipos de cultivos</li>
                <li>Herramientas poderosas y fáciles de usar</li>
                <li>
                  Se más preciso a la hora de aplicar tus soluciones nutritivas
                </li>
              </ul>
              <p className="text-green-600 font-bold mt-4">Valor = ($25)</p>
              <p className="text-red-600 font-bold">HOY = GRATIS</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                BONO #4: Asesoría Personalizada
              </h3>
              <p className="text-gray-700 mb-4">
                Al inscribirte en el curso vas a recibir UN BONO GRATUITO con
                una Asesoría y acompañamiento en tu proyecto hidropónico de
                hortalizas o FVH que nadie más te puede ofrecer. De esta forma
                no vas a estar solo en tu proyecto, siempre contarás con el
                acompañamiento profesional.
              </p>
              <p className="text-green-600 font-bold mt-4">Valor = ($250)</p>
              <p className="text-red-600 font-bold">HOY = GRATIS</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                BONO #5: Certificado de Finalización
              </h3>
              <p className="text-gray-700">
                Una vez culmines el programa vas a recibir un certificado de
                finalización que demuestra tus habilidades como un experto en el
                oficio de la hidroponía.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10">
        <p className=" text-white ml-10 text-2xl tracking-tighter">
          Aprende desde cero.
        </p>
        <p className=" text-white ml-10 w-10/12 mt-2 text-md tracking-tighter">
          Si usted está interesado en cultivar tus alimentos y aún no cómo
          empezar yo te enseñaré todos lo que necesitas para llegar a tener un
          Huerto hidropónico sostenible y produzca sus propias hortalizas y
          plantas como un profesional utilizando este gran método sin pagar los
          altos honorarios y lo mejor lo vas a aprender de un agrónomo
          profesional.
        </p>
      </div>
      <div className="bg-fuchsia-200 rounded-t-[20px] rounded-b-[20px] mx-auto px-4 py-8">
        {/* Acerca del Productor */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Acerca del Productor
          </h2>
          <div className="flex justify-center ">
            <div className="flex justify-center bg-white rounded-full w-fit mb-5">
              <img src="/productor.webp" className="rounded-full" />
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              "Soy Ingeniero Agroindustrial, graduado en la Universidad de Los
              Llanos en Colombia, manejo cultivos hidropónicos NFT desde hace
              más de 4 años, específicamente desde marzo del 2018. Actualmente,
              trabajo en el Departamento del Meta en Colombia, brindando
              asesorías en el área de hortalizas (pimentón, cilantro, tomate,
              albahaca, orégano, entre otras) y alimentación animal con forraje
              verde hidropónico."
            </p>
            <p className="text-gray-700">
              Este es mi día a día y ahora quiero compartir contigo todos mis
              conocimientos y experiencia para que puedas tener tu Huerta
              Hidropónica con éxito.
            </p>
          </div>
        </section>

        {/* Aprende la Técnica Agrícola del Futuro */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">
            Aprende la Técnica Agrícola del Futuro
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              Entre las ventajas de esta técnica, están:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Cultivos libres de parásitos, bacterias, hongos, y contaminación
              </li>
              <li>Reducción de los costos de producción</li>
              <li>
                Independencia de los fenómenos climatológicos (verano e
                invierno)
              </li>
              <li>Permite producir cosechas fuera de tiempo</li>
              <li>Se produce en menor espacio más cantidad de vegetales</li>
            </ul>
          </div>
        </section>
      </div>
      <p className="text-white text-center text-2xl font-bold mb-5 mt-10">
        Estos son los resultados que están teniendo nuestros estudiantes
      </p>
      <div className="flex flex-wrap justify-around">
        <div className="flex flex-col  text-white m-2 items-center">
          <img src="/lechugaflotante.jpg" className="rounded-xl mx-2" />
          <div className="flex justify-center">
            <p className="tracking-tighter mt-2 w-10/12">
              Lechuga en raíz flotante
            </p>
          </div>
        </div>
        <div className="flex flex-col  text-white m-2 items-center">
          <img src="/lechugaverti.jpg" className="rounded-xl mx-2" />
          <div className="flex justify-center">
            <p className="tracking-tighter mt-2 w-10/12">
              Lechugas en vertical
            </p>
          </div>
        </div>
        <div className="flex flex-col  text-white m-2 items-center">
          <img src="/resiclando.jpg" className="rounded-xl mx-2" />
          <div className="flex justify-center">
            <p className="tracking-tighter mt-2 w-10/12">
              Sistema HIDROPÓNICO resiclando
            </p>
          </div>
        </div>
      </div>

      <p>¿Tenés alguna consulta?</p>
      <div className="flex justify-center ">
        <div>
          <Button size="lg" onClick={() => push("https://wa.link/6nvgae")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              className="mr-2"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#f5f5f7"
                fillRule="evenodd"
                d="M3.5 12a8.5 8.5 0 118.5 8.5 8.455 8.455 0 01-4.542-1.314 1 1 0 00-.821-.113l-2.88.859 1.085-2.537a1 1 0 00-.07-.92A8.456 8.456 0 013.5 12zM12 1.5C6.201 1.5 1.5 6.201 1.5 12c0 1.838.473 3.568 1.305 5.073L1.08 21.107a1 1 0 001.206 1.351l4.5-1.342A10.456 10.456 0 0012 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5zm2.293 12.682l-1.315.926A9.338 9.338 0 0111 13.585a10.202 10.202 0 01-1.624-2.114l.835-.709a1 1 0 00.236-1.232l-1.064-2a1 1 0 00-1.54-.283l-.316.275c-.759.662-1.208 1.75-.836 2.852A12.049 12.049 0 009.586 15c1.813 1.813 3.655 2.527 4.733 2.805.868.223 1.689-.076 2.268-.548l.591-.482a1 1 0 00-.12-1.634l-1.678-1a1 1 0 00-1.088.041z"
                clipRule="evenodd"
              ></path>
            </svg>
            Contactanos
          </Button>
        </div>
      </div>
<div className='flex justify-center flex-col md:flex-row items-center'>
<img src='testimonio.webp' className='w-10/12 md:w-[30vw] md:mx-5 rounded-xl my-5'/>
<img src='testimonio1.webp' className='w-10/12 md:w-[30vw] md:mx-5 rounded-xl my-5'/>
</div>

      <div className="container mx-auto bg-green-200  px-4 py-8 mt-10 pb-28 rounded-b-[20px] rounded-t-[20px]">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Preguntas Frecuentes
          </h2>
          <Accordion>
            <AccordionItem value="faq1">
              <AccordionTrigger>
                ¿Puedo hacer el curso si no sé nada de hidroponía?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Claro que sí, todos los videos son muy explicativos y
                  realmente lo que necesitas son ganas. Todo el proceso es muy
                  sencillo y utilizarás herramientas muy sencillas.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq2">
              <AccordionTrigger>
                ¿Si tengo un espacio pequeño, se puede armar el proyecto
                hidropónico?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Sí, realmente nuestro objetivo es que sin importar el espacio
                  que tengas, puedas crear tu proyecto. Nuestro método permite
                  ubicar unidades hidropónicas donde más te guste. Puedes
                  diseñar hidroponía a tu medida.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq3">
              <AccordionTrigger>¿Qué formas de pago hay?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Puedes pagar con tarjeta de crédito, PayPal, y en algunos
                  países se presentan otras formas de pago como pago en efectivo
                  en algunos establecimientos o puntos de recaudo.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq4">
              <AccordionTrigger>¿Cuándo comienza el curso?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Cuando compras el curso, recibes un enlace de acceso y una
                  clave que te permite entrar a la plataforma y hacer el curso
                  en el momento que lo desees; te queda habilitado de por vida.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq5">
              <AccordionTrigger>¿Nos dan un certificado?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Claro que sí, una vez hayas finalizado y nos hayas escrito por
                  correo solicitándolo, te enviaremos el certificado.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq6">
              <AccordionTrigger>¿Cómo aclaro mis dudas?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Vas a tener acceso al número de WhatsApp del creador del curso
                  y por ese medio recibirás la asesoría personalizada.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </main>
  );
}
