import { EcommerceTemplate } from "@/templates/EcommerceTemplate"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Truck, Award, Users, Baby } from "lucide-react"

const About = () => {
  return (
    <EcommerceTemplate 
      pageTitle="Sobre Nosotros"
      showCart={true}
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center py-12 baby-gradient rounded-3xl">
          <div className="max-w-4xl mx-auto px-6">
            <Baby className="h-16 w-16 text-baby-pink-500 mx-auto mb-6 animate-bounce-gentle" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nuestra Historia de Amor
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              BabyStore nació del amor incondicional que sentimos por los más pequeños. 
              Cada prenda que creamos lleva consigo el cariño y la dedicación de padres 
              que entienden lo especial que es vestir a tu bebé.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Todo Comenzó con un Sueño
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                En 2024, como padres primerizos, nos dimos cuenta de lo difícil que era 
                encontrar ropa para bebé que fuera realmente cómoda, segura y hermosa 
                al mismo tiempo. Queríamos algo especial para nuestro pequeño tesoro.
              </p>
              <p>
                Así nació BabyStore: con la misión de crear ropa que no solo se vea 
                adorable, sino que también brinde la máxima comodidad y seguridad que 
                nuestros bebés merecen.
              </p>
              <p>
                Cada diseño es pensado con amor, cada material es seleccionado con 
                cuidado, y cada prenda es creada para acompañar los momentos más 
                preciosos de la infancia.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-baby-pink-100 to-baby-blue-100 rounded-3xl p-8 text-center">
            <Heart className="h-20 w-20 text-baby-pink-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Hecho con Amor
            </h3>
            <p className="text-muted-foreground">
              Más de 10,000 familias felices confían en nosotros para vestir 
              a sus pequeños tesoros con amor y estilo.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="baby-card-gradient border-baby-pink-100 hover-lift">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 text-baby-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Seguridad Primero
                </h3>
                <p className="text-muted-foreground">
                  Todos nuestros materiales son hipoalergénicos, libres de químicos 
                  dañinos y certificados para la piel sensible de los bebés.
                </p>
              </CardContent>
            </Card>

            <Card className="baby-card-gradient border-baby-pink-100 hover-lift">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-baby-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Amor en Cada Detalle
                </h3>
                <p className="text-muted-foreground">
                  Cada costura, cada botón, cada diseño es pensado con el amor 
                  que sentimos por nuestros propios hijos.
                </p>
              </CardContent>
            </Card>

            <Card className="baby-card-gradient border-baby-pink-100 hover-lift">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-baby-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Calidad Premium
                </h3>
                <p className="text-muted-foreground">
                  Utilizamos solo los mejores materiales orgánicos y procesos 
                  de fabricación que respetan el medio ambiente.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="baby-gradient rounded-3xl p-12">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-baby-pink-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Somos un equipo de padres, diseñadores y artesanos apasionados por 
              crear la mejor experiencia para tu bebé y para ti.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 bg-baby-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-12 w-12 text-baby-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">María González</h3>
              <p className="text-baby-pink-600 font-medium mb-2">Fundadora & Diseñadora</p>
              <p className="text-muted-foreground text-sm">
                Mamá de dos hermosos bebés y apasionada por crear ropa que combine 
                comodidad y estilo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-baby-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-12 w-12 text-baby-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Carlos Rodríguez</h3>
              <p className="text-baby-blue-600 font-medium mb-2">Director de Calidad</p>
              <p className="text-muted-foreground text-sm">
                Papá primerizo obsesionado con la seguridad y calidad de cada 
                producto que llega a las familias.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            ¿Quieres Conocer Más?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nos encanta escuchar de otras familias. Comparte tu historia con nosotros 
            o cuéntanos cómo podemos hacer que la experiencia sea aún mejor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Heart className="h-5 w-5 text-baby-pink-500" />
              <span>contacto@babystore.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Truck className="h-5 w-5 text-baby-blue-500" />
              <span>+1 (555) 123-BABY</span>
            </div>
          </div>
        </section>
      </div>
    </EcommerceTemplate>
  )
}

export default About