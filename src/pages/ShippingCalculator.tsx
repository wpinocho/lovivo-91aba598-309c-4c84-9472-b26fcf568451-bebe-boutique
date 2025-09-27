import { useState } from "react"
import { EcommerceTemplate } from "@/templates/EcommerceTemplate"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Calculator, Package, Truck, MapPin, Clock, Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ShippingRate {
  method: string
  price: number
  days: string
  description: string
  icon: React.ReactNode
}

const ShippingCalculator = () => {
  const [weight, setWeight] = useState("")
  const [destination, setDestination] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [packageValue, setPackageValue] = useState("")
  const [rates, setRates] = useState<ShippingRate[]>([])
  const [loading, setLoading] = useState(false)
  const [calculated, setCalculated] = useState(false)
  const { toast } = useToast()

  const calculateShipping = () => {
    if (!weight || !destination || !postalCode) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      })
      return
    }

    setLoading(true)
    
    // Simular cálculo de envío
    setTimeout(() => {
      const weightNum = parseFloat(weight)
      const valueNum = parseFloat(packageValue) || 0
      
      // Calcular tarifas basadas en peso y destino
      const baseRate = weightNum * 2.5
      const destinationMultiplier = getDestinationMultiplier(destination)
      const insuranceRate = valueNum > 100 ? valueNum * 0.02 : 0
      
      const calculatedRates: ShippingRate[] = [
        {
          method: "Envío Estándar",
          price: Math.round((baseRate * destinationMultiplier) * 100) / 100,
          days: "5-7 días hábiles",
          description: "Entrega confiable a precio económico",
          icon: <Package className="h-5 w-5 text-baby-blue-500" />
        },
        {
          method: "Envío Express",
          price: Math.round((baseRate * destinationMultiplier * 1.8) * 100) / 100,
          days: "2-3 días hábiles",
          description: "Entrega rápida para cuando lo necesitas pronto",
          icon: <Truck className="h-5 w-5 text-baby-yellow-500" />
        },
        {
          method: "Envío Premium",
          price: Math.round((baseRate * destinationMultiplier * 2.5 + insuranceRate) * 100) / 100,
          days: "1-2 días hábiles",
          description: "Entrega urgente con seguro incluido",
          icon: <Heart className="h-5 w-5 text-baby-pink-500" />
        }
      ]
      
      setRates(calculatedRates)
      setCalculated(true)
      setLoading(false)
      
      toast({
        title: "¡Cálculo completado!",
        description: "Hemos calculado las mejores opciones de envío para ti.",
      })
    }, 1500)
  }

  const getDestinationMultiplier = (dest: string): number => {
    const multipliers: Record<string, number> = {
      "cdmx": 1.0,
      "estado-mexico": 1.1,
      "guadalajara": 1.3,
      "monterrey": 1.4,
      "puebla": 1.2,
      "tijuana": 1.8,
      "cancun": 1.6,
      "merida": 1.5,
      "otro": 1.4
    }
    return multipliers[dest] || 1.4
  }

  const resetCalculator = () => {
    setWeight("")
    setDestination("")
    setPostalCode("")
    setPackageValue("")
    setRates([])
    setCalculated(false)
  }

  return (
    <EcommerceTemplate 
      pageTitle="Calculadora de Envíos"
      showCart={true}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <section className="text-center py-8 baby-gradient rounded-3xl">
          <Calculator className="h-12 w-12 text-baby-pink-500 mx-auto mb-4 animate-bounce-gentle" />
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Calculadora de Envíos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calcula el costo exacto de envío para tu pedido. 
            Ofrecemos diferentes opciones para que elijas la que mejor se adapte a tus necesidades.
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card className="baby-card-gradient border-baby-pink-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-baby-pink-500" />
                Información del Paquete
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="weight">Peso del paquete (kg) *</Label>
                <Input
                  id="weight"
                  type="number"
                  step="0.1"
                  min="0.1"
                  max="30"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Ej: 0.5"
                  className="border-baby-pink-200 focus:border-baby-pink-400"
                />
                <p className="text-xs text-muted-foreground">
                  La mayoría de nuestros productos pesan entre 0.1 - 0.5 kg
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination">Destino *</Label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger className="border-baby-pink-200 focus:border-baby-pink-400">
                    <SelectValue placeholder="Selecciona tu ciudad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cdmx">Ciudad de México</SelectItem>
                    <SelectItem value="estado-mexico">Estado de México</SelectItem>
                    <SelectItem value="guadalajara">Guadalajara</SelectItem>
                    <SelectItem value="monterrey">Monterrey</SelectItem>
                    <SelectItem value="puebla">Puebla</SelectItem>
                    <SelectItem value="tijuana">Tijuana</SelectItem>
                    <SelectItem value="cancun">Cancún</SelectItem>
                    <SelectItem value="merida">Mérida</SelectItem>
                    <SelectItem value="otro">Otra ciudad</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="postal">Código Postal *</Label>
                <Input
                  id="postal"
                  type="text"
                  maxLength={5}
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value.replace(/\D/g, ''))}
                  placeholder="Ej: 01000"
                  className="border-baby-pink-200 focus:border-baby-pink-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="value">Valor del paquete (MXN)</Label>
                <Input
                  id="value"
                  type="number"
                  min="0"
                  value={packageValue}
                  onChange={(e) => setPackageValue(e.target.value)}
                  placeholder="Ej: 500"
                  className="border-baby-pink-200 focus:border-baby-pink-400"
                />
                <p className="text-xs text-muted-foreground">
                  Para paquetes mayores a $100 MXN se incluye seguro automáticamente
                </p>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={calculateShipping}
                  disabled={loading}
                  className="flex-1 bg-baby-pink-500 hover:bg-baby-pink-600"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Calculando...
                    </>
                  ) : (
                    <>
                      <Calculator className="h-4 w-4 mr-2" />
                      Calcular Envío
                    </>
                  )}
                </Button>
                {calculated && (
                  <Button 
                    variant="outline" 
                    onClick={resetCalculator}
                    className="border-baby-pink-300 text-baby-pink-600 hover:bg-baby-pink-50"
                  >
                    Nuevo Cálculo
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {calculated && rates.length > 0 ? (
              <>
                <Card className="baby-card-gradient border-baby-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700">
                      <Truck className="h-5 w-5" />
                      Opciones de Envío Disponibles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {rates.map((rate, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between p-4 bg-white/60 rounded-xl border border-baby-pink-100 hover:border-baby-pink-300 transition-colors">
                          <div className="flex items-center gap-3">
                            {rate.icon}
                            <div>
                              <h3 className="font-semibold text-foreground">{rate.method}</h3>
                              <p className="text-sm text-muted-foreground">{rate.description}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Clock className="h-3 w-3 text-baby-blue-500" />
                                <span className="text-xs text-baby-blue-600 font-medium">{rate.days}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-foreground">${rate.price}</div>
                            <div className="text-xs text-muted-foreground">MXN</div>
                          </div>
                        </div>
                        {index < rates.length - 1 && <Separator className="my-2" />}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-baby-blue-50 to-baby-yellow-50 border-baby-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Heart className="h-5 w-5 text-baby-pink-500" />
                      <h3 className="font-semibold text-foreground">¡Envío Gratis!</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      En compras mayores a $800 MXN, el envío estándar es completamente gratis. 
                      ¡Aprovecha para completar tu pedido!
                    </p>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="baby-card-gradient border-baby-pink-100">
                <CardContent className="p-8 text-center">
                  <MapPin className="h-12 w-12 text-baby-pink-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Calcula tu Envío
                  </h3>
                  <p className="text-muted-foreground">
                    Completa la información del paquete para ver las opciones de envío disponibles.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Info Cards */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-baby-pink-50 border-baby-pink-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-baby-pink-500" />
                    <h4 className="font-medium text-foreground">Envío Seguro</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Todos nuestros envíos incluyen número de rastreo y empaque especial para bebés.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-baby-blue-50 border-baby-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-baby-blue-500" />
                    <h4 className="font-medium text-foreground">Tiempos Garantizados</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Si tu pedido no llega en el tiempo estimado, te devolvemos el costo del envío.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </EcommerceTemplate>
  )
}

export default ShippingCalculator