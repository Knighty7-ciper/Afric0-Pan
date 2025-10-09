import { createClient } from "@/lib/supabase/client"

export const walletService = {
  async getWalletsByUserId(userId: string) {
    const supabase = createClient()
    const { data, error } = await supabase.from("wallets").select("*").eq("user_id", userId)
    return { data, error }
  },

  async getWalletById(walletId: string) {
    const supabase = createClient()
    const { data, error } = await supabase.from("wallets").select("*").eq("id", walletId).single()
    return { data, error }
  },

  async getWalletByPublicKey(publicKey: string) {
    const supabase = createClient()
    const { data, error } = await supabase.from("wallets").select("*").eq("stellar_public_key", publicKey).single()
    return { data, error }
  },

  async updateWalletBalance(walletId: string, balance: number) {
    const supabase = createClient()
    const { data, error } = await supabase.from("wallets").update({ balance }).eq("id", walletId).select().single()
    return { data, error }
  },
}
