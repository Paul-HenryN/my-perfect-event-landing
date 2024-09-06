import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { ArrowRightIcon, icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Search",
    title: "Trouvez le bon prestataire",
    description:
      "Parcourez notre sélection de professionnels et trouvez celui qui correspond à vos besoins.",
  },
  {
    icon: "Mail",
    title: "Envoyez un message !",
    description:
      "Contactez les prestataires directement sur My perfect Event et obtenez plus d'informations sur leurs offres.",
  },
  {
    icon: "Calendar",
    title: "Fixez un rendez-vous",
    description:
      "Une fois que vous avez choisi votre prestataire, il vous sera possible de fixer un rendez-vous qui sera ajouté à votre calendrier.",
  },
  {
    icon: "Sparkle",
    title: "Et voilà !",
    description: "Vos convives en prendront plein les yeux.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container my-24 sm:my-60">
      <div className="grid grid-rows-[auto_auto] lg:grid-cols-2 place-items-center lg:gap-10 gap-y-10">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">
            Comment ça marche ?
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-xs md:max-w-md">
            Des services de qualité à portée de main.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Explorez notre catalogue et choisissez le service qui vous convient
            le mieux. Nous avons mis en place des critères de sélection pour
            vous aider à trouver les meilleurs prestataires pour votre
            événement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full row-span-2">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="w-full h-full flex justify-center lg:justify-start">
          <Button variant="primary" size="xl" className="mx-auto md:mx-0">
            Explorer les services <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
