import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { WalletCard } from "@/components/wallet-card"
import { SendMoneyForm } from "@/components/send-money-form"
import { TransactionList } from "@/components/transaction-list"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, Plus, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react"
import NavBar from "@/components/nav-bar"
import Link from "next/link"

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle()

  console.log("[v0] Profile fetch:", { profile, profileError })

  const { data: wallet, error: walletError } = await supabase
    .from("wallets")
    .select("*")
    .eq("user_id", user.id)
    .eq("is_active", true)
    .single()

  console.log("[v0] Wallet fetch:", { wallet, walletError })

  const { data: transactions, error: transactionsError } = await supabase
    .from("transactions")
    .select(
      `
      *,
      from_wallet:from_wallet_id(stellar_public_key),
      to_wallet:to_wallet_id(stellar_public_key)
    `,
    )
    .or(`from_user_id.eq.${user.id},to_user_id.eq.${user.id}`)
    .order("created_at", { ascending: false })
    .limit(10)

  console.log("[v0] Transactions fetch:", { transactions, transactionsError })

  const sentTransactions = transactions?.filter((t) => t.from_user_id === user.id) || []
  const receivedTransactions = transactions?.filter((t) => t.to_user_id === user.id) || []
  const totalSent = sentTransactions.reduce((sum, t) => sum + Number(t.amount), 0)
  const totalReceived = receivedTransactions.reduce((sum, t) => sum + Number(t.amount), 0)

  // If no wallet, show setup screen
  if (!wallet) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background p-6">
        <Card className="w-full max-w-md border-2 shadow-2xl">
          <CardHeader className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg">
                <Wallet className="h-10 w-10 text-white" />
              </div>
            </div>
            <CardTitle className="font-serif text-3xl font-black">Create Your Wallet</CardTitle>
            <CardDescription className="text-base">
              Get started by creating your Pesa-Afrik wallet to send and receive ACT tokens
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action="/api/wallet/create" method="POST">
              <Button type="submit" className="w-full font-bold" size="lg">
                <Plus className="mr-2 h-5 w-5" />
                Create Wallet
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar user={{ email: user.email!, isAdmin: profile?.role === "admin" }} />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="mb-2 font-serif text-4xl font-black tracking-tight">Welcome back</h2>
          <p className="text-lg text-muted-foreground">Manage your ACT tokens and transactions</p>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Total Balance</p>
                  <p className="mt-1 font-mono text-2xl font-black">{wallet.balance.toFixed(2)} ACT</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70">
                  <Wallet className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Total Sent</p>
                  <p className="mt-1 font-mono text-2xl font-black">{totalSent.toFixed(2)} ACT</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-destructive to-destructive/70">
                  <ArrowUpRight className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Total Received</p>
                  <p className="mt-1 font-mono text-2xl font-black">{totalReceived.toFixed(2)} ACT</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary/70">
                  <ArrowDownRight className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Transactions</p>
                  <p className="mt-1 font-mono text-2xl font-black">{transactions?.length || 0}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/70">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <WalletCard balance={wallet.balance} publicKey={wallet.stellar_public_key} />
            <SendMoneyForm />

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-sans text-lg font-bold">Exchange Currency</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Convert ACT to local currencies with real-time rates
                  </p>
                  <Link href="/exchange">
                    <Button className="w-full font-semibold">Go to Exchange</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-sans text-lg font-bold">Complete KYC</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Verify your identity to unlock higher transaction limits
                  </p>
                  <Link href="/kyc">
                    <Button variant="outline" className="w-full border-2 font-semibold bg-transparent">
                      Start Verification
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-1">
            <TransactionList transactions={transactions || []} userWalletId={wallet.id} />
          </div>
        </div>
      </main>
    </div>
  )
}
