import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CartProvider } from '@/contexts/CartContext'
import { CartUIProvider } from '@/components/CartProvider'
import { SettingsProvider } from '@/contexts/SettingsContext'
import { PixelProvider } from '@/contexts/PixelContext'
import { Toaster } from '@/components/ui/toaster'
import { FaviconManager } from '@/components/FaviconManager'
import Index from '@/pages/Index'
import Product from '@/pages/Product'
import Cart from '@/pages/Cart'
import Checkout from '@/pages/Checkout'
import ThankYou from '@/pages/ThankYou'
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'
import About from '@/pages/About'
import ShippingCalculator from '@/pages/ShippingCalculator'
import NotFound from '@/pages/NotFound'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <PixelProvider>
          <CartProvider>
            <CartUIProvider>
              <BrowserRouter>
                <FaviconManager />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/products/:slug" element={<Product />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/thank-you/:orderId" element={<ThankYou />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/shipping-calculator" element={<ShippingCalculator />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Toaster />
              </BrowserRouter>
            </CartUIProvider>
          </CartProvider>
        </PixelProvider>
      </SettingsProvider>
    </QueryClientProvider>
  </StrictMode>,
)