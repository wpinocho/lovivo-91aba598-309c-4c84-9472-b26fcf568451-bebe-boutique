import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Baby } from 'lucide-react'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="baby-card-gradient border border-baby-pink-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-gradient-to-br from-baby-pink-50 to-baby-blue-50 overflow-hidden relative">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-baby-pink-300">
              <Baby className="h-16 w-16" />
            </div>
          )}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-foreground font-bold text-xl line-clamp-2 group-hover:text-baby-pink-600 transition-colors">
              {collection.name}
            </h3>
            {collection.featured && (
              <span className="bg-baby-yellow-400 text-baby-yellow-900 text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap ml-2">
                Destacado
              </span>
            )}
          </div>
          
          {collection.description && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
              {collection.description}
            </p>
          )}
          
          <Button 
            className="w-full bg-baby-pink-500 hover:bg-baby-pink-600 text-white rounded-full font-semibold py-3 transition-all duration-300 group-hover:shadow-md flex items-center justify-center gap-2"
            onClick={() => onViewProducts(collection.id)}
          >
            Ver Productos
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}