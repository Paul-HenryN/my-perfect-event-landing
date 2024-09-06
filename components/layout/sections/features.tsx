import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { ArrowRightIcon, icons } from "lucide-react";
import Link from "next/link";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "MessagesSquare",
    title: "Des retours d'expérience",
    description:
      "Grâce aux avis des anciens clients, vous savez si le prestataire est fiable et répond à vos attentes.",
  },
  {
    icon: "BadgeCheck",
    title: "Une gestion fluide des échanges",
    description:
      "Trouvez tous vos prestataires au même endroit et organisez votre évènement sans stress.",
  },
  {
    icon: "Clock",
    title: "Des heures de recherche économisées",
    description:
      "Plus besoin de fouiller en vain les réseaux sociaux, tapez juste un mot clé dans la barre de recherche.",
  },
  {
    icon: "BadgeEuro",
    title: "Des transactions sécurisées",
    description: "Payez sur notre plateforme et évitez les mauvaises surprises",
  },
  {
    icon: "Calendar",
    title: " Une visibilité sur les disponibilités des prestataires",
    description: "Trouvez les professionnnels qu'il faut, quand il faut.",
  },
  {
    icon: "BadgeCheck",
    title: "Des professionnels vérifiés",
    description:
      "Accédez à un réseau de prestataires sélectionnés avec soin pour garantir la qualité de vos événements.",
  },
];

export const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 flex flex-col items-center"
    >
      <p className="text-lg text-primary text-center mb-2 tracking-wider">
        Avantages
      </p>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Si vous organisez des événements
      </h2>

      <p className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Profitez de nombreux avantages qui simplifieront votre planning, vos
        réservations et votre organisation.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle className="text-center">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <Button variant="primary" size="xl" className="mt-20" asChild>
        <Link href="#">
          S&apos;inscrire
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </section>
  );
};
