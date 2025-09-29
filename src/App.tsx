import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from '@/components/ui/sonner'
import { CartProvider } from '@/components/CartProvider'
import { CartContextProvider } from '@/contexts/CartContext'
import { IndexPage } from '@/pages/IndexPage'
import { AboutPage } from '@/pages/AboutPage'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Toaster />
          </Router>
        </CartProvider>
      </CartContextProvider>
    </QueryClientProvider>
  )
}

export default App