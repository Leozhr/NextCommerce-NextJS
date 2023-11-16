'use client'

import { ReactNode } from 'react'
import { CartProvider as USCProvider } from 'use-shopping-cart'

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe="pk_test_51NnYyQI4CXinvFtS5u6va44YGLVIbofzknU6afEtB3f60NGpuNDyBHFRbtEKFPqCbLDxu5qu6f1AHmdl073dpmC400KBzHnp1P"
      successUrl="https://localhost:3000/stripe/success"
      cancelUrl="https://localhost:3000/stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  )
}
