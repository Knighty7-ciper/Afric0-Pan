import { createClient } from "@/lib/supabase/client"

export const userService = {
  async getProfile(userId: string) {
    const supabase = createClient()
    const { data, error } = await supabase.from("user_profiles").select("*").eq("user_id", userId).single()
    return { data, error }
  },

  async updateProfile(userId: string, updates: any) {
    const supabase = createClient()
    const { data, error } = await supabase.from("user_profiles").update(updates).eq("user_id", userId).select().single()
    return { data, error }
  },

  async getAllUsers() {
    const supabase = createClient()
    const { data, error } = await supabase.from("user_profiles").select("*").order("created_at", { ascending: false })
    return { data, error }
  },
}
