import { useRef } from "react";
import { Play } from "lucide-react";
import { hero } from "../content";
import { TrialButton } from "./TrialButton";
import { VideoFacade, type VideoFacadeHandle } from "./VideoFacade";

export function HeroSection() {
  const video = useRef<VideoFacadeHandle>(null);

  const openVideo = () => {
    video.current?.play();
    document.getElementById("video-map")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="bg-gradient-to-b from-green-50 to-white px-4 py-16 md:py-24">
      <div className="container mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-800">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            {hero.title}
          </h1>
          <p className="text-lg leading-relaxed text-slate-700 md:text-xl">{hero.subtitle}</p>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-start">
            <TrialButton placement="hero" label={hero.ctaPrimary} />
          </div>
          <button
            type="button"
            onClick={openVideo}
            className="inline-flex items-center gap-2 rounded-full border-2 border-green-700 px-6 py-3 font-semibold text-green-800 transition-colors hover:bg-green-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
          >
            <Play className="h-5 w-5" aria-hidden="true" />
            {hero.ctaSecondary}
          </button>
        </div>

        <div id="video-map">
          <VideoFacade ref={video} title={hero.videoTitle} />
        </div>
      </div>
    </section>
  );
}
