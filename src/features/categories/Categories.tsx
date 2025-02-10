"use client"
import { BackButton } from "./components/BackButton"
import { CategoryHeader } from "./components/CategoryHeader"
import { CategoryList } from "./components/CategoryList"
import { categories } from "../../../data/categories"

export default function CategoriesPage() {
  const handleSelect = (id: string) => {
    console.log(`Selected category: ${id}`)
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-8">
      <div className="space-y-6">
        <BackButton />
        <CategoryHeader />
      </div>
      <CategoryList categories={categories} onSelect={handleSelect} />
    </div>
  )
}