import { cn } from "@/lib/utils"

export default function ScrollLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={""}>
      <div
        className={cn(
          // "bg-background from-background w-full bg-gradient-to-r to-pink-400/10 font-sans antialiased"
        )}
      >
        {children}
      </div>
    </div>
  )
}
