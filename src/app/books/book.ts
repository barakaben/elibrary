export interface Book {
    id:number;
    title:string;
    authors:string[];
    cover_image:URL;
    pdf:URL;
    publisher:string;
    year:number;
    category?:string;
}
