import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4 gap-8 text-center">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4 text-primary">
          Health Data Innovation Platform
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          A digital marketplace for secure, FAIR-aligned health data sharing
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link 
            href="/dashboard" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-semibold shadow-md"
          >
            Enter Platform
          </Link>
          <Link 
            href="/tour" 
            className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-semibold"
          >
            Take a Tour
          </Link>
        </div>
      </header>
      <footer className="text-sm text-muted-foreground">
        © 2025 HDIP | Hosted on GitHub Pages
      </footer>
    </div>
  )
}