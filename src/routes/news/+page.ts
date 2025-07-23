import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const queryPostIDs = `{
    newsPosts {
        nodes {
            newsPostFields {
                title
                page
                datePublished
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

export const load: PageLoad = async ({ fetch }) => {
    const databaseUrl = new URL(import.meta.env.VITE_REST_API_URL);
    databaseUrl.search = new URLSearchParams({query: queryPostIDs}).toString();

    const response = await fetch(databaseUrl);

    if (response.ok) {
        const responseObj = await response.json();
        const posts = responseObj.data.newsPosts.nodes;

        return {
            posts
        };
    }

    return error(response.status, `Could not load ${URL}`);
};