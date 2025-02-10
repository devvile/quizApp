import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function BackButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back
    </Link>
  )
}