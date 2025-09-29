import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Baby, Shield, Truck, Star, Users } from 'lucide-react'

export const AboutPage = () => {
  return (
    <EcommerceTemplate pageTitle="Sobre Nosotros">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-baby-pink-100 to-baby-blue-100 p-6 rounded-full">
              <Baby className="h-16 w-16 text-baby-pink-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestra Historia
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            BabyStore nació del amor incondicional que sentimos por los bebés y la pasión por crear 
            ropa que combine comodidad, calidad y ternura en cada prenda.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Todo Comenzó con un Sueño
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              En 2024, un grupo de padres apasionados decidió crear algo especial. Cansados de buscar 
              ropa para bebé que fuera realmente cómoda, segura y hermosa, decidimos tomar las riendas 
              y crear nuestra propia marca.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cada prenda que diseñamos pasa por rigurosas pruebas de calidad y comodidad. Utilizamos 
              únicamente materiales orgánicos y seguros para la delicada piel de los bebés.
            </p>
            <div className="flex items-center space-x-3 text-baby-pink-600">
              <Heart className="h-5 w-5" />
              <span className="font-medium">Hecho con amor desde el primer día</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-baby-pink-50 to-baby-blue-50 p-8 rounded-2xl">
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-baby-pink-500">2024</div>
              <p className="text-muted-foreground">Año de fundación</p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-baby-blue-500">1000+</div>
                  <p className="text-sm text-muted-foreground">Familias felices</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-baby-yellow-500">50+</div>
                  <p className="text-sm text-muted-foreground">Diseños únicos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nuestros Valores
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada decisión que tomamos está guiada por estos principios fundamentales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-baby-pink-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-baby-pink-100 p-4 rounded-full w-fit mx-auto">
                  <Shield className="h-8 w-8 text-baby-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Seguridad</h3>
                <p className="text-muted-foreground">
                  Utilizamos únicamente materiales certificados y seguros para la delicada piel de los bebés.
                </p>
              </CardContent>
            </Card>

            <Card className="border-baby-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-baby-blue-100 p-4 rounded-full w-fit mx-auto">
                  <Heart className="h-8 w-8 text-baby-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Amor</h3>
                <p className="text-muted-foreground">
                  Cada prenda está diseñada con amor y cuidado, pensando en la comodidad del bebé.
                </p>
              </CardContent>
            </Card>

            <Card className="border-baby-yellow-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-baby-yellow-100 p-4 rounded-full w-fit mx-auto">
                  <Star className="h-8 w-8 text-baby-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Calidad</h3>
                <p className="text-muted-foreground">
                  Nos comprometemos con la excelencia en cada detalle, desde el diseño hasta la entrega.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-r from-baby-pink-50 to-baby-blue-50 rounded-2xl p-12">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <Users className="h-12 w-12 text-baby-pink-500" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Nuestro Equipo
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Somos un equipo de padres, diseñadores y expertos en textiles que trabajamos juntos 
              para crear la mejor experiencia para tu bebé. Cada miembro de nuestro equipo aporta 
              su experiencia y pasión para hacer realidad nuestra misión.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-3">
                <div className="bg-white p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                  <Baby className="h-8 w-8 text-baby-pink-500" />
                </div>
                <h3 className="font-semibold text-foreground">Diseño</h3>
                <p className="text-sm text-muted-foreground">Creamos diseños únicos y funcionales</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="bg-white p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                  <Shield className="h-8 w-8 text-baby-blue-500" />
                </div>
                <h3 className="font-semibold text-foreground">Calidad</h3>
                <p className="text-sm text-muted-foreground">Garantizamos la mejor calidad en cada prenda</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="bg-white p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                  <Truck className="h-8 w-8 text-baby-yellow-500" />
                </div>
                <h3 className="font-semibold text-foreground">Servicio</h3>
                <p className="text-sm text-muted-foreground">Atención personalizada para cada familia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold text-foreground">
            ¿Tienes Preguntas?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nos encanta escuchar de las familias que confían en nosotros. 
            No dudes en contactarnos si tienes alguna pregunta o sugerencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-baby-pink-600">
              <Heart className="h-5 w-5" />
              <span>contacto@babystore.com</span>
            </div>
            <div className="flex items-center space-x-2 text-baby-blue-600">
              <Truck className="h-5 w-5" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </EcommerceTemplate>
  )
}