import { useState } from 'react'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Calculator, Truck, MapPin, Package, Clock, DollarSign } from 'lucide-react'
import { toast } from 'sonner'

interface ShippingOption {
  id: string
  name: string
  description: string
  price: number
  estimatedDays: string
  icon: typeof Truck
}

export const ShippingCalculatorPage = () => {
  const [zipCode, setZipCode] = useState('')
  const [weight, setWeight] = useState('')
  const [country, setCountry] = useState('')
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([])
  const [isCalculating, setIsCalculating] = useState(false)
  const [hasCalculated, setHasCalculated] = useState(false)

  const countries = [
    { value: 'mx', label: 'México' },
    { value: 'us', label: 'Estados Unidos' },
    { value: 'ca', label: 'Canadá' },
    { value: 'es', label: 'España' },
    { value: 'ar', label: 'Argentina' },
    { value: 'co', label: 'Colombia' },
    { value: 'pe', label: 'Perú' },
    { value: 'cl', label: 'Chile' }
  ]

  const calculateShipping = async () => {
    if (!zipCode || !weight || !country) {
      toast.error('Por favor completa todos los campos')
      return
    }

    setIsCalculating(true)
    
    // Simular cálculo de envío
    await new Promise(resolve => setTimeout(resolve, 2000))

    const weightNum = parseFloat(weight)
    const basePrice = country === 'mx' ? 50 : 150
    const weightMultiplier = Math.ceil(weightNum / 0.5) * 0.2

    const options: ShippingOption[] = [
      {
        id: 'standard',
        name: 'Envío Estándar',
        description: 'Entrega confiable a domicilio',
        price: Math.round(basePrice * (1 + weightMultiplier)),
        estimatedDays: country === 'mx' ? '3-5 días' : '7-10 días',
        icon: Package
      },
      {
        id: 'express',
        name: 'Envío Express',
        description: 'Entrega rápida garantizada',
        price: Math.round(basePrice * (1.5 + weightMultiplier)),
        estimatedDays: country === 'mx' ? '1-2 días' : '3-5 días',
        icon: Truck
      },
      {
        id: 'overnight',
        name: 'Envío Nocturno',
        description: 'Entrega al siguiente día hábil',
        price: Math.round(basePrice * (2.2 + weightMultiplier)),
        estimatedDays: country === 'mx' ? '1 día' : '2-3 días',
        icon: Clock
      }
    ]

    setShippingOptions(options)
    setHasCalculated(true)
    setIsCalculating(false)
    toast.success('¡Cálculo completado!')
  }

  const resetCalculator = () => {
    setZipCode('')
    setWeight('')
    setCountry('')
    setShippingOptions([])
    setHasCalculated(false)
  }

  return (
    <EcommerceTemplate pageTitle="Calculadora de Envíos">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-baby-blue-50 px-4 py-2 rounded-full">
            <Calculator className="h-5 w-5 text-baby-blue-500" />
            <span className="text-baby-blue-700 font-medium">Calcula tu envío</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Conoce el costo de envío <br />
            <span className="text-baby-blue-500">antes de comprar</span>
          </h1>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ingresa los detalles de tu pedido y te mostraremos todas las opciones 
            de envío disponibles con precios exactos y tiempos de entrega.
          </p>
        </div>

        {/* Calculator Form */}
        <Card className="shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-baby-pink-50 to-baby-blue-50">
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-baby-pink-500" />
              <span>Información de Envío</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="country">País de destino</Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un país" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((c) => (
                      <SelectItem key={c.value} value={c.value}>
                        {c.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="zipCode">Código postal</Label>
                <Input
                  id="zipCode"
                  placeholder="Ej: 12345"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight">Peso estimado (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  step="0.1"
                  placeholder="Ej: 0.5"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>

              <div className="flex items-end">
                <Button 
                  onClick={calculateShipping}
                  disabled={isCalculating}
                  className="w-full bg-baby-pink-500 hover:bg-baby-pink-600"
                >
                  {isCalculating ? (
                    <>
                      <Calculator className="h-4 w-4 mr-2 animate-spin" />
                      Calculando...
                    </>
                  ) : (
                    <>
                      <Calculator className="h-4 w-4 mr-2" />
                      Calcular Envío
                    </>
                  )}
                </Button>
              </div>
            </div>

            {hasCalculated && (
              <div className="pt-4 border-t">
                <Button 
                  variant="outline" 
                  onClick={resetCalculator}
                  className="w-full md:w-auto"
                >
                  Calcular Nuevo Envío
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Shipping Options */}
        {shippingOptions.length > 0 && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Opciones de Envío Disponibles
              </h2>
              <p className="text-muted-foreground">
                Elige la opción que mejor se adapte a tus necesidades
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {shippingOptions.map((option) => (
                <Card key={option.id} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="p-2 bg-baby-blue-100 rounded-lg">
                          <option.icon className="h-5 w-5 text-baby-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{option.name}</h3>
                          <p className="text-sm text-muted-foreground">{option.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Precio:</span>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          <span className="font-bold text-lg text-foreground">
                            ${option.price}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Tiempo:</span>
                        <Badge variant="secondary" className="bg-baby-yellow-50 text-baby-yellow-700">
                          {option.estimatedDays}
                        </Badge>
                      </div>
                    </div>

                    <Button className="w-full bg-baby-pink-500 hover:bg-baby-pink-600">
                      Seleccionar Envío
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 bg-baby-pink-50">
            <CardContent className="p-6 text-center space-y-3">
              <Package className="h-8 w-8 text-baby-pink-500 mx-auto" />
              <h3 className="font-semibold text-foreground">Empaque Seguro</h3>
              <p className="text-sm text-muted-foreground">
                Todos los productos se empaquetan con materiales seguros y ecológicos
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-baby-blue-50">
            <CardContent className="p-6 text-center space-y-3">
              <Truck className="h-8 w-8 text-baby-blue-500 mx-auto" />
              <h3 className="font-semibold text-foreground">Seguimiento</h3>
              <p className="text-sm text-muted-foreground">
                Recibe actualizaciones en tiempo real del estado de tu envío
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-baby-yellow-50">
            <CardContent className="p-6 text-center space-y-3">
              <DollarSign className="h-8 w-8 text-baby-yellow-500 mx-auto" />
              <h3 className="font-semibold text-foreground">Envío Gratis</h3>
              <p className="text-sm text-muted-foreground">
                En pedidos superiores a $50 dentro del país
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </EcommerceTemplate>
  )
}