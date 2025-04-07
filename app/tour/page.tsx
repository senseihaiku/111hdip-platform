import Link from "next/link"

export default function TourPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary">Platform Tour</h1>
        <p className="text-xl text-muted-foreground">
          Explore how the Health Data Innovation Platform works
        </p>
      </header>

      <div className="space-y-12">
        <section className="border rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Welcome to HDIP</h2>
          <p className="text-lg mb-4">
            The Health Data Innovation Platform (HDIP) is a digital marketplace that enables secure, FAIR-aligned health data sharing and collaboration.
          </p>
          <p className="text-lg mb-4">
            This tour will guide you through the key features and capabilities of the platform.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center text-primary hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="border rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3">Data Catalog</h3>
            <p>
              Browse and discover available health datasets, including detailed metadata, quality scores, and usage terms.
            </p>
          </section>

          <section className="border rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3">Knowledge Graph</h3>
            <p>
              Explore connections between datasets, research, and organizations through an interactive semantic network.
            </p>
          </section>

          <section className="border rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3">Digital Twin</h3>
            <p>
              Create virtual representations of health systems to simulate interventions and predict outcomes.
            </p>
          </section>

          <section className="border rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3">Matchmaking</h3>
            <p>
              Connect with potential collaborators based on complementary expertise, interests, and resources.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}