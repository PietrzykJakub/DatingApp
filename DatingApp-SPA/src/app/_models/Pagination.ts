export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: null;
}

export class PaginationResult<T> {
    result: T;
    pagination: Pagination;
}
