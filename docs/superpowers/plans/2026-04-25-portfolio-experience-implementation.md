# Portfolio Experience Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar a seção de experiências profissionais em timeline única, com agrupamento de cargos por empresa quando aplicável, mantendo alta fidelidade ao layout de referência e aderência total ao modelo de dados tipado.

**Architecture:** Construir a feature em camadas: primeiro dados tipados e ordenação determinística, depois blocos de UI (single-role e grouped-role), depois a timeline completa, e por fim composição em `src/app/page.tsx` sem acoplar lógica de negócio na página. A renderização deve seguir como fonte visual primária `images-inspirations/professional-experience.png` e usar `https://neres.vercel.app/` apenas para resolver ambiguidades de espaçamento/comportamento.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS v4, shadcn/ui (Base UI), lucide-react, Biome

**Testing Note:** Este slice é majoritariamente UI e modelagem de dados. A validação será feita por `pnpm exec tsc --noEmit`, `pnpm lint`, `pnpm build` e smoke check visual manual (desktop e mobile) comparando com os referenciais aprovados.

---

## File Map

- Create: `src/data/experiences.ts` - tipos, dados fonte, normalização mínima (datas), ordenação determinística, e export da coleção pronta para renderização.
- Create: `src/components/sections/experience-tech-list.tsx` - lista de chips de tecnologias reutilizável.
- Create: `src/components/sections/experience-item.tsx` - card de empresa com um único cargo.
- Create: `src/components/sections/experience-role-group.tsx` - card de empresa com múltiplos cargos (estilo progressão interna).
- Create: `src/components/sections/experience-timeline.tsx` - rail, marcadores externos por empresa e iteração das entradas.
- Create: `src/components/sections/portfolio-experience.tsx` - wrapper da seção, heading, e composição da timeline.
- Modify: `src/app/page.tsx` - substituir apenas o placeholder de experiência por `PortfolioExperience`.
- Optional Modify: `src/app/globals.css` somente se faltar token/utilitário indispensável para fidelidade visual da timeline.

## Chunk 1: Base de Dados e Regras de Chronology

### Task 1: Criar tipos e dados tipados de experiência

**Files:**
- Create: `src/data/experiences.ts`

- [ ] **Step 1: Revisar referências e limites de escopo antes de codar**

Ler:
- `docs/superpowers/specs/2026-04-25-portfolio-experience-design.md`
- `AGENTS.md`
- `src/app/page.tsx`
- `images-inspirations/professional-experience.png`

Regra de referência:
- usar `images-inspirations/professional-experience.png` como base principal
- consultar `https://neres.vercel.app/` apenas para ambiguidades de espaçamento, densidade e hierarquia visual

- [ ] **Step 2: Definir tipos com named exports e datas normalizadas**

Implementar os tipos necessários em `src/data/experiences.ts` com:
- `ExperiencePeriod` com `start`, `end`, `display`
- `ExperienceRole` com `id`, `title`, `location`, `contractLabel?`, `period`, `summary`, `technologies`
- `ExperienceCompany` com `id`, `company`, `logoSrc`, `logoAlt?`, `roles`

Regras obrigatórias:
- `start` no formato `YYYY-MM`
- `end` no formato `YYYY-MM` ou `present`
- `display` usado apenas para UI

- [ ] **Step 3: Popular os 5 empregadores com conteúdo aprovado na spec**

Incluir dados para:
- `Alfa Termomecânica`
- `Ctrl + Play`
- `CK Labs Development` (2 cargos)
- `Tron Sistemas` (2 cargos)
- `AWT Development`

Regras de conteúdo:
- um parágrafo por cargo
- no máximo 2 frases curtas por parágrafo
- no máximo 280 caracteres por parágrafo
- tecnologias com nomenclatura canônica da spec

Mapeamento obrigatório de logos:
- `Alfa Termomecânica` -> `src/assets/experiences/alfa.png`
- `Ctrl + Play` -> `src/assets/experiences/ctrlplay.png`
- `CK Labs Development` -> `src/assets/experiences/cklabs.jpg`
- `Tron Sistemas` -> `src/assets/experiences/tron.jpg`
- `AWT Development` -> `src/assets/experiences/awt.jpg`

Antes de concluir este passo, validar que os 5 arquivos existem e que `logoSrc` usa exatamente esses caminhos.

- [ ] **Step 4: Implementar utilidades de ordenação determinística no próprio módulo de dados**

Adicionar funções locais (não exportar sem necessidade) para:
- ordenar cargos internos do mais recente para o mais antigo
- ordenar empresas seguindo regras da spec (atuais primeiro, depois fim mais recente, desempate por início mais recente, e por nome)
- detectar gap visível entre cargos de empresas agrupadas

Regra obrigatória de gap (da spec):
- ordenar cargos da empresa do mais antigo para o mais recente
- para cada par adjacente, se o próximo cargo iniciar após o fim do cargo anterior com pelo menos 1 mes descoberto, marcar `hasVisibleGap = true`
- cobrir explicitamente o caso de `CK Labs Development`

Exportar coleção final pronta para render:
- exemplo: `export const experiences = [...]`

- [ ] **Step 5: Verificar tipagem e lint da camada de dados**

Run:
- `pnpm exec tsc --noEmit`
- `pnpm lint`

Expected:
- PASS sem erros de tipo
- PASS sem violações de lint introduzidas no módulo

## Chunk 2: Building Blocks de UI

### Task 2: Criar lista de tecnologias reutilizável

**Files:**
- Create: `src/components/sections/experience-tech-list.tsx`

- [ ] **Step 1: Implementar componente de chips com acessibilidade mínima**

Componente deve:
- receber array readonly de tecnologias
- renderizar estrutura semântica (`ul`/`li` ou equivalente claro)
- quebrar linhas sem estourar horizontalmente no mobile

- [ ] **Step 2: Aplicar estilo fiel ao visual de referência adaptado ao tema atual**

Requisitos visuais:
- chips compactos
- baixo contraste controlado
- borda sutil e superfície escura
- sem acentos coloridos

- [ ] **Step 3: Validar compilação**

Run: `pnpm exec tsc --noEmit`

Expected: PASS

### Task 3: Criar card de item single-role

**Files:**
- Create: `src/components/sections/experience-item.tsx`
- Reuse: `src/components/sections/experience-tech-list.tsx`

- [ ] **Step 1: Implementar estrutura do card para empresa com 1 cargo**

Estrutura mínima:
- bloco de logo
- nome da empresa
- cargo
- metadata (período e localização)
- parágrafo de descrição
- chips de tecnologia

- [ ] **Step 2: Tratar logos transparentes com container escuro neutro**

Regras:
- manter logo legível em fundo escuro
- não usar fundo chamativo
- respeitar proporção sem distorção

- [ ] **Step 3: Preservar hierarquia visual da referência**

Garantir:
- empresa e cargo visualmente separados
- metadata compacta
- densidade de card próxima ao screenshot

- [ ] **Step 4: Validar compilação e lint**

Run:
- `pnpm exec tsc --noEmit`
- `pnpm lint`

Expected: PASS

## Chunk 3: Grupo de Cargos e Timeline

### Task 4: Criar card grouped-role para progressão interna

**Files:**
- Create: `src/components/sections/experience-role-group.tsx`
- Reuse: `src/components/sections/experience-tech-list.tsx`

- [ ] **Step 1: Implementar header de empresa único com identidade e range derivado**

Header deve conter:
- logo
- nome da empresa
- localização
- range derivado da empresa

- [ ] **Step 2: Implementar stack interno de cargos com separação sutil**

Cada cargo deve conter:
- título do cargo
- período do cargo
- localização
- descrição (1 parágrafo)
- tecnologias

Regras visuais:
- separação por divisor leve ou espaçamento
- sem virar cards externos independentes

- [ ] **Step 3: Implementar sinalização de gap quando aplicável**

Quando houver gap detectado:
- mostrar label `Períodos distintos`
- label em estilo secundário (muted e menor que metadata)
- tornar o range derivado no header visualmente secundário (muted) para não sugerir continuidade ininterrupta
- manter os períodos por cargo como sinal cronológico primário
- evitar sugerir continuidade ininterrupta

- [ ] **Step 4: Verificar conformidade de casos CK Labs e Tron**

Conferir manualmente na implementação:
- `CK Labs Development` agrupada com 2 cargos e indicação de PJ no cargo correto
- `Tron Sistemas` agrupada com 2 cargos em sequência

- [ ] **Step 5: Validar compilação**

Run: `pnpm exec tsc --noEmit`

Expected: PASS

### Task 5: Implementar timeline principal

**Files:**
- Create: `src/components/sections/experience-timeline.tsx`
- Reuse: `src/components/sections/experience-item.tsx`
- Reuse: `src/components/sections/experience-role-group.tsx`
- Reuse: `src/data/experiences.ts`

- [ ] **Step 1: Implementar rail vertical e marcador externo por empresa**

Requisitos:
- um rail visível à esquerda
- exatamente um marcador externo por empresa/top-level group
- cards renderizados à direita do rail
- rail e marcadores externos, quando decorativos, devem ser ocultos de tecnologias assistivas (ex.: `aria-hidden`)

- [ ] **Step 2: Renderizar itens condicionando por `roles.length`**

Regras:
- `roles.length === 1` usa `ExperienceItem`
- `roles.length > 1` usa `ExperienceRoleGroup`

- [ ] **Step 3: Garantir responsividade sem overflow horizontal**

Mobile:
- compactar gutter da rail
- preservar legibilidade de hierarquia
- evitar overflow horizontal nos cards/chips

- [ ] **Step 4: Validar compilação e lint**

Run:
- `pnpm exec tsc --noEmit`
- `pnpm lint`

Expected: PASS

## Chunk 4: Seção e Composição na Página

### Task 6: Implementar seção `PortfolioExperience`

**Files:**
- Create: `src/components/sections/portfolio-experience.tsx`
- Reuse: `src/components/sections/experience-timeline.tsx`

- [ ] **Step 1: Criar wrapper semântico da seção**

Implementar:
- `<section id="experiencia">`
- heading `h2` no estilo aprovado
- descrição curta opcional apenas se ajudar a fidelidade do layout

- [ ] **Step 2: Compor timeline sem hardcode de conteúdo**

Regras:
- usar dados exportados de `src/data/experiences.ts`
- não duplicar strings de experiência no componente

- [ ] **Step 3: Validar compilação**

Run: `pnpm exec tsc --noEmit`

Expected: PASS

### Task 7: Integrar seção em `page.tsx` sem quebrar placeholders restantes

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Importar `PortfolioExperience` e substituir só o placeholder de experiência**

Regras:
- manter header, hero e footer existentes
- preservar placeholders de `projetos`, `habilidades` e `educacao`
- manter `page.tsx` como composição simples

- [ ] **Step 2: Garantir âncora de navegação consistente**

Confirmar que o `id` da seção permanece `experiencia` para casar com navegação atual.

- [ ] **Step 3: Validar tipagem e lint após composição**

Run:
- `pnpm exec tsc --noEmit`
- `pnpm lint`

Expected: PASS

## Chunk 5: Verificação Final e Fidelidade Visual

### Task 8: Rodar regressão de build e smoke checks

**Files:**
- No new files

- [ ] **Step 1: Rodar verificação completa de build**

Run:
- `pnpm exec tsc --noEmit`
- `pnpm lint`
- `pnpm build`

Expected:
- todos os comandos em PASS

- [ ] **Step 2: Smoke check visual desktop baseado nas referências**

Comparar resultado com:
- `images-inspirations/professional-experience.png` (fonte principal)
- `https://neres.vercel.app/` (somente para resolver ambiguidades)

Checklist objetivo:
- rail visível à esquerda
- 1 marcador externo por empresa
- cards à direita com logo/header/metadata/descrição/chips
- CK e Tron agrupadas com progressão interna
- AWT na mesma timeline

- [ ] **Step 3: Smoke check visual mobile**

Validar:
- sem overflow horizontal da seção
- hierarquia empresa/cargo legível
- metadata e chips com quebra adequada

- [ ] **Step 4: Revisão final de escopo**

Confirmar que não houve:
- alterações indevidas em hero/header/footer
- lógica de experiência jogada em `src/app/page.tsx`
- desvio para layout fora da inspiração aprovada
