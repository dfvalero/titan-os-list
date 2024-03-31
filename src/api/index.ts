import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetGenreContentsParams, GetGenreContentsResponse } from './types';

// Define a service using a base URL and expected endpoints
export const titanOSApi = createApi({
    reducerPath: 'titanOS',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://acc01.titanos.tv/v1' }),
    endpoints: (builder) => ({
        getGenreContents: builder.query<GetGenreContentsResponse, GetGenreContentsParams>({
            query: ({ id, params }) => {
                const baseParams = { market: 'es', device: 'tv', locale: 'es' };
                const parsedParams = { page: `${params.page}`, per_page: `${params.itemsPerPage}` };
                const urlParams = new URLSearchParams({ ...baseParams, ...parsedParams });

                return `genres/${id}/contents?${urlParams.toString()}`;
            },
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            merge: (currentCache, newItems) => {
                if (currentCache) {
                    return {
                        collection: [...currentCache.collection, ...newItems.collection],
                        pagination: newItems.pagination,
                    };
                }
                return newItems;
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGenreContentsQuery } = titanOSApi;
