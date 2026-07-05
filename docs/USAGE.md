# Uso

## Invocación

```
/linkedin-profile-optimizer
```

O en lenguaje natural: `"optimiza mi perfil de LinkedIn"`, `"auditar la company page de X"`, `"mejora mi headline"`, `"personal branding para nuestro CEO"`.

## El flujo, paso a paso

### Paso 0 · Adoptar el rol
Carga `references/00-role-and-discovery.md`. Sesgo por defecto: **person-led / employee-advocacy**.

### Paso 1 · Modo (router obligatorio)
Pregunta: **A) Persona · B) Empresa/Marca · C) Afinidad/vínculo con perfiles objetivo · DUAL**. No avanza sin esto: algoritmo, activos, límites y KPIs difieren por modo.

> **MODO C** tiene mini-flujo propio (C1-C5): discovery + gate de compliance → baseline del sujeto (MODO A exprés si el perfil es débil) → mapa de afinidad (`affinity-map.md`) → plan de vínculo por fases (`connection-plan.md`) → informe de 9 secciones. Reference: `10-affinity-connection.md`.

### Paso 2 · Recoger material
Tres vías: **pegar** el contenido actual · **leer en vivo** con `claude-in-chrome` (requiere consentimiento + estar logueado; solo el perfil/Page propio; solo lectura) · **export**. Discovery (objetivo, audiencia, pilares, proof-points) es **prerrequisito del Paso 4**; sin datos no se inventa nada.

### Paso 3 · Auditoría
Carga el reference del modo + `07-compliance-guidelines.md`. Scorecard campo por campo contra el checklist 100%.
- MODO A → `templates/audit-personal-profile.md`
- MODO B → `templates/audit-company-page.md`
- DUAL → ambos + `templates/dual-coupling.md` (persona primero)

### Paso 4 · Reescritura (opciones)
- **MODO A**: headline (`headline-worksheet.md`), About (`about-personal.md`), experiencia (`experience-bullets.md`), SSI (`ssi-action-plan.md`).
- **MODO B**: tagline + About SEO (`about-company.md`), advocacy (`advocacy-kit.md`).

### Paso 5 · Plan de contenido + KPIs
Carga `02`, `06` y `07`. Pilares ≥90 días + plan 30d (`content-plan-30d.md`). Outreach → `social-selling-plan.md`; Ads → `ads-plan.md`; Newsletter → `newsletter-plan.md`; Reporting → `monthly-report.md`.

### Paso 6 · Entregable branded (opcional)
One-pager/informe → skill `mczoopa`. Deck → `deck-zoopa` / `deck-498a-editorial`. Brief con `deliverable-brief.md`.

### Paso 7 · Compliance gate (vinculante)
Emite `compliance-checklist.md`: 4 líneas rojas + límites + etiquetado IA (Art. 50) + GDPR + accesibilidad. Si algo falla, se reescribe antes de cerrar.

## Catálogo de templates

| Template | Uso |
|----------|-----|
| `audit-personal-profile.md` / `audit-company-page.md` | Scorecards de auditoría (A / B) |
| `headline-worksheet.md` | Fórmula + slots + ejemplos de headline |
| `experience-bullets.md` | Bullets de experiencia cuantificados |
| `about-personal.md` / `about-company.md` | About de persona / tagline+About de Page |
| `ssi-action-plan.md` | Plan de mejora del SSI (4 pilares) |
| `social-selling-plan.md` | Rutina + secuencia de outreach compliance-safe |
| `advocacy-kit.md` | Kit de employee advocacy |
| `ads-plan.md` | Plan de campaña LinkedIn Ads (incl. TLA) |
| `newsletter-plan.md` | Plan de lanzamiento de newsletter |
| `content-plan-30d.md` | Plan de contenido 30 días + KPIs |
| `monthly-report.md` | Informe mensual de performance |
| `dual-coupling.md` | Acoplamiento persona ↔ Page (modo DUAL) |
| `affinity-map.md` | Mapa de afinidad con perfiles objetivo (MODO C) |
| `connection-plan.md` | Plan de vínculo por fases + secuencia 1:1 (MODO C) |
| `compliance-checklist.md` | Checklist vinculante del Paso 7 |
| `deliverable-brief.md` | Brief para `mczoopa` / `deck-zoopa` |

## Ejemplos

- `"optimiza el perfil de LinkedIn de nuestro fundador para captar leads B2B"` → MODO A, objetivo leads.
- `"auditar y mejorar la company page de la marca X para employer branding"` → MODO B.
- `"queremos estrategia founder-led: el CEO y la página juntos"` → DUAL.
- `"estudia la afinidad de nuestro director con estos 5 inversores y prepara un plan para conectar"` → MODO C.
