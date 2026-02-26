import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary-600">TradeConnect</div>
            <div className="space-x-4">
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect with{' '}
            <span className="text-primary-600">Trusted Tradies</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Post your job, get competitive quotes from verified tradespeople,
            and hire with confidence. All in one platform.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/register">
              <Button size="lg">Post a Job</Button>
            </Link>
            <Link href="/register">
              <Button variant="outline" size="lg">
                Find Work
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2">Post Your Job</h3>
            <p className="text-gray-600">
              Describe your project and get quotes from qualified tradies in your area.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Compare Quotes</h3>
            <p className="text-gray-600">
              Review quotes side-by-side and choose the best tradie for your budget.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-2">Get It Done</h3>
            <p className="text-gray-600">
              Message directly, track progress, and pay securely when satisfied.
            </p>
          </div>
        </div>

        {/* For Providers */}
        <div className="mt-20 bg-primary-600 text-white rounded-2xl p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Are You a Tradie?</h2>
            <p className="text-lg text-primary-100 mb-6">
              Join thousands of tradespeople growing their business on TradeConnect.
              Browse jobs in your area, send quotes, and get hired.
            </p>
            <Link href="/register">
              <Button variant="secondary" size="lg">
                Join as a Provider
              </Button>
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Plumbing',
              'Electrical',
              'Carpentry',
              'Painting',
              'Landscaping',
              'Roofing',
              'Tiling',
              'Demolition',
            ].map((category) => (
              <div
                key={category}
                className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="font-semibold text-gray-900">{category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">TradeConnect</div>
            <p className="mb-4">Connecting customers with trusted tradespeople</p>
            <div className="text-sm text-gray-400">
              © 2026 TradeConnect. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
