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
          "w-full bg-background bg-gradient-to-r from-background to-pink-400/10 font-sans antialiased"
        )}
      >
        {children}
      </div>
    </div>
  )
}
