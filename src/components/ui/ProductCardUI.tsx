import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import { Heart, Star } from "lucide-react"
import type { Product } from "@/lib/supabase"

/**
 * EDITABLE UI COMPONENT - ProductCardUI
 * 
 * Este componente solo maneja la presentación del ProductCard.
 * Toda la lógica viene del HeadlessProductCard.
 * 
 * PUEDES MODIFICAR LIBREMENTE:
 * - Colores, temas, estilos
 * - Textos e idioma
 * - Layout y estructura visual
 * - Animaciones y efectos
 * - Agregar features visuales (hover effects, etc.)
 */

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="baby-card-gradient border border-baby-pink-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
          <CardContent className="p-0">
            <Link to={`/products/${logic.product.slug}`} className="block">
              <div className="aspect-square bg-gradient-to-br from-baby-pink-50 to-baby-blue-50 rounded-t-2xl overflow-hidden relative group">
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <img
                    src={(logic.matchingVariant?.image as any) || logic.product.images![0]}
                    alt={logic.product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-baby-pink-300">
                    <Heart className="h-16 w-16" />
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {logic.discountPercentage && (
                    <span className="bg-baby-pink-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-sm">
                      -{logic.discountPercentage}%
                    </span>
                  )}
                  {logic.product.featured && (
                    <span className="bg-baby-yellow-400 text-baby-yellow-900 text-xs px-3 py-1 rounded-full font-semibold shadow-sm flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Destacado
                    </span>
                  )}
                  {!logic.inStock && (
                    <span className="bg-gray-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-sm">
                      Agotado
                    </span>
                  )}
                </div>

                {/* Favorite button */}
                <div className="absolute top-3 right-3">
                  <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-sm">
                    <Heart className="h-4 w-4 text-baby-pink-400" />
                  </button>
                </div>
              </div>
            </Link>

            <div className="p-5">
              <Link to={`/products/${logic.product.slug}`} className="block">
                <h3 className="text-foreground font-semibold text-base mb-2 line-clamp-2 hover:text-baby-pink-600 transition-colors">
                  {logic.product.title}
                </h3>
                {logic.product.description && (
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                    {logic.product.description.replace(/<[^>]*>/g, '')}
                  </p>
                )}
              </Link>

              {logic.hasVariants && logic.options && (
                <div className="mb-4 space-y-3">
                  {logic.options.map((opt) => (
                    <div key={opt.id}>
                      <div className="text-sm font-medium text-foreground mb-2">{opt.name}</div>
                      <div className="flex flex-wrap gap-2">
                        {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map((val) => {
                          const isSelected = logic.selected[opt.name] === val
                          const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                          if (swatch) {
                            return (
                              <button
                                key={val}
                                type="button"
                                onClick={() => logic.handleOptionChange(opt.name, val)}
                                title={`${opt.name}: ${val}`}
                                className={`h-7 w-7 rounded-full border-2 ${
                                  isSelected ? 'border-baby-pink-400 ring-2 ring-baby-pink-200' : 'border-gray-200'
                                } ${logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''} hover:scale-110 transition-transform`}
                                style={{ 
                                  backgroundColor: swatch
                                }}
                                aria-label={`${opt.name}: ${val}`}
                              />
                            )
                          }

                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => logic.handleOptionChange(opt.name, val)}
                              className={`border-2 rounded-full px-3 py-1 text-sm font-medium transition-all ${
                                isSelected 
                                  ? 'border-baby-pink-400 bg-baby-pink-50 text-baby-pink-700' 
                                  : logic.selected[opt.name] && !isSelected
                                    ? 'border-gray-200 bg-white text-gray-400 opacity-40'
                                    : 'border-gray-200 bg-white text-gray-700 hover:border-baby-pink-300 hover:bg-baby-pink-50'
                              }`}
                              aria-pressed={isSelected}
                              aria-label={`${opt.name}: ${val}`}
                              title={`${opt.name}: ${val}`}
                            >
                              {val}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-foreground font-bold text-lg">
                    {logic.formatMoney(logic.currentPrice)}
                  </span>
                  {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                    <span className="text-muted-foreground text-sm line-through">
                      {logic.formatMoney(logic.currentCompareAt)}
                    </span>
                  )}
                </div>
                <Button
                  size="sm"
                  onClick={() => {
                    logic.onAddToCartSuccess()
                    logic.handleAddToCart()
                  }}
                  disabled={!logic.canAddToCart}
                  className={`rounded-full px-6 font-semibold transition-all ${
                    logic.inStock 
                      ? 'bg-baby-pink-500 hover:bg-baby-pink-600 text-white shadow-sm hover:shadow-md' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {logic.inStock ? 'Agregar' : 'Agotado'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}