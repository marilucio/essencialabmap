import { useState, forwardRef, useImperativeHandle } from "react";
import { Play } from "lucide-react";
import { VIDEO_YOUTUBE_ID, VIDEO_POSTER, VIDEO_POSTER_SMALL } from "../constants";

export type VideoFacadeHandle = { play: () => void };

type Props = { title: string };

// Facade: só a thumbnail estática é carregada. O iframe do YouTube entra
// depois do clique (ou do CTA secundário), sem penalizar o LCP.
export const VideoFacade = forwardRef<VideoFacadeHandle, Props>(function VideoFacade(
  { title },
  ref,
) {
  const [playing, setPlaying] = useState(false);
  useImperativeHandle(ref, () => ({ play: () => setPlaying(true) }), []);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-900 shadow-xl ring-1 ring-slate-200">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Assistir: ${title}`}
          className="group absolute inset-0 h-full w-full focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
        >
          <img
            src={VIDEO_POSTER}
            srcSet={`${VIDEO_POSTER_SMALL} 640w, ${VIDEO_POSTER} 1280w`}
            sizes="(min-width: 1024px) 560px, 100vw"
            alt=""
            width={1280}
            height={720}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-slate-900/20 transition-colors group-hover:bg-slate-900/30" />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-green-700 text-white shadow-lg transition-transform group-hover:scale-105">
            <Play className="ml-1 h-8 w-8" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  );
});
