import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Baby, Shield, Truck, Award, Users } from 'lucide-react'

export const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Amor en cada puntada",
      description: "Cada prenda está diseñada con amor y cuidado para los bebés más especiales."
    },
    {
      icon: Shield,
      title: "Materiales seguros",
      description: "Utilizamos solo materiales orgánicos y certificados, libres de químicos dañinos."
    },
    {
      icon: Baby,
      title: "Comodidad total",
      description: "Diseños pensados para la comodidad y libertad de movimiento de tu bebé."
    },
    {
      icon: Award,
      title: "Calidad premium",
      description: "Estándares de calidad excepcionales en cada producto que creamos."
    }
  ]

  const team = [
    {
      name: "María González",
      role: "Fundadora & Diseñadora",
      description: "Madre de dos hermosos bebés, María fundó BabyStore con la misión de crear ropa cómoda y hermosa."
    },
    {
      name: "Carlos Mendoza",
      role: "Director de Calidad",
      description: "Con 15 años de experiencia en textiles, Carlos asegura que cada prenda cumpla nuestros altos estándares."
    },
    {
      name: "Ana Rodríguez",
      role: "Especialista en Materiales",
      description: "Ana selecciona cuidadosamente cada material, priorizando la seguridad y comodidad de los bebés."
    }
  ]

  return (
    <EcommerceTemplate pageTitle="Sobre Nosotros">
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-baby-pink-50 px-4 py-2 rounded-full">
            <Heart className="h-5 w-5 text-baby-pink-500" />
            <span className="text-baby-pink-700 font-medium">Nuestra Historia</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Creando momentos especiales <br />
            <span className="text-baby-pink-500">desde el primer día</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            En BabyStore, entendemos que cada bebé es único y especial. Por eso, creamos ropa 
            que no solo es hermosa, sino también cómoda, segura y perfecta para acompañar 
            los primeros momentos más importantes de la vida.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-baby-blue-50 text-baby-blue-700 hover:bg-baby-blue-100">
              <Users className="h-4 w-4 mr-2" />
              Fundada en 2020
            </Badge>
            
            <h2 className="text-3xl font-bold text-foreground">
              Todo comenzó con un sueño
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Cuando María se convirtió en madre por primera vez, se dio cuenta de lo difícil 
                que era encontrar ropa para bebé que fuera realmente cómoda, segura y hermosa 
                al mismo tiempo.
              </p>
              
              <p>
                Después de meses de búsqueda infructuosa, decidió crear su propia línea de ropa 
                para bebés. Lo que comenzó como un proyecto personal se convirtió en una pasión 
                que hoy compartimos con miles de familias.
              </p>
              
              <p>
                Cada prenda que creamos pasa por rigurosos controles de calidad y está diseñada 
                pensando en la comodidad del bebé y la tranquilidad de los padres.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-baby-pink-100 to-baby-blue-100 p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Baby className="h-24 w-24 text-baby-pink-500 mx-auto" />
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-foreground">50,000+</p>
                  <p className="text-muted-foreground">Bebés felices</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-baby-pink-500" />
                <span className="font-semibold text-foreground">100% Amor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Nuestros Valores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estos son los principios que guían cada decisión que tomamos en BabyStore
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-baby-pink-100 rounded-full">
                    <value.icon className="h-6 w-6 text-baby-pink-600" />
                  </div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Nuestro Equipo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce a las personas apasionadas que hacen posible BabyStore
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-baby-pink-100 to-baby-blue-100 rounded-full mx-auto flex items-center justify-center">
                    <Users className="h-8 w-8 text-baby-pink-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <Badge variant="secondary" className="bg-baby-yellow-50 text-baby-yellow-700">
                      {member.role}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-baby-pink-500 to-baby-blue-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">¿Tienes alguna pregunta?</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Nos encanta escuchar de nuestros clientes. Si tienes alguna pregunta sobre 
              nuestros productos o simplemente quieres saludar, no dudes en contactarnos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5" />
                <span>Envío gratis en pedidos +$50</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Garantía de satisfacción</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EcommerceTemplate>
  )
}