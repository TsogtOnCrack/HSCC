import 'styles/globals.css'
import { CartContextPrv } from '../../context/maincontext'

function MyApp({ Component, pageProps }) {
  return (
    <CartContextPrv>
      <Component {...pageProps} />
    </CartContextPrv>
  )
}

export default MyApp
