import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, ArrowLeft, Share2 } from "lucide-react"
import { notFound } from "next/navigation"

const newsArticles: Record<
  string,
  {
    id: number
    title: string
    category: string
    date: string
    image: string
    content: string[]
  }
> = {
  "1": {
    id: 1,
    title: "Pesa-Afrik Expands to 5 New African Countries",
    category: "Expansion",
    date: "2025-01-15",
    image: "🌍",
    content: [
      "We are thrilled to announce a major expansion of the Pesa-Afrik platform into five new African countries: Rwanda, Zambia, Botswana, Namibia, and Senegal. This expansion brings our total coverage to 18 African nations, significantly advancing our mission to create a unified financial ecosystem across the continent.",
      "The expansion comes after months of regulatory approvals and partnerships with local financial institutions in each country. Users in these new markets will have immediate access to all Pesa-Afrik features, including instant currency exchange, cross-border transfers, and ACT token trading.",
      "Rwanda's inclusion is particularly significant given its reputation as a technology hub in East Africa. The country's progressive regulatory framework and high mobile money adoption make it an ideal market for blockchain-based financial services.",
      "In Southern Africa, Botswana, Namibia, and Zambia represent strategic markets with growing demand for efficient cross-border payment solutions. These countries have strong economic ties with South Africa, and Pesa-Afrik will facilitate seamless trade and remittances across the region.",
      "Senegal's addition extends our reach into West Africa's Francophone markets, complementing our existing presence in Nigeria and Ghana. This expansion will enable easier trade within the ECOWAS economic community.",
      "To celebrate the launch, we're offering zero transaction fees for the first month in all new markets. Users can sign up now and start trading immediately with full access to our platform's features.",
    ],
  },
  "2": {
    id: 2,
    title: "ACT Token Reaches $50M in Daily Trading Volume",
    category: "Market",
    date: "2025-01-12",
    image: "📈",
    content: [
      "The African Currency Token (ACT) has achieved a significant milestone, surpassing $50 million in daily trading volume for the first time. This achievement demonstrates growing confidence in our basket-backed stablecoin and its role in Pan-African commerce.",
      "The surge in trading volume reflects increased adoption across multiple sectors, including cross-border trade, remittances, and digital commerce. Businesses are increasingly using ACT as a settlement currency to avoid the volatility and high costs associated with traditional forex markets.",
      "Our reserve backing remains strong, with the token maintaining its peg through a diversified basket of 30% gold, 40% USD, and 30% EUR. Regular audits by independent firms confirm that all reserves are fully backed and properly secured.",
      "The growth in trading volume has been accompanied by improved liquidity across all supported currency pairs. Users can now exchange larger amounts with minimal slippage, making ACT increasingly viable for institutional transactions.",
      "Looking ahead, we project continued growth as more businesses and individuals discover the benefits of using ACT for African transactions. Our roadmap includes additional features such as merchant payment integrations and DeFi protocols built on the ACT ecosystem.",
    ],
  },
}

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const article = newsArticles[params.id]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/news">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to News
            </Button>
          </Link>
        </div>

        <article className="mx-auto max-w-4xl">
          <div className="mb-8 flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent text-9xl">
            {article.image}
          </div>

          <div className="mb-6 flex items-center gap-4">
            <Badge variant="default" className="text-sm">
              {article.category}
            </Badge>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {new Date(article.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="mb-8 font-serif text-5xl font-black leading-tight">{article.title}</h1>

          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-between border-t-2 border-border pt-8">
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2 border-2 bg-transparent">
                <Share2 className="h-4 w-4" />
                Share Article
              </Button>
            </div>
            <Link href="/news">
              <Button variant="ghost">View All News</Button>
            </Link>
          </div>
        </article>

        <div className="mx-auto mt-12 max-w-4xl">
          <Card className="border-2 bg-gradient-to-br from-muted/30 to-background">
            <CardContent className="p-8 text-center">
              <h2 className="mb-4 font-sans text-3xl font-bold">Stay Updated</h2>
              <p className="mb-6 text-muted-foreground">
                Subscribe to our newsletter for the latest news and updates from Pesa-Afrik
              </p>
              <div className="mx-auto flex max-w-md gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border-2 px-4 py-3 focus:border-primary focus:outline-none"
                />
                <Button size="lg" className="font-bold">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
