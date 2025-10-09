import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import NavBar from "@/components/nav-bar"

export default async function ManageNewsPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase.from("user_profiles").select("*").eq("user_id", user.id).single()

  if (profile?.role !== "admin") {
    redirect("/dashboard")
  }

  const { data: articles } = await supabase.from("news_articles").select("*").order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-background">
      <NavBar user={{ email: user.email!, isAdmin: true }} />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Manage News</h2>
            <p className="text-muted-foreground">Create and manage news articles</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Article
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>News Articles</CardTitle>
            <CardDescription>All published and draft articles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {articles?.map((article) => (
                <div key={article.id} className="flex items-center justify-between border rounded-lg p-4">
                  <div>
                    <h3 className="font-semibold">{article.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {article.is_published ? "Published" : "Draft"} •{" "}
                      {new Date(article.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm">
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
              {!articles?.length && (
                <p className="text-center text-muted-foreground py-8">No articles yet. Create your first one!</p>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
