import { z, defineCollection } from 'astro:content';

const offersCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			icon: image(),
		}),
});

export const collections = {
	offers: offersCollection,
};
