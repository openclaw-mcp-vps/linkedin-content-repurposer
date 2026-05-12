export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Content Repurposing
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Turn one blog post into{" "}
          <span className="text-[#58a6ff]">10 LinkedIn posts</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste your article. Our AI instantly generates carousels, single posts, and video scripts — each optimized for LinkedIn engagement.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to try. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["LinkedIn Carousels", "Single Posts", "Video Scripts", "Engagement Hooks", "Hashtag Sets", "CTA Variants"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-1.5 rounded-full">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$15</div>
          <p className="text-[#8b949e] text-sm mb-6">per month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited blog-to-LinkedIn transforms",
              "10 post formats per submission",
              "Carousel slide copy included",
              "Video script outlines",
              "Engagement-optimized hooks",
              "Priority AI processing"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "What kind of content can I paste in?",
              a: "Any long-form text: blog posts, articles, newsletters, or whitepapers. The AI reads the full piece and extracts the best angles for LinkedIn."
            },
            {
              q: "How many posts do I get per submission?",
              a: "Each submission generates up to 10 LinkedIn-ready assets — a mix of carousel copy, standalone posts, and a video script outline."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel with one click from your billing portal. You keep access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} LinkedIn Content Repurposer. All rights reserved.
      </footer>
    </main>
  );
}
