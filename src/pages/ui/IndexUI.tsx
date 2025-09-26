import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Heart, Shield, Truck } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Interfaz completamente editable para la página principal.
 * El agente IA puede modificar colores, textos, layout, etc.
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    blogs,
    loading,
    loadingCollections,
    loadingBlogs,
    searchTerm,
    selectedCollectionId,
    filteredProducts,
    setSearchTerm,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section */}
      <section className="baby-gradient py-16 border-b border-baby-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-bounce-gentle inline-block mb-6">
            <Heart className="h-12 w-12 text-baby-pink-400 mx-auto" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
            Ropa Adorable para tu
            <span className="text-baby-pink-500 block">Pequeño Tesoro</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra colección de ropa para bebé hecha con amor. 
            Materiales suaves, diseños tiernos y la máxima comodidad para tu pequeño.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              type="text" 
              placeholder="Buscar ropa para bebé..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="pl-10 h-12 rounded-full border-baby-pink-200 focus:border-baby-pink-400 bg-white/80 backdrop-blur-sm"
            />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-baby-pink-100">
              <Shield className="h-8 w-8 text-baby-blue-500 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">100% Seguro</h3>
              <p className="text-sm text-muted-foreground text-center">Materiales hipoalergénicos y certificados</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-baby-pink-100">
              <Heart className="h-8 w-8 text-baby-pink-500 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Hecho con Amor</h3>
              <p className="text-sm text-muted-foreground text-center">Cada prenda diseñada pensando en tu bebé</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-baby-pink-100">
              <Truck className="h-8 w-8 text-baby-yellow-500 mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Envío Rápido</h3>
              <p className="text-sm text-muted-foreground text-center">Entrega en 24-48 horas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-baby-blue-50 to-baby-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Compra por Edad
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Encuentra la talla perfecta para cada etapa del crecimiento de tu bebé
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <div key={collection.id} className="hover-lift">
                  <CollectionCard 
                    collection={collection} 
                    onViewProducts={handleViewCollectionProducts} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Colección'}` 
                  : 'Productos Destacados'
                }
              </h2>
              <p className="text-muted-foreground">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.description
                  : 'Los favoritos de nuestros pequeños clientes'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="border-baby-pink-300 text-baby-pink-600 hover:bg-baby-pink-50"
              >
                Ver Todos los Productos
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="baby-card-gradient rounded-2xl h-96 animate-pulse border border-baby-pink-100"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="hover-lift">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Heart className="h-16 w-16 text-baby-pink-300 mx-auto mb-4" />
              <p className="text-xl text-muted-foreground mb-2">
                {searchTerm 
                  ? 'No encontramos productos que coincidan con tu búsqueda' 
                  : 'Pronto tendremos más productos adorables'
                }
              </p>
              <p className="text-muted-foreground">
                {searchTerm 
                  ? 'Intenta con otros términos de búsqueda' 
                  : 'Estamos preparando más ropa hermosa para tu bebé'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 baby-gradient border-t border-baby-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-12 w-12 text-baby-pink-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ¡Mantente al día con las novedades!
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Recibe ofertas especiales y conoce las últimas tendencias en ropa para bebé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Tu email aquí..." 
              className="flex-1 h-12 rounded-full border-baby-pink-200 bg-white/80"
            />
            <Button className="h-12 px-8 rounded-full bg-baby-pink-500 hover:bg-baby-pink-600 text-white font-semibold">
              Suscribirse
            </Button>
          </div>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};