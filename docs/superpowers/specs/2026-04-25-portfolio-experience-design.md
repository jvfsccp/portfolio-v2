# Portfolio Experience Section Design

## Context

- The project already has the foundation layer implemented.
- The hero slice is being developed separately.
- The next requested slice is the professional experience section.
- The primary visual reference is `images-inspirations/professional-experience.png` from the `neres.vercel.app` inspiration.
- The user wants the section visually very close to that reference, adapted to the current portfolio palette and populated with their real companies, roles, dates, locations, logos, technologies, and summarized descriptions.

Content source of truth for this slice:

- implementation should encode the following approved content into `src/data/experiences.ts`:
  - `Alfa Termomecânica`
    - logo: `src/assets/experiences/alfa.png`
    - role: `Estagiário T.I`
    - period: `02/2024 - 08/2024`
    - location: `Goiânia, Goiás, Brasil`
    - techs: `Python`, `API`, `Make`, `ERP`, `CRM`, `Excel`, `Integrações`
    - summary source bullets:
      - `Implementou a parametrização de sistemas internos, garantindo maior confiabilidade e otimização dos processos da empresa.`
      - `Desenvolveu automações em Python e integrações via API, incluindo soluções com Power Query que reduziram tarefas manuais.`
      - `Introduziu o uso de programação nos processos internos, criando sistemas e automações inéditas que aumentaram a eficiência operacional.`
  - `Ctrl + Play`
    - logo: `src/assets/experiences/ctrlplay.png`
    - role: `Instrutor de Programação - Estágio`
    - period: `08/2024 - 01/2025`
    - location: `Goiânia, Goiás, Brasil`
    - techs: `HTML`, `CSS`, `JavaScript`, `React`, `Python`, `Arduino`, `Microbit`, `Figma`
    - summary source bullets:
      - `Ministrou aulas de programação e robótica para crianças e adolescentes, utilizando Arduino e Micro:bit em atividades práticas.`
      - `Ensinou desenvolvimento web (HTML, CSS, JavaScript e React) e lógica de programação em Python, adaptando os conteúdos ao nível dos alunos.`
      - `Promoveu aprendizado prático e criativo, incentivando pensamento computacional e resolução de problemas.`
  - `CK Labs Development`
    - logo: `src/assets/experiences/cklabs.jpg`
    - roles:
      - `Desenvolvedor Jr` | `02/2025 - 05/2025` | `Goiânia, Goiás, Brasil` | techs: `HTML`, `CSS`, `JavaScript`, `Next.js`, `Tailwind CSS`, `C#`, `.NET`, `ASP NET`, `ASP NET MVC`, `SQL Server`, `FullStack`
        - summary source bullets:
          - `Desenvolveu interfaces dinâmicas utilizando Next.js e Tailwind CSS, garantindo aplicações modernas e responsivas.`
          - `Contribuiu para o backend em .NET em projetos baseados na arquitetura ASP.NET MVC.`
          - `Assumiu a responsabilidade principal pelo frontend, demonstrando agilidade, proatividade e rápida adaptação ao ambiente da empresa.`
      - `Desenvolvedor Frontend` | `11/2025 - 03/2026` | `Goiânia, Goiás, Brasil` | contract/type label: `PJ` | techs: `Next.js`, `TailwindCSS`, `Zustand`
        - summary source bullets:
          - `Participou ativamente do desenvolvimento frontend de dois projetos da empresa.`
          - `Ficou responsável por implementar, resolver e analisar o frontend desses projetos.`
          - `Atuou em um produto de resolução escolar e no site oficial da empresa.`
  - `Tron Sistemas`
    - logo: `src/assets/experiences/tron.jpg`
    - roles:
      - `Estagiário de Desenvolvimento` | `06/2025 - 02/2026` | `Goiânia, Goiás, Brasil` | techs: `React`, `Typescript`, `JavaScript`, `Python`, `FastAPI`, `Node.js`, `C#`, `.NET`, `PostgreSQL`, `Prisma`, `MongoDB`, `Docker`, `CI/CD`, `Github Actions`, `Keycloak`, `Scrum`, `FullStack`, `AI-powered Systems`
        - summary source bullets:
          - `Contribui no projeto de Inteligência Artificial da empresa, fornecendo dados e implementando soluções em Python, incluindo regex para comunicação entre FirebirdSQL e o sistema em Delphi.`
          - `Automatizou a geração de descrições utilizando a API da OpenAI, integrando automaticamente os resultados em campos JSON do sistema interno.`
          - `Desenvolveu aplicação em Node.js para automação do atendimento via WhatsApp, integrando com Movidesk para criação de tickets em diferentes departamentos.`
          - `Participa ativamente das reuniões de equipe, colaborando com desenvolvedores e áreas não técnicas para alinhar soluções e decisões técnicas.`
          - `Participação no projeto de refatoração da UX do principal sistema da empresa, colaborando com a equipe de desenvolvimento sendo responsável pelo frontend do projeto utilizando Next.js.`
      - `Desenvolvedor Jr I` | `03/2026 - Presente` | `Goiânia, Goiás, Brasil` | techs: `React`, `TypeScript`, `JavaScript`, `Python`, `FastAPI`, `Node.js`, `C#`, `.NET`, `PostgreSQL`, `Prisma`, `MongoDB`, `Docker`, `CI/CD`, `GitHub Actions`, `Keycloak`, `Scrum`, `FullStack`, `AI-powered Systems`, `Vue`, `PHP`, `Laravel`
        - summary source bullets:
          - `Atuo de forma mais estratégica no desenvolvimento de sistemas web e soluções com IA, contribuindo integralmente em iniciativas ligadas tanto à inteligência artificial quanto ao desenvolvimento de software.`
          - `No Assistente Tron, sigo evoluindo o produto com entregas que aumentam o valor gerado para usuários internos e fortalecem a eficiência das soluções baseadas em IA.`
          - `Desenvolvo APIs em PHP para o Integra Contador, promovendo mais rapidez, integração e valor para os clientes dos sistemas contábeis da empresa.`
          - `Também participo do desenvolvimento de funcionalidades para o site da Tron em alinhamento com o time de marketing e implemento melhorias para a Área do Cliente e outras frentes digitais da empresa.`
  - `AWT Development`
    - logo: `src/assets/experiences/awt.jpg`
    - role: `Desenvolvedor FullStack / CTO`
    - period: `12/2024 - Presente`
    - location: `Goiânia, Goiás, Brasil`
    - techs: `Next.js`, `React`, `Node.js`, `PostgreSQL`, `Firebase`, `Express`, `C#`, `.NET`, `Docker`, `CI/CD`, `Estratégia Tecnológica`, `Tomada de Decisão`
    - summary source bullet:
      - `Empresa fundada com dois sócios para consultoria de software, implementando soluções e sistemas escaláveis e modernos.`
- the role descriptions should be summarized from the user's approved bullets into compact portfolio paragraphs

## Goals

- Build a professional experience section visually close to the reference.
- Keep the same dark premium timeline feel with a vertical line and cards on the right.
- Support company groups with multiple roles in the same company, similar to LinkedIn promotion/progression presentation.
- Keep all experience content in a typed data structure, not hardcoded in the section markup.
- Use the provided company logos from `src/assets/experiences/`.

## Non-Goals

- No education implementation in this slice.
- No projects or skills implementation in this slice.
- No CMS-like authoring interface.
- No redesign of the hero, header, or footer in this slice.

## Constraints And Conventions

- Follow the current semantic palette and dark visual language of the project.
- Keep author-written files hyphenated.
- Prefer named exports in author-written code.
- Do not collapse the section into `src/app/page.tsx`.
- Keep the section close to the `professional-experience.png` reference rather than reinterpreting it.

## Reference Priority

- Primary source of truth: `images-inspirations/professional-experience.png`
- Secondary source of truth: `https://neres.vercel.app/` only when the screenshot is ambiguous for spacing or behavior

## Proposed Approach

Use a single experience timeline section with support for two item modes:

- `single-role company`
- `multi-role company group`

This preserves the clean visual structure of the reference while letting companies like `CK Labs Development` and `Tron Sistemas` show internal role progression instead of appearing as unrelated duplicated employers.

## Visual Direction

### Overall Layout

- Section heading at the top with icon + uppercase label style close to the reference.
- Vertical timeline rail on the left.
- Circular timeline markers aligned with each top-level experience group.
- Experience content cards on the right.
- Each card uses elevated dark surfaces, subtle border treatment, and compact tech chips.

### Visual Fidelity Requirements

The following structural elements should be preserved from the reference:

- heading treatment with understated icon and uppercase title
- vertical line and dot markers on the left
- content cards aligned to the right of the line
- logo area at the start of each company card
- company and role hierarchy clearly separated
- compact metadata row for date and location
- descriptive paragraph followed by tech chips

Responsive/layout rules that should be preserved:

- desktop cards should occupy the main content column to the right of the rail, not stretch edge-to-edge across the viewport
- the left rail gutter should remain visually narrow and secondary, similar to the reference
- top-level timeline markers should be small circular dots aligned with each company group start
- logo containers should remain compact square or near-square blocks, visually similar to the reference
- on mobile, the left rail can simplify or visually compress, but the company group hierarchy must remain legible
- mobile cards should stack with reduced horizontal padding while preserving logo, metadata, description, and tech ordering

Objective visual validation checklist:

- one visible timeline rail on the left side of the section
- exactly one external timeline marker per top-level company group
- each top-level entry shows logo block, company identity, metadata, one-paragraph description per role, and tech chips
- grouped companies render nested role blocks inside one shared company wrapper
- top-level content column stays constrained (no full-width stretched cards on desktop)
- mobile keeps hierarchy readable without horizontal overflow caused by the experience cards

### Palette Adaptation

- Keep everything in the established monochromatic palette.
- No colorful timeline accents.
- Logos may retain their original color, but if transparency makes them unreadable against the dark UI, wrap them in a dark container that fits the palette.

## Data Model

All content should live in a typed data file.

The data module must be the only source of truth for:

- company identity data
- role chronology
- contract model labels
- summary paragraphs
- tech chips

No role metadata should be duplicated inside component markup.

Recommended structure supports:

- company name
- company logo source
- location
- top-level company period derived from the earliest role start and latest role end when a company has multiple roles
- one or more roles
- each role containing:
  - title
  - location
  - contract/type label when relevant
  - period
  - summarized description text
  - tech list

Suggested TypeScript shape:

```ts
type ExperiencePeriod = {
  start: string // format: YYYY-MM
  end: string | "present"
  display: string // ex.: "03/2026 - Presente"
}

type ExperienceRole = {
  id: string
  title: string
  location: string
  contractLabel?: string
  period: ExperiencePeriod
  summary: string
  technologies: string[]
}

type ExperienceCompany = {
  id: string
  company: string
  logoSrc: string
  logoAlt?: string
  roles: ExperienceRole[]
}
```

Data constraints:

- `roles.length === 1` means single-role rendering.
- `roles.length > 1` means grouped-role rendering.
- Role IDs should be stable and slug-like for predictable React keys.
- Tech names should follow the canonical naming table below.

Canonical tech naming table:

- `TypeScript` (not `Typescript`)
- `Tailwind CSS` (not `TailwindCSS`)
- `GitHub Actions` (not `Github Actions`)
- `Full Stack` (not `FullStack` when displayed)

This allows:

- `single-role companies` like `Alfa Termomecânica`, `Ctrl+Play`, and `AWT Development`
- `multi-role groups` like `CK Labs Development` and `Tron Sistemas`

## Content Treatment

### Description Summaries

The user provided bullet-point descriptions for each role.

Implementation should convert them into concise portfolio-ready summary paragraphs, one paragraph per role, preserving:

- business impact
- technical scope
- technologies used
- ownership/responsibility level

The wording can be improved for portfolio presentation, but it must remain faithful to the user's actual experience.

Rewrite rule:

- each role description should be rewritten into exactly one compact paragraph
- each paragraph must contain at most 2 short sentences and no more than 280 characters

### Chronology

The timeline should be ordered from most recent to oldest.

This means:

- current or most recent roles appear first
- earlier roles descend down the timeline

Sorting rule for overlapping experiences:

- current roles/groups appear first
- after that, sort top-level company groups by the end date of their most recent role
- if two groups are both current, sort by the start date of their current/latest role, newest first
- if all previous rules tie, sort by company name in ascending alphabetical order
- nested roles inside the same company should be ordered from most recent to oldest

Date parsing rule:

- use normalized internal dates (`YYYY-MM`) for sorting
- use `display` strings for UI only
- never sort by display text

### Company Groups With Promotions / Role Changes

For `CK Labs Development` and `Tron Sistemas`, do not render each role as isolated companies.

Instead:

- render one company group card with the logo and company identity once
- render nested role entries within that company card
- visually communicate progression similarly to LinkedIn internal promotions

Expected grouped-company internal structure:

- one company-level header block with logo, company name, location, and derived company date range
- below it, a nested vertical stack of role entries inside the same card
- each nested role entry includes:
  - role title
  - role period
  - visible location metadata in the same metadata row or directly below it
  - summarized paragraph
  - tech chips
- nested role entries are separated with subtle dividers or spacing, not full standalone top-level cards
- nested roles do not receive their own large external timeline markers; the company group owns the main timeline marker

This progression treatment should make it immediately clear that:

- the employer stayed the same
- the title/responsibility changed over time

Display rule for grouped companies:

- show both the company-level derived range in the company header and the per-role date ranges inside each nested role block, except when the grouped company has a visible gap between roles
- if a grouped company has a visible gap between roles, the company-level derived range must be visually secondary and must not imply uninterrupted tenure
- in that case, the per-role ranges remain the primary chronology signal

Gap-detection rule:

- for adjacent roles sorted from oldest to newest, if the next role starts after the previous role ends with at least one uncovered month, treat it as a visible gap
- grouped companies with visible gaps must show the helper label `Períodos distintos`
- this helper label must be visually secondary: muted text color and smaller size than metadata text

Derived company range rule:

- grouped-company header may display `earliest role start - latest role end`
- when a visible gap exists, render this derived range in muted style and keep per-role ranges dominant

## Company-Specific Requirements

### Alfa Termomecânica

- Role: `Estagiário T.I`
- Period: `02/2024 - 08/2024`
- Location: `Goiânia, Goiás, Brasil`
- Tech list should include the provided tools.
- Description should be rewritten into a single concise paragraph.

### Ctrl + Play

- Role: `Instrutor de Programação - Estágio`
- Period: `08/2024 - 01/2025`
- Location: `Goiânia, Goiás, Brasil`
- Description should be rewritten into a single concise paragraph.

### CK Labs Development

This company should be a grouped experience.

Roles:

- `Desenvolvedor Jr` (`02/2025 - 05/2025`)
- `Desenvolvedor Frontend` (`11/2025 - 03/2026`, atuação autônoma/PJ)

Both should appear nested under one employer group.
Each nested role should preserve its own summarized paragraph, tech list, and location metadata.
Even though there is a visible date gap and a contract-model change, keep this company grouped as requested by the user.
The second role should visibly indicate the autonomous/PJ nature so the grouped display does not imply an uninterrupted internal promotion timeline.

### Tron Sistemas

This company should be a grouped experience.

Roles:

- `Estagiário de Desenvolvimento` (`06/2025 - 02/2026`)
- `Desenvolvedor Jr I` (`03/2026 - Presente`)

Both should appear nested under one employer group.
Each nested role should preserve its own summarized paragraph, tech list, and location metadata.

### AWT Development

- Role: `Desenvolvedor FullStack / CTO`
- Period: `12/2024 - Presente`
- Location: `Goiânia, Goiás, Brasil`
- Description should be improved into a stronger portfolio-ready sentence/paragraph while staying truthful to the user's summary.
- It should remain inside the same timeline as requested, not a separate highlight section.

## Component Boundaries

Recommended file split:

- `src/components/sections/portfolio-experience.tsx`
- `src/components/sections/experience-timeline.tsx`
- `src/components/sections/experience-item.tsx`
- `src/components/sections/experience-role-group.tsx`
- `src/data/experiences.ts`

Possible helper only if useful:

- a small `experience-tech-list.tsx` if chip rendering would otherwise be duplicated

`src/app/page.tsx` should only compose the section into the current page structure.

Rendering ownership:

- `portfolio-experience.tsx`: section wrapper, heading, and top-level timeline container
- `experience-timeline.tsx`: top-level company iteration and timeline rail/dot alignment
- `experience-item.tsx`: single-role company card rendering
- `experience-role-group.tsx`: grouped company card with nested role blocks
- `src/data/experiences.ts`: typed content and normalized chronology data

The section should not depend on runtime date computation from free-text strings.

## Accessibility

- Preserve heading hierarchy: experience section title should be `h2`.
- Company names and role titles should remain readable and semantically separated.
- Tech lists should be renderable as a list or equivalent grouped structure.
- Logos should include useful alternative text or be marked decorative if the company name is already present nearby.

Additional accessibility requirements:

- timeline markers are decorative and should be hidden from assistive tech when not semantic
- metadata rows (date and location) should remain readable at mobile font sizes without truncation
- role titles should not rely only on color to communicate hierarchy

## Risks And Mitigations

- Risk: grouped company roles become visually messy.
  - Mitigation: keep company identity in one wrapper and nested roles visually lighter than the top-level group.
- Risk: transparent logos disappear on dark cards.
  - Mitigation: place those logos inside a neutral dark logo container.
- Risk: descriptions become too long for the clean reference layout.
  - Mitigation: rewrite to concise portfolio-style paragraphs.
- Risk: timeline structure leaks too much complexity into `page.tsx`.
  - Mitigation: keep page composition-only and move rendering logic into dedicated section components.

## Verification Plan

- `pnpm exec tsc --noEmit`
- `pnpm lint`
- `pnpm build`
- Browser smoke check confirming:
  - the section matches the intended reference structure
  - grouped-role companies clearly communicate promotion/progression
  - grouped companies with role gaps do not visually imply uninterrupted tenure
  - logos render well against the dark palette
  - tech chips wrap cleanly
  - desktop and mobile layouts remain stable

## Acceptance Criteria

- All five employers are shown in one single timeline section.
- `CK Labs Development` and `Tron Sistemas` are rendered as grouped-role companies.
- `AWT Development` remains a normal entry in the same timeline.
- Every role description appears as exactly one concise paragraph with at most 2 short sentences and no more than 280 characters.
- Every role description appears as exactly one concise paragraph with at most 2 short sentences and no more than 280 characters.
- Date sorting is consistent with normalized chronology rules.
- Gap cases in grouped companies are visually clear and non-misleading.
- No hardcoded experience text lives inside section component markup.
- `src/app/page.tsx` remains composition-only for this slice.
- Visual structure passes the objective visual validation checklist defined in this spec.

## Implementation Sequence

1. Add typed experience data.
2. Implement the base item/card building blocks.
3. Implement grouped-role company rendering.
4. Implement the main experience section and timeline rail.
5. Compose the section into the page.
6. Run verification and smoke tests.

## Open Decisions Resolved In This Spec

- Use a single timeline section for all experiences.
- Keep `AWT Development` inside the same timeline.
- Use grouped role progression for `CK Labs Development` and `Tron Sistemas`.
- Keep the layout close to the inspiration rather than inventing a new structure.
