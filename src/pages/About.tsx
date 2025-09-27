import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Heart, Shield, Truck, Award, Users, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const About = () => {
  return (
    <EcommerceTemplate pageTitle="Sobre Nosotros">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center py-16 baby-gradient rounded-2xl">
          <div className="max-w-4xl mx-auto px-6">
            <Heart className="h-16 w-16 text-baby-pink-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nuestra Historia
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              BabyStore nació del amor incondicional que sentimos por los más pequeños. 
              Somos padres, y entendemos la importancia de vestir a nuestros bebés con 
              prendas que no solo sean hermosas, sino también seguras y cómodas.
            </p>
          </div>
        </section>

        {/* Nuestra Misión */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Nuestra Misión
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Creemos que cada bebé merece lo mejor. Por eso, seleccionamos cuidadosamente 
              cada prenda en nuestra tienda, asegurándonos de que cumplan con los más altos 
              estándares de calidad, comodidad y seguridad.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trabajamos con materiales 100% orgánicos, hipoalergénicos y certificados, 
              porque sabemos que la piel de tu bebé es delicada y merece el mejor cuidado.
            </p>
          </div>
          <div className="baby-card-gradient p-8 rounded-2xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <Shield className="h-12 w-12 text-baby-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">100% Seguro</h3>
                <p className="text-sm text-muted-foreground">Materiales certificados</p>
              </div>
              <div className="text-center">
                <Heart className="h-12 w-12 text-baby-pink-500 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Con Amor</h3>
                <p className="text-sm text-muted-foreground">Hecho para tu bebé</p>
              </div>
              <div className="text-center">
                <Truck className="h-12 w-12 text-baby-yellow-500 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Envío Rápido</h3>
                <p className="text-sm text-muted-foreground">24-48 horas</p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-baby-pink-400 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Calidad</h3>
                <p className="text-sm text-muted-foreground">Garantía total</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Valores */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada decisión que tomamos está guiada por estos principios fundamentales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="baby-card-gradient border-baby-pink-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-baby-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Amor por los Bebés</h3>
                <p className="text-muted-foreground">
                  Todo lo que hacemos está inspirado en el amor incondicional hacia los más pequeños
                </p>
              </CardContent>
            </Card>

            <Card className="baby-card-gradient border-baby-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 text-baby-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Seguridad Primero</h3>
                <p className="text-muted-foreground">
                  La seguridad y comodidad de tu bebé es nuestra prioridad número uno
                </p>
              </CardContent>
            </Card>

            <Card className="baby-card-gradient border-baby-yellow-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Star className="h-12 w-12 text-baby-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Excelencia</h3>
                <p className="text-muted-foreground">
                  Buscamos la perfección en cada detalle, desde el diseño hasta la entrega
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="baby-gradient py-16 rounded-2xl">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-baby-pink-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Somos un equipo de padres apasionados, diseñadores y expertos en productos para bebé
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 bg-baby-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-12 w-12 text-baby-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">María González</h3>
              <p className="text-baby-pink-600 font-medium mb-3">Fundadora & CEO</p>
              <p className="text-muted-foreground">
                Madre de dos hermosos bebés, María fundó BabyStore con la misión de crear 
                la mejor experiencia de compra para padres.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-baby-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-12 w-12 text-baby-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Carlos Mendoza</h3>
              <p className="text-baby-blue-600 font-medium mb-3">Director de Calidad</p>
              <p className="text-muted-foreground">
                Con más de 10 años de experiencia en productos para bebé, Carlos se asegura 
                de que cada prenda cumpla nuestros estándares.
              </p>
            </div>
          </div>
        </section>

        {/* Compromiso */}
        <section className="text-center py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Nuestro Compromiso Contigo
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              En BabyStore, no solo vendemos ropa para bebé. Creamos momentos especiales, 
              cuidamos la comodidad de tu pequeño y te acompañamos en esta hermosa aventura 
              de ser padre o madre.
            </p>
            <div className="flex items-center justify-center space-x-2 text-baby-pink-500">
              <Heart className="h-6 w-6" />
              <span className="text-lg font-semibold">Hecho con amor para tu bebé</span>
              <Heart className="h-6 w-6" />
            </div>
          </div>
        </section>
      </div>
    </EcommerceTemplate>
  )
}

export default About