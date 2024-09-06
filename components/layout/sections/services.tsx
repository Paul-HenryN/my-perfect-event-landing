import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: " Votre Visibilité boostée",
    description:
      "Un référencement de qualité pour vous trouvez grâce à une simple recherche Google",
    pro: 0,
  },
  {
    title: "Une Gestion fluide des réservations",
    description:
      "Vos réservations sont plus organisées grâce à notre calendrier automatisé.",
    pro: 0,
  },
  {
    title: "Des transactions sécurisées",
    description: "Vos clients payent une partie avant le début du service",
    pro: 0,
  },
  {
    title: "Analyse et suivi des performances",
    description:
      "Accédez à des statistiques détaillées sur vos prestations, vos avis et votre chiffre d'affaires.",
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="container py-24 sm:py-32 flex flex-col items-center"
    >
      <p className="text-lg text-primary text-center mb-2 tracking-wider">
        Avantages
      </p>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Si vous proposez vos services
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Boostez votre business en mettant en avant vos compétences
        professionelles. Simplifiez votre organisation grâce à des outils
        adaptés.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Button variant="primary" size="xl" className="mt-20" asChild>
        <a href={`${process.env.NEXT_PUBLIC_APP_URL}/register`}>
          Devenir prestataire
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </section>
  );
};
