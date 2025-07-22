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
      author: "Alex Peterson",
      date: "January 20, 2025",
      readTime: "8 min",
      rating: 4.5,
      category: "Beginner",
      image: "/creality-ender-3-v3-se-setup.png",
      slug: "creality-ender-3-v3-se-review",
      featured: true,
    },
    {
      id: 2,
      title: "Prusa MINI+ vs Bambu Lab A1 mini: Compact Printer Showdown",
      excerpt:
        "Detailed comparison of two popular compact 3D printers. Which one offers better value? We analyze print quality, features, ease of use, and long-term reliability.",
      author: "Maria Johnson",
      date: "January 18, 2025",
      readTime: "12 min",
      rating: 4.7,
      category: "Comparison",
      image: "/prusa-mini-vs-bambu-lab-a1.png",
      slug: "prusa-mini-vs-bambu-a1-comparison",
    },
    {
      id: 3,
      title: "Bambu Lab X1 Carbon Review: The Future of 3D Printing?",
      excerpt:
        "In-depth review of Bambu Lab's flagship printer. Does the X1 Carbon live up to the hype? We test its AI features, multi-color printing, and overall performance.",
      author: "David Wilson",
      date: "January 16, 2025",
      readTime: "15 min",
      rating: 4.9,
      category: "Professional",
      image: "/placeholder.svg?height=200&width=300&text=Bambu+X1+Carbon",
      slug: "bambu-lab-x1-carbon-review",
    },
    {
      id: 4,
      title: "Anycubic Kobra 2 Pro Review: Budget Printer with Premium Features",
      excerpt:
        "Can a budget printer deliver professional results? Our comprehensive review of the Anycubic Kobra 2 Pro covers everything from unboxing to advanced printing techniques.",
      author: "Sarah Davis",
      date: "January 14, 2025",
      readTime: "10 min",
      rating: 4.3,
      category: "Budget",
      image: "/placeholder.svg?height=200&width=300&text=Anycubic+Kobra+2+Pro",
      slug: "anycubic-kobra-2-pro-review",
    },
    {
      id: 5,
      title: "Ultimaker S5 vs Prusa XL: Professional Printer Battle",
      excerpt:
        "Two titans of professional 3D printing go head-to-head. We compare build quality, software ecosystem, material compatibility, and total cost of ownership.",
      author: "Mike Brown",
      date: "January 12, 2025",
      readTime: "18 min",
      rating: 4.8,
      category: "Professional",
      image: "/placeholder.svg?height=200&width=300&text=Ultimaker+vs+Prusa",
      slug: "ultimaker-s5-vs-prusa-xl-comparison",
    },
    {
      id: 6,
      title: "Formlabs Form 3+ Review: SLA Printing Excellence",
      excerpt:
        "Is resin printing worth the investment? Our detailed review of the Formlabs Form 3+ covers print quality, ease of use, post-processing, and material options.",
      author: "Lisa Anderson",
      date: "January 10, 2025",
      readTime: "14 min",
      rating: 4.6,
      category: "SLA",
      image: "/placeholder.svg?height=200&width=300&text=Formlabs+Form+3+Plus",
      slug: "formlabs-form-3-plus-review",
    },
    {
      id: 7,
      title: "Artillery Sidewinder X2 Review: Large Format on a Budget",
      excerpt:
        "Need a big build volume without breaking the bank? We test the Artillery Sidewinder X2's 300x300x400mm build space and evaluate its performance and reliability.",
      author: "Tom Garcia",
      date: "January 8, 2025",
      readTime: "11 min",
      rating: 4.2,
      category: "Large Format",
      image: "/placeholder.svg?height=200&width=300&text=Artillery+Sidewinder+X2",
      slug: "artillery-sidewinder-x2-review",
    },
    {
      id: 8,
      title: "QIDI Tech X-Max 3 Review: Industrial-Grade Desktop Printing",
      excerpt:
        "Can a desktop printer handle industrial materials? Our review of the QIDI Tech X-Max 3 tests its enclosed chamber, high-temp capabilities, and professional features.",
      author: "Jennifer Lee",
      date: "January 6, 2025",
      readTime: "13 min",
      rating: 4.4,
      category: "Industrial",
      image: "/placeholder.svg?height=200&width=300&text=QIDI+X-Max+3",
      slug: "qidi-tech-x-max-3-review",
    },
    {
      id: 9,
      title: "Elegoo Neptune 4 Pro vs Creality K1: Speed Demon Comparison",
      excerpt:
        "The race for the fastest 3D printer heats up. We compare two high-speed contenders and determine which offers the best balance of speed and quality.",
      author: "Robert Kim",
      date: "January 4, 2025",
      readTime: "16 min",
      rating: 4.5,
      category: "High-Speed",
      image: "/placeholder.svg?height=200&width=300&text=Speed+Comparison",
      slug: "elegoo-neptune-4-pro-vs-creality-k1",
    },
    {
      id: 10,
      title: "Raise3D Pro3 Plus Review: Professional Multi-Material Printing",
      excerpt:
        "Multi-material printing for professionals. Our comprehensive review covers the Raise3D Pro3 Plus's dual extruders, software suite, and industrial applications.",
      author: "Amanda Chen",
      date: "January 2, 2025",
      readTime: "20 min",
      rating: 4.7,
      category: "Multi-Material",
      image: "/placeholder.svg?height=200&width=300&text=Raise3D+Pro3+Plus",
      slug: "raise3d-pro3-plus-review",
    },
    {
      id: 11,
      title: "Flashforge Adventurer 4 Review: Plug-and-Play Simplicity",
      excerpt:
        "Perfect for classrooms and beginners. We test the Flashforge Adventurer 4's enclosed design, automatic features, and educational-focused software.",
      author: "Kevin Park",
      date: "December 30, 2024",
      readTime: "9 min",
      rating: 4.1,
      category: "Educational",
      image: "/placeholder.svg?height=200&width=300&text=Flashforge+Adventurer+4",
      slug: "flashforge-adventurer-4-review",
    },
    {
      id: 12,
      title: "Voron 2.4 Build Review: The Ultimate DIY 3D Printer",
      excerpt:
        "Building the legendary Voron 2.4 from scratch. Our detailed build log covers sourcing parts, assembly challenges, and the incredible results of this DIY masterpiece.",
      author: "Chris Taylor",
      date: "December 28, 2024",
      readTime: "25 min",
      rating: 4.9,
      category: "DIY",
      image: "/placeholder.svg?height=200&width=300&text=Voron+2.4+Build",
      slug: "voron-2-4-build-review",
    },
  ]

  const categories = [
    "All",
    "Beginner",
    "Professional",
    "Comparison",
    "Budget",
    "SLA",
    "Large Format",
    "High-Speed",
    "Multi-Material",
    "Educational",
    "DIY",
    "Industrial",
  ]

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
