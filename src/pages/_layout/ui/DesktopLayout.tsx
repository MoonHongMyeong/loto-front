export const DesktopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="h-16 bg-primary shadow-sm z-10">
        <div className="flex items-center justify-between px-4 h-full">
          <h1 className="text-lg font-bold text-white">LoTo</h1>
        </div>
      </header>

      <main className="ml-64 flex-1 p-6">
        {children}
      </main>
    </div>
  )
}
