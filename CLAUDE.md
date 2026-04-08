# Project: AttorneyA1 — Advokátní kancelář Mgr. Petr Balabán

## Stack
- Next.js 15, App Router, TypeScript, Tailwind CSS
- SSG — statický export (`output: 'export'` v next.config.ts)
- Deployment: Netlify
- Komponenty: shadcn/ui jako základ UI

## Design
- Inspirace: Blackstone legal template — světlý, prémiový, minimalistický
- Background: bílá (#ffffff) a světle šedá (#f5f5f5)
- Barvy: bílá, černá, šedá, navy (#0a1f44)
- Akcenty: navy pro CTA tlačítka a důležité prvky
- Typografie: serif (např. Playfair Display) pro headlingy, sans-serif (Inter) pro body
- Border radius: 5px — tlačítka, karty, inputy — všude konzistentně 5px
- Styl karet: lehký box-shadow, bílý background, border 1px solid #e5e7eb
- Navbar: bílý background, logo vlevo, menu vpravo, CTA tlačítko "Kontakt"
- Hero: velký serif headline, podtitulek, dvě tlačítka (primary + outline)
- Žádné animace — statická, důvěryhodná prezentace

## Obsah webu (fakta z akbalaban.cz — nepřidávat nic nového)

### Základní info
- Název: Advokátní kancelář Mgr. Petr Balabán
- Adresa: Táborská 411/34, Praha 4
- Telefon: +420 728 479 010
- E-mail: email@akbalaban.cz
- Jazyky: čeština, angličtina
- Činnost od: 2006

### O kanceláři
Advokátní kancelář zahájila činnost v roce 2006. Poskytuje právní služby fyzickým i právnickým osobám, podnikajícím i nepodnikajícím, na celém území České republiky.

### Právní služby (přesný výčet)
- Závazkové právo (zpracování a revize smluv, vymáhání pohledávek)
- Právo obchodních společností (zakládání, statutární změny, rušení)
- Směnečné a šekové právo (poradenství, zastupování v soudním řízení)
- Právní vztahy k nemovitostem (správa, převody, věcná břemena, zástavy)
- Bytové právo (nájmy, podnájmy bytů a nebytových prostor)
- Ochrana spotřebitele (vady výrobků a služeb, náhrady škod)
- Rodinné právo (rozvody, vypořádání manželů, úprava poměrů k dětem)
- Pracovní právo (poradenství, zastupování v soudním řízení)
- Právo duševního vlastnictví (poradenství, příprava a revize smluv)
- Trestní právo (poradenství, zastupování v trestním řízení)

### Osobní profil
- Mgr. Petr Balabán, samostatný advokát od 2006
- Absolvent Právnické fakulty Masarykovy univerzity v Brně (2002)
- Praxe: koncipient u JUDr. Libora Balabána, poté u JUDr. Tomáše Pohla (obchodní závazkové vztahy, směnečné právo 2003–2006)
- Praxe v trestním a rodinném právu: advokátní kancelář JUDr. Michaely Střížové
- Roční studijní pobyt v USA
- Spoluautor několika odborných publikací
- Komunikace: čeština, angličtina

### Ceny služeb
Odměna advokáta se řídí vyhláškou Ministerstva spravedlnosti č. 177/1996 Sb. (advokátní tarif), není-li dohodnuto jinak. Výši odměny lze sjednat jako smluvní — úkonovou, hodinovou, paušální nebo cílovou. Stanovuje se individuálně podle časové náročnosti, odborné náročnosti a hodnoty věci.

## Struktura stránek (jedna homepage, SSG)
1. **Navbar** — logo, navigace (O kanceláři, Služby, Profil, Ceny, Kontakt), CTA tlačítko
2. **Hero** — headline, podtitulek, dvě CTA tlačítka
3. **Služby** — grid karet, každá služba jako karta s ikonou a popisem
4. **O kanceláři** — krátký text, rok založení, pokrytí ČR
5. **Osobní profil** — bio Mgr. Petra Balabána
6. **Ceny** — krátká sekce o způsobu odměňování
7. **Kontakt** — adresa, telefon, e-mail, mapa (statická nebo odkaz)
8. **Footer** — základní info, copyright

## Konvence
- Komponenty: PascalCase, každá v vlastním souboru v /components
- Import alias: @/ pro root
- CSS: pouze Tailwind utility třídy
- Obrázky: next/image, WebP v /public/images
- Žádné 'use client' pokud není nutné
- SEO: metadata v každé sekci, strukturovaná data (LocalBusiness schema)

## Co NEDĚLAT
- Žádné vymyšlené fakty, reference, počty případů ani citáty klientů
- Žádné Lorem Ipsum
- Žádné inline styly
- Žádné externí state management knihovny
- Border radius nikdy více než 5px

## Animace
- Animace vem ze souboru ANIMATIONS.md a použij je na elementy, stejně jak je napsáno v tom souboru ANIMATIONS.md
