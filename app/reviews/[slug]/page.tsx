import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, User, ArrowLeft, ExternalLink, CheckCircle, XCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ReviewDetailPage({ params }: { params: { slug: string } }) {
  // В реальном приложении данные загружались бы по slug
  const review = {
    title: "Creality Ender 3 V3 SE Full Review: Best Beginner Printer?",
    author: "Alex Petrov",
    date: "January 15, 2025",
    readTime: "8 min",
    rating: 4.5,
    category: "Beginner",
    image: "/placeholder.svg?height=400&width=800",
    amazonUrl: "https://amazon.com/dp/example1",
    price: "$199",
    originalPrice: "$249",
  }

  const pros = [
    "Excellent price-performance ratio",
    "Easy assembly in 30 minutes",
    "Automatic bed leveling",
    "Print resume function",
    "Large community and support",
    "High-quality printing out of the box",
  ]

  const cons = [
    "Plastic extruder parts",
    "Noisy operation",
    "Limited print area",
    "Requires calibration after transportation",
  ]

  const specs = [
    { label: "Print Technology", value: "FDM" },
    { label: "Build Volume", value: "220 × 220 × 250 mm" },
    { label: "Positioning Accuracy", value: "0.1 mm" },
    { label: "Layer Height", value: "0.1-0.3 mm" },
    { label: "Print Speed", value: "Up to 100 mm/s" },
    { label: "Materials", value: "PLA, ABS, PETG, TPU" },
    { label: "Connectivity", value: "USB, SD card" },
    { label: "Dimensions", value: "486 × 430 × 434 mm" },
    { label: "Weight", value: "7.2 kg" },
  ]

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/reviews">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Reviews
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="outline">{review.category}</Badge>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-semibold">{review.rating}</span>
            </div>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{review.title}</h1>

          <div className="flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{review.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{review.date}</span>
            </div>
            <span>{review.readTime}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mb-8 rounded-xl overflow-hidden">
          <Image
            src={review.image || "/placeholder.svg"}
            alt={review.title}
            width={800}
            height={400}
            className="w-full h-64 lg:h-96 object-cover"
          />
        </div>

        {/* Quick Buy Section */}
        <Card className="mb-8 bg-orange-50 border-orange-200">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Creality Ender 3 V3 SE</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-gray-900">{review.price}</span>
                  <span className="text-lg text-gray-500 line-through">{review.originalPrice}</span>
                  <Badge className="bg-green-100 text-green-800">20% Off</Badge>
                </div>
                <p className="text-gray-600">Best choice for beginners</p>
              </div>
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <a
                  href={review.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center gap-2"
                >
                  Buy on Amazon
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Introduction</h2>
          <p>
            Creality Ender 3 V3 SE is an updated version of the legendary Ender 3, which has won the hearts of thousands
            of 3D printing enthusiasts around the world. In this detailed review, we will analyze all aspects of this
            printer: from unpacking to print quality, to help you make an informed decision.
          </p>

          <h2>What's in the Box?</h2>
          <p>The printer comes in a compact package with good protection. The kit includes:</p>
          <ul>
            <li>Main components of the printer (partially assembled)</li>
            <li>Assembly tool kit</li>
            <li>Sample PLA filament (white, 200g)</li>
            <li>SD card with test models</li>
            <li>Detailed assembly instructions</li>
            <li>Spare parts (nozzles, belts)</li>
          </ul>

          <h2>Assembly and First Setup</h2>
          <p>
            One of the main advantages of the Ender 3 V3 SE is the ease of assembly. Most of the printer is already
            assembled at the factory, you only need to connect the main nodes. The whole process takes about 30-45
            minutes even for beginners.
          </p>

          <p>
            The new automatic bed leveling system was especially pleasing. Now you don't have to suffer with manual
            calibration - the printer does everything itself in a few minutes.
          </p>

          <h2>Print Quality</h2>
          <p>
            During the testing period, we printed more than 50 different models, from simple calibration cubes to
            complex miniatures with small details. The results are impressive:
          </p>

          <ul>
            <li>
              <strong>PLA:</strong> Excellent quality out of the box, minimal settings
            </li>
            <li>
              <strong>ABS:</strong> Requires a little tweaking, but the result is good
            </li>
            <li>
              <strong>PETG:</strong> Prints without problems after temperature adjustment
            </li>
            <li>
              <strong>TPU:</strong> Flexible materials print slowly but with high quality
            </li>
          </ul>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Pros
              </h3>
              <ul className="space-y-2">
                {pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{pro}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Cons
              </h3>
              <ul className="space-y-2">
                {cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{con}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Specifications */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {specs.map((spec, index) => (
                <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">{spec.label}:</span>
                  <span className="text-gray-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Final Verdict */}
        <Card className="mb-12 bg-blue-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <span className="text-3xl font-bold text-gray-900">{review.rating}/5</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Verdict</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Creality Ender 3 V3 SE is an excellent choice for beginners and experienced users. Easy assembly, good
              print quality and affordable price make it one of the best printers in its class. Recommended for
              purchase!
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
            <a
              href={review.amazonUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center gap-2"
            >
              Buy Creality Ender 3 V3 SE on Amazon
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <p className="text-sm text-gray-600 mt-2">* Prices may vary. Check the current price on Amazon.</p>
        </div>
      </div>
    </div>
  )
}
