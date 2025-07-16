import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const queryPostIDs = `{
    newsPosts {
        nodes {
            newsPostFields {
                title
                page
                datePublished
                dateModified
                content
                previewImage {
                    node {
                        altText
                        mediaItemUrl
                    }
                }
            }
        }
    }
}
`;

const databaseUrl = new URL(import.meta.env.VITE_REST_API_URL);
databaseUrl.search = new URLSearchParams({query: queryPostIDs}).toString();

export const load: PageLoad = async ({ params, fetch }) => {
	if (params.slug === 'test') {
		return {
			title: 'This is the Office for Student Ethics.',
			content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit.Lorem ipsum dolor sit amet consectetur adipiscing elit.Lorem ipsum dolor sit amet consectetur adipiscing elit.Lorem ipsum dolor sit amet consectetur adipiscing elit.Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            datePublished: '07 July 2025',
            dateModified: '08 July 2025',
            images: [
                {
                    src: '/news1.jpg',
                    alt: 'Notice to the Public',
                },
                {
                    src: '/news2.jpg',
                    alt: 'Padayon 2025',
                },
            ],
        };
    }

    const response = await fetch(databaseUrl);
    if (response.ok) {
        const responseObj = await response.json();
        const posts = responseObj.data.newsPosts.nodes;

        for (const item of posts) {
            if (params.slug === item.newsPostFields.page) {
                return {
                    title: item.newsPostFields.title,
                    content: item.newsPostFields.content,
                    datePublished: Date.parse(item.newsPostFields.datePublished),
                    dateModified: Date.parse(item.newsPostFields.dateModified),
                    images: [
                        {
                            src: '/news1.jpg',
                            alt: 'Notice to the Public',
                        },
                        {
                            src: '/news2.jpg',
                            alt: 'Padayon 2025',
                        },
                    ],
                };
            }
        };
    }

    error(404, 'Not found');
};