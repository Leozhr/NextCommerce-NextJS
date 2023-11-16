'use client'
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useShoppingCart } from 'use-shopping-cart'

const links = [
  { name: 'Pagina Inicial', href: '/' },
  { name: 'Homens', href: '/men' },
  { name: 'Mulheres', href: '/women' },
]

const Header = () => {
  const pathname = usePathname()
  const { handleCartClick } = useShoppingCart();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 py-2 sm:px-6 lg:max-w-7xl lg:py-0">
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-bold">
            Next<span className="text-primary">Commerce</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div>
          <Button
            variant="default"
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
            onClick={() => handleCartClick()}
          >
            <ShoppingBag size={24} />
            <span className="hidden text-xs font-semibold text-white sm:block">
              Carrinho
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
