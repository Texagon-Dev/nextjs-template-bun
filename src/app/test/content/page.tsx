import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extensive Content Showcase | Next.js Template",
  description:
    "A comprehensive demonstration of text rendering capabilities with rich typography and extensive content sections.",
};

export default function ContentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <IntroductionSection />
        <TypographyFundamentals />
        <BestPractices />
        <AdvancedTechniques />
        <PracticalExample />
        <ConclusionSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
            Extensive Content
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Showcase
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            A comprehensive demonstration of typography, text rendering, and
            content organization in modern web applications. Explore various
            text styles, layouts, and formatting options.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#introduction"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-500"
            >
              Start Reading
            </a>
            <a
              href="/"
              className="text-sm font-semibold text-slate-900 transition-colors hover:text-blue-600 dark:text-white"
            >
              Back to Home <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function IntroductionSection() {
  return (
    <section id="introduction" className="mb-20 scroll-mt-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900 lg:p-12">
        <h2 className="mb-6 text-4xl font-bold text-slate-900 dark:text-white">
          Introduction to Modern Typography
        </h2>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            Typography is the art and technique of arranging type to make
            written language legible, readable, and appealing when displayed.
            The arrangement of type involves selecting typefaces, point sizes,
            line lengths, line-spacing (leading), and letter-spacing (tracking),
            as well as adjusting the space between pairs of letters (kerning).
          </p>
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            In the digital age, typography has evolved beyond print media to
            encompass web design, mobile applications, and interactive
            experiences. Modern web typography leverages advanced CSS
            capabilities, variable fonts, and responsive design principles to
            create beautiful, accessible, and performant text rendering across
            all devices and screen sizes.
          </p>
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            The principles of good typography remain constant whether working in
            print or digital media: hierarchy, contrast, alignment, proximity,
            and balance. However, digital typography introduces unique
            considerations such as screen resolution, rendering engines,
            responsive design, and performance optimization.
          </p>
          <blockquote className="mt-6 border-l-4 border-blue-500 pl-6 italic text-slate-600 dark:text-slate-400">
            "Typography is the craft of endowing human language with a durable
            visual form."
            <footer className="mt-2 text-sm font-semibold not-italic text-slate-900 dark:text-white">
              — Robert Bringhurst
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function TypographyFundamentals() {
  return (
    <section className="mb-20">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900 lg:p-12">
        <h2 className="mb-8 text-4xl font-bold text-slate-900 dark:text-white">
          Typography Fundamentals
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white">
              Typeface Classification
            </h3>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">•</span>
                <div>
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    Serif:
                  </strong>{" "}
                  Traditional typefaces with decorative strokes (e.g., Times New
                  Roman, Georgia)
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">•</span>
                <div>
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    Sans-serif:
                  </strong>{" "}
                  Modern, clean typefaces without decorative strokes (e.g.,
                  Helvetica, Arial)
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">•</span>
                <div>
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    Monospace:
                  </strong>{" "}
                  Fixed-width typefaces for code and technical content (e.g.,
                  Courier, Consolas)
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">•</span>
                <div>
                  <strong className="font-semibold text-slate-900 dark:text-white">
                    Display:
                  </strong>{" "}
                  Decorative typefaces for headlines and special purposes
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white">
              Hierarchy and Scale
            </h3>
            <div className="space-y-4">
              <p className="text-4xl font-bold text-slate-900 dark:text-white">
                Heading 1
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                Heading 2
              </p>
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                Heading 3
              </p>
              <p className="text-xl font-semibold text-slate-900 dark:text-white">
                Heading 4
              </p>
              <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
                Body Large
              </p>
              <p className="text-base text-slate-700 dark:text-slate-300">
                Body Regular
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Body Small
              </p>
              <p className="text-xs text-slate-500">Caption Text</p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white">
            Spacing and Rhythm
          </h3>
          <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">
            Proper spacing creates visual rhythm and improves readability. Line
            height (leading) should typically be 1.5 to 1.75 times the font size
            for body text. Paragraph spacing helps separate distinct thoughts
            and makes content easier to scan.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                Tight Leading
              </p>
              <p className="leading-tight text-slate-700 dark:text-slate-300">
                This paragraph demonstrates tight line spacing. Notice how the
                lines feel cramped and harder to read.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                Normal Leading
              </p>
              <p className="leading-normal text-slate-700 dark:text-slate-300">
                This paragraph uses normal line spacing. It provides a balanced,
                comfortable reading experience.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                Relaxed Leading
              </p>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                This paragraph features relaxed line spacing. The extra space
                creates an airy, open feel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BestPractices() {
  return (
    <section className="mb-20">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900 lg:p-12">
        <h2 className="mb-8 text-4xl font-bold text-slate-900 dark:text-white">
          Web Typography Best Practices
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white">
              1. Optimize for Readability
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Readability is paramount in web typography. The optimal line
              length for body text is between 45 and 75 characters per line.
              Longer lines tire the eye and make it difficult to find the start
              of the next line. Shorter lines break up the reading rhythm.
            </p>
            <div className="rounded-lg bg-slate-100 p-6 dark:bg-slate-800">
              <p className="max-w-2xl text-slate-700 dark:text-slate-300">
                This paragraph is constrained to an optimal width for reading.
                The line length ensures that readers can comfortably scan from
                left to right without losing their place. This width typically
                corresponds to 45-75 characters, which research has shown to be
                the most comfortable range for sustained reading.
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white">
              2. Ensure Sufficient Contrast
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              WCAG 2.1 guidelines recommend a contrast ratio of at least 4.5:1
              for normal text and 3:1 for large text. High contrast improves
              readability for all users, especially those with visual
              impairments.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-slate-900 p-6">
                <p className="text-white">
                  <strong>Good Contrast:</strong> White text on dark background
                  provides excellent readability and reduces eye strain in
                  low-light conditions.
                </p>
              </div>
              <div className="rounded-lg border-2 border-slate-300 bg-white p-6">
                <p className="text-slate-900">
                  <strong>Good Contrast:</strong> Dark text on light background
                  is the traditional choice for extended reading and works well
                  in bright environments.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white">
              3. Implement Responsive Typography
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Typography should adapt to different screen sizes and devices. Use
              relative units like rem and em, implement fluid typography with
              clamp(), and adjust line heights and spacing for mobile devices.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                <thead className="bg-slate-50 dark:bg-slate-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                      Device
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                      Base Font Size
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                      Line Height
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                      Max Width
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-700 dark:bg-slate-900">
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                      Mobile
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      16px
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      1.6
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      100%
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                      Tablet
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      17px
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      1.5
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      720px
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                      Desktop
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      18px
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      1.5
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      960px
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdvancedTechniques() {
  return (
    <section className="mb-20">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900 lg:p-12">
        <h2 className="mb-8 text-4xl font-bold text-slate-900 dark:text-white">
          Advanced Typography Techniques
        </h2>

        <div className="space-y-8">
          <div className="rounded-lg border border-slate-200 bg-gradient-to-br from-blue-50 to-purple-50 p-6 dark:border-slate-700 dark:from-blue-950/30 dark:to-purple-950/30">
            <h3 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white">
              Variable Fonts
            </h3>
            <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">
              Variable fonts are an evolution of the OpenType font specification
              that enables a single font file to behave like multiple fonts.
              They allow for fine-tuned control over weight, width, slant, and
              other attributes through CSS.
            </p>
            <div className="space-y-2">
              <p className="font-light text-slate-700 dark:text-slate-300">
                Font Weight 300 - Light
              </p>
              <p className="font-normal text-slate-700 dark:text-slate-300">
                Font Weight 400 - Regular
              </p>
              <p className="font-medium text-slate-700 dark:text-slate-300">
                Font Weight 500 - Medium
              </p>
              <p className="font-semibold text-slate-700 dark:text-slate-300">
                Font Weight 600 - Semibold
              </p>
              <p className="font-bold text-slate-700 dark:text-slate-300">
                Font Weight 700 - Bold
              </p>
              <p className="font-extrabold text-slate-700 dark:text-slate-300">
                Font Weight 800 - Extrabold
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-gradient-to-br from-green-50 to-teal-50 p-6 dark:border-slate-700 dark:from-green-950/30 dark:to-teal-950/30">
            <h3 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white">
              Text Effects and Decorations
            </h3>
            <div className="space-y-4">
              <p className="text-lg italic text-slate-700 dark:text-slate-300">
                Italic text adds emphasis and style
              </p>
              <p className="text-lg font-bold text-slate-900 dark:text-white">
                Bold text draws attention to important information
              </p>
              <p className="text-lg text-slate-700 underline decoration-blue-500 decoration-2 underline-offset-4 dark:text-slate-300">
                Underlined text with custom styling
              </p>
              <p className="text-lg text-slate-500 line-through">
                Strikethrough text indicates removed or outdated content
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Text with{" "}
                <span className="bg-yellow-200 px-1 dark:bg-yellow-900/50">
                  highlighted
                </span>{" "}
                portions
              </p>
              <p className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-2xl font-bold text-transparent">
                Gradient text effects for modern designs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PracticalExample() {
  return (
    <section className="mb-20">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900 lg:p-12">
        <h2 className="mb-8 text-4xl font-bold text-slate-900 dark:text-white">
          Typography in Practice
        </h2>

        <article className="rounded-lg border border-slate-200 bg-slate-50 p-8 dark:border-slate-700 dark:bg-slate-800">
          <header className="mb-6 border-b border-slate-200 pb-6 dark:border-slate-700">
            <h3 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">
              The Evolution of Digital Typography
            </h3>
            <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <time dateTime="2025-01-15">January 15, 2025</time>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>Typography, Design</span>
            </div>
          </header>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-700 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 dark:text-slate-300 dark:first-letter:text-white">
              The journey of typography from print to digital has been
              transformative. What began as movable type in the 15th century has
              evolved into sophisticated digital systems capable of rendering
              beautiful text across billions of devices worldwide. This
              evolution has fundamentally changed how we communicate, read, and
              interact with written content.
            </p>

            <h4 className="text-2xl font-semibold text-slate-900 dark:text-white">
              The Print Era
            </h4>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              For centuries, typography was constrained by the physical
              limitations of metal type and printing presses. Typesetters
              carefully arranged individual letters, words, and lines to create
              pages of text. This process required immense skill and attention
              to detail, as every aspect of the layout had to be planned in
              advance.
            </p>

            <h4 className="text-2xl font-semibold text-slate-900 dark:text-white">
              The Digital Revolution
            </h4>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              The advent of computers and digital displays introduced new
              possibilities and challenges. Early digital typography was limited
              by low-resolution screens and simple rendering engines. However,
              as technology advanced, so did our ability to display beautiful,
              readable text on screens of all sizes.
            </p>

            <div className="my-8 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:border-blue-400 dark:bg-blue-950/30">
              <p className="font-semibold text-blue-900 dark:text-blue-100">
                Key Insight
              </p>
              <p className="mt-2 text-blue-800 dark:text-blue-200">
                The future of typography lies in adaptability. As we move toward
                a world with diverse devices, screen sizes, and reading
                contexts, typography must be flexible enough to provide optimal
                reading experiences everywhere.
              </p>
            </div>

            <h4 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Code Typography Example
            </h4>
            <div className="overflow-x-auto rounded-lg bg-slate-900 p-6">
              <pre className="text-sm text-slate-100">
                <code>{`:root {
  --font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --font-size-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  --font-size-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
}

body {
  font-size: var(--font-size-base);
  line-height: 1.6;
  font-family: system-ui, sans-serif;
}`}</code>
              </pre>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function ConclusionSection() {
  return (
    <section className="mb-20">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 shadow-lg dark:border-slate-800 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30 lg:p-12">
        <h2 className="mb-6 text-4xl font-bold text-slate-900 dark:text-white">
          Conclusion
        </h2>
        <div className="space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            Typography is a fundamental aspect of web design that significantly
            impacts user experience, readability, and accessibility. By
            understanding and applying typography principles, designers and
            developers can create more effective and engaging digital
            experiences.
          </p>
          <p>
            This showcase demonstrates various typography techniques, from basic
            fundamentals to advanced effects. Modern CSS provides powerful tools
            for creating beautiful, responsive typography that works across all
            devices and contexts.
          </p>
          <p>
            Remember: good typography is invisible. When done well, users focus
            on the content rather than the presentation. The goal is always to
            enhance readability and comprehension while maintaining visual
            appeal and brand identity.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-500"
          >
            Back to Home
          </a>
          <a
            href="#introduction"
            className="rounded-lg border-2 border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          >
            Back to Top
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <p className="text-center text-sm text-slate-600 dark:text-slate-400">
          © 2025 Next.js Template. Demonstrating extensive text rendering
          capabilities.
        </p>
      </div>
    </footer>
  );
}
