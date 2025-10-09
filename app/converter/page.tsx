import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CurrencyConverter } from "@/components/currency-converter"
import { ExchangeRatesTable } from "@/components/exchange-rates-table"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function ConverterPage() {
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
          <h1 className="mb-4 font-serif text-6xl font-black">CURRENCY CONVERTER</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Convert between ACT and 13+ African currencies with real-time exchange rates
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-8">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="font-sans text-2xl">Quick Convert</CardTitle>
            </CardHeader>
            <CardContent>
              <CurrencyConverter />
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="font-sans text-2xl">All Exchange Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <ExchangeRatesTable />
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
