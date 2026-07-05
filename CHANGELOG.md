# Changelog

Todas las versiones notables de `linkedin-profile-optimizer`.

## [1.4.0] — 2026-07-05

### Añadido
- **Cerebro auto-actualizable (cron trimestral)**: `scripts/kb-refresh.workflow.js` (re-investiga las 12 dimensiones con verificación web; dimensiones extraídas programáticamente del workflow fundacional), `scripts/kb_diff.py` (diff KB vigente vs fresco → propuesta markdown con valores cambiados, áreas nuevas y fuentes; testeado con self-diff = 0) y `scripts/KB-REFRESH-RUNBOOK.md`. En el entorno Zoopa lo dispara el scheduled task `linkedin-kb-refresh` (1 ene/abr/jul/oct, 9:00). Nada entra al prompt canónico sin revisión humana.
- **Modo FLOTA** (programa de advocacy enterprise): `scripts/fleet-audit.workflow.js` audita hasta 12 portavoces + la Page en paralelo y coordina pilares sin solapes; `templates/fleet-plan.md`. Material siempre aportado por el cliente, cero scraping.
- **Humanize integrado**: todo copy final pasa por el skill `humanize-text` antes de entregarse (360Brew penaliza la IA de bajo esfuerzo); cuenta personal de Carlos Ortet → patrones `linkedin-voice-carlos-ortet.md`.
- **Informe productizado**: Paso 6 ofrece publicar el entregable mczoopa en entregas.zoopa.es vía skill `customer-docs` (con confirmación previa: público al instante). Campo de publicación en `deliverable-brief.md`.

## [1.3.0] — 2026-07-05

### Añadido
- **Router de relación en MODO C (pregunta obligatoria en C1)**: el skill pregunta qué relación tiene el sujeto con cada objetivo y enruta el sub-playbook. 5 tipos:
  1. Misma organización · jerárquica (CEO, jefe) → alineamiento interno
  2. Misma organización · colega/peer → alineamiento simétrico (advocacy cruzado, territorios repartidos)
  3. Colega externo con relación previa → reactivación warm (saltar touches iniciales, abrir con contexto real)
  4. Esperas trabajar juntos (cliente, partner, hiring manager) → acercamiento estándar con matiz comercial o de candidatura
  5. Referente sin relación previa → acercamiento en frío + atracción inversa
- Tabla de enrutado + diferencias jerárquico vs peer en `references/10-affinity-connection.md` §7.
- Campo de relación en `affinity-map.md`; notas de enrutado en `connection-plan.md` y `profile-alignment-plan.md`.

## [1.2.0] — 2026-07-05

### Añadido
- **MODO C · variante interna (alineamiento)**: cuando el objetivo es un stakeholder ya conectado (CEO, jefe, comité, peer interno), el análisis pasa a ser bidireccional (publicaciones de ambos: temas, tono, valores, formatos) y el plan sustituye la secuencia de touches por convergencia narrativa: engagement inteligente, convergencia de pilares sin clonar (regla de complementariedad), contenido coordinado y refuerzo mutuo.
  - Sección 7 en `references/10-affinity-connection.md`
  - `templates/profile-alignment-plan.md`
  - Detección de la variante en C1 y desvío en C4 (SKILL.md)
- Triggers: "alinear mi perfil con mi CEO/jefe", "afinidad con mi nuevo CEO".

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
