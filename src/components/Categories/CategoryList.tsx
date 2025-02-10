import { Button } from "@/components/ui/button"
import { Category } from "@/types/categories"

interface CategoryListProps {
  categories: Category[]
  onSelect: (id: string) => void
}

export function CategoryList({ categories, onSelect }: CategoryListProps) {
  return (
    <div className="grid gap-4">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant="outline"
          className="w-full h-14 text-lg justify-start px-4 hover:bg-primary hover:text-primary-foreground"
          onClick={() => onSelect(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}