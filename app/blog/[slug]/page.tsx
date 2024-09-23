import ScrollToTop from "@/components/scroll-to-top";
import { Separator } from "@/components/ui/separator";
import { contentful } from "@/lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const article = await contentful.getEntries({
    content_type: "article",
    "fields.slug": params.slug,
  });

  return {
    title: article.items[0].fields.title,
    description: article.items[0].fields.title,
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await contentful.getEntries({
    content_type: "article",
    "fields.slug": params.slug,
  });

  return (
    <main className="relative container py-10 grid lg:grid-cols-[3fr,1fr] gap-x-10">
      <article>
        <header className="flex flex-col lg:flex-col-reverse gap-5">
          {/* <h1 className="text-5xl font-bold">{article.data.title}</h1> */}

          <small className="text-base text-foreground/70 flex flex-col lg:flex-row gap-2">
            <span>
              Publié le{" "}
              <time dateTime="2023-01-01">
                {new Date(
                  article.items[0].sys.createdAt as string
                ).toLocaleDateString()}
              </time>
            </span>
          </small>
        </header>

        <Separator className="my-10" />

        <section
          className="article"
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(
              article.items[0].fields.content as any,
              {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: (node) =>
                    `<img src="${node.data.target.fields.file.url}" class="max-w-[60%]" />`,
                },
              }
            ),
          }}
        />
      </article>

      {/* <aside className="hidden lg:block relative">
        <div className="sticky top-[100px]">
          <h2 className="text-lg font-bold mb-2">Table des matières</h2>

          <ul className="ml-1 flex flex-col">
            <li>
              <Button asChild>
                <Link href="">Lorem ipsum dolor sit</Link>
              </Button>
            </li>

            <li>
              <Button asChild>
                <Link href="">Lorem ipsum dolor sit</Link>
              </Button>
            </li>

            <li>
              <Button asChild>
                <Link href="">Lorem ipsum dolor sit</Link>
              </Button>
            </li>

            <li>
              <Button asChild>
                <Link href="">Lorem ipsum dolor sit</Link>
              </Button>
            </li>
          </ul>
        </div>
      </aside> */}

      <ScrollToTop />
    </main>
  );
}
