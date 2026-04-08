# Přehled animací - LawPage1

Tento dokument shrnuje všechny klíčové animace vytvořené pro projekt LawPage1. Animace jsou postaveny primárně na knihovně **Framer Motion**, která umožňuje plynulé a deklarativní přechody.

---

## 1. Komponenta `TextReveal` / `HeadingReveal`
Tato animace vytváří efekt "vynoření" textu. Text se rozdělí na jednotlivá slova, která jsou uzavřena v kontejneru s `overflow: hidden`. Slova se pak posouvají zdola nahoru.

**Použití:** Nadpisy v Hero sekci, hlavní nadpisy stránek.

```tsx
// Zjednodušený princip (Framer Motion)
const words = text.split(' ');

return (
  <Tag>
    {words.map((word, i) => (
      <span style={{ display: 'inline-block', overflow: 'hidden' }}>
        <motion.span
          initial={{ y: '110%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + i * 0.1
          }}
        >
          {word}&nbsp;
        </motion.span>
      </span>
    ))}
  </Tag>
);
```

---

## 2. Komponenta `ClipReveal`
Využívá CSS vlastnost `clip-path` k postupnému odhalení obsahu (např. zleva doprava). Je to velmi čistý a prémiový efekt, který nepůsobí rušivě.

**Použití:** Odznaky (badges), popisné texty, obrázky.

```tsx
<motion.div
  initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0, y: 10 }}
  whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1, y: 0 }}
  transition={{
    duration: 1.6,
    ease: [0.16, 1, 0.3, 1],
    delay: 0.5
  }}
>
  {children}
</motion.div>
```

---

## 3. Komponenta `MorphButton`
Nejsložitější animace v projektu. Tlačítko začíná jako malý neviditelný kruh ve středu, který se "vymorfuje" do finálního tvaru tlačítka. Poté se zobrazí text.

**Klíčové prvky:**
- Morphing z kruhu do obdélníku.
- Hover efekt: "sweep" overlay, který přejede přes tlačítko zprava doleva.

```tsx
// Morphing pozadí
<motion.span
  initial={{ width: circleSize, borderRadius: circleSize / 2, opacity: 0 }}
  animate={{
    width: [circleSize, circleSize, finalWidth],
    borderRadius: [circleSize / 2, circleSize / 2, 4],
    opacity: [0, 1, 1],
  }}
  transition={{
    duration: 1.0,
    times: [0, 0.18, 1],
    ease: [0.16, 1, 0.3, 1],
    delay: startDelay,
  }}
/>

// Hover sweep (Tailwind + CSS transition)
<span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-out bg-primary" />
```

---

## 4. Hero Background Reveal
Při načtení stránky se obrázek na pozadí plynule ztmaví a mírně se zmenší (scale-down), což vytváří pocit hloubky a usazení prostoru.

```tsx
<motion.div
  initial={{ opacity: 0, scale: 1.05 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 3.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
>
  <Image ... />
</motion.div>
```

---

## 5. Infinite Scroll Indicator
Jednoduchá, ale efektní animace šipky v dolní části Hero sekce, která uživatele vybízí ke scrovollání.

```tsx
<motion.div
  animate={{ y: [0, 8, 0] }}
  transition={{
    duration: 1.6,
    repeat: Infinity,
    ease: 'easeInOut'
  }}
>
  <ChevronDown />
</motion.div>
```

---

## 6. Navbar Link Hover
Moderní podtržení, které se nerozsvítí jen tak, ale plynule "vyjede" z levé strany.

```tsx
<a className="relative group">
  {label}
  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
</a>
```

---

## 7. Navbar Entrance (NavReveal)
Položky v navigaci se neobjeví hned, ale plynule připlují z pravé strany s mírným zpožděním (stagger efekt), což dodává stránce na dynamice hned po načtení.

```tsx
// Komponenta pro obalení prvků v Navbaru
function NavReveal({ children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1], 
        delay 
      }}
    >
      {children}
    </motion.div>
  );
}
```

---

## 8. Image Hover Scale
U obrázků ve specializacích je použit plynulý CSS přechod, který při najetí myší (hover) obrázek mírně zvětší. To vytváří interaktivní pocit a zaměřuje pozornost uživatele.

```tsx
<div className="overflow-hidden rounded-sm">
  <Image
    src={image}
    className="transition-transform duration-700 ease-out hover:scale-105"
  />
</div>
```

---

## Doporučení pro další projekty
1. **Konzistentní Easing:** V celém projektu používáme `ease: [0.16, 1, 0.3, 1]`. Tento "Quintic" easing dodává animacím luxusní, setrvačný pocit.
2. **Staggering:** U seznamů nebo slov v nadpisu používejte `delay: baseDelay + i * 0.1`.
3. **Viewport Margin:** Pro animace na scroll používejte `viewport={{ once: true, margin: '-10%' }}`, aby se animace spustila až ve chvíli, kdy je prvek skutečně vidět.
