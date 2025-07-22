import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Printer, Zap, Shield, Users, Wrench, Thermometer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const featuredPrinters = [
    {
      id: 1,
      name: "Ender 3 V3 SE",
      brand: "Creality",
      price: "$199",
      originalPrice: "$249",
      rating: 4.5,
      reviews: 1247,
      image: "/creality-ender-3.png",
      features: ["Auto-leveling", "Resume Print", "Easy Assembly"],
      amazonUrl: "https://amazon.com/dp/example1",
    },
    {
      id: 2,
      name: "Prusa MINI+",
      brand: "Prusa Research",
      price: "$429",
      originalPrice: "$479",
      rating: 4.8,
      reviews: 892,
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
      image: "/bambu-lab-a1-mini-white.png",
      features: ["Auto-calibration", "AI monitoring", "Multi-color"],
      amazonUrl: "https://amazon.com/dp/example3",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">🔥 Best Deals 2025</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Best 3D Printers for Home and Business
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Expert reviews, comparisons and best prices on 3D printers. Find the perfect printer for your projects
                  with our detailed guides.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/printers">View Catalog</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Link href="/reviews">Read Reviews</Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>50,000+ happy customers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Quality guarantee</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/modern-3d-printer.png"
                alt="3D принтер в работе"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Printer className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">200+ моделей</p>
                    <p className="text-sm text-gray-600">В нашем каталоге</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Top 3 3D Printers of 2025</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experts selected the best value-for-money models
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrinters.map((printer, index) => (
              <Card
                key={printer.id}
                className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {index === 0 && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-red-500 text-white">Best Seller</Badge>
                  </div>
                )}
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={printer.image || "/placeholder.svg"}
                      alt={printer.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{printer.brand}</p>
                      <h3 className="text-xl font-bold text-gray-900">{printer.name}</h3>
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
                        {printer.rating} ({printer.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {printer.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-gray-900">{printer.price}</span>
                          <span className="text-lg text-gray-500 line-through">{printer.originalPrice}</span>
                        </div>
                        <p className="text-sm text-green-600 font-medium">Save: $50</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button asChild className="w-full" size="lg">
                        <a
                          href={printer.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="bg-orange-500 hover:bg-orange-600"
                        >
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Expert Reviews</h3>
              <p className="text-gray-600">Detailed testing and analysis of each model by our specialists</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Best Prices</h3>
              <p className="text-gray-600">We monitor prices and find the most profitable deals</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="text-gray-600">Thousands of users share experience and tips</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Printer className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-600">We help with choosing and setting up your printer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parts & Accessories Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Parts & Accessories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Upgrade and maintain your 3D printer with high-quality parts and accessories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/parts/filaments">
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">Filaments</h3>
                  <p className="text-gray-600">Premium quality filaments in various materials and colors</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/parts/extruders-hotends">
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Thermometer className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">Extruders & Hotends</h3>
                  <p className="text-gray-600">Upgrade your printer's extrusion system for better performance</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/parts">
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">All Parts</h3>
                  <p className="text-gray-600">Browse our complete catalog of 3D printer parts and accessories</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/parts">View All Parts & Accessories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your 3D Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter and get exclusive discounts and reviews of new products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-lg text-gray-900" />
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
