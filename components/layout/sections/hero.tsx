"use client";
import AnimatedShinyText from "@/components/animated-shiny-text";
import { SearchInput } from "@/components/search-input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Slider, { Settings as SliderSettings } from "react-slick";
import Typewriter from "typewriter-effect";
import { Courgette } from "next/font/google";
import { Sofia } from "next/font/google";
import { cn } from "@/lib/utils";

const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
});

const galada = Sofia({
  subsets: ["latin"],
  weight: "400",
});

const sliderSettings: SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
};

export const HeroSection = () => {
  return (
    <section className="container w-full mt-16 lg:mt-36">
      <div className="text-center space-y-8 max-w-screen-md mx-auto">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 md:mb-10 text-start sm:text-center">
            Des{" "}
            <AnimatedShinyText className={cn(courgette.className)}>
              prestataires
            </AnimatedShinyText>{" "}
            sur mesure pour votre
            <Typewriter
              options={{
                strings: [
                  "mariage.",
                  "anniversaire.",
                  "baptême.",
                  "cérémonie.",
                  "EVJF.",
                  "remise de diplôme.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="text-lg max-w-screen-sm mx-auto text-start sm:text-center">
            Que vous planifiiez un mariage, un anniversaire, ou une soirée
            d&apos;entreprise, nous vous connectons avec des professionnels
            qualifiés: DJs, traiteurs, photographes, et bien plus encore.
          </p>
        </div>

        <form id="main-search">
          <SearchInput
            placeholder="Quel service recherchez-vous ?"
            buttonProps={{
              size: "lg",
            }}
          />
        </form>
      </div>

      <div className="relative group mt-10 lg:mt-20">
        <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl" />

        <Slider {...sliderSettings}>
          <div className="p-1 relative">
            {/* <div className="absolute inset-1 bg-gradient-to-b from-transparent to-black/80 rounded-lg" /> */}

            <video autoPlay controls loop className="rounded-lg">
              <source src="https://videos.pexels.com/video-files/6004928/6004928-hd_1920_1080_30fps.mp4" />
            </video>

            <Link
              href="#"
              className="absolute top-3 md:top-3/4 left-1/2  -translate-x-1/2"
            >
              <Badge className="py-2 px-5 text-sm bg-white/10 backdrop-blur-sm border border-white/20">
                <Avatar className="mr-3">
                  <AvatarImage src="https://i.pravatar.cc/300" />
                </Avatar>

                <div>
                  <div className="truncate">Maureen Tueno</div>
                  <div className="truncate">Service traiteur</div>
                </div>
              </Badge>
            </Link>
          </div>

          <div className="p-1 relative">
            {/* <div className="absolute inset-1 bg-gradient-to-b from-black/20 to-black/80 rounded-lg" /> */}

            <video autoPlay controls loop className="rounded-lg">
              <source src="https://videos.pexels.com/video-files/7722215/7722215-uhd_3840_2160_25fps.mp4" />
            </video>

            <Link
              href="#"
              className="absolute top-3 md:top-3/4 left-1/2 -translate-x-1/2"
            >
              <Badge className="py-2 px-5 text-sm bg-white/10 backdrop-blur-sm border border-white/20">
                <Avatar className="mr-3">
                  <AvatarImage src="https://i.pravatar.cc/300" />
                </Avatar>

                <div>
                  <div className="truncate">Paul-Henry Ngounou</div>
                  <div className="truncate">DJ, animation</div>
                </div>
              </Badge>
            </Link>
          </div>
        </Slider>
      </div>
    </section>
  );
};
