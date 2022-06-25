import * as prismic from '@prismicio/client';
import { HttpRequestLike } from '@prismicio/client';

export interface PrismicConfig {
  req?: HttpRequestLike;
}

export function getPrismicClient(config: PrismicConfig): prismic.Client {
  const client = prismic.createClient(process.env.PRISMIC_API_ENDPOINT);

  return client;
}
