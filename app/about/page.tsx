import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Globe, TrendingUp, Users, Award, Target } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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
          <h1 className="mb-4 font-serif text-6xl font-black">ABOUT PESA-AFRIK</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Building Africa's financial future through innovative blockchain technology and unified currency solutions
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-4 font-sans text-3xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To unify Africa's financial landscape by providing a stable, accessible, and efficient currency exchange
                platform that empowers individuals and businesses across the continent.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-8">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-secondary/70">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-4 font-sans text-3xl font-bold">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                A financially integrated Africa where cross-border transactions are seamless, currencies are stable, and
                every individual has access to modern financial services.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-center font-serif text-5xl font-black">THE ACT TOKEN</h2>
          <Card className="border-2 bg-gradient-to-br from-muted/30 to-background">
            <CardContent className="p-8">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-4 text-5xl">🏆</div>
                  <h3 className="mb-2 font-sans text-xl font-bold">Gold Backed</h3>
                  <p className="text-muted-foreground">30% backed by physical gold reserves for stability</p>
                </div>
                <div className="text-center">
                  <div className="mb-4 text-5xl">💵</div>
                  <h3 className="mb-2 font-sans text-xl font-bold">Fiat Reserves</h3>
                  <p className="text-muted-foreground">40% USD and 30% EUR backing for liquidity</p>
                </div>
                <div className="text-center">
                  <div className="mb-4 text-5xl">⚡</div>
                  <h3 className="mb-2 font-sans text-xl font-bold">Stellar Blockchain</h3>
                  <p className="text-muted-foreground">Fast, secure, and low-cost transactions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-center font-serif text-5xl font-black">WHY CHOOSE US</h2>
          <p className="mb-8 text-center text-lg text-muted-foreground">
            Led by experienced professionals in finance, blockchain, and African markets
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Bank-Grade Security",
                description: "Multi-signature wallets, encrypted storage, and full KYC/AML compliance",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Pan-African Coverage",
                description: "Support for 13+ African currencies with seamless cross-border transfers",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Stable Value",
                description: "Basket-backed token design protects against currency volatility",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "User-Centric",
                description: "Intuitive interface designed for both individuals and businesses",
              },
              {
                icon: <span className="text-3xl">💰</span>,
                title: "Low Fees",
                description: "Transparent pricing with minimal transaction costs",
              },
              {
                icon: <span className="text-3xl">🏛️</span>,
                title: "Regulatory Compliant",
                description: "Fully licensed and meeting international financial standards",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 font-sans text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-center font-serif text-5xl font-black">OUR TEAM</h2>
          <p className="mb-8 text-center text-lg text-muted-foreground">
            Led by experienced professionals in finance, blockchain, and African markets
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Dr. Amara Okafor",
                role: "Chief Executive Officer",
                bio: "Former Central Bank advisor with 15+ years in African finance",
              },
              {
                name: "Kwame Mensah",
                role: "Chief Technology Officer",
                bio: "Blockchain architect with expertise in Stellar and DeFi",
              },
              {
                name: "Fatima Hassan",
                role: "Chief Compliance Officer",
                bio: "Regulatory expert ensuring full KYC/AML compliance",
              },
            ].map((member, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary mx-auto text-4xl text-white">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="mb-1 font-sans text-xl font-bold">{member.name}</h3>
                  <p className="mb-3 text-sm font-semibold text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border-4 border-primary bg-gradient-to-r from-primary via-secondary to-accent p-12 text-center">
          <h2 className="mb-4 font-serif text-5xl font-black text-white">JOIN THE REVOLUTION</h2>
          <p className="mb-8 text-xl text-white/90">
            Be part of Africa's financial transformation. Start trading today.
          </p>
          <Link href="/auth/sign-up">
            <Button size="lg" className="h-16 bg-white px-12 text-lg font-bold text-foreground hover:bg-white/90">
              Create Free Account
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
