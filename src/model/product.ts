import { ProductResponse } from '../type/product.response.type';

export class ProductModel implements ProductResponse {
  ml_id: string;
  name: string;
  description: string;
  ml_created_at: string;
  is_favorite: boolean;
  images: string[];

  constructor(product: ProductResponse) {
    this.ml_id = product.ml_id;
    this.name = product.name;
    this.description = product.description;
    this.ml_created_at = product.ml_created_at;
    this.is_favorite = product.is_favorite;
    this.images = product.images;
  }

  replace<T extends ProductModel>(search: T): T | this {
    return search.ml_id === this.ml_id ? this : search;
  }
}
