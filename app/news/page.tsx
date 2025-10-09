import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { Footer } from "@/components/footer"

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "Pesa-Afrik Expands to 5 New African Countries",
      excerpt:
        "We're excited to announce our expansion into Rwanda, Zambia, Botswana, Namibia, and Senegal, bringing our total coverage to 18 African nations.",
      category: "Expansion",
      date: "2025-01-15",
      image: "🌍",
      featured: true,
    },
    {
      id: 2,
      title: "ACT Token Reaches $50M in Daily Trading Volume",
      excerpt:
        "The African Currency Token has achieved a major milestone with over $50 million in daily trading volume, demonstrating strong market confidence.",
      category: "Market",
      date: "2025-01-12",
      image: "📈",
      featured: true,
    },
    {
      id: 3,
      title: "Partnership with Major African Banks Announced",
      excerpt:
        "Pesa-Afrik partners with 15 leading African banks to enable direct fiat on-ramps and off-ramps across the continent.",
      category: "Partnership",
      date: "2025-01-10",
      image: "🤝",
      featured: false,
    },
    {
      id: 4,
      title: "New Mobile App Launches for iOS and Android",
      excerpt:
        "Trade on the go with our new mobile applications, featuring biometric authentication and instant notifications.",
      category: "Product",
      date: "2025-01-08",
      image: "📱",
      featured: false,
    },
    {
      id: 5,
      title: "Pesa-Afrik Wins Best FinTech Innovation Award",
      excerpt:
        "Recognized at the African FinTech Summit 2025 for our innovative approach to Pan-African currency exchange.",
      category: "Awards",
      date: "2025-01-05",
      image: "🏆",
      featured: false,
    },
    {
      id: 6,
      title: "Enhanced KYC Process Reduces Verification Time to 10 Minutes",
      excerpt:
        "Our new AI-powered KYC system now verifies users in under 10 minutes while maintaining the highest security standards.",
      category: "Product",
      date: "2025-01-03",
      image: "🔐",
      featured: false,
    },
  ]

  const featuredNews = news.filter((item) => item.featured)
  const regularNews = news.filter((item) => !item.featured)

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
          <h1 className="mb-4 font-serif text-6xl font-black">LATEST NEWS</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Stay updated with the latest developments, partnerships, and milestones from Pesa-Afrik
          </p>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 font-sans text-3xl font-bold">Featured Stories</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredNews.map((item) => (
              <Card key={item.id} className="border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-7xl">
                    {item.image}
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="default">{item.category}</Badge>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {new Date(item.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <CardTitle className="font-sans text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{item.excerpt}</p>
                  <Link href={`/news/${item.id}`}>
                    <Button variant="outline" className="border-2 font-semibold bg-transparent">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-6 font-sans text-3xl font-bold">Recent Updates</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularNews.map((item) => (
              <Card key={item.id} className="border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-24 items-center justify-center rounded-xl bg-gradient-to-br from-muted to-muted/50 text-5xl">
                    {item.image}
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                  <CardTitle className="font-sans text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </span>
                    <Link href={`/news/${item.id}`}>
                      <Button variant="ghost" size="sm" className="font-semibold">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Card className="border-2 bg-gradient-to-r from-primary via-secondary to-accent">
            <CardContent className="p-8 text-center">
              <h2 className="mb-4 font-serif text-4xl font-black text-white">STAY INFORMED</h2>
              <p className="mb-6 text-lg text-white/90">
                Subscribe to our newsletter for weekly updates on market trends and platform news
              </p>
              <div className="mx-auto flex max-w-md gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border-2 border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                />
                <Button size="lg" className="bg-white font-bold text-foreground hover:bg-white/90">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
