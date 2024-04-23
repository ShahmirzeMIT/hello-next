import { log } from 'console';
import { useRouter } from 'next/router'
import React from 'react'

export default function product() {
  const router=useRouter();
  const {  product } = router.query;
  
  return (
    <div>
      ssadasfklsflas {product}
    </div>
  )
}
