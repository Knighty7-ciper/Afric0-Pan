import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b-4 border-primary bg-background/95 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent shadow-lg">
              <span className="text-2xl">🌍</span>
            </div>
            <div>
              <h1 className="font-serif text-xl font-black tracking-tight">PESA-AFRIK</h1>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Pan-African Exchange
              </p>
            </div>
          </Link>
          <nav className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" className="font-semibold">
                Home
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="outline" className="border-2 font-semibold bg-transparent">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/sign-up">
              <Button className="font-bold">Open Account</Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-serif text-6xl font-black">CONTACT US</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Have questions? We're here to help. Reach out to our team anytime.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <Card className="mb-6 border-2">
              <CardHeader>
                <CardTitle className="font-sans text-2xl">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-sans text-lg font-bold">Email</h3>
                    <p className="text-muted-foreground">support@pesa-afrik.com</p>
                    <p className="text-muted-foreground">business@pesa-afrik.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary/70">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-sans text-lg font-bold">Phone</h3>
                    <p className="text-muted-foreground">+234 800 PESA-AFRIK</p>
                    <p className="text-muted-foreground">+254 700 PESA-AFRIK</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/70">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-sans text-lg font-bold">Headquarters</h3>
                    <p className="text-muted-foreground">Lagos Financial District</p>
                    <p className="text-muted-foreground">Victoria Island, Lagos, Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-chart-5 to-chart-5/70">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-sans text-lg font-bold">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM WAT</p>
                    <p className="text-muted-foreground">24/7 Emergency Support Available</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-muted/30 to-background">
              <CardContent className="p-6">
                <h3 className="mb-3 font-sans text-xl font-bold">Regional Offices</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>🇰🇪 Nairobi, Kenya - Westlands Business District</p>
                  <p>🇿🇦 Johannesburg, South Africa - Sandton City</p>
                  <p>🇬🇭 Accra, Ghana - Airport Residential Area</p>
                  <p>🇪🇬 Cairo, Egypt - New Cairo Business District</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
