import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	if (params.slug === 'first-announcement') {
		return {
			title: 'This is the Office for Student Ethics.',
			content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            date_created: '07 July 2025',
            date_modified: '08 July 2025',
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

	error(404, 'Not found');
};