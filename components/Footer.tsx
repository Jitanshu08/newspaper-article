import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold">Daily News</h3>
            <p className="text-primary-foreground/80 text-sm">
              Your trusted source for news, articles, and in-depth reporting on global events.
            </p>
            <div className="flex gap-2">
              <a
                href="#facebook"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#twitter"
                className="hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="#instagram"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                ◐
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#technology"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="#business"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  href="#environment"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Environment
                </Link>
              </li>
              <li>
                <Link
                  href="#health"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Health
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-semibold">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2 items-start text-primary-foreground/80">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>info@dailynews.com</span>
              </li>
              <li className="flex gap-2 items-start text-primary-foreground/80">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-2 items-start text-primary-foreground/80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>123 News Street, City, Country</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <p>
            &copy; {currentYear} Daily News. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#terms"
              className="hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#privacy"
              className="hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#cookies"
              className="hover:text-accent transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
