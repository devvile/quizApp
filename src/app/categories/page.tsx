"use client"
import { useRouter } from "next/navigation"
import { Layout } from "@/components/shared/Layout"
import { BackButton } from "@/features/categories/components/BackButton"
import { CategoryHeader } from "@/features/categories/components/CategoryHeader"
import { CategoryList } from "@/features/categories/components/CategoryList"
import { categories } from "../../../data/categories"

export default function CategoriesPage() {
  const router = useRouter()

  const handleCategorySelect = (categoryId: string) => {
    router.push(`/${categoryId}`)
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-4 space-y-8">
        <div className="space-y-6">
          <BackButton />
          <CategoryHeader />
        </div>
        <CategoryList 
          categories={categories} 
          onSelect={handleCategorySelect} 
        />
      </div>
    </Layout>
  )
}