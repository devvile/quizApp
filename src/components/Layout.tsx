export function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="h-screen max-h-[844px] w-full max-w-md mx-auto bg-white overflow-hidden">
        {children}
      </div>
    )
  }