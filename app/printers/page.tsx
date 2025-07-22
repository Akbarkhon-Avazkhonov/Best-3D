import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Filter, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PrintersPage() {
  const printers = [
    {
      id: 1,
      name: "Ender 3 V3 SE",
      brand: "Creality",
      price: "$199",
      originalPrice: "$249",
      rating: 4.5,
      reviews: 1247,
      category: "Beginner",
      buildVolume: "220×220×250mm",
      image: "/creality-ender-3.png",
      features: ["Auto-leveling", "Resume Print", "Easy Assembly"],
      amazonUrl: "https://amazon.com/dp/example1",
      bestseller: true,
    },
    {
      id: 2,
      name: "Prusa MINI+",
      brand: "Prusa Research",
      price: "$429",
      originalPrice: "$479",
      rating: 4.8,
      reviews: 892,
      category: "Intermediate",
      buildVolume: "180×180×180mm",
      image: "/prusa-mini-orange.png",
      features: ["Magnetic bed", "WiFi", "Quality sensors"],
      amazonUrl: "https://amazon.com/dp/example2",
    },
    {
      id: 3,
      name: "Bambu Lab A1 mini",
      brand: "Bambu Lab",
      price: "$299",
      originalPrice: "$349",
      rating: 4.7,
      reviews: 634,
      category: "Intermediate",
      buildVolume: "180×180×180mm",
      image: "/bambu-lab-a1-mini-white.png",
      features: ["Auto-calibration", "AI monitoring", "Multi-color"],
      amazonUrl: "https://amazon.com/dp/example3",
    },
    {
      id: 4,
      name: "Ultimaker S3",
      brand: "Ultimaker",
      price: "$3,995",
      originalPrice: "$4,295",
      rating: 4.9,
      reviews: 234,
      category: "Professional",
      buildVolume: "230×190×200mm",
      image: "/ultimaker-s3-printer.png",
      features: ["Dual extrusion", "Heated chamber", "Cloud printing"],
      amazonUrl: "https://amazon.com/dp/example4",
    },
    {
      id: 5,
      name: "Anycubic Kobra 2",
      brand: "Anycubic",
      price: "$179",
      originalPrice: "$229",
      rating: 4.3,
      reviews: 567,
      category: "Beginner",
      buildVolume: "220×220×250mm",
      image: "/anycubic-kobra-2-black.png",
      features: ["Auto-leveling", "Direct drive", "PEI bed"],
      amazonUrl: "https://amazon.com/dp/example5",
    },
    {
      id: 6,
      name: "Formlabs Form 3",
      brand: "Formlabs",
      price: "$3,499",
      originalPrice: "$3,799",
      rating: 4.6,
      reviews: 189,
      category: "Professional",
      buildVolume: "145×145×185mm",
      image: "/formlabs-form3-printer.png",
      features: ["SLA technology", "High precision", "Easy post-processing"],
      amazonUrl: "https://amazon.com/dp/example6",
    },
  ]

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">3D Printers Catalog</h1>
          <p className="text-lg text-gray-600">Find the perfect 3D printer from our collection of verified models</p>
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
              <Input placeholder="Search printers..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All categories</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All brands</SelectItem>
                <SelectItem value="creality">Creality</SelectItem>
                <SelectItem value="prusa">Prusa Research</SelectItem>
                <SelectItem value="bambu">Bambu Lab</SelectItem>
                <SelectItem value="ultimaker">Ultimaker</SelectItem>
                <SelectItem value="anycubic">Anycubic</SelectItem>
                <SelectItem value="formlabs">Formlabs</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any price</SelectItem>
                <SelectItem value="under-300">Under $300</SelectItem>
                <SelectItem value="300-1000">$300 - $1000</SelectItem>
                <SelectItem value="1000-3000">$1000 - $3000</SelectItem>
                <SelectItem value="over-3000">Over $3000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">Found {printers.length} printers</p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {printers.map((printer) => (
            <Card key={printer.id} className="group hover:shadow-xl transition-all duration-300 relative">
              {printer.bestseller && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-red-500 text-white">Best Seller</Badge>
                </div>
              )}
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={printer.image || "/placeholder.svg"}
                    alt={printer.name}
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
                      <p className="text-sm text-gray-500">{printer.brand}</p>
                      <Badge variant="outline" className="text-xs">
                        {printer.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{printer.name}</h3>
                    <p className="text-sm text-gray-600">Build volume: {printer.buildVolume}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(printer.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {printer.rating} ({printer.reviews})
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {printer.features.slice(0, 2).map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {printer.features.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{printer.features.length - 2}
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">{printer.price}</span>
                      <span className="text-sm text-gray-500 line-through">{printer.originalPrice}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                      <a href={printer.amazonUrl} target="_blank" rel="noopener noreferrer nofollow">
                        Buy on Amazon
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href={`/reviews/${printer.name.toLowerCase().replace(/\s+/g, "-")}`}>Read Review</Link>
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
            Load More Printers
          </Button>
        </div>
      </div>
    </div>
  )
}
