type GenreId = string;

export type GetGenreContentsParams = {
    id: GenreId;
    params: {
        page: number;
        itemsPerPage: number;
    };
};

type GenreContentImages = {
    artwork_portrait: string;
};

type GenreContent = {
    id: number;
    title: string;
    images: GenreContentImages | null;
};

type Pagination = {
    count: number;
    current_page: number;
    next_page: number | null;
    per_page: number;
    prev_page: number | null;
    total_count: number;
    total_pages: number;
};

export type GetGenreContentsResponse = {
    collection: GenreContent[];
    pagination: Pagination;
};
