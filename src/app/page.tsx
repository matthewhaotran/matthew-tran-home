import Image from "next/image";

export default function Home() {
  const skills = [
    { label: "JavaScript", level: "Advanced", value: 90 },
    { label: "React", level: "Advanced", value: 85 },
    { label: "PHP", level: "Intermediate", value: 75 },
    { label: "C#", level: "Intermediate", value: 70 },
  ];

  return (
    <div className="min-h-screen bg-zinc-100 text-slate-900">
      <header className="bg-teal-500 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-16 pt-12 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="relative mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-teal-200 shadow-xl md:h-44 md:w-44">
              <Image
                src="/matthew-profile.jpeg"
                alt="Portrait of Matthew Tran"
                fill
                className="object-cover object-top scale-150"
                priority
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em]">I&apos;m</p>
            <h1 className="mt-2 text-4xl font-bold tracking-wide md:text-5xl">
              Matthew Tran
            </h1>
            <p className="mt-3 text-lg font-medium md:text-2xl">
              Front End Engineer
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <a
                href="#contact"
                className="rounded-full bg-white px-7 py-2.5 text-sm font-semibold text-teal-600 shadow-md transition hover:bg-zinc-50"
              >
                Contact Me
              </a>
              <a
                href="#portfolio"
                className="rounded-full border border-white/80 px-7 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Portfolio
              </a>
            </div>
          </div>
          <p className="mt-10 max-w-md text-sm leading-relaxed text-teal-50/90 md:mt-0 md:text-base">
            I am a front end engineer at NICE CXOne MPower and I am a tech
            enthusiast. I am driven and adaptable, I pride myself on my
            production and contributions to my team, and I have grit and
            motivation to solve any problem in front of me. In my free time, I
            enjoy playing pickleball, travel, food, and concerts.
          </p>
        </div>
      </header>

      <main className="bg-white">
        <section id="about" className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-500">
              About Me
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Front End Engineer
            </h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-5 text-sm leading-relaxed text-slate-700 md:text-base">
            <p>
              I&apos;m Matthew Tran, a front end engineer focused on building
              intuitive, performant web experiences. I love collaborating with
              teams to turn complex ideas into polished, user-friendly
              products.
            </p>
            <p>
              With experience across engineering, QA, and support, I bring a
              holistic view of the product lifecycle—from understanding user
              pain points to shipping reliable features to production.
            </p>
            <dl className="grid grid-cols-1 gap-x-10 gap-y-3 text-sm md:grid-cols-2">
              <div className="flex">
                <dt className="w-32 font-semibold text-slate-900">Name</dt>
                <dd className="text-slate-700">Matthew Tran</dd>
              </div>
              <div className="flex">
                <dt className="w-32 font-semibold text-slate-900">Role</dt>
                <dd className="text-slate-700">Front End Engineer</dd>
              </div>
              <div className="flex">
                <dt className="w-32 font-semibold text-slate-900">Experience</dt>
                <dd className="text-slate-700">4+ Years Front End</dd>
              </div>
              <div className="flex">
                <dt className="w-32 font-semibold text-slate-900">Location</dt>
                <dd className="text-slate-700">Open to remote roles</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="experience" className="bg-zinc-50 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-500">
                Experience
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Professional Journey
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4 rounded-3xl bg-white p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Front End Software Engineer
                </h3>
                <p className="text-xs font-medium uppercase tracking-wide text-teal-500">
                  4 Years
                </p>
                <p className="text-sm leading-relaxed text-slate-700">
                  Building and maintaining production-ready front end
                  applications, collaborating closely with designers and
                  back-end engineers to ship high-quality features.
                </p>
              </div>
              <div className="space-y-4 rounded-3xl bg-white p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  QA &amp; Support Background
                </h3>
                <p className="text-xs font-medium uppercase tracking-wide text-teal-500">
                  1 Year QA · 2 Years Support
                </p>
                <p className="text-sm leading-relaxed text-slate-700">
                  Tested complex user flows, debugged issues across the stack,
                  and worked directly with customers—giving me a strong sense
                  for quality and empathy for end users.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-500">
                My Skills
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Tools &amp; Technologies
              </h2>
            </div>
            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.label}>
                    <div className="flex items-center justify-between text-sm font-medium text-slate-900">
                      <span>{skill.label}</span>
                      <span className="text-xs text-slate-500">{skill.level}</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-200">
                      <div
                        className="h-2 rounded-full bg-teal-500"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-slate-700">
                <p>
                  I&apos;m comfortable working across modern front end stacks,
                  from vanilla JavaScript to component-driven architectures in
                  React.
                </p>
                <p>
                  I care about performance, accessibility, and maintainability,
                  and I enjoy collaborating with designers to bring polished UI
                  to life.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-teal-50 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-500">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Let&apos;s Work Together
              </h2>
            </div>
            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-4 text-sm leading-relaxed text-slate-700">
                <p>
                  Interested in working together or want to learn more about my
                  experience? Reach out and I&apos;d be happy to chat.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    <a
                      href="mailto:matthewhaotran@gmail.com"
                      className="text-slate-800 underline-offset-2 hover:underline"
                    >
                      matthewhaotran@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span>{" "}
                    <span className="text-slate-800">Open to remote</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href="mailto:matthewhaotran@gmail.com"
                  className="inline-flex w-full items-center justify-center rounded-full bg-teal-500 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-600 md:w-auto"
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-teal-100 bg-white py-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Matthew Tran. All rights reserved.</p>
          <p className="hidden md:inline">Front End Engineer · Tech Enthusiast</p>
        </div>
      </footer>
    </div>
  );
}
