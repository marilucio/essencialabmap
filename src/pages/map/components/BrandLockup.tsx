type Props = { map?: boolean };

// Símbolo raster oficial; o lettering é texto real conforme o manual da marca.
export function BrandLockup({ map = false }: Props) {
  const size = map ? 36 : 32;
  return (
    <span className="map-lockup">
      <picture aria-hidden="true">
        <source
          type="image/webp"
          srcSet={`/images/map/brand/simbolo-${size}.webp 1x, /images/map/brand/simbolo-${size * 2}.webp 2x`}
        />
        <img
          src={`/images/map/brand/simbolo-${size}.png`}
          srcSet={`/images/map/brand/simbolo-${size}.png 1x, /images/map/brand/simbolo-${size * 2}.png 2x`}
          width={size}
          height={size}
          alt=""
          decoding="async"
        />
      </picture>
      <span className="map-lockup-copy">
        <span className="map-wordmark"><span className="map-wordmark-essencia">Essencia</span><span className="map-wordmark-lab">Lab</span></span>
        {map && <span className="map-brand-label"> MAP</span>}
      </span>
    </span>
  );
}
