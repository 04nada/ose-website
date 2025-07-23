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
            newsPostImages {
                images {
                    id
                }
            }
        }
    }
    mediaItems {
        nodes {
            databaseId
            altText
            mediaItemUrl
        }
    }
}
`;
// todo: fetching mediaItems might get problematic once there are many images

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
        const images = responseObj.data.mediaItems.nodes;

        /*
            [{
                databaseId: X1
                altText: Y1
                mediaItemUrl: Z1
            },
            {
                databaseId: X2
                altText: Y2
                mediaItemUrl: Z2
            }]

            becomes

            {
                X1: {
                    src: Z1
                    alt: Y1
                },
                X2: {
                    src: Z2
                    alt: Y2
                }
            }
        */
        const imageAltTexts = images.reduce(
            (map: { [id: string]: { src: string, alt: string; }; }, obj: { databaseId: string; mediaItemUrl: string, altText: string; }) => {
                {map[obj.databaseId] = {
                        src: obj.mediaItemUrl,
                        alt: obj.altText
                    }
                };
                return map;
            },
            {}
        );

        for (const item of posts) {
            if (params.slug === item.newsPostFields.page) {
                return {
                    title: item.newsPostFields.title,
                    content: item.newsPostFields.content,
                    datePublished: item.newsPostFields.datePublished,
                    dateModified: item.newsPostFields.dateModified,
                    images: item.newsPostImages.images.map(
                        (image: { id: string }) => imageAltTexts[image.id]
                    ),
                };
            }
        };
    }

    error(404, 'Not found');
};