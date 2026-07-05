# LinkedIn Ads Plan Worksheet

> Deriva del checklist de lanzamiento en `references/05-ads-and-social-selling.md`. Cargar esa referencia antes de rellenar. Regla de oro: elegir el objetivo (KPI de negocio real) antes que el formato.

## 1. Objetivo (KPI real primero)

| Campo | Valor |
|---|---|
| KPI de negocio real | `<<leads / MQLs / registros / awareness>>` |
| Objetivo de campana que lo iguala | `<<Lead Gen / Brand Awareness / Engagement / Website Visits / Video Views>>` |
| Meta cuantificada + ventana | `<<ej. 120 leads a <=90$ CPL en 30 dias>>` |

## 2. Formato (despues del objetivo)

Ponderar presupuesto hacia formatos de alto engagement (TLA, Document, Carousel, Video).

| Formato elegido | Motivo | Specs a verificar |
|---|---|---|
| `<<TLA / Single Image / Document / Carousel / Video / Conversation>>` | `<<>>` | `<<dimensiones + limites de caracteres + peso>>` |

Si usas TLA, completar el flujo de aprobacion del autor (seccion 9).

## 3. Audiencia (Function + Seniority base)

Sweet spot 50.000-200.000. Maximo 2-3 atributos (no sobre-apilar). Base = Job Function + Job Seniority.

| Atributo | Valor |
|---|---|
| Job Function | `<<>>` |
| Job Seniority | `<<>>` |
| Company Size / Industry (1 mas, opcional) | `<<>>` |
| Tamano estimado | `<<____>>` (si <50k quitar dimension; si >200-300k anadir una) |

## 4. Exclusiones (palanca de mayor ROI infrautilizada)

Configurar SIEMPRE. Marcar las aplicadas:

- [ ] Empleados propios (nombre de empresa)
- [ ] Competidores: `<<>>`
- [ ] Seniorities junior / no compradoras
- [ ] Industrias / tamanos irrelevantes: `<<>>`
- [ ] Lista CRM de cuentas/contactos ya convertidos (closed-won)

## 5. Matched / Predictive Audiences

| Tactica | Detalle | Match rate |
|---|---|---|
| ABM Company List | `<<50-500 cuentas, nombre + dominio>>` | 90-98% |
| Contact List | `<<emails de trabajo>>` | 70-85% |
| Predictive Audience | Semilla = lista CRM limpia de convertidores; ~14-21% menor CPL, ~19% mas CTR | n/a |

> No usar Lookalikes legacy (deprecadas 2024-2025). Usar Predictive.

| Ajuste | Recomendacion | Tu valor |
|---|---|---|
| Audience Expansion | OFF en precision/ABM | `<<ON/OFF>>` |
| LinkedIn Audience Network (LAN) | OFF en precision | `<<ON/OFF>>` |

## 6. Lead Gen Form (solo objetivo Lead Gen)

Optimo 3-4 campos (cada campo eliminado +10-20% CVR). LGF convierte ~8-13% vs landing ~1,6-2,35%.

| Campo | Incluir |
|---|---|
| Nombre (pre-fill) | `<<si/no>>` |
| Email de trabajo (pre-fill) | `<<si/no>>` |
| Empresa / Job title (pre-fill) | `<<si/no>>` |
| 1 pregunta de cualificacion (budget/timeline/authority) | `<<>>` |

- Total campos: `<<__/4>>` · preguntas custom: max 1-2 (cada texto libre cuesta ~3-4% de envio)
- SLA de seguimiento del lead: `<<<24h>>` · destino CRM: `<<>>`

## 7. Tracking (Insight Tag + CAPI)

El Insight Tag solo no basta en 2026. Emparejar con CAPI server-side y dedup.

- [ ] Insight Tag instalado site-wide (Campaign Manager > Measurement)
- [ ] Enhanced Conversions activadas
- [ ] CAPI implementada (directa / Marketing Partner / GTM)
- [ ] `event_id` compartido en eventos de navegador y servidor (dedup)
- [ ] `li_fat_id` capturado -> `LINKEDIN_FIRST_PARTY_ADS_TRACKING_UUID`
- [ ] Validacion: respuesta HTTP 201 confirma aceptacion del evento

## 8. Pujas y presupuesto

| Campo | Valor |
|---|---|
| Estrategia de inicio | Maximum Delivery (recopilar datos) |
| Migracion posterior | Manual al conocer coste/resultado |
| Presupuesto diario | `<<50-100$/dia>>` (minimo plataforma 10$/dia) |
| Presupuesto mensual test | `<<5.000-10.000$/mes>>` (infrafinanciar <5k = poca senal) |

## 9. Flujo de aprobacion de autor (TLA)

Requiere consentimiento explicito del autor. NO necesitas acceso a su cuenta publicitaria.

1. [ ] Co-crear / ghost-write; el autor revisa y publica organicamente primero
2. [ ] Dejar acumular senal organica; patrocinar solo los mejores performers
3. [ ] Autor aprueba la solicitud desde Campaign Manager (o auto-aprobacion always-on)
4. [ ] Roles: Pagina = Sponsored Content Poster · cuenta = Creative Manager+
5. [ ] Si es no-empleado (cliente/partner/advocate): confirmar consentimiento de uso comercial
6. [ ] Rotar creadores / refrescar creatividad antes del decay (~semana 19)

## 10. Plan de test A/B

Una sola variable a la vez. Gasto y duracion constantes. Comparar por el KPI del objetivo, no vanidad.

| Variable en test | Variante A | Variante B | Metrica de decision |
|---|---|---|---|
| `<<creatividad / titular / audiencia / formato>>` | `<<>>` | `<<>>` | `<<CTR / CVR / CPL>>` |

## 11. Benchmarks 2026 (comparar contra tus resultados)

| Metrica | Benchmark | Tu resultado |
|---|---|---|
| CTR (formato elegido) | TLA ~2,68% · Document 1,10% · Carousel 0,78% · Video 0,71% · Single Image ~0,42-0,54% | `<<>>` |
| CPL (formato elegido) | TLA ~71$ · Document ~78$ · Carousel ~89$ · Video ~96$ · Single Image ~104$ | `<<>>` |
| CPC cross-industry | ~5,74$ (rango 5-12$; C-Suite ~14,85$, IC ~3,18$) | `<<>>` |
| CPM cross-industry | ~33,80$ (rango 30-50$) | `<<>>` |
| CPL cross-industry | ~94$ via LGF | `<<>>` |
| LGF CVR | ~8-13% | `<<>>` |

## Checklist de lanzamiento

- [ ] KPI real definido y objetivo que lo iguala elegido
- [ ] Formato elegido despues del objetivo
- [ ] Audiencia 50k-200k con Function + Seniority, max 2-3 atributos
- [ ] Exclusiones aplicadas (empleados, competidores, junior, irrelevantes, CRM convertidos)
- [ ] Matched decidido: ABM company list y/o Predictive Audience
- [ ] Audience Expansion y LAN apagados en precision/ABM
- [ ] Specs de creatividad verificadas + captions en video
- [ ] LGF de 3-4 campos con como mucho una pregunta de cualificacion
- [ ] Pujas: Maximum Delivery al inicio + plan de migracion a Manual
- [ ] Presupuesto 50-100$/dia, 5k-10k$/mes de test
- [ ] Insight Tag + CAPI con `event_id` compartido y `li_fat_id` capturado (HTTP 201)
- [ ] Plan A/B: una variable, gasto/duracion iguales, KPI alineado
- [ ] Si TLA: aprobacion del autor confirmada
