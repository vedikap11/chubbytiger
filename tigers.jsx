/* Three original tigers, drawn in a chunky folk/tattoo-flash style.
   Each tiger is stylistically distinct (prowling, sitting, leaping).
   Palette: cream body, ink stripes, pink muzzle, amber eyes.
   All shapes are original primitives (ellipses, paths) — no tracing. */

const TIGER_PALETTE = {
  body: "#F5E4C8",
  bodyShade: "#E7CFA5",
  stripe: "#1A1512",
  pink: "#FF8FA3",
  pinkDeep: "#E8607B",
  eye: "#FFC23C",
  whisker: "#1A1512",
};

/* ---------- Tiger 1: Prowling (long, low, side profile) ---------- */
function TigerProwl({ className = "", style = {} }) {
  const p = TIGER_PALETTE;
  return (
    <svg viewBox="0 0 400 300" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* tail curling up */}
      <path d="M330 170 Q 390 140 380 90 Q 375 60 350 70 Q 335 75 340 95 Q 345 115 325 130"
        fill={p.body} stroke={p.stripe} strokeWidth="6" strokeLinejoin="round" />
      <path d="M346 78 Q 360 82 358 105" stroke={p.stripe} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M365 120 Q 370 130 360 138" stroke={p.stripe} strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* tail tip black */}
      <ellipse cx="350" cy="62" rx="14" ry="10" fill={p.stripe} />

      {/* back leg */}
      <path d="M290 195 Q 295 240 280 260 L 300 262 L 310 245 Q 320 220 315 195 Z"
        fill={p.body} stroke={p.stripe} strokeWidth="6" strokeLinejoin="round" />
      {/* toes */}
      <path d="M278 258 q 4 6 10 4 M290 260 q 3 5 8 3" stroke={p.stripe} strokeWidth="3" fill="none" />

      {/* body — fat belly curve */}
      <path d="M110 170 Q 90 220 130 245 Q 200 270 270 250 Q 330 235 330 185 Q 330 140 270 130 Q 190 118 140 140 Q 115 150 110 170 Z"
        fill={p.body} stroke={p.stripe} strokeWidth="7" strokeLinejoin="round" />

      {/* front leg */}
      <path d="M150 215 Q 145 255 130 265 L 155 268 L 170 250 Q 175 230 170 210 Z"
        fill={p.body} stroke={p.stripe} strokeWidth="6" strokeLinejoin="round" />
      <path d="M132 263 q 4 6 10 4 M146 265 q 3 5 8 3" stroke={p.stripe} strokeWidth="3" fill="none" />

      {/* stripes on body */}
      <path d="M160 135 q -4 20 6 40" stroke={p.stripe} strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M195 130 q -5 30 8 60" stroke={p.stripe} strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M230 130 q -6 35 10 70" stroke={p.stripe} strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M265 135 q -8 35 6 65" stroke={p.stripe} strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M295 145 q -3 25 4 45" stroke={p.stripe} strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* head — chunky circle */}
      <circle cx="110" cy="175" r="58" fill={p.body} stroke={p.stripe} strokeWidth="7" />

      {/* ears */}
      <path d="M75 135 Q 72 115 90 120 L 95 148 Z" fill={p.body} stroke={p.stripe} strokeWidth="6" strokeLinejoin="round" />
      <path d="M80 130 L 88 138" stroke={p.pinkDeep} strokeWidth="4" strokeLinecap="round" />

      {/* forehead stripes */}
      <path d="M95 135 q 5 10 0 20" stroke={p.stripe} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M110 130 q 2 12 -2 22" stroke={p.stripe} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M125 132 q -2 12 2 22" stroke={p.stripe} strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* cheek fluff */}
      <path d="M70 195 q -10 5 -12 15 q 5 -2 12 -4" fill={p.body} stroke={p.stripe} strokeWidth="5" strokeLinejoin="round" />

      {/* eye */}
      <ellipse cx="95" cy="170" rx="7" ry="9" fill={p.eye} stroke={p.stripe} strokeWidth="3" />
      <circle cx="95" cy="172" r="3" fill={p.stripe} />

      {/* muzzle / nose */}
      <ellipse cx="72" cy="195" rx="18" ry="14" fill={p.body} stroke={p.stripe} strokeWidth="5" />
      <path d="M65 188 q 7 -4 14 0" stroke={p.pinkDeep} strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="72" cy="188" rx="5" ry="3" fill={p.pinkDeep} />
      {/* mouth */}
      <path d="M72 195 q -5 10 -12 8 M72 195 q 3 10 10 6" stroke={p.stripe} strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* tiny tooth */}
      <path d="M68 202 l 1 5 l 2 -5 z" fill={p.body} stroke={p.stripe} strokeWidth="2" />

      {/* whiskers */}
      <path d="M56 198 l -20 -3 M57 202 l -22 2" stroke={p.whisker} strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- Tiger 2: Sitting (front-facing, round, proud) ---------- */
function TigerSit({ className = "", style = {} }) {
  const p = TIGER_PALETTE;
  return (
    <svg viewBox="0 0 300 360" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* tail behind */}
      <path d="M245 270 Q 290 240 280 195 Q 275 170 260 178"
        fill="none" stroke={p.stripe} strokeWidth="8" strokeLinecap="round" />
      <path d="M245 270 Q 290 240 280 195 Q 275 170 260 178 L 252 195 Q 260 210 265 240 Q 260 255 238 262 Z"
        fill={p.body} stroke={p.stripe} strokeWidth="7" strokeLinejoin="round" />
      <path d="M272 200 q 6 8 -2 18" stroke={p.stripe} strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* body — wide pear */}
      <path d="M90 180 Q 60 270 110 320 Q 150 335 190 320 Q 240 270 210 180 Z"
        fill={p.body} stroke={p.stripe} strokeWidth="7" strokeLinejoin="round" />

      {/* back feet poking out */}
      <ellipse cx="110" cy="325" rx="28" ry="14" fill={p.body} stroke={p.stripe} strokeWidth="6" />
      <ellipse cx="190" cy="325" rx="28" ry="14" fill={p.body} stroke={p.stripe} strokeWidth="6" />
      <path d="M95 328 q 4 6 10 4 M108 330 q 4 6 10 4 M121 328 q 4 5 9 3" stroke={p.stripe} strokeWidth="3" fill="none" />
      <path d="M175 328 q 4 6 10 4 M188 330 q 4 6 10 4 M201 328 q 4 5 9 3" stroke={p.stripe} strokeWidth="3" fill="none" />

      {/* front arms */}
      <path d="M115 230 Q 100 280 115 310 L 138 305 Q 135 270 140 235 Z"
        fill={p.body} stroke={p.stripe} strokeWidth="6" strokeLinejoin="round" />
      <path d="M185 230 Q 200 280 185 310 L 162 305 Q 165 270 160 235 Z"
        fill={p.body} stroke={p.stripe} strokeWidth="6" strokeLinejoin="round" />
      {/* paw toes */}
      <path d="M118 308 q 4 5 8 3 M128 310 q 4 5 8 3" stroke={p.stripe} strokeWidth="3" fill="none" />
      <path d="M172 310 q 4 5 8 3 M182 308 q 4 5 8 3" stroke={p.stripe} strokeWidth="3" fill="none" />

      {/* belly lighter */}
      <path d="M120 220 Q 110 280 130 315 Q 150 320 170 315 Q 190 280 180 220 Z" fill={p.bodyShade} opacity="0.5" />

      {/* belly stripes */}
      <path d="M115 210 q -8 15 0 35" stroke={p.stripe} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M185 210 q 8 15 0 35" stroke={p.stripe} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M105 260 q -6 15 2 30" stroke={p.stripe} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M195 260 q 6 15 -2 30" stroke={p.stripe} strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* head — big round */}
      <circle cx="150" cy="130" r="80" fill={p.body} stroke={p.stripe} strokeWidth="7" />

      {/* ears */}
      <path d="M85 75 Q 78 50 100 55 L 110 90 Z" fill={p.body} stroke={p.stripe} strokeWidth="6" strokeLinejoin="round" />
      <path d="M215 75 Q 222 50 200 55 L 190 90 Z" fill={p.body} stroke={p.stripe} strokeWidth="6" strokeLinejoin="round" />
      <path d="M92 68 l 10 12" stroke={p.pinkDeep} strokeWidth="4" strokeLinecap="round" />
      <path d="M208 68 l -10 12" stroke={p.pinkDeep} strokeWidth="4" strokeLinecap="round" />

      {/* forehead 王 stripes */}
      <path d="M130 65 q -3 15 3 30" stroke={p.stripe} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M150 55 q 0 20 0 35" stroke={p.stripe} strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M170 65 q 3 15 -3 30" stroke={p.stripe} strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* side stripes */}
      <path d="M85 115 q 12 6 20 0" stroke={p.stripe} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M85 140 q 15 8 25 4" stroke={p.stripe} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M215 115 q -12 6 -20 0" stroke={p.stripe} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M215 140 q -15 8 -25 4" stroke={p.stripe} strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* eyes */}
      <ellipse cx="120" cy="130" rx="12" ry="14" fill={p.eye} stroke={p.stripe} strokeWidth="4" />
      <ellipse cx="180" cy="130" rx="12" ry="14" fill={p.eye} stroke={p.stripe} strokeWidth="4" />
      <circle cx="120" cy="133" r="5" fill={p.stripe} />
      <circle cx="180" cy="133" r="5" fill={p.stripe} />
      <circle cx="122" cy="130" r="1.5" fill={p.body} />
      <circle cx="182" cy="130" r="1.5" fill={p.body} />

      {/* muzzle */}
      <ellipse cx="150" cy="170" rx="38" ry="28" fill={p.body} stroke={p.stripe} strokeWidth="5" />
      <path d="M150 158 l -8 -6 l 16 0 Z" fill={p.pinkDeep} stroke={p.stripe} strokeWidth="3" strokeLinejoin="round" />
      {/* mouth */}
      <path d="M150 168 L 150 180" stroke={p.stripe} strokeWidth="4" />
      <path d="M150 180 q -10 12 -22 8 M150 180 q 10 12 22 8" stroke={p.stripe} strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* teeth */}
      <path d="M140 186 l 1 7 l 3 -7 z" fill={p.body} stroke={p.stripe} strokeWidth="2" />
      <path d="M160 186 l -1 7 l -3 -7 z" fill={p.body} stroke={p.stripe} strokeWidth="2" />

      {/* whiskers */}
      <path d="M115 178 l -25 -6 M115 183 l -26 2" stroke={p.whisker} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M185 178 l 25 -6 M185 183 l 26 2" stroke={p.whisker} strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* ---------- Tiger 3: Leaping (dynamic, stretched out) ---------- */
function TigerLeap({ className = "", style = {} }) {
  const p = TIGER_PALETTE;
  return (
    <svg viewBox="0 0 440 280" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* tail whipping back */}
      <path d="M380 155 Q 425 140 420 105 Q 415 85 400 95 Q 395 105 405 115"
        fill={p.body} stroke={p.stripe} strokeWidth="6" strokeLinejoin="round" />
      <ellipse cx="402" cy="98" rx="10" ry="8" fill={p.stripe} />
      <path d="M410 122 q 4 8 -4 14" stroke={p.stripe} strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* back legs extended */}
      <path d="M310 175 Q 350 170 370 200 L 355 215 Q 335 200 305 200 Z"
        fill={p.body} stroke={p.stripe} strokeWidth="6" strokeLinejoin="round" />
      <ellipse cx="360" cy="215" rx="15" ry="8" fill={p.body} stroke={p.stripe} strokeWidth="5" />

      {/* body — stretched */}
      <path d="M140 160 Q 100 200 160 225 Q 250 240 330 215 Q 360 200 335 160 Q 260 135 190 145 Q 155 150 140 160 Z"
        fill={p.body} stroke={p.stripe} strokeWidth="7" strokeLinejoin="round" />

      {/* front legs stretching forward */}
      <path d="M160 195 Q 130 220 100 210 L 95 225 Q 130 240 170 220 Z"
        fill={p.body} stroke={p.stripe} strokeWidth="6" strokeLinejoin="round" />
      <ellipse cx="98" cy="220" rx="14" ry="8" fill={p.body} stroke={p.stripe} strokeWidth="5" />
      <path d="M92 222 q 3 5 8 3 M102 224 q 3 5 8 3" stroke={p.stripe} strokeWidth="3" fill="none" />

      {/* stripes */}
      <path d="M180 145 q -5 25 5 50" stroke={p.stripe} strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M220 140 q -6 30 8 60" stroke={p.stripe} strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M260 140 q -8 32 8 60" stroke={p.stripe} strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M300 145 q -8 28 5 55" stroke={p.stripe} strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M335 160 q -3 20 3 35" stroke={p.stripe} strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* head — facing forward-left, open mouth */}
      <circle cx="130" cy="145" r="55" fill={p.body} stroke={p.stripe} strokeWidth="7" />

      {/* ears pinned back */}
      <path d="M165 95 Q 175 80 185 98 L 175 118 Z" fill={p.body} stroke={p.stripe} strokeWidth="6" strokeLinejoin="round" />
      <path d="M95 95 Q 85 80 75 98 L 85 118 Z" fill={p.body} stroke={p.stripe} strokeWidth="6" strokeLinejoin="round" />
      <path d="M172 96 l -4 10" stroke={p.pinkDeep} strokeWidth="4" strokeLinecap="round" />
      <path d="M88 96 l 4 10" stroke={p.pinkDeep} strokeWidth="4" strokeLinecap="round" />

      {/* forehead stripes */}
      <path d="M115 100 q -3 15 2 25" stroke={p.stripe} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M130 95 q 0 15 0 30" stroke={p.stripe} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M145 100 q 3 15 -2 25" stroke={p.stripe} strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* side cheek stripes */}
      <path d="M80 140 q 10 4 16 0" stroke={p.stripe} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M78 158 q 12 5 20 2" stroke={p.stripe} strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* eyes — determined, narrowed */}
      <path d="M108 140 q 6 -4 14 0" stroke={p.stripe} strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="115" cy="146" rx="6" ry="4" fill={p.eye} stroke={p.stripe} strokeWidth="3" />
      <circle cx="115" cy="146" r="2.5" fill={p.stripe} />

      <path d="M140 140 q 6 -4 14 0" stroke={p.stripe} strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="147" cy="146" rx="6" ry="4" fill={p.eye} stroke={p.stripe} strokeWidth="3" />
      <circle cx="147" cy="146" r="2.5" fill={p.stripe} />

      {/* muzzle - open roar */}
      <ellipse cx="115" cy="175" rx="28" ry="22" fill={p.body} stroke={p.stripe} strokeWidth="5" />
      <path d="M115 165 l -6 -5 l 12 0 Z" fill={p.pinkDeep} stroke={p.stripe} strokeWidth="3" strokeLinejoin="round" />
      {/* open mouth */}
      <path d="M100 180 Q 115 200 130 180 Q 125 195 115 198 Q 105 195 100 180 Z"
        fill={p.pinkDeep} stroke={p.stripe} strokeWidth="4" strokeLinejoin="round" />
      {/* fangs */}
      <path d="M104 183 l 2 8 l 3 -7 z" fill={p.body} stroke={p.stripe} strokeWidth="2" />
      <path d="M126 183 l -2 8 l -3 -7 z" fill={p.body} stroke={p.stripe} strokeWidth="2" />

      {/* whiskers */}
      <path d="M85 178 l -22 -5 M85 184 l -22 4" stroke={p.whisker} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M145 178 l 22 -5 M145 184 l 22 4" stroke={p.whisker} strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- Mini logo head (for nav) ---------- */
function TigerMark({ className = "", style = {} }) {
  const p = TIGER_PALETTE;
  return (
    <svg viewBox="0 0 80 80" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="42" r="30" fill={p.body} stroke={p.stripe} strokeWidth="4" />
      <path d="M18 22 Q 16 10 24 14 L 28 30 Z" fill={p.body} stroke={p.stripe} strokeWidth="3" strokeLinejoin="round" />
      <path d="M62 22 Q 64 10 56 14 L 52 30 Z" fill={p.body} stroke={p.stripe} strokeWidth="3" strokeLinejoin="round" />
      <path d="M32 28 q -2 10 2 20" stroke={p.stripe} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M40 24 q 0 12 0 24" stroke={p.stripe} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M48 28 q 2 10 -2 20" stroke={p.stripe} strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="31" cy="42" r="4" fill={p.eye} stroke={p.stripe} strokeWidth="2" />
      <circle cx="49" cy="42" r="4" fill={p.eye} stroke={p.stripe} strokeWidth="2" />
      <circle cx="31" cy="43" r="1.5" fill={p.stripe} />
      <circle cx="49" cy="43" r="1.5" fill={p.stripe} />
      <ellipse cx="40" cy="56" rx="10" ry="7" fill={p.body} stroke={p.stripe} strokeWidth="3" />
      <path d="M40 52 l -3 -3 l 6 0 Z" fill={p.pinkDeep} stroke={p.stripe} strokeWidth="2" strokeLinejoin="round" />
      <path d="M40 55 L 40 60 M40 60 q -4 3 -8 1 M40 60 q 4 3 8 1" stroke={p.stripe} strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

Object.assign(window, { TigerProwl, TigerSit, TigerLeap, TigerMark, TIGER_PALETTE });
