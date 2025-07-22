import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Target, Heart } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const team = [
    {
      name: "Alexey Petrov",
      role: "Editor-in-Chief",
      experience: "8 years in 3D printing",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Mechanical engineer with years of experience in additive technologies",
    },
    {
      name: "Maria Sidorova",
      role: "Technical Reviewer",
      experience: "5 years of testing",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Specialist in materials and 3D printing technologies",
    },
    {
      name: "Dmitry Kozlov",
      role: "Equipment Expert",
      experience: "6 years of experience",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Consultant on the selection and configuration of 3D printers",
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About 3D Printers Pro</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We help enthusiasts and professionals choose the perfect 3D printer through honest reviews, detailed
            comparisons and expert recommendations.
          </p>
        </div>

        {/* Mission */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Make the world of 3D printing accessible to everyone. We believe that a properly chosen printer can open
              unlimited possibilities for creativity, learning and business.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Honesty</h3>
                  <p className="text-sm text-gray-600">Objective reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Expertise</h3>
                  <p className="text-sm text-gray-600">Deep knowledge</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Наша команда"
              width={500}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
            <p className="text-gray-600">Tested printers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
            <p className="text-gray-600">Happy readers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
            <p className="text-gray-600">Detailed reviews</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
            <p className="text-gray-600">Years of experience</p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600">Experts with years of experience in 3D printing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <Badge variant="secondary" className="mb-3">
                    {member.experience}
                  </Badge>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Passion for Technology</h3>
              <p className="text-gray-600">
                We are genuinely passionate about 3D printing and follow all the industry innovations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                We are building a community of enthusiasts where everyone can share their experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">Each review is carefully checked and based on real experience</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-6 opacity-90">Get exclusive reviews, discounts and expert tips</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </div>
  )
}
