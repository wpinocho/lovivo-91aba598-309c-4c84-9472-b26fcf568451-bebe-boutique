import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from '@/components/ui/sonner'
import { CartProvider } from '@/contexts/CartContext'
import { CartUIProvider } from '@/components/CartProvider'
import { IndexPage } from '@/pages/IndexPage'
import { AboutPage } from '@/pages/AboutPage'
import { ShippingCalculatorPage } from '@/pages/ShippingCalculatorPage'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <CartUIProvider>
          <Router>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/shipping-calculator" element={<ShippingCalculatorPage />} />
            </Routes>
            <Toaster />
          </Router>
        </CartUIProvider>
      </CartProvider>
    </QueryClientProvider>
  )
}

export default App