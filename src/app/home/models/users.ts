

export class Pagination {
    
        total: number;
        pages: number;
        page: number;
        limit: number;
      
}

export class User extends Pagination {
    data : [
        {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
    meta: Pagination
    }
]
}