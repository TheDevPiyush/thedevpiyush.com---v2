import { Loader2 } from "lucide-react"

export function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[600px]">
      <Loader2 className="h-12 w-12 animate-spin text-violet-500" />
    </div>
  )
}

export function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="flex items-center justify-center min-h-[600px]">
      <div className="text-red-500 text-center">
        <p className="text-lg font-semibold">Error</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  )
} 