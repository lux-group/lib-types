export interface Link {
    href: string;
}
export interface Links {
    self: Link;
}
export interface ContentPagesResult {
    _links: Links;
    status: number;
    message: string;
    total: number;
    result: ContentPage[];
}
export interface ContentPageResult {
    status: number;
    message: string;
    result: ContentPage[];
}
export interface ContentPage {
    _links: Links;
    id: string;
    contentType: ContentType;
    createdAt: string;
    updatedAt: string;
    lang: string;
    fields: Fields;
}
export interface ContentType {
    type: string;
    linkType: string;
    id: string;
}
export interface Fields {
    title: string;
    destinationSubtitle: string;
    slug: string;
    headerImage: string;
    content?: Content;
    locations: string[];
    brand: Brand;
    metaTitle?: string;
    metaDescription?: string;
}
export interface Content {
    title: string;
    description: string;
    brand?: ContentBrand;
    videoUrl?: string;
}
export interface ContentBrand {
    fields: Brand;
}
export interface Brand {
    name: string;
}
