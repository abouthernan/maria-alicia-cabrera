export interface ArticleType {
  id: number
  attributes: ArticleTypeAttributes
}

interface ArticleTypeAttributes {
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  image: Image
}

interface Image {
  data: Data
}

interface Data {
  attributes: DataAttributes
}

interface DataAttributes {
  url: string
}

// boocks
export interface BooksType {
  id: number
  attributes: BooksTypeAttributes
}

interface BooksTypeAttributes {
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  slug: string
  image: Image
  pdf: Image
}
