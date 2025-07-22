import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Filter, Search, ArrowLeft, Thermometer, Palette, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FilamentsPage() {
  const filaments = [
    {
      id: 1,
      name: "PLA+ Filament 1kg",
      brand: "SUNLU",
      price: "$19",
      originalPrice: "$24",
      rating: 4.7,
      reviews: 1234,
      material: "PLA+",
      colors: ["Black", "White", "Red", "Blue", "Green"],
      diameter: "1.75mm",
      printTemp: "200-220°C",
      bedTemp: "50-60°C",
      image: "/placeholder.svg?height=200&width=200&text=PLA+Filament",
      features: ["Easy to print", "Strong", "Low odor"],
      amazonUrl: "https://amazon.com/dp/example-pla-plus",
      bestseller: true,
    },
    {
      id: 2,
      name: "ABS Filament 1kg",
      brand: "HATCHBOX",
      price: "$25",
      originalPrice: "$30",
      rating: 4.5,
      reviews: 892,
      material: "ABS",
      colors: ["Black", "White", "Gray", "Red"],
      diameter: "1.75mm",
      printTemp: "220-250°C",
      bedTemp: "80-100°C",
      image: "/placeholder.svg?height=200&width=200&text=ABS+Filament",
      features: ["Durable", "Heat resistant", "Chemical resistant"],
      amazonUrl: "https://amazon.com/dp/example-abs",
    },
    {
      id: 3,
      name: "PETG Filament 1kg",
      brand: "OVERTURE",
      price: "$23",
      originalPrice: "$28",
      rating: 4.6,
      reviews: 567,
      material: "PETG",
      colors: ["Clear", "Black", "White", "Blue"],
      diameter: "1.75mm",
      printTemp: "220-250°C",
      bedTemp: "70-80°C",
      image: "/placeholder.svg?height=200&width=200&text=PETG+Filament",
      features: ["Chemical resistant", "Clear finish", "Strong"],
      amazonUrl: "https://amazon.com/dp/example-petg",
    },
    {
      id: 4,
      name: "TPU Flexible Filament",
      brand: "SUNLU",
      price: "$28",
      originalPrice: "$35",
      rating: 4.4,
      reviews: 345,
      material: "TPU",
      colors: ["Black", "White", "Red", "Blue"],
      diameter: "1.75mm",
      printTemp: "210-230°C",
      bedTemp: "40-60°C",
      image: "/placeholder.svg?height=200&width=200&text=TPU+Filament",
      features: ["Flexible", "Rubber-like", "Durable"],
      amazonUrl: "https://amazon.com/dp/example-tpu",
    },
    {
      id: 5,
      name: "Wood Fill Filament",
      brand: "HATCHBOX",
      price: "$32",
      originalPrice: "$38",
      rating: 4.3,
      reviews: 234,
      material: "Wood PLA",
      colors: ["Natural Wood", "Dark Wood"],
      diameter: "1.75mm",
      printTemp: "180-220°C",
      bedTemp: "45-60°C",
      image: "/placeholder.svg?height=200&width=200&text=Wood+Filament",
      features: ["Wood particles", "Sandable", "Stainable"],
      amazonUrl: "https://amazon.com/dp/example-wood",
    },
    {
      id: 6,
      name: "Carbon Fiber PETG",
      brand: "PROTO-PASTA",
      price: "$45",
      originalPrice: "$52",
      rating: 4.8,
      reviews: 156,
      material: "CF-PETG",
      colors: ["Black"],
      diameter: "1.75mm",
      printTemp: "230-260°C",
      bedTemp: "70-80°C",
      image: "/placeholder.svg?height=200&width=200&text=Carbon+Fiber",
      features: ["Ultra strong", "Lightweight", "Conductive"],
      amazonUrl: "https://amazon.com/dp/example-carbon-fiber",
    },
  ]

  const materialTypes = [
    {
      name: "PLA/PLA+",
      description: "Easy to print, biodegradable, perfect for beginners",
      icon: <Zap className="w-6 h-6 text-green-600" />,
      difficulty: "Easy",
      applications: ["Prototypes", "Decorative items", "Learning"],
    },
    {
      name: "ABS",
      description: "Strong, heat resistant, great for functional parts",
      icon: <Thermometer className="w-6 h-6 text-red-600" />,
      difficulty: "Medium",
      applications: ["Automotive parts", "Enclosures", "Tools"],
    },
    {
      name: "PETG",
      description: "Chemical resistant, clear, food safe",
      icon: <Palette className="w-6 h-6 text-blue-600" />,
      difficulty: "Medium",
      applications: ["Containers", "Medical", "Mechanical parts"],
    },
    {
      name: "TPU",
      description: "Flexible, rubber-like, shock absorbing",
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      difficulty: "Hard",
      applications: ["Phone cases", "Gaskets", "Toys"],
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
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">3D Printing Filaments</h1>
          <p className="text-lg text-gray-600">Premium quality filaments for all your 3D printing projects</p>
        </div>

        {/* Material Guide */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Material Guide</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {materialTypes.map((material) => (
              <Card key={material.name} className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  {material.icon}
                  <div>
                    <h3 className="font-semibold text-gray-900">{material.name}</h3>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        material.difficulty === "Easy"
                          ? "border-green-300 text-green-700"
                          : material.difficulty === "Medium"
                            ? "border-yellow-300 text-yellow-700"
                            : "border-red-300 text-red-700"
                      }`}
                    >
                      {material.difficulty}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{material.description}</p>
                <div className="text-xs text-gray-500">
                  <strong>Best for:</strong> {material.applications.join(", ")}
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
              <Input placeholder="Search filaments..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Material" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All materials</SelectItem>
                <SelectItem value="pla">PLA/PLA+</SelectItem>
                <SelectItem value="abs">ABS</SelectItem>
                <SelectItem value="petg">PETG</SelectItem>
                <SelectItem value="tpu">TPU</SelectItem>
                <SelectItem value="specialty">Specialty</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All brands</SelectItem>
                <SelectItem value="sunlu">SUNLU</SelectItem>
                <SelectItem value="hatchbox">HATCHBOX</SelectItem>
                <SelectItem value="overture">OVERTURE</SelectItem>
                <SelectItem value="proto-pasta">PROTO-PASTA</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All colors</SelectItem>
                <SelectItem value="black">Black</SelectItem>
                <SelectItem value="white">White</SelectItem>
                <SelectItem value="red">Red</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="clear">Clear</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any price</SelectItem>
                <SelectItem value="under-25">Under $25</SelectItem>
                <SelectItem value="25-35">$25 - $35</SelectItem>
                <SelectItem value="over-35">Over $35</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">Found {filaments.length} filaments</p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filaments.map((filament) => (
            <Card key={filament.id} className="group hover:shadow-xl transition-all duration-300 relative">
              {filament.bestseller && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-red-500 text-white">Best Seller</Badge>
                </div>
              )}
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={filament.image || "/placeholder.svg"}
                    alt={filament.name}
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
                      <p className="text-sm text-gray-500">{filament.brand}</p>
                      <Badge variant="outline" className="text-xs">
                        {filament.material}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{filament.name}</h3>
                    <p className="text-sm text-gray-600">Diameter: {filament.diameter}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(filament.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {filament.rating} ({filament.reviews})
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Print Temp:</span>
                      <span className="font-medium">{filament.printTemp}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Bed Temp:</span>
                      <span className="font-medium">{filament.bedTemp}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Available colors:</p>
                    <div className="flex flex-wrap gap-1">
                      {filament.colors.slice(0, 3).map((color) => (
                        <Badge key={color} variant="secondary" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                      {filament.colors.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{filament.colors.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">{filament.price}</span>
                      <span className="text-sm text-gray-500 line-through">{filament.originalPrice}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                      <a href={filament.amazonUrl} target="_blank" rel="noopener noreferrer nofollow">
                        Buy on Amazon
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href={`/parts/filaments/${filament.name.toLowerCase().replace(/\s+/g, "-")}`}>
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
            Load More Filaments
          </Button>
        </div>
      </div>
    </div>
  )
}
