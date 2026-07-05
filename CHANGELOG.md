# Changelog

Todas las versiones notables de `linkedin-profile-optimizer`.

## [1.1.0] — 2026-07-05

### Añadido
- **MODO C — Afinidad y vínculo con perfiles objetivo**: tercer modo del router. Estudio de compatibilidad (parrilla de 7 dimensiones en 3 círculos, matriz de solapamiento 0-3 × 5 ejes, nicho narrativo vacío), plan de acercamiento en 5 fases (fundamentos → prueba social → warm-up → contenido imán → relación 1:1) e informe de 9 secciones. Metodología destilada de un caso real de Zoopa (ene 2026, anonimizado).
  - `references/10-affinity-connection.md`
  - `templates/affinity-map.md` · `templates/connection-plan.md`
  - Gate de compliance específico: solo información pública profesional, sin scraping, propósito legítimo, personalización genuina.
- Sección MODO C sincronizada también en el system prompt v3.0 (`system-prompt/`).

### Cambiado
- **Desambiguación con `content-factory`**: cláusulas "NO usar para…" cruzadas en ambos SKILL.md y secciones de comparación en ambos README (este skill trabaja sobre el activo perfil/Page y la relación; `content-factory` produce contenido editorial).
- Triggers ampliados (afinidad, compatibilidad, crear vínculo, plan de acercamiento).

## [1.0.0] — 2026-07-05

Primera versión pública.

### Añadido
- **Skill dual-mode** con router persona / empresa / DUAL y flujo de 7 pasos (auditoría → reescritura → plan → entregable → compliance gate).
- **10 `references/`** (base de conocimiento, cortes del system prompt v3.0) + `knowledge-base-2026.json` (12 packs de research verificado 2025-2026).
- **16 `templates/`** rellenables: auditoría A/B, headline, experience-bullets, About A/B, SSI, social-selling, advocacy-kit, ads-plan, newsletter, content-plan-30d, monthly-report, dual-coupling, compliance-checklist, deliverable-brief.
- **Lectura de perfil en vivo** vía `claude-in-chrome` (solo lectura, con consentimiento, campos propios).
- **Entregable branded** vía `mczoopa` / `deck-zoopa`.
- **Compliance gate vinculante** (Paso 7) con checklist emitida en cada entregable.
- `system-prompt/` con el system prompt v3.0 (fuente canónica).

### Base algorítmica
- Modelo de ranking **360Brew** (grafo de interés), profundidad y autoridad, expertise match perfil↔contenido.
- Dwell time, comentarios ≈15×, golden hour, penalización de enlaces externos, reset de reach 2026.
- Formatos por engagement (documento > vídeo > imagen > texto), Thought Leader Ads, EU AI Act Art. 50.

### Calidad
- Construido con workflows de investigación (12 agentes) + síntesis (9 redactores) + review adversarial (5 lentes). Review: 0 P1; P2/P3 relevantes aplicados.

### Notas
- Los `references/` son cortes del system prompt canónico `system_prompt_linkedin_specialist_zoopa.md` v3.0. Mantener en sync si el prompt cambia.
