import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.tsx";

import { Card, CardContent } from "@/components/ui/card.tsx";

export function CarouselDemo() {
  return (
    <Carousel className="w-1/2">
      <CarouselContent className="mt-2 p-5">
        {Array.from({ length: 4 }).map(
          (
            _, // eslint-disable-line no-unused-vars
            index // Array.from because we need to map over an array of undefined values
          ) => (
            <CarouselItem
              className="basis-1/2 sm:basis-1/3 lg:basis-1/5"
              key={index}
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-4">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )
        )}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Carousel;
