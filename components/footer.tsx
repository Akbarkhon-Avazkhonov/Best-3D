import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Printer, Facebook, Twitter, Youtube, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Printer className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">3D Принтеры Pro</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your reliable guide in the world of 3D printing. Expert reviews, honest comparisons and best deals.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/printers" className="text-gray-400 hover:text-white transition-colors">
                  3D Printers
                </Link>
              </li>
              <li>
                <Link href="/parts" className="text-gray-400 hover:text-white transition-colors">
                  Parts & Accessories
                </Link>
              </li>
              <li>
                <Link href="/parts/filaments" className="text-gray-400 hover:text-white transition-colors">
                  Filaments
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-400 hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-white transition-colors">
                  Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/printers/beginner" className="text-gray-400 hover:text-white transition-colors">
                  Beginner Printers
                </Link>
              </li>
              <li>
                <Link href="/printers/professional" className="text-gray-400 hover:text-white transition-colors">
                  Professional Printers
                </Link>
              </li>
              <li>
                <Link href="/parts/extruders-hotends" className="text-gray-400 hover:text-white transition-colors">
                  Extruders & Hotends
                </Link>
              </li>
              <li>
                <Link href="/parts/filaments" className="text-gray-400 hover:text-white transition-colors">
                  Filaments & Materials
                </Link>
              </li>
              <li>
                <Link href="/parts/tools" className="text-gray-400 hover:text-white transition-colors">
                  Tools & Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-400 text-sm">Get fresh reviews and exclusive discounts</p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} 3D Принтеры Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/affiliate-disclosure" className="text-gray-400 hover:text-white transition-colors">
                Affiliate Disclosure
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-gray-500">
            We participate in the Amazon Associates program and earn commission from purchases through our links.
          </div>
        </div>
      </div>
    </footer>
  )
}
