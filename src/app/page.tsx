import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 px-6 py-32 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row md:items-center">
          <div className="relative h-64 w-64 flex-shrink-0 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl md:h-80 md:w-80">
            <Image
              src="/matthew-profile.jpeg"
              alt="Portrait of Matthew Tran"
              fill
              className="scale-150 object-cover object-top"
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Software Engineer, Problem Solver & Tech Enthusiast
            </h1>
            <p className="text-xl leading-relaxed text-indigo-100 md:text-2xl">
              I build well-crafted software with modern tools and AI, solving
              real problems for real people.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-slate-900">
            Hi, I&apos;m Matthew. Nice to meet you.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            I&apos;m a software engineer at NICE CXOne MPower with 4+ years of
            experience building intuitive, performant web applications. As an avid
            user of AI tools, I leverage modern technology to write better code
            faster and solve complex problems more efficiently. With a background
            in QA and support, I bring a holistic view of the product
            lifecycle—understanding user pain points and shipping reliable
            features. In my free time, I enjoy playing pickleball, traveling,
            exploring new food, and going to concerts.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-indigo-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Front End Developer Card */}
            <div className="rounded-xl bg-white p-10 text-slate-900 shadow-xl">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
                <svg
                  className="h-10 w-10 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Software Engineer</h3>
              <p className="mb-6 leading-relaxed text-slate-600">
                I love building interfaces from the ground up and bringing ideas
                to life in the browser.
              </p>
              <p className="mb-3 font-semibold text-indigo-600">
                Languages I speak:
              </p>
              <p className="mb-6 leading-relaxed text-slate-600">
                JavaScript, TypeScript, HTML, CSS, PHP, C#
              </p>
              <p className="mb-3 font-semibold text-indigo-600">
                Dev Tools:
              </p>
              <ul className="space-y-2 leading-relaxed text-slate-600">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Webpack</li>
              </ul>
            </div>

            {/* Problem Solver Card */}
            <div className="rounded-xl bg-white p-10 text-slate-900 shadow-xl">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
                <svg
                  className="h-10 w-10 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Problem Solver</h3>
              <p className="mb-6 leading-relaxed text-slate-600">
                I value simple solutions that solve real problems and create
                delightful user experiences.
              </p>
              <p className="mb-3 font-semibold text-purple-600">
                Things I enjoy solving:
              </p>
              <p className="mb-6 leading-relaxed text-slate-600">
                UX challenges, performance optimization, accessibility, complex
                state management
              </p>
              <p className="mb-3 font-semibold text-purple-600">
                Experience:
              </p>
              <ul className="space-y-2 leading-relaxed text-slate-600">
                <li>4+ years Front End</li>
                <li>1 year QA Engineer</li>
                <li>2 years Support</li>
              </ul>
            </div>

            {/* Collaborator Card */}
            <div className="rounded-xl bg-white p-10 text-slate-900 shadow-xl">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-pink-100">
                <svg
                  className="h-10 w-10 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Team Player</h3>
              <p className="mb-6 leading-relaxed text-slate-600">
                I love collaborating with designers and engineers to ship
                features that users love.
              </p>
              <p className="mb-3 font-semibold text-pink-600">
                What I bring:
              </p>
              <p className="mb-6 leading-relaxed text-slate-600">
                Clear communication, empathy for users, attention to detail,
                adaptability
              </p>
              <p className="mb-3 font-semibold text-pink-600">
                Interests:
              </p>
              <ul className="space-y-2 leading-relaxed text-slate-600">
                <li>Pickleball</li>
                <li>Travel & Food</li>
                <li>Live Music</li>
                <li>Tech Communities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-slate-900">
            Interested in working together?
          </h2>
          <p className="mb-8 text-xl leading-relaxed text-slate-600">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="mailto:matthewhaotran@gmail.com"
            className="inline-block rounded-full bg-indigo-600 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-indigo-700"
          >
            Start a conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <div className="mb-2 text-2xl font-bold text-slate-900">
                Matthew Tran
              </div>
              <p className="text-slate-600">
                Software Engineer based anywhere.
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com"
                className="text-slate-400 transition hover:text-slate-600"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="text-slate-400 transition hover:text-slate-600"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:matthewhaotran@gmail.com"
                className="text-slate-400 transition hover:text-slate-600"
                aria-label="Email"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
            <p>© 2026 Matthew Tran. Handcrafted with care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
