import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { contentful } from "@/lib/contentful";
import { Article } from "@/types/article";
import { ArrowRightIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | My Perfect Event",
  description: "Retrouvez ici tous nos bons plans, nos conseils et astuces.",
  openGraph: {
    title: "Blog | My Perfect Event",
    description: "Retrouvez ici tous nos bons plans, nos conseils et astuces.",
    url: "https://my-perfect-event.com/blog",
  },
};

function PostSnippet({
  title,
  slug,
  createdAt,
}: {
  title: string;
  slug: string;
  createdAt: string;
}) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">{title}</h2>
      </CardHeader>

      <CardFooter className="flex items-end justify-between gap-9">
        <p className="text-sm text-muted-foreground">
          {" "}
          Publié le{" "}
          <time dateTime="2023-01-01">
            {new Date(createdAt).toLocaleDateString()}
          </time>
        </p>

        <Button variant="primary" asChild>
          <Link href={`/blog/${slug}`} className="flex items-center gap-2">
            Lire
            <ArrowRightIcon className="ml-2 size-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default async function BlogPage() {
  const entries = await contentful.getEntries<Article>({
    content_type: "article",
  });

  return (
    <main className="container py-20 max-w-screen-xl">
      <h1>Blog</h1>
      <p>Retrouvez ici tous nos bons plans, nos conseils et astuces.</p>

      <Separator className="my-10" />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
        {entries.items.map((article) => (
          <article key={article.sys.id}>
            <PostSnippet
              title={article.fields.title as string}
              slug={article.fields.slug as string}
              createdAt={article.sys.createdAt as string}
            />
          </article>
        ))}
      </div>
    </main>
  );
}
