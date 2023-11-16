export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      }
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of product',
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category of product',
      to: [{type: 'category'}],
    }
  ]
}