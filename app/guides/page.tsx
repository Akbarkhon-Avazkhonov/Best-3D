import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, User, ArrowRight, Lightbulb, Settings, Wrench } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GuidesPage() {
  const guides = [
    {
      id: 1,
      title: "Complete Beginner's Guide to 3D Printing",
      excerpt:
        "Everything you need to know to start your 3D printing journey. From choosing your first printer to making your first successful print.",
      author: "Alex Peterson",
      date: "January 22, 2025",
      readTime: "15 min",
      category: "Beginner",
      difficulty: "Easy",
      image: "/placeholder.svg?height=200&width=300&text=Beginner+Guide",
      slug: "complete-beginners-guide-3d-printing",
      featured: true,
    },
    {
      id: 2,
      title: "How to Choose Your First 3D Printer in 2025",
      excerpt:
        "Step-by-step guide to selecting the perfect 3D printer for your needs and budget. Compare different types, features, and find the best value.",
      author: "Maria Johnson",
      date: "January 20, 2025",
      readTime: "12 min",
      category: "Buying Guide",
      difficulty: "Easy",
      image: "/placeholder.svg?height=200&width=300&text=Choose+Printer",
      slug: "how-to-choose-first-3d-printer-2025",
    },
    {
      id: 3,
      title: "3D Printer Calibration: The Ultimate Guide",
      excerpt:
        "Master the art of 3D printer calibration. Learn bed leveling, extruder calibration, temperature settings, and advanced tuning for perfect prints.",
      author: "David Wilson",
      date: "January 18, 2025",
      readTime: "18 min",
      category: "Setup",
      difficulty: "Intermediate",
      image: "/placeholder.svg?height=200&width=300&text=Calibration+Guide",
      slug: "3d-printer-calibration-ultimate-guide",
    },
    {
      id: 4,
      title: "Best 3D Printing Materials Guide 2025",
      excerpt:
        "Comprehensive guide to 3D printing materials: PLA, ABS, PETG, TPU, and specialty filaments. Learn properties, applications, and printing tips.",
      author: "Sarah Davis",
      date: "January 16, 2025",
      readTime: "14 min",
      category: "Materials",
      difficulty: "Intermediate",
      image: "/placeholder.svg?height=200&width=300&text=Materials+Guide",
      slug: "best-3d-printing-materials-guide-2025",
    },
    {
      id: 5,
      title: "Troubleshooting Common 3D Printing Problems",
      excerpt:
        "Fix the most common 3D printing issues: layer adhesion, stringing, warping, under-extrusion, and more. Step-by-step solutions for better prints.",
      author: "Mike Brown",
      date: "January 14, 2025",
      readTime: "16 min",
      category: "Troubleshooting",
      difficulty: "Intermediate",
      image: "/placeholder.svg?height=200&width=300&text=Troubleshooting",
      slug: "troubleshooting-3d-printing-problems",
    },
    {
      id: 6,
      title: "Advanced 3D Printing Techniques and Tips",
      excerpt:
        "Take your 3D printing to the next level with advanced techniques: multi-material printing, supports optimization, post-processing, and professional workflows.",
      author: "Lisa Anderson",
      date: "January 12, 2025",
      readTime: "20 min",
      category: "Advanced",
      difficulty: "Hard",
      image: "/placeholder.svg?height=200&width=300&text=Advanced+Techniques",
      slug: "advanced-3d-printing-techniques",
    },
    {
      id: 7,
      title: "3D Printer Maintenance: Keep Your Machine Running Smoothly",
      excerpt:
        "Essential maintenance tasks to extend your printer's life. Learn cleaning, lubrication, belt tensioning, and preventive care schedules.",
      author: "Tom Garcia",
      date: "January 10, 2025",
      readTime: "13 min",
      category: "Maintenance",
      difficulty: "Intermediate",
      image: "/placeholder.svg?height=200&width=300&text=Maintenance+Guide",
      slug: "3d-printer-maintenance-guide",
    },
    {
      id: 8,
      title: "Designing for 3D Printing: CAD to Print Success",
      excerpt:
        "Learn design principles for successful 3D printing. Understand overhangs, supports, tolerances, and optimization techniques for better results.",
      author: "Jennifer Lee",
      date: "January 8, 2025",
      readTime: "17 min",
      category: "Design",
      difficulty: "Intermediate",
      image: "/placeholder.svg?height=200&width=300&text=Design+Guide",
      slug: "designing-for-3d-printing-guide",
    },
    {
      id: 9,
      title: "Slicing Software Comparison: Cura vs PrusaSlicer vs Bambu Studio",
      excerpt:
        "Compare the top 3D printing slicers. Features, ease of use, advanced settings, and which slicer is best for your needs and printer.",
      author: "Robert Kim",
      date: "January 6, 2025",
      readTime: "15 min",
      category: "Software",
      difficulty: "Intermediate",
      image: "/placeholder.svg?height=200&width=300&text=Slicer+Comparison",
      slug: "slicing-software-comparison-2025",
    },
    {
      id: 10,
      title: "SLA 3D Printing Guide: Resin Printing for Beginners",
      excerpt:
        "Complete guide to resin 3D printing. Safety, setup, printing process, post-processing, and achieving professional results with SLA technology.",
      author: "Amanda Chen",
      date: "January 4, 2025",
      readTime: "19 min",
      category: "SLA",
      difficulty: "Intermediate",
      image: "/placeholder.svg?height=200&width=300&text=SLA+Guide",
      slug: "sla-3d-printing-guide-beginners",
    },
    {
      id: 11,
      title: "Multi-Color 3D Printing: Techniques and Tools",
      excerpt:
        "Explore multi-color 3D printing methods: filament swapping, multi-material systems, painting, and post-processing techniques for colorful prints.",
      author: "Kevin Park",
      date: "January 2, 2025",
      readTime: "14 min",
      category: "Multi-Color",
      difficulty: "Intermediate",
      image: "/placeholder.svg?height=200&width=300&text=Multi-Color+Printing",
      slug: "multi-color-3d-printing-guide",
    },
    {
      id: 12,
      title: "3D Printing Safety: Essential Guidelines and Best Practices",
      excerpt:
        "Stay safe while 3D printing. Ventilation, fire safety, chemical handling, electrical safety, and creating a safe printing environment.",
      author: "Chris Taylor",
      date: "December 31, 2024",
      readTime: "11 min",
      category: "Safety",
      difficulty: "Easy",
      image: "/placeholder.svg?height=200&width=300&text=Safety+Guide",
      slug: "3d-printing-safety-guidelines",
    },
    {
      id: 13,
      title: "Building Your First 3D Printer Enclosure",
      excerpt:
        "DIY enclosure build guide. Materials, design considerations, ventilation, temperature control, and safety features for better printing results.",
      author: "Rachel Green",
      date: "December 29, 2024",
      readTime: "22 min",
      category: "DIY",
      difficulty: "Hard",
      image: "/placeholder.svg?height=200&width=300&text=Enclosure+Build",
      slug: "building-3d-printer-enclosure",
    },
    {
      id: 14,
      title: "3D Printing for Business: From Hobby to Profit",
      excerpt:
        "Turn your 3D printing skills into income. Business models, pricing strategies, equipment scaling, and legal considerations for 3D printing services.",
      author: "Mark Johnson",
      date: "December 27, 2024",
      readTime: "16 min",
      category: "Business",
      difficulty: "Intermediate",
      image: "/placeholder.svg?height=200&width=300&text=Business+Guide",
      slug: "3d-printing-business-guide",
    },
    {
      id: 15,
      title: "Post-Processing Techniques: From Print to Perfection",
      excerpt:
        "Master post-processing techniques. Sanding, painting, vapor smoothing, support removal, and finishing methods for professional-quality results.",
      author: "Diana Martinez",
      date: "December 25, 2024",
      readTime: "18 min",
      category: "Post-Processing",
      difficulty: "Intermediate",
      image: "/placeholder.svg?height=200&width=300&text=Post-Processing",
      slug: "3d-printing-post-processing-techniques",
    },
  ]

  const categories = [
    "All",
    "Beginner",
    "Buying Guide",
    "Setup",
    "Materials",
    "Troubleshooting",
    "Advanced",
    "Maintenance",
    "Design",
    "Software",
    "SLA",
    "Multi-Color",
    "Safety",
    "DIY",
    "Business",
    "Post-Processing",
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Hard":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Setup":
        return <Settings className="w-4 h-4" />
      case "Troubleshooting":
        return <Wrench className="w-4 h-4" />
      default:
        return <BookOpen className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">3D Printing Guides & Tutorials</h1>
          <p className="text-lg text-gray-600">
            Learn everything about 3D printing with our comprehensive guides and step-by-step tutorials
          </p>
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

        {/* Featured Guide */}
        {guides.find((guide) => guide.featured) && (
          <Card className="mb-12 overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={guides[0].image || "/placeholder.svg"}
                    alt={guides[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white flex items-center gap-1">
                      <Lightbulb className="w-3 h-3" />
                      Featured Guide
                    </Badge>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="w-fit" variant="outline">
                      {guides[0].category}
                    </Badge>
                    <Badge className={`w-fit ${getDifficultyColor(guides[0].difficulty)}`}>
                      {guides[0].difficulty}
                    </Badge>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{guides[0].title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{guides[0].excerpt}</p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{guides[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{guides[0].readTime}</span>
                    </div>
                  </div>
                  <Button asChild size="lg" className="w-fit">
                    <Link href={`/guides/${guides[0].slug}`}>
                      Start Learning
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.slice(1).map((guide) => (
            <Card key={guide.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={guide.image || "/placeholder.svg"}
                    alt={guide.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {getCategoryIcon(guide.category)}
                      {guide.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={getDifficultyColor(guide.difficulty)}>{guide.difficulty}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {guide.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3">{guide.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{guide.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{guide.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{guide.date}</span>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/guides/${guide.slug}`}>
                        Read Guide
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
          <h3 className="text-2xl font-bold mb-4">Never Miss a New Guide!</h3>
          <p className="text-lg mb-6 opacity-90">
            Subscribe to our newsletter and get the latest tutorials and tips delivered to your inbox
          </p>
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
