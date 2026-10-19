import "./brand-logo.css";

// Símbolo raster oficial + lettering em texto (Manrope 600/300), como no /map.
// size: 32 ou 36 (existem versões 1x/2x em /images/map/brand).
export default function BrandLogo({ size = 36, tone = "dark" }) {
  const base = `/images/map/brand/simbolo-${size}`;
  const base2x = `/images/map/brand/simbolo-${size * 2}`;
  return (
    <span className={tone === "light" ? "brand-logo brand-logo--light" : "brand-logo"}>
      <picture aria-hidden="true">
        <source type="image/webp" srcSet={`${base}.webp 1x, ${base2x}.webp 2x`} />
        <img
          src={`${base}.png`}
          srcSet={`${base}.png 1x, ${base2x}.png 2x`}
          width={size}
          height={size}
          alt=""
          decoding="async"
        />
      </picture>
      <span className="brand-logo-name">
        <b>Essencia</b>
        <span>Lab</span>
      </span>
    </span>
  );
}
