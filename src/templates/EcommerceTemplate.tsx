import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Heart, Baby } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template específico para páginas de ecommerce con header, footer y cart.
 * El agente IA puede modificar completamente el diseño, colores, layout.
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-white/95 backdrop-blur-sm border-b border-baby-pink-100 sticky top-0 z-40 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Baby className="h-8 w-8 text-baby-pink-500" />
              <div>
                <BrandLogoLeft />
                <p className="text-xs text-baby-pink-400 -mt-1">Ropa para Bebés</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-foreground/70 hover:text-baby-pink-500 transition-colors font-medium"
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                className="text-foreground/70 hover:text-baby-pink-500 transition-colors font-medium"
              >
                Nosotros
              </Link>
              <Link 
                to="/shipping-calculator" 
                className="text-foreground/70 hover:text-baby-pink-500 transition-colors font-medium"
              >
                Envíos
              </Link>
              <Link 
                to="/blog" 
                className="text-foreground/70 hover:text-baby-pink-500 transition-colors font-medium"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Cart */}
          {showCart && (
            <Button
              variant="ghost"
              size="icon"
              onClick={openCart}
              className="relative hover:bg-baby-pink-50 rounded-full"
            >
              <ShoppingCart className="h-5 w-5 text-baby-pink-600" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-baby-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce-gentle">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Button>
          )}
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-gradient-to-r from-baby-pink-500 to-baby-blue-500 text-white py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Baby className="h-8 w-8 text-white" />
              <div>
                <h3 className="text-xl font-bold text-white">BabyStore</h3>
                <p className="text-baby-pink-100 text-sm">Ropa para Bebés</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 max-w-md">
              Creamos ropa hermosa y cómoda para los bebés más especiales. 
              Cada prenda está hecha con amor y los mejores materiales.
            </p>
            <div className="flex items-center space-x-4">
              <Heart className="h-5 w-5 text-baby-yellow-300" />
              <span className="text-white/90 text-sm">Hecho con amor desde 2024</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Navegación</h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Nosotros
              </Link>
              <Link 
                to="/shipping-calculator" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Calculadora de Envíos
              </Link>
              <Link 
                to="/blog" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Síguenos</h3>
            <SocialLinks />
            <div className="mt-4">
              <p className="text-white/80 text-sm mb-2">Atención al cliente:</p>
              <p className="text-white font-semibold">+1 (555) 123-4567</p>
              <p className="text-white/80 text-sm">Lun-Vie 9:00-18:00</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">
              &copy; 2024 BabyStore. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-white/80 hover:text-white text-sm transition-colors">
                Privacidad
              </Link>
              <Link to="/terms" className="text-white/80 hover:text-white text-sm transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}