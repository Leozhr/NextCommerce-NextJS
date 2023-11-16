import CheckoutNow from '@/components/checkout'
import Gallery from '@/components/gallery'
import AddToBag from '@/components/tobag'
import { Button } from '@/components/ui/button'
import { IFullProduct } from '@/interface/iProducts'
import { client } from '@/utils/sanity'
import { Star, Truck } from 'lucide-react'

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
          _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name,
          price_id
      }`

  const data = await client.fetch(query)

  return data
}

export const dynamic = 'force-dynamic'

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const data: IFullProduct = await getData(params.slug)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Gallery images={data.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>

              <span className="text-sm text-gray-500 transition duration-100">
                56 Avaliações
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  R${data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  R${data.price + 30}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                Inclui impostos de importação e frete
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6" />
              <span className="text-sm">Entrega em 7-14 dias úteis</span>
            </div>

            <div className="flex gap-2.5">
              <AddToBag
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              <CheckoutNow
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data.name}
                price_id={data.price_id}
              />
            </div>

            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
