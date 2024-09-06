import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer
      id="footer"
      className="py-24 sm:py-32 bg-neutral-50 drop-shadow-md shadow-primary"
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <h3 className="text-2xl">🎉 My Perfect Event</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Aide</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Nous contacter
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Retours d&apos;expérience
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Réseaux sociaux</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                X
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                TikTok
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; {new Date().getFullYear()} My Perfect Event
          </h3>
        </section>
      </div>
    </footer>
  );
};
