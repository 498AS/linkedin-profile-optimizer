---
title: "Skill linkedin-profile-optimizer + System Prompt v3.0"
aliases:
  - LinkedIn Profile Optimizer Skill
  - Guía linkedin-profile-optimizer
tipo: doc-skill
categoria: Social/LinkedIn
empresa: Zoopa
fecha_creacion: 2026-07-05
estado: activo
repo: https://github.com/498AS/linkedin-profile-optimizer
tags:
  - skill
  - linkedin
  - claude-code
  - Zoopa
  - 498AS
  - personal-branding
  - company-page
relacionado:
  - "[[system_prompt_linkedin_specialist_zoopa]]"
  - "[[MOC System Prompts]]"
---

# Skill `linkedin-profile-optimizer` + System Prompt v3.0

> [!info] Qué es
> Herramienta de Claude Code para **optimizar perfiles de LinkedIn** con el estándar 2026 (algoritmo 360Brew) y el cumplimiento íntegro de los guidelines de la plataforma. Trabaja en **dos modos** — Perfil Individual (persona) y Empresa/Marca (LinkedIn Page) — y al invocarse **pregunta el modo** y aplica el playbook adecuado. Repo público: [498AS/linkedin-profile-optimizer](https://github.com/498AS/linkedin-profile-optimizer).

## Los dos artefactos

| Artefacto | Qué es | Dónde vive |
|-----------|--------|-----------|
| **System Prompt v3.0** | La base de conocimiento (el "cerebro"): 2.022 líneas, dual-mode, algoritmo 2026 | [[system_prompt_linkedin_specialist_zoopa]] — canónico en `SYSTEM-PROMPTS/`, **4 copias sincronizadas por MD5** |
| **Skill** | La ejecución operativa: router persona/empresa, auditoría → reescritura → plan → entregable, compliance gate | `~/.claude/skills/linkedin-profile-optimizer/` + repo GitHub |

El prompt es la fuente; el skill se construyó **a partir de él**. Los `references/00-09` del skill son cortes del prompt v3.0 (mantener en sync si el prompt cambia).

## Cómo se usa

Dentro de Claude Code:
```
/linkedin-profile-optimizer
```
O en lenguaje natural: "optimiza mi perfil de LinkedIn", "auditar la company page de X".

Flujo: **pregunta el modo** (A persona / B empresa / **C afinidad-vínculo** / DUAL founder-led) → recoge material (pegar / leer en vivo con navegador / export) → auditoría con scorecard → reescritura con opciones (headline ×5, About, etc.) → plan de contenido 30d + KPIs → entregable branded opcional (`mczoopa`/`deck-zoopa`) → **compliance gate vinculante**.

### MODO C · Afinidad y vínculo (añadido v1.1, del caso David Urbano)

Del plan LinkedIn de David Urbano (ene 2026) se destiló la metodología de **estudio de afinidad/compatibilidad con perfiles objetivo**: parrilla de 7 dimensiones en 3 círculos (peers / grupo / empresa objetivo), matriz de solapamiento 0-3 × 5 ejes (priorizar ≥10/15), nicho narrativo vacío, plan de vínculo en 5 fases (nunca contactar sin perfil optimizado + prueba social) e informe de 9 secciones. Vive en `references/10-affinity-connection.md` + `templates/affinity-map.md` y `connection-plan.md`, y como sección **MODO C** en el prompt v3.0. Compliance propio: solo info pública, sin scraping, propósito legítimo.

**Variante interna (v1.2):** si el objetivo ya está conectado (CEO, jefe, comité), el plan no es de acercamiento sino de **alineamiento**: análisis bidireccional de publicaciones, territorio compartido vs complementario y convergencia de perfiles sin clonar (`templates/profile-alignment-plan.md`).

## Arquitectura

```
linkedin-profile-optimizer/
├── SKILL.md                 # router + flujo (Paso 0 + 7 pasos)
├── references/  (10 md + KB) # el cerebro, cortes del prompt v3.0
│   00-role-and-discovery … 09-trends-2026 · knowledge-base-2026.json
├── templates/   (16)        # worksheets rellenables (audit, headline, SSI,
│   experience, about A/B, social-selling, advocacy, ads, newsletter,
│   content-plan, monthly-report, dual-coupling, compliance-checklist, brief)
└── system-prompt/           # copia del prompt v3.0 (fuente canónica)
```

## Cómo se construyó (jul 2026)

1. **Investigación**: workflow de 12 agentes en paralelo (algoritmo, perfil, page, formatos, ads, social selling, employer brand, avanzados, analítica, compliance, tendencias) con verificación web 2025-2026. → `knowledge-base-2026.json` (12 packs).
2. **Síntesis**: 9 redactores compusieron el prompt v3.0 (672 → 2.022 líneas).
3. **Skill**: `references/` = cortes del prompt; `SKILL.md` = manual operativo; 16 templates.
4. **Review adversarial**: 5 lentes (formato, flujo, dual-mode, compliance, completitud). Resultado 0 P1; se aplicaron todos los P2 y P3 relevantes.

## Cambios de fondo 2026 que codifica

- Ranking IA unificado **360Brew** (grafo de interés): de alcance viral a **profundidad y autoridad**.
- Reset de reach (views −50%, engagement −25%, followers −59% YoY).
- **Perfil = señal de credibilidad** que condiciona el reach del contenido (expertise match).
- Dwell time > likes · comentarios ≈15× · golden hour · penalización de enlaces externos.
- Formatos por ER: documento > vídeo > imagen > texto.
- Thought Leader Ads · Creator Mode retirado · EU AI Act Art. 50 (etiquetado IA).

## Cumplimiento

El skill nunca recomienda automatización, scraping, engagement pods ni engagement bait. La lectura en vivo se limita a un único perfil/Page propio, solo lectura. Paso 7 = gate vinculante con `compliance-checklist.md`.

## Enlaces

- Repo: https://github.com/498AS/linkedin-profile-optimizer
- Prompt canónico: [[system_prompt_linkedin_specialist_zoopa]]
- Índice: [[MOC System Prompts]]
- Skill hermano: `content-factory` (498AS/content-factory)

> [!warning] Mantenimiento
> Si se actualiza el algoritmo o los guidelines: editar el **prompt canónico**, resincronizar las **4 copias** y regenerar/actualizar los `references/` del skill + el repo. Prompt y skill comparten doctrina; no dejar que diverjan.
