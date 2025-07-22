import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      title: "Creality Ender 3 V3 SE Full Review: Best Beginner Printer?",
      excerpt:
        "A detailed analysis of the popular Creality Ender 3 V3 SE 3D printer. We analyze all the pros and cons, print quality, ease of assembly, and value for money.",
      author: "Alexey Petrov",
      date: "January 15, 2025",
      readTime: "8 min",
      rating: 4.5,
      category: "Beginner",
      image: "/creality-ender-3-v3-se-setup.png",
      slug: "creality-ender-3-v3-se-review",
      featured: true,
    },
    {
      id: 2,
      title: "Prusa MINI+ vs Bambu Lab A1 mini: Compact Printer Comparison",
      excerpt:
        "Detailed comparison of two popular compact 3D printers. Which one to choose for home use? We analyze print quality, features and price.",
      author: "Maria Sidorova",
      date: "January 12, 2025",
      readTime: "12 min",
      rating: 4.7,
      category: "Comparison",
      image: "/prusa-mini-vs-bambu-lab-a1.png",
      slug: "prusa-mini-vs-bambu-a1-comparison",
    },
    {
      id: 3,
      title: "Top 5 Mistakes Beginners Make When Choosing Their First 3D Printer",
      excerpt:
        "Avoid common mistakes when buying your first 3D printer. Practical advice from experts to help you make the right choice and save money.",
      author: "Dmitry Kozlov",
      date: "January 10, 2025",
      readTime: "6 min",
      rating: 5.0,
      category: "Guide",
      image: "/3d-printer-buying-mistakes.png",
      slug: "top-5-mistakes-buying-first-3d-printer",
    },
    {
      id: 4,
      title: "Ultimaker S3 Review: Professional Printing for Business",
      excerpt:
        "Comprehensive review of the Ultimaker S3 professional 3D printer. We analyze dual extrusion capabilities, print quality, and whether it is suitable for commercial use.",
      author: "Anna Volkova",
      date: "January 8, 2025",
      readTime: "15 min",
      rating: 4.9,
      category: "Professional",
      image: "/placeholder.svg?height=200&width=300",
      slug: "ultimaker-s3-professional-review",
    },
    {
      id: 5,
      title: "Best 3D Printing Materials in 2025",
      excerpt:
        "A complete guide to 3D printing materials: PLA, ABS, PETG, TPU and others. Which filament to choose for different projects? Setup and printing tips.",
      author: "Sergey Ivanov",
      date: "January 5, 2025",
      readTime: "10 min",
      rating: 4.8,
      category: "Materials",
      image: "/placeholder.svg?height=200&width=300",
      slug: "best-3d-printing-materials-2025",
    },
    {
      id: 6,
      title: "Formlabs Form 3: SLA Printing Revolution or Overpayment?",
      excerpt:
        "Detailed review of the Formlabs Form 3 resin 3D printer. Is it worth overpaying for SLA technology? We compare it with FDM printers and analyze print quality.",
      author: "Elena Morozova",
      date: "January 3, 2025",
      readTime: "11 min",
      rating: 4.6,
      category: "SLA",
      image: "/placeholder.svg?height=200&width=300",
      slug: "formlabs-form-3-sla-review",
    },
  ]

  const categories = ["All", "Beginner", "Professional", "Comparison", "Guide", "Materials", "SLA"]

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">3D Printing Reviews and Guides</h1>
          <p className="text-lg text-gray-600">Expert reviews, comparisons and practical advice from our specialists</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Review */}
        {reviews.find((review) => review.featured) && (
          <Card className="mb-12 overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={reviews[0].image || "/placeholder.svg"}
                    alt={reviews[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">Recommended</Badge>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4" variant="outline">
                    {reviews[0].category}
                  </Badge>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{reviews[0].title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{reviews[0].excerpt}</p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{reviews[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{reviews[0].date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{reviews[0].rating}</span>
                    </div>
                  </div>
                  <Button asChild size="lg" className="w-fit">
                    <Link href={`/reviews/${reviews[0].slug}`}>
                      Read Full Review
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(1).map((review) => (
            <Card key={review.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={review.image || "/placeholder.svg"}
                    alt={review.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{review.category}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {review.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3">{review.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{review.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{review.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{review.date}</span>
                      <span>{review.readTime}</span>
                    </div>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/reviews/${review.slug}`}>
                        Read
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Don't Miss New Reviews!</h3>
          <p className="text-lg mb-6 opacity-90">Subscribe to our newsletter and get fresh reviews and guides first</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-lg text-gray-900" />
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
