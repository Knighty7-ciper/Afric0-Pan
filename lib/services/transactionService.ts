import { createClient } from "@/lib/supabase/client"

export const transactionService = {
  async getTransactionsByWalletId(walletId: string) {
    const supabase = createClient()
    const { data, error } = await supabase
      .from("transactions")
      .select("*")
      .or(`from_wallet_id.eq.${walletId},to_wallet_id.eq.${walletId}`)
      .order("created_at", { ascending: false })
    return { data, error }
  },

  async getTransactionById(transactionId: string) {
    const supabase = createClient()
    const { data, error } = await supabase.from("transactions").select("*").eq("id", transactionId).single()
    return { data, error }
  },

  async getAllTransactions() {
    const supabase = createClient()
    const { data, error } = await supabase.from("transactions").select("*").order("created_at", { ascending: false })
    return { data, error }
  },
}
