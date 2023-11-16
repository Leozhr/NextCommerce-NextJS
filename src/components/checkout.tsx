"use client";

import { Button } from "@/components/ui/button";
import { ProductCart } from "./tobag";

export default function CheckoutNow({
}: ProductCart) {
  function buyNow() {
    console.log('Succefull');
  }

  return (
    <Button
      variant="outline"
      onClick={() => {
        buyNow();
      }}
    >
      Comprar
    </Button>
  );
}