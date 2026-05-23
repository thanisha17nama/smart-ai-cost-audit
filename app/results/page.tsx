export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full rounded-2xl border border-zinc-800 bg-zinc-950 p-8">

        <h1 className="text-4xl font-bold mb-6">
          Audit Results
        </h1>

        <div className="space-y-4">

          <div className="rounded-xl bg-zinc-900 p-6">
            <p className="text-zinc-400 mb-2">
              Current Monthly Spend
            </p>

            <h2 className="text-3xl font-bold">
              $500
            </h2>
          </div>

          <div className="rounded-xl bg-zinc-900 p-6">
            <p className="text-zinc-400 mb-2">
              Potential Monthly Savings
            </p>

            <h2 className="text-3xl font-bold text-green-400">
              $150
            </h2>
          </div>

          <div className="rounded-xl bg-zinc-900 p-6">
            <p className="text-zinc-400 mb-2">
              Recommendation
            </p>

            <p>
              Your team may be overpaying for enterprise-tier AI plans.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}