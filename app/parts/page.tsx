import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Filter, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PartsPage() {
  const parts = [
    {
      id: 1,
      name: "E3D V6 All-Metal Hotend",
      brand: "E3D",
      price: "$65",
      originalPrice: "$75",
      rating: 4.8,
      reviews: 342,
      category: "Hotends",
      compatibility: "Universal",
      image: "/placeholder.svg?height=200&width=200&text=E3D+V6",
      features: ["All-metal construction", "High temperature", "Universal mount"],
      amazonUrl: "https://amazon.com/dp/example-e3d-v6",
      bestseller: true,
    },
    {
      id: 2,
      name: "PLA+ Filament 1kg",
      brand: "SUNLU",
      price: "$19",
      originalPrice: "$24",
      rating: 4.7,
      reviews: 1234,
      category: "Filaments",
      compatibility: "Universal",
      image: "/placeholder.svg?height=200&width=200&text=PLA+Filament",
      features: ["Easy to print", "Strong", "Low odor"],
      amazonUrl: "https://amazon.com/dp/example-pla-plus",
      bestseller: true,
    },
    {
      id: 3,
      name: "PEI Spring Steel Sheet",
      brand: "Prusa",
      price: "$39",
      originalPrice: "$45",
      rating: 4.9,
      reviews: 567,
      category: "Print Beds",
      compatibility: "Prusa i3, Ender 3",
      image: "/placeholder.svg?height=200&width=200&text=PEI+Sheet",
      features: ["Easy part removal", "Durable surface", "Magnetic base"],
      amazonUrl: "https://amazon.com/dp/example-pei-sheet",
    },
    {
      id: 4,
      name: "Hardened Steel Nozzle 0.4mm",
      brand: "E3D",
      price: "$15",
      originalPrice: "$18",
      rating: 4.7,
      reviews: 234,
      category: "Nozzles",
      compatibility: "E3D V6, Volcano",
      image: "/placeholder.svg?height=200&width=200&text=Steel+Nozzle",
      features: ["Abrasive resistant", "Precise extrusion", "Long lasting"],
      amazonUrl: "https://amazon.com/dp/example-steel-nozzle",
    },
    {
      id: 5,
      name: "SKR Mini E3 V3.0 Board",
      brand: "BIGTREETECH",
      price: "$45",
      originalPrice: "$52",
      rating: 4.5,
      reviews: 445,
      category: "Electronics",
      compatibility: "Ender 3, CR-10",
      image: "/placeholder.svg?height=200&width=200&text=SKR+Board",
      features: ["Silent drivers", "32-bit ARM", "Easy installation"],
      amazonUrl: "https://amazon.com/dp/example-skr-board",
    },
    {
      id: 6,
      name: "3D Printer Tool Kit",
      brand: "REPTOR",
      price: "$29",
      originalPrice: "$35",
      rating: 4.4,
      reviews: 678,
      category: "Tools",
      compatibility: "Universal",
      image: "/placeholder.svg?height=200&width=200&text=Tool+Kit",
      features: ["Complete set", "Quality tools", "Storage case"],
      amazonUrl: "https://amazon.com/dp/example-tool-kit",
    },
    {
      id: 7,
      name: "PETG Filament 1kg",
      brand: "OVERTURE",
      price: "$23",
      originalPrice: "$28",
      rating: 4.6,
      reviews: 567,
      category: "Filaments",
      compatibility: "Universal",
      image: "/placeholder.svg?height=200&width=200&text=PETG+Filament",
      features: ["Chemical resistant", "Clear finish", "Strong"],
      amazonUrl: "https://amazon.com/dp/example-petg",
    },
    {
      id: 8,
      name: "Micro Swiss All Metal Hotend",
      brand: "Micro Swiss",
      price: "$55",
      originalPrice: "$65",
      rating: 4.7,
      reviews: 567,
      category: "Hotends",
      compatibility: "Ender 3, Ender 5",
      image: "/placeholder.svg?height=200&width=200&text=Micro+Swiss",
      features: ["Drop-in replacement", "All-metal", "Precision machined"],
      amazonUrl: "https://amazon.com/dp/example-micro-swiss",
    },
    {
      id: 9,
      name: "BMG Extruder Clone",
      brand: "BIGTREETECH",
      price: "$35",
      originalPrice: "$42",
      rating: 4.5,
      reviews: 234,
      category: "Extruders",
      compatibility: "Universal",
      image: "/placeholder.svg?height=200&width=200&text=BMG+Extruder",
      features: ["Dual drive gears", "High precision", "Flexible filament"],
      amazonUrl: "https://amazon.com/dp/example-bmg-extruder",
    },
    {
      id: 10,
      name: "TPU Flexible Filament",
      brand: "SUNLU",
      price: "$28",
      originalPrice: "$35",
      rating: 4.4,
      reviews: 345,
      category: "Filaments",
      compatibility: "Direct Drive",
      image: "/placeholder.svg?height=200&width=200&text=TPU+Filament",
      features: ["Flexible", "Rubber-like", "Durable"],
      amazonUrl: "https://amazon.com/dp/example-tpu",
    },
    {
      id: 11,
      name: "Glass Print Bed",
      brand: "Creality",
      price: "$25",
      originalPrice: "$30",
      rating: 4.3,
      reviews: 789,
      category: "Print Beds",
      compatibility: "Ender 3, CR-10",
      image: "/placeholder.svg?height=200&width=200&text=Glass+Bed",
      features: ["Flat surface", "Easy cleaning", "Heat resistant"],
      amazonUrl: "https://amazon.com/dp/example-glass-bed",
    },
    {
      id: 12,
      name: "Capricorn PTFE Tube",
      brand: "Capricorn",
      price: "$12",
      originalPrice: "$15",
      rating: 4.6,
      reviews: 456,
      category: "Tubes",
      compatibility: "Universal",
      image: "/placeholder.svg?height=200&width=200&text=PTFE+Tube",
      features: ["Low friction", "High temperature", "Precise inner diameter"],
      amazonUrl: "https://amazon.com/dp/example-ptfe-tube",
    },
  ]

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">3D Printer Parts & Accessories</h1>
          <p className="text-lg text-gray-600">
            Upgrade and maintain your 3D printer with high-quality parts and accessories
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h3 className="font-semibold text-gray-900">Filters</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search parts..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All categories</SelectItem>
                <SelectItem value="hotends">Hotends</SelectItem>
                <SelectItem value="extruders">Extruders</SelectItem>
                <SelectItem value="filaments">Filaments</SelectItem>
                <SelectItem value="print-beds">Print Beds</SelectItem>
                <SelectItem value="nozzles">Nozzles</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="tools">Tools</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All brands</SelectItem>
                <SelectItem value="e3d">E3D</SelectItem>
                <SelectItem value="sunlu">SUNLU</SelectItem>
                <SelectItem value="prusa">Prusa</SelectItem>
                <SelectItem value="bigtreetech">BIGTREETECH</SelectItem>
                <SelectItem value="micro-swiss">Micro Swiss</SelectItem>
                <SelectItem value="overture">OVERTURE</SelectItem>
                <SelectItem value="creality">Creality</SelectItem>
                <SelectItem value="capricorn">Capricorn</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any price</SelectItem>
                <SelectItem value="under-25">Under $25</SelectItem>
                <SelectItem value="25-50">$25 - $50</SelectItem>
                <SelectItem value="50-100">$50 - $100</SelectItem>
                <SelectItem value="over-100">Over $100</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">Found {parts.length} parts and accessories</p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {parts.map((part) => (
            <Card key={part.id} className="group hover:shadow-xl transition-all duration-300 relative">
              {part.bestseller && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-red-500 text-white">Best Seller</Badge>
                </div>
              )}
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={part.image || "/placeholder.svg"}
                    alt={part.name}
                    width={250}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-500">{part.brand}</p>
                      <Badge variant="outline" className="text-xs">
                        {part.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{part.name}</h3>
                    <p className="text-sm text-gray-600">Compatible: {part.compatibility}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(part.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {part.rating} ({part.reviews})
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {part.features.slice(0, 2).map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {part.features.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{part.features.length - 2}
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">{part.price}</span>
                      <span className="text-sm text-gray-500 line-through">{part.originalPrice}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                      <a href={part.amazonUrl} target="_blank" rel="noopener noreferrer nofollow">
                        Buy on Amazon
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href={`/parts/${part.name.toLowerCase().replace(/\s+/g, "-")}`}>View Details</Link>
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
            Load More Parts
          </Button>
        </div>

        {/* Popular Brands */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Popular Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["E3D", "SUNLU", "Prusa", "BIGTREETECH", "Micro Swiss", "Capricorn"].map((brand) => (
              <div key={brand} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <span className="font-bold text-gray-700">{brand.charAt(0)}</span>
                </div>
                <p className="text-sm font-medium text-gray-700">{brand}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated on New Parts & Deals</h3>
          <p className="text-lg mb-6 opacity-90">
            Get notified about new products, exclusive discounts, and maintenance tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-lg text-gray-900" />
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
