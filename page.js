
"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}
      <section className="text-center py-32 px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold leading-tight"
        >
          Stop Losing Time & Revenue <br />
          in Your Healthcare Operations
        </motion.h1>

        <p className="mt-6 text-slate-400 text-lg">
          I help clinics streamline admin work, recover lost revenue, and handle
          patient support — so you can focus on care and growth.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Hire Me
          </a>
          <a
            href="#proof"
            className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10"
          >
            See Results
          </a>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Does This Sound Familiar?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-slate-400">
          <div className="p-6 bg-slate-800/50 rounded-xl">
            ❌ Missed patient inquiries and slow responses
          </div>
          <div className="p-6 bg-slate-800/50 rounded-xl">
            ❌ Growing backlog of unpaid or denied claims
          </div>
          <div className="p-6 bg-slate-800/50 rounded-xl">
            ❌ Too much admin work, not enough time for patients
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Here’s How I Help You Fix That
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto">
          I take over your operational workload—from patient communication to
          billing workflows—so your clinic runs smoother, faster, and more profitably.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-6 bg-slate-800/50 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Revenue Cycle Management</h3>
            <p className="text-slate-400">
              Claims submission, denial management, ERA/EFT posting, and billing — ensuring faster payouts and reduced revenue loss.
            </p>
          </div>

          <div className="p-6 bg-slate-800/50 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Patient Support</h3>
            <p className="text-slate-400">
              Email, chat, and phone support that improves patient experience and response time.
            </p>
          </div>

          <div className="p-6 bg-slate-800/50 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Scheduling & Intake</h3>
            <p className="text-slate-400">
              Organized booking systems and smooth onboarding for every patient.
            </p>
          </div>

          <div className="p-6 bg-slate-800/50 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Data & CRM Management</h3>
            <p className="text-slate-400">
              Clean, structured, and reliable data to improve operations and decision-making.
            </p>
          </div>

        </div>
      </section>

      {/* PROOF / RESULTS */}
      <section id="proof" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Proven Results
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 bg-slate-800/50 rounded-xl text-center">
            <h3 className="text-3xl font-bold text-blue-400">60%</h3>
            <p className="text-slate-400 mt-2">
              Faster response time through inbox optimization
            </p>
          </div>

          <div className="p-6 bg-slate-800/50 rounded-xl text-center">
            <h3 className="text-3xl font-bold text-blue-400">85%</h3>
            <p className="text-slate-400 mt-2">
              Revenue recovered from aged claims
            </p>
          </div>

          <div className="p-6 bg-slate-800/50 rounded-xl text-center">
            <h3 className="text-3xl font-bold text-blue-400">100%</h3>
            <p className="text-slate-400 mt-2">
              Clean and optimized patient database
            </p>
          </div>

        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-xl italic text-slate-300">
          "Highly organized and incredibly proactive. I saved 10+ hours a week after working together."
        </p>
        <p className="mt-4 text-slate-500">— Private Practice Owner</p>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="text-center py-24 px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Scale Your Practice?
        </h2>

        <p className="text-slate-400 mb-6">
          Let’s simplify your operations and increase your revenue.
        </p>

        <a
          href="https://calendar.app.google/Sqo2rjPfN4Pgi4ds8"
          target="_blank"
          className="px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-lg"
        >
          Book a Free Consultation
        </a>

        <p className="mt-6 text-slate-500">
          or email: jhuncyn.madinancil02@gmail.com
        </p>
      </section>

    </main>
  );
}
