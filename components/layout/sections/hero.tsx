"use client";
import AnimatedShinyText from "@/components/animated-shiny-text";
import { SearchInput } from "@/components/search-input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTheme } from "next-themes";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Des prestataires
              <AnimatedShinyText> sur mesure</AnimatedShinyText>
              pour vos <span>mariages.</span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`We're more than just a tool, we're a community of passionate
            creators. Get access to exclusive resources, tutorials, and support.`}
          </p>

          <form id="main-search">
            <SearchInput
              placeholder="Quel service recherchez-vous aujourd'hui ?"
              buttonProps={{
                size: "lg",
              }}
            />
          </form>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>

          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1 relative">
                  <div className="absolute inset-1 bg-gradient-to-b from-transparent to-black/80 rounded-lg" />

                  <video autoPlay loop className="rounded-lg">
                    <source src="https://videos.pexels.com/video-files/6004928/6004928-hd_1920_1080_30fps.mp4" />
                  </video>

                  <Link href="#" className="absolute bottom-10 right-10">
                    <Badge className="py-2 px-3 text-sm bg-white/10 backdrop-blur-sm border border-white/20">
                      <Avatar className="mr-3">
                        <AvatarImage src="https://i.pravatar.cc/300" />
                      </Avatar>

                      <div>
                        <div>Maureen Tueno</div>
                        <div>Service traiteur</div>
                      </div>
                    </Badge>
                  </Link>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="p-1 relative">
                  <div className="absolute inset-1 bg-gradient-to-b from-black/20 to-black/80 rounded-lg" />

                  <video autoPlay loop className="rounded-lg">
                    <source src="https://videos.pexels.com/video-files/7722215/7722215-uhd_3840_2160_25fps.mp4" />
                  </video>

                  <Link href="#" className="absolute bottom-10 right-10">
                    <Badge className="py-2 px-3 text-sm bg-white/10 backdrop-blur-sm border border-white/20">
                      <Avatar className="mr-3">
                        <AvatarImage src="https://i.pravatar.cc/300" />
                      </Avatar>

                      <div>
                        <div>Paul-Henry Ngounou</div>
                        <div>DJ, animation</div>
                      </div>
                    </Badge>
                  </Link>
                </div>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
