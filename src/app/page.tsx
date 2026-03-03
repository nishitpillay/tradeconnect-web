'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

type Category = {
  name: string;
  short: string;
  tooltip: string;
  seo: string;
  detail: string;
};

const CATEGORIES: Category[] = [
  {
    name: 'Plumbing',
    short: 'Fix leaks, blocked drains, hot water systems, taps, toilets, and full plumbing installs.',
    tooltip: 'Pipes, drains, taps, toilets, leaks, and hot water work.',
    seo: 'Find trusted plumbers for leak repairs, blocked drains, hot water systems, bathroom plumbing, kitchen plumbing, and new plumbing installations.',
    detail:
      'Plumbing jobs cover everything from urgent leaks to planned installations. Customers can post work for blocked drains, burst pipes, hot water systems, toilet repairs, tap replacements, kitchen plumbing, and bathroom upgrades. This category suits both emergency callouts and larger renovation projects.',
  },
  {
    name: 'Electrical',
    short: 'Get help with lighting, wiring, switchboards, power points, appliances, and fault repairs.',
    tooltip: 'Lighting, wiring, outlets, switchboards, and electrical repairs.',
    seo: 'Connect with licensed electricians for wiring, lighting installation, switchboard upgrades, power points, appliance setup, and electrical fault finding.',
    detail:
      'Electrical services include repairs, upgrades, and new installations around the home or business. Common jobs include lighting replacement, switchboard upgrades, power point installation, appliance connection, rewiring, smoke alarm work, and diagnosing electrical faults. This category is ideal when licensed electrical work is required.',
  },
  {
    name: 'Carpentry',
    short: 'Book carpenters for framing, decking, doors, cabinets, shelving, and timber repairs.',
    tooltip: 'Decking, framing, doors, cabinetry, and timber jobs.',
    seo: 'Hire skilled carpenters for decking, framing, doors, custom shelving, cabinetry, timber repairs, and general woodwork projects.',
    detail:
      'Carpentry covers structural timber work and detailed finishing jobs. Customers can request help with framing, doors, decking, pergolas, skirting, shelving, cabinetry, repairs, and general woodwork. It works well for both small fixes and larger build projects.',
  },
  {
    name: 'Painting',
    short: 'Find painters for interior walls, exterior surfaces, prep work, coatings, and touch-ups.',
    tooltip: 'Interior, exterior, prep, coatings, and repainting.',
    seo: 'Compare painters for interior painting, exterior painting, surface preparation, protective coatings, feature walls, and residential repainting jobs.',
    detail:
      'Painting services improve appearance, durability, and property value. This category includes interior walls, ceilings, trim, exterior surfaces, fences, touch-ups, surface preparation, and protective coatings. It is useful for refresh jobs, end-of-lease work, and full repaints.',
  },
  {
    name: 'Landscaping',
    short: 'Upgrade outdoor spaces with paving, turf, garden design, planting, retaining walls, and irrigation.',
    tooltip: 'Gardens, paving, turf, planting, and outdoor improvements.',
    seo: 'Book landscaping professionals for garden makeovers, paving, turf laying, retaining walls, irrigation systems, and outdoor living upgrades.',
    detail:
      'Landscaping helps transform and maintain outdoor spaces. Jobs may include paving, turf installation, planting, garden design, retaining walls, mulching, irrigation, and general yard improvements. This category suits both cosmetic upgrades and practical outdoor construction.',
  },
  {
    name: 'Roofing',
    short: 'Hire roofing specialists for repairs, replacement, guttering, storm damage, and leak detection.',
    tooltip: 'Roof repairs, replacement, gutters, and leak checks.',
    seo: 'Get roofing experts for roof repairs, roof restoration, gutter replacement, flashing work, storm damage, and roof leak detection.',
    detail:
      'Roofing work includes maintenance, repair, and replacement for residential and commercial properties. Customers can post jobs for roof leaks, damaged tiles, metal roofing, guttering, flashing, storm repairs, inspections, and restoration. This category is especially useful for weather-related damage and preventative upkeep.',
  },
  {
    name: 'Tiling',
    short: 'Tackle bathrooms, kitchens, floors, splashbacks, grout, waterproofing, and tile replacement.',
    tooltip: 'Wall and floor tiling, grout, and waterproofing.',
    seo: 'Find tilers for bathroom tiling, kitchen splashbacks, floor tiling, grout replacement, waterproofing, and tile repair services.',
    detail:
      'Tiling covers both decorative and functional surface work. Jobs often involve bathroom walls, shower areas, splashbacks, kitchen floors, outdoor tiling, waterproofing, grout renewal, and tile repair. This category is a strong fit for renovation and finishing stages.',
  },
  {
    name: 'Demolition',
    short: 'Arrange safe removal of sheds, kitchens, bathrooms, walls, flooring, and renovation debris.',
    tooltip: 'Removal, strip-outs, site clearing, and prep for renovation.',
    seo: 'Hire demolition contractors for bathroom strip-outs, kitchen removal, wall removal, flooring demolition, shed demolition, and site clearing.',
    detail:
      'Demolition is for safe removal and site preparation before construction or renovation begins. Customers can request bathroom strip-outs, kitchen removal, non-structural wall removal, flooring demolition, shed removal, and cleanup. This category is best for projects that need controlled teardown before the next trade begins.',
  },
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(CATEGORIES[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
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

      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect with <span className="text-primary-600">Trusted Tradies</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Post your job, get competitive quotes from verified tradespeople, and hire with confidence. All in one platform.
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

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="text-4xl mb-4">Post</div>
            <h3 className="text-xl font-semibold mb-2">Post Your Job</h3>
            <p className="text-gray-600">
              Describe your project and get quotes from qualified tradies in your area.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="text-4xl mb-4">Compare</div>
            <h3 className="text-xl font-semibold mb-2">Compare Quotes</h3>
            <p className="text-gray-600">
              Review quotes side-by-side and choose the best tradie for your budget.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="text-4xl mb-4">Done</div>
            <h3 className="text-xl font-semibold mb-2">Get It Done</h3>
            <p className="text-gray-600">
              Message directly, track progress, and pay securely when satisfied.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-primary-600 text-white rounded-2xl p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Are You a Tradie?</h2>
            <p className="text-lg text-primary-100 mb-6">
              Join thousands of tradespeople growing their business on TradeConnect. Browse jobs in your area, send quotes, and get hired.
            </p>
            <Link href="/register">
              <Button variant="secondary" size="lg">
                Join as a Provider
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Popular Categories</h2>
            <p className="text-gray-600">
              Tap a category to see the kind of work it covers before you post.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {CATEGORIES.map((category) => {
              const isSelected = category.name === selectedCategory.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  title={category.tooltip}
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-left bg-white p-6 rounded-xl border transition-all ${
                    isSelected
                      ? 'border-primary-600 shadow-lg ring-2 ring-primary-100'
                      : 'border-gray-200 hover:shadow-md hover:border-primary-300'
                  }`}
                >
                  <div className="font-semibold text-gray-900 mb-2">{category.name}</div>
                  <p className="text-sm text-gray-600 leading-6">{category.short}</p>
                  <p className="sr-only">{category.seo}</p>
                </button>
              );
            })}
          </div>

          <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-2">
                  {selectedCategory.name}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">What jobs fit here</h3>
                <p className="text-gray-700 leading-7">{selectedCategory.detail}</p>
              </div>
              <Link href="/register" className="shrink-0">
                <Button>Post {selectedCategory.name} Work</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">TradeConnect</div>
            <p className="mb-4">Connecting customers with trusted tradespeople</p>
            <div className="text-sm text-gray-400">Copyright 2026 TradeConnect. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
