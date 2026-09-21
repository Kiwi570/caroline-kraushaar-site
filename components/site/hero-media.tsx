'use client';

import { Pause, Play } from 'lucide-react';
import { useRef, useState } from 'react';

export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] bg-sand shadow-soft lg:min-h-[650px]">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/image-02.jpg"
        className="absolute inset-0 size-full object-cover"
      >
        <source src="/media/video-03.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/38 via-transparent to-transparent" />
      <button
        type="button"
        onClick={togglePlayback}
        className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-cream/92 px-4 py-2.5 text-xs font-bold text-ink backdrop-blur transition hover:bg-white"
        aria-label={playing ? 'Mettre la vidéo en pause' : 'Relancer la vidéo'}
      >
        {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
        {playing ? 'Pause' : 'Lire'}
      </button>
      <div className="absolute bottom-5 left-5 max-w-xs rounded-2xl bg-ink/78 p-4 text-white backdrop-blur">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-water-light">
          Cabinet Landa Gaita
        </p>
        <p className="mt-1 font-serif text-xl">Un cadre calme, à Ahetze</p>
      </div>
    </div>
  );
}
