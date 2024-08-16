"use client";
import { MenuIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SearchInput } from "@/components/search-input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(true);

  useEffect(() => {
    const mainSearchInput = document.getElementById("main-search");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsSearchVisible(true);
        } else {
          setIsSearchVisible(false);
        }
      });
    });

    if (mainSearchInput) {
      observer.observe(mainSearchInput);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-neutral-50 sticky top-0 z-50 py-5">
      <header
        className={cn(
          "container mx-auto rounded-2xl flex justify-between items-center"
        )}
      >
        <Link href="/" className="font-bold text-lg flex items-center">
          <span className="mr-2 text-4xl">🎉</span>
          My Perfect Event
        </Link>

        {/* Mobile */}
        <div className="flex items-center lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
            >
              <div>
                <SheetHeader className="mb-4 ml-4">
                  <SheetTitle className="flex items-center mb-5">
                    <Link
                      href="/"
                      className="font-bold text-lg flex items-center"
                    >
                      <span className="mr-2 text-4xl">🎉</span>
                      My Perfect Event
                    </Link>
                  </SheetTitle>
                </SheetHeader>
              </div>

              <form>
                <SearchInput
                  className="py-7"
                  placeholder="Rechercher un service"
                  buttonProps={{
                    className: "",
                  }}
                />
              </form>

              <nav className="mt-10">
                <ul className="flex flex-col">
                  <li>
                    <Button className="w-full justify-start">
                      Se connecter
                    </Button>
                  </li>

                  <li>
                    <Button className="w-full justify-start">
                      Devenir prestataire
                    </Button>
                  </li>

                  <li>
                    <Accordion
                      type="single"
                      collapsible
                      className="bg-transparent"
                    >
                      <AccordionItem
                        value="categories"
                        className="bg-transparent border-none"
                      >
                        <AccordionTrigger className="text-sm">
                          Parcourir les catégories
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-3">
                            <li>
                              <Button className="w-full justify-start">
                                Coiffure
                              </Button>
                            </li>

                            <li>
                              <Button className="w-full justify-start">
                                Event planning
                              </Button>
                            </li>

                            <li>
                              <Button className="w-full justify-start">
                                Animation
                              </Button>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>

                  <li className="mt-5">
                    <Button variant="primary" className="w-full h-14">
                      🎉 S&apos;inscrire
                    </Button>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop */}
        {!isSearchVisible && (
          <form className="hidden lg:block w-1/3">
            <SearchInput
              placeholder="Rechercher un service"
              className="py-5"
              buttonProps={{
                size: "lg",
                className: "right-0",
              }}
            />
          </form>
        )}

        <div className="hidden lg:flex gap-5">
          <Button asChild>
            <Link href="#">Devenir prestataire</Link>
          </Button>

          <Button variant="secondary" asChild>
            <Link href="#">Connexion</Link>
          </Button>

          <Button variant="primary" asChild>
            <Link href="#">Inscription</Link>
          </Button>
        </div>
      </header>
    </div>
  );
};
