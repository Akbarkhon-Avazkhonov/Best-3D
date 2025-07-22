import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Filter, Search, ArrowLeft, Thermometer, Zap, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ExtrudersHotendsPage() {
  const products = [
    {
      id: 1,
      name: "E3D V6 All-Metal Hotend",
      brand: "E3D",
      price: "$65",
      originalPrice: "$75",
      rating: 4.8,
      reviews: 342,
      type: "Hotend",
      maxTemp: "300°C",
      compatibility: ["Ender 3", "Prusa i3", "CR-10"],
      image: "/placeholder.svg?height=200&width=200&text=E3D+V6",
      features: ["All-metal construction", "High temperature", "Universal mount"],
      amazonUrl: "https://amazon.com/dp/example-e3d-v6",
      bestseller: true,
    },
    {
      id: 2,
      name: "Micro Swiss All Metal Hotend",
      brand: "Micro Swiss",
      price: "$55",
      originalPrice: "$65",
      rating: 4.7,
      reviews: 567,
      type: "Hotend",
      maxTemp: "300°C",
      compatibility: ["Ender 3", "Ender 5"],
      image: "/placeholder.svg?height=200&width=200&text=Micro+Swiss",
      features: ["Drop-in replacement", "All-metal", "Precision machined"],
      amazonUrl: "https://amazon.com/dp/example-micro-swiss",
    },
    {
      id: 3,
      name: "BMG Extruder Clone",
      brand: "BIGTREETECH",
      price: "$35",
      originalPrice: "$42",
      rating: 4.5,
      reviews: 234,
      type: "Extruder",
      maxTemp: "N/A",
      compatibility: ["Universal"],
      image: "/placeholder.svg?height=200&width=200&text=BMG+Extruder",
      features: ["Dual drive gears", "High precision", "Flexible filament"],
      amazonUrl: "https://amazon.com/dp/example-bmg-extruder",
    },
    {
      id: 4,
      name: "Hemera Direct Drive",
      brand: "E3D",
      price: "$185",
      originalPrice: "$210",
      rating: 4.9,
      reviews: 156,
      type: "Extruder + Hotend",
      maxTemp: "300°C",
      compatibility: ["Prusa i3", "Custom builds"],
      image: "/placeholder.svg?height=200&width=200&text=Hemera",
      features: ["Direct drive", "All-in-one", "Flexible materials"],
      amazonUrl: "https://amazon.com/dp/example-hemera",
    },
    {
      id: 5,
      name: "Volcano Hotend",
      brand: "E3D",
      price: "$75",
      originalPrice: "$85",
      rating: 4.6,
      reviews: 189,
      type: "Hotend",
      maxTemp: "300°C",
      compatibility: ["Universal"],
      image: "/placeholder.svg?height=200&width=200&text=Volcano",
      features: ["High flow rate", "Large nozzles", "Fast printing"],
      amazonUrl: "https://amazon.com/dp/example-volcano",
    },
    {
      id: 6,
      name: "Titan Extruder",
      brand: "E3D",
      price: "$85",
      originalPrice: "$95",
      rating: 4.4,
      reviews: 278,
      type: "Extruder",
      maxTemp: "N/A",
      compatibility: ["Universal"],
      image: "/placeholder.svg?height=200&width=200&text=Titan",
      features: ["Lightweight", "3:1 gearing", "Compact design"],
      amazonUrl: "https://amazon.com/dp/example-titan",
    },
  ]

  const productTypes = [
    {
      name: "Hotends",
      description: "Heat the filament for extrusion",
      icon: <Thermometer className="w-6 h-6 text-red-600" />,
      keyFeatures: ["Temperature control", "Material compatibility", "Nozzle size"],
    },
    {
      name: "Extruders",
      description: "Feed filament to the hotend",
      icon: <Settings className="w-6 h-6 text-blue-600" />,
      keyFeatures: ["Gear ratio", "Filament grip", "Precision"],
    },
    {
      name: "Complete Systems",
      description: "Integrated extruder + hotend",
      icon: <Zap className="w-6 h-6 text-green-600" />,
      keyFeatures: ["All-in-one", "Easy installation", "Optimized performance"],
    },
  ]

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/parts">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Parts
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Extruders & Hotends</h1>
          <p className="text-lg text-gray-600">
            Upgrade your 3D printer's extrusion system for better performance and reliability
          </p>
        </div>

        {/* Product Types Guide */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Types</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {productTypes.map((type) => (
              <Card key={type.name} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {type.icon}
                  <h3 className="text-xl font-semibold text-gray-900">{type.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Key Features:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {type.keyFeatures.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h3 className="font-semibold text-gray-900">Filters</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search products..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All types</SelectItem>
                <SelectItem value="hotend">Hotends</SelectItem>
                <SelectItem value="extruder">Extruders</SelectItem>
                <SelectItem value="combo">Complete Systems</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All brands</SelectItem>
                <SelectItem value="e3d">E3D</SelectItem>
                <SelectItem value="micro-swiss">Micro Swiss</SelectItem>
                <SelectItem value="bigtreetech">BIGTREETECH</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Compatibility" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All printers</SelectItem>
                <SelectItem value="ender-3">Ender 3</SelectItem>
                <SelectItem value="prusa">Prusa i3</SelectItem>
                <SelectItem value="cr-10">CR-10</SelectItem>
                <SelectItem value="universal">Universal</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any price</SelectItem>
                <SelectItem value="under-50">Under $50</SelectItem>
                <SelectItem value="50-100">$50 - $100</SelectItem>
                <SelectItem value="over-100">Over $100</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">Found {products.length} products</p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 relative">
              {product.bestseller && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-red-500 text-white">Best Seller</Badge>
                </div>
              )}
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={250}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-500">{product.brand}</p>
                      <Badge variant="outline" className="text-xs">
                        {product.type}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                    {product.maxTemp !== "N/A" && <p className="text-sm text-gray-600">Max Temp: {product.maxTemp}</p>}
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Compatible with:</p>
                    <div className="flex flex-wrap gap-1">
                      {product.compatibility.slice(0, 2).map((comp) => (
                        <Badge key={comp} variant="secondary" className="text-xs">
                          {comp}
                        </Badge>
                      ))}
                      {product.compatibility.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{product.compatibility.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {product.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{product.features.length - 2}
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                      <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer nofollow">
                        Buy on Amazon
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href={`/parts/extruders-hotends/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  )
}
