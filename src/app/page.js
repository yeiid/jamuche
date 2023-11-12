


import ContextProvider from '@/context/Usecontext'

import Header from '@/app/header/Header'
import Product from '@/app/product/Product'
export default function Home() {

return(
  <ContextProvider>
    <Header/>
    <Product/>
  </ContextProvider>
)
}

