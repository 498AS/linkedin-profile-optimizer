# linkedin-profile-optimizer

> Skill de Claude Code para **optimizar perfiles de LinkedIn** con el estándar 2026 (algoritmo **360Brew**) y el cumplimiento íntegro de los guidelines de la plataforma. Trabaja en **dos modos** — Perfil Individual (persona) y Empresa/Marca (LinkedIn Page) — y al invocarse **pregunta el modo** y aplica el playbook adecuado: auditoría, reescritura (headline, About, experiencia, skills / tagline y About de Page), plan de contenido, social selling y ads, compliance y KPIs.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![498AS](https://img.shields.io/badge/by-498AS-blue.svg)](https://498as.com)
[![Zoopa](https://img.shields.io/badge/with-Zoopa-orange.svg)](https://zoopa.es)

## Qué es

`linkedin-profile-optimizer` es el skill de Claude Code que usamos en Zoopa / 498A para auditar y optimizar la presencia en LinkedIn, tanto de **personas** (fundadores, C-level, especialistas, comerciales) como de **empresas/marcas** (LinkedIn Pages). Incluye además un módulo de **afinidad y vínculo**: estudiar la compatibilidad con perfiles objetivo y diseñar un plan de acercamiento por fases.

### Qué NO es

No genera posts, artículos ni hilos (para eso está el skill hermano [`content-factory`](https://github.com/498AS/content-factory)): aquí el foco es **el activo** —el perfil o la Page— y la **estrategia de relación**.

| Necesitas… | Usa |
|------------|-----|
| Optimizar/auditar un perfil o Company Page · afinidad con perfiles objetivo | **`linkedin-profile-optimizer`** (este repo) |
| Redactar un post/artículo/hilo para LinkedIn u otros 35+ canales | [`content-factory`](https://github.com/498AS/content-factory) |

Se apoya en un **system prompt v3.0** de 2.000+ líneas (`system-prompt/`) destilado en `references/` operativas, más 16 `templates/` rellenables. Codifica el algoritmo de LinkedIn de 2026 (modelo fundacional **360Brew**, grafo de interés, dwell time, expertise match) y todos los límites, specs y guidelines de la plataforma.

## Cómo se usa

### Instalación

Clonar el skill en `~/.claude/skills/`:

```bash
git clone https://github.com/498AS/linkedin-profile-optimizer.git ~/.claude/skills/linkedin-profile-optimizer
```

### Invocar en Claude Code

```
/linkedin-profile-optimizer
```

O en lenguaje natural: `"optimiza mi perfil de LinkedIn"`, `"auditar la company page de X"`, `"mejora mi headline"`.

El skill **pregunta primero el modo** y enruta:

- **A) Persona** — perfil individual (fundador, ejecutivo, experto, comercial).
- **B) Empresa / Marca** — LinkedIn Page.
- **C) Afinidad / vínculo** — estudiar la compatibilidad con perfiles objetivo (mapa de afinidad, matriz de solapamiento, nicho narrativo) y diseñar el plan de acercamiento por fases, con informe final. Basado en un caso real de Zoopa (2026, anonimizado).
- **DUAL** — founder-led / employee-advocacy (persona + Page acopladas; el escenario recomendado en 2026).

### Flujo (Paso 0 de setup + 7 pasos)

1. **Modo** (router obligatorio).
2. **Recoger material** — pegar / leer en vivo con navegador (`claude-in-chrome`, solo lectura, con consentimiento) / export.
3. **Auditoría** — scorecard contra el checklist 100% del modo.
4. **Reescritura** — opciones, no una sola versión (headline ×5, About, experiencia, tagline…).
5. **Plan de contenido 30d + KPIs**.
6. **Entregable branded** (opcional) — one-pager `mczoopa` o deck `deck-zoopa`.
7. **Compliance gate vinculante** — emite `compliance-checklist.md`.

## Estructura del repo

```
linkedin-profile-optimizer/
├── SKILL.md                  # router + flujo operativo
├── references/               # base de conocimiento (cortes del prompt v3.0)
│   ├── 00-role-and-discovery.md
│   ├── 01-algorithm-2026.md
│   ├── 02-content-formats-calendar.md
│   ├── 03-mode-a-personal-profile.md      # MODO A (persona)
│   ├── 04-mode-b-company-page.md          # MODO B (empresa)
│   ├── 05-ads-and-social-selling.md
│   ├── 06-advanced-formats-and-analytics.md
│   ├── 07-compliance-guidelines.md         # gate vinculante
│   ├── 08-tools-and-deliverables.md
│   ├── 09-trends-2026.md
│   └── knowledge-base-2026.json            # 12 packs de research (286 KB)
├── templates/                # 16 worksheets rellenables
├── system-prompt/            # system prompt v3.0 (fuente canónica)
├── scripts/                  # kb-refresh.workflow.js · kb_diff.py · fleet-audit.workflow.js · runbook
├── docs/                     # ARCHITECTURE.md · USAGE.md
└── vault-notes/              # nota espejo del vault Obsidian
```

## El algoritmo de 2026 (resumen)

- **360Brew**: ranking IA unificado. De alcance viral a **profundidad y autoridad**.
- **Perfil = señal de credibilidad**: 360Brew cruza cada post contra tu Headline/About/Experience antes de distribuirlo (expertise match). Optimizar el perfil condiciona el reach del contenido.
- **Dwell time > likes** · comentarios ≈15× un like · golden hour 60-90 min · enlaces externos −50/60% reach.
- **Formatos por engagement**: documento > vídeo > imagen > texto.
- **Reset de reach** (views −50%, engagement −25%, followers −59% YoY): el éxito se mide en profundidad y pipeline, no en impresiones.

Detalle completo en [`references/01-algorithm-2026.md`](references/01-algorithm-2026.md) y [`docs/`](docs/).

## Modo FLOTA (programas enterprise)

Para **CEO + portavoces + Page** (programa de advocacy): `scripts/fleet-audit.workflow.js` audita hasta 12 perfiles **en paralelo** (un agente por perfil, material aportado por el cliente, cero scraping) y un coordinador propone el reparto de pilares sin solapes con `templates/fleet-plan.md`. La Page amplifica, no lidera.

## Cerebro auto-actualizable

El KB se re-verifica **cada trimestre** (LinkedIn cambia el algoritmo cada pocos meses):

1. `scripts/kb-refresh.workflow.js` re-investiga las 12 dimensiones con verificación web.
2. `scripts/kb_diff.py` compara contra el KB vigente → propuesta markdown (valores cambiados, áreas nuevas, fuentes).
3. La propuesta se archiva como issue en este repo; **nada entra al prompt canónico sin revisión humana**.

Runbook completo: [`scripts/KB-REFRESH-RUNBOOK.md`](scripts/KB-REFRESH-RUNBOOK.md). En el entorno Zoopa lo dispara un scheduled task trimestral (1 ene/abr/jul/oct).

## Voz humana por defecto

Todo copy final (headlines, About, mensajes) pasa por el skill `humanize-text` antes de entregarse: 360Brew penaliza la IA de bajo esfuerzo, así que la naturalidad es una decisión de alcance, no de estilo. Los entregables de cliente pueden publicarse en un paso vía el skill `customer-docs` (entregas.zoopa.es).

## Cumplimiento

El skill **nunca** recomienda automatización con bots/extensiones, scraping, engagement pods ni engagement bait. Respeta los límites de la plataforma ("ritmo humano"), el etiquetado de contenido IA (EU AI Act Art. 50) y GDPR en outreach. La lectura en vivo se limita a **un único perfil/Page propio**, solo lectura, sin rastrear feeds/conexiones. Ver [`references/07-compliance-guidelines.md`](references/07-compliance-guidelines.md).

## Documentación

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — relación prompt ↔ skill, mapa de referencias, cómo se construyó.
- [`docs/USAGE.md`](docs/USAGE.md) — el flujo paso a paso, catálogo de templates, ejemplos.
- [`CHANGELOG.md`](CHANGELOG.md) — versiones.

## Créditos

Parte del stack de skills de Zoopa / 498 Advance. Hermano de [`content-factory`](https://github.com/498AS/content-factory) (LEO). Construido con Claude Code.

© 2026 498 Advance / Zoopa. Licencia MIT (ver [LICENSE](LICENSE)).
