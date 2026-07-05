# Arquitectura

## Prompt ↔ Skill

Dos artefactos acoplados:

| Artefacto | Rol | Ubicación |
|-----------|-----|-----------|
| **System Prompt v3.0** | La base de conocimiento (el "cerebro"). 2.022 líneas, dual-mode, algoritmo 2026. | `system-prompt/system_prompt_linkedin_specialist_zoopa.md` (fuente canónica; en el entorno Zoopa vive en el vault Obsidian con 4 copias sincronizadas por MD5). |
| **Skill** | La ejecución operativa (router + flujo + templates). | Este repo = `~/.claude/skills/linkedin-profile-optimizer/`. |

El prompt es la fuente; el skill se construyó **a partir de él**. Los `references/00-09` son **cortes temáticos del prompt v3.0**: si el prompt cambia, hay que regenerarlos.

## El "cerebro" es modular (carga bajo demanda)

`SKILL.md` no reproduce el conocimiento: en cada paso del flujo **carga el `reference/` que toca**. Así el contexto se mantiene ligero y la doctrina, en un único sitio.

| Reference | Contenido | Se carga en |
|-----------|-----------|-------------|
| `00-role-and-discovery.md` | Rol, modos, discovery | Paso 0-1 |
| `01-algorithm-2026.md` | 360Brew, señales, penalizaciones | Al explicar reach |
| `02-content-formats-calendar.md` | Formatos, ER, calendario | Paso 5 |
| `03-mode-a-personal-profile.md` | **MODO A**: perfil individual + checklist | MODO A |
| `04-mode-b-company-page.md` | **MODO B**: Page + checklist | MODO B |
| `05-ads-and-social-selling.md` | Ads (TLA), Sales Navigator, SSI | Ads / outreach |
| `06-advanced-formats-and-analytics.md` | Newsletter, vídeo, Live, KPIs | Paso 5 |
| `07-compliance-guidelines.md` | Guidelines, límites, anti-patrones | Paso 3, 5 y 7 (gate) |
| `08-tools-and-deliverables.md` | Herramientas, nomenclatura, entregables | Entregable |
| `09-trends-2026.md` | Timeline 2024-2026, features retiradas | "¿qué cambió?" |
| `knowledge-base-2026.json` | 12 packs de research (fuente de datos bruta) | Verificar cifras |

## Modos

- **MODO A (persona)** y **MODO B (empresa)** están separados end-to-end: router → reference del modo → template de auditoría del modo → template de About del modo → KPIs del modo.
- **Acoplamiento 2026**: el perfil personal es señal de credibilidad que condiciona el reach del contenido, y concentra ~65% del feed. Por eso el sesgo por defecto es **person-led**; la Page amplifica. El modo **DUAL** (founder-led / employee-advocacy) usa `templates/dual-coupling.md` para articular ambos planos.

## Cómo se construyó

1. **Investigación** — 12 agentes en paralelo, uno por dimensión (algoritmo, perfil, page, formatos, ads, social selling, employer brand, avanzados, analítica, compliance, tendencias), con verificación web 2025-2026 → `knowledge-base-2026.json`.
2. **Síntesis** — 9 redactores compusieron el system prompt v3.0 (672 → 2.022 líneas).
3. **Skill** — `references/` = cortes del prompt; `SKILL.md` = manual operativo; 16 `templates/`.
4. **Review adversarial** — 5 lentes (formato/trigger, flujo/UX, dual-mode, compliance, completitud). 0 P1; P2/P3 relevantes aplicados (ruta DUAL operativa, +9 templates, gate vinculante, etiquetado IA en el punto de acción, live-read sin scraping).

## Automatización

| Script | Rol |
|--------|-----|
| `scripts/kb-refresh.workflow.js` | Workflow de 12 agentes que re-investiga las 12 dimensiones (verificación web). Las dimensiones son las mismas del build original: se extrajeron programáticamente del workflow fundacional para evitar drift. |
| `scripts/kb_diff.py` | Diff KB vigente vs fresco. Matching por claves estables (dimension, field, area); los textos reescritos generan churn, por eso separa "valores cambiados" (alta señal) de "posibles guidelines nuevas" (revisar). Testeado: self-diff = 0. |
| `scripts/KB-REFRESH-RUNBOOK.md` | Procedimiento trimestral: workflow → diff → issue en GitHub → aplicar con revisión humana → resync 5 copias por MD5. |
| `scripts/fleet-audit.workflow.js` | Modo FLOTA: auditorías en paralelo (barrera antes de coordinar: el reparto de pilares necesita todos los scorecards) + coordinador. |

## Mantenimiento

Para cambios de fondo (algoritmo, guidelines): editar el **prompt canónico**, resincronizar las copias y **regenerar/actualizar los `references/`** de este repo. Prompt y skill comparten doctrina: no dejar que diverjan. El ciclo trimestral de `kb-refresh` es el mecanismo estándar para detectar cuándo toca.
