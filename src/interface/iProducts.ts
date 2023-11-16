export interface ISimplifiedProduct {
  _id: string
  imageUrl: string
  price: number
  slug: string
  categoryName: string
  name: string
}

export interface IFullProduct {
  _id: string
  images: any
  price: number
  slug: string
  categoryName: string
  name: string
  description: string
  price_id: string
}
