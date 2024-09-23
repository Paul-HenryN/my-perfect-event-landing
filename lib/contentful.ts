import * as cf from "contentful";

export const contentful = cf.createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  environment: process.env.CONTENTFUL_ENVIRONMENT as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});
