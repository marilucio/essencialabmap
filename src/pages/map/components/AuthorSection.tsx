import { author } from "../content";
import { Section, SectionTitle } from "./Section";

export function AuthorSection() {
  return (
    <Section id="quem-fez" className="bg-white">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div>
          <SectionTitle>{author.title}</SectionTitle>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-700">
            {author.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 font-semibold text-slate-900">
            {author.name}
            <span className="block text-sm font-normal text-slate-600">{author.role}</span>
          </p>
        </div>
        <img
          src={author.photo.src}
          alt={author.photo.alt}
          width={author.photo.width}
          height={author.photo.height}
          loading="lazy"
          decoding="async"
          className="mx-auto h-auto w-full max-w-xs rounded-2xl shadow-lg"
        />
      </div>
    </Section>
  );
}
