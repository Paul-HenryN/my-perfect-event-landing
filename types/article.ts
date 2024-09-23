export type Article = {
  contentTypeId: string;
  fields: {
    slug: string;
    title: string;
    content: Record<string, unknown>;
  };
};
