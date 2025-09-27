import { useState } from 'react'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calculator, Package, MapPin, Clock, Truck } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const ShippingCalculator = () => {
  const [formData, setFormData] = useState({
    weight: '',
    destination: '',
    shippingType: ''
  })
  const [result, setResult] = useState<{
    cost: number
    deliveryTime: string
    carrier: string
  } | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const { toast } = useToast()

  const shippingRates = {
    local: { base: 50, perKg: 10, time: '1-2 días', carrier: 'Envío Local' },
    nacional: { base: 120, perKg: 25, time: '3-5 días', carrier: 'Correos de México' },
    express: { base: 200, perKg: 40, time: '24-48 horas', carrier: 'DHL Express' },
    internacional: { base: 350, perKg: 80, time: '7-15 días', carrier: 'FedEx Internacional' }
  }

  const calculateShipping = () => {
    if (!formData.weight || !formData.destination || !formData.shippingType) {
      toast({
        title: "Campos incompletos",
        description: "Por favor completa todos los campos para calcular el envío",
        variant: "destructive"
      })
      return
    }

    setIsCalculating(true)

    // Simular cálculo
    setTimeout(() => {
      const weight = parseFloat(formData.weight)
      const rates = shippingRates[formData.shippingType as keyof typeof shippingRates]
      
      const cost = rates.base + (weight * rates.perKg)
      
      setResult({
        cost: Math.round(cost),
        deliveryTime: rates.time,
        carrier: rates.carrier
      })
      
      setIsCalculating(false)
      
      toast({
        title: "¡Cálculo completado!",
        description: `El costo de envío es de $${Math.round(cost)} MXN`
      })
    }, 1500)
  }

  const resetCalculator = () => {
    setFormData({ weight: '', destination: '', shippingType: '' })
    setResult(null)
  }

  return (
    <EcommerceTemplate pageTitle="Calculadora de Envíos">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <section className="text-center py-12 baby-gradient rounded-2xl">
          <Calculator className="h-16 w-16 text-baby-pink-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Calculadora de Envíos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Calcula el costo y tiempo de entrega para tu pedido de ropa de bebé
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulario de Cálculo */}
          <Card className="baby-card-gradient border-baby-pink-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-baby-pink-500" />
                Información del Envío
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="weight">Peso del paquete (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  step="0.1"
                  min="0.1"
                  max="10"
                  placeholder="Ej: 0.5"
                  value={formData.weight}
                  onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                  className="border-baby-pink-200 focus:border-baby-pink-400"
                />
                <p className="text-sm text-muted-foreground">
                  La ropa de bebé típicamente pesa entre 0.1kg y 2kg
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination">Destino</Label>
                <Select value={formData.destination} onValueChange={(value) => setFormData(prev => ({ ...prev, destination: value }))}>
                  <SelectTrigger className="border-baby-pink-200 focus:border-baby-pink-400">
                    <SelectValue placeholder="Selecciona tu ubicación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cdmx">Ciudad de México</SelectItem>
                    <SelectItem value="guadalajara">Guadalajara</SelectItem>
                    <SelectItem value="monterrey">Monterrey</SelectItem>
                    <SelectItem value="puebla">Puebla</SelectItem>
                    <SelectItem value="tijuana">Tijuana</SelectItem>
                    <SelectItem value="cancun">Cancún</SelectItem>
                    <SelectItem value="otros">Otras ciudades</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="shipping-type">Tipo de Envío</Label>
                <Select value={formData.shippingType} onValueChange={(value) => setFormData(prev => ({ ...prev, shippingType: value }))}>
                  <SelectTrigger className="border-baby-pink-200 focus:border-baby-pink-400">
                    <SelectValue placeholder="Selecciona el tipo de envío" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="local">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Envío Local (CDMX)</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="nacional">
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4" />
                        <span>Envío Nacional</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="express">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Envío Express</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="internacional">
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4" />
                        <span>Envío Internacional</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={calculateShipping}
                  disabled={isCalculating}
                  className="flex-1 bg-baby-pink-500 hover:bg-baby-pink-600 text-white"
                >
                  {isCalculating ? (
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
                <Button 
                  variant="outline" 
                  onClick={resetCalculator}
                  className="border-baby-pink-300 text-baby-pink-600 hover:bg-baby-pink-50"
                >
                  Limpiar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Resultado */}
          <div className="space-y-6">
            {result ? (
              <Card className="baby-card-gradient border-baby-green-100 bg-gradient-to-br from-green-50 to-baby-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Package className="h-5 w-5" />
                    Resultado del Cálculo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-6">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      ${result.cost} MXN
                    </div>
                    <p className="text-muted-foreground">Costo total de envío</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/60 rounded-lg">
                      <Clock className="h-6 w-6 text-baby-blue-500 mx-auto mb-2" />
                      <div className="font-semibold text-foreground">{result.deliveryTime}</div>
                      <div className="text-sm text-muted-foreground">Tiempo de entrega</div>
                    </div>
                    <div className="text-center p-4 bg-white/60 rounded-lg">
                      <Truck className="h-6 w-6 text-baby-pink-500 mx-auto mb-2" />
                      <div className="font-semibold text-foreground">{result.carrier}</div>
                      <div className="text-sm text-muted-foreground">Paquetería</div>
                    </div>
                  </div>

                  <div className="bg-baby-yellow-50 border border-baby-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-baby-yellow-800">
                      <strong>Nota:</strong> Los precios son estimados y pueden variar según la ubicación exacta y promociones vigentes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="baby-card-gradient border-baby-blue-100">
                <CardContent className="py-12 text-center">
                  <Package className="h-16 w-16 text-baby-blue-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Completa el formulario
                  </h3>
                  <p className="text-muted-foreground">
                    Ingresa los datos de tu envío para calcular el costo y tiempo de entrega
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Información adicional */}
            <Card className="baby-card-gradient border-baby-pink-100">
              <CardHeader>
                <CardTitle className="text-lg">Información de Envíos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-baby-pink-500 mt-0.5" />
                  <div>
                    <div className="font-medium">Envío Local (CDMX)</div>
                    <div className="text-sm text-muted-foreground">1-2 días hábiles • Desde $50</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-baby-blue-500 mt-0.5" />
                  <div>
                    <div className="font-medium">Envío Nacional</div>
                    <div className="text-sm text-muted-foreground">3-5 días hábiles • Desde $120</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-baby-yellow-500 mt-0.5" />
                  <div>
                    <div className="font-medium">Envío Express</div>
                    <div className="text-sm text-muted-foreground">24-48 horas • Desde $200</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </EcommerceTemplate>
  )
}

export default ShippingCalculator