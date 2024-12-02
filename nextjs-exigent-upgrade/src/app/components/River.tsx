import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { urlForImage } from '../sanity/client';
import { Bodoni_Moda, Lato } from 'next/font/google';
import Link from 'next/link';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
export function CarouselSize({persons}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="mx-auto items-center w-full max-w-6xl"
    >
      <CarouselContent className="px-8">

{persons.map((person, index) => (
             <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 text-center">
                <Link href={`team/${person.slug.current}`} className="">
                  <div className="border border-gray-300 h-[350px] w-[300px] px-4 mx-auto">
                    <div className={bodoni.className}>
                      <div className="mt-10 w-full flex justify-center">
                        <Image
                          src={urlForImage(person.image).quality(100).url()}
                          alt={person.name}
                          width={150}
                          height={150}
                          className="object-contain mx-auto"
                        />
                      </div>
                      <p className="text-3xl font-normal mt-2">{person.name}</p>
                      <div className={lato.className}>
                        <p className="text-[18px] italic mt-2 text-gray-600">
                          {person.title}
                        </p>
                        <p className="text-[18px] mb-12 text-gray-600">
                          {person.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
            {/* <div className="p-1 my-6">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div> */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
