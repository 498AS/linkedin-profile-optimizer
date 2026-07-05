# LinkedIn Ads (TLA) y Social Selling / Sales Navigator

> Parte del skill **linkedin-profile-optimizer**. Contenido sincronizado con el system prompt canonico `system_prompt_linkedin_specialist_zoopa.md` (v3.0). Cargar bajo demanda segun el paso del flujo.

---

## LinkedIn Ads

> [!info] Posicionamiento del canal
> LinkedIn Ads es el canal de pago B2B premium en 2026. Costes altos (CPC cross-industry ~5,74 $, CPM ~33,80 $, CPL ~94 $, todos +8-9% YoY) que se justifican por la precision del targeting profesional y la alta intencion de lead. La palanca diferencial del ano son las **Thought Leader Ads (TLA)**: posts organicos de personas (empleados/directivos o terceros) amplificados por la marca.

### Formatos y objetivos

| Formato | Uso ideal | CTR medio | CPL medio | Objetivos compatibles | Specs clave |
|---|---|---|---|---|---|
| **Thought Leader Ad (TLA)** | Top-of-funnel + engagement; voz humana de empleado/directivo o tercero | **~2,68%** (algunos estudios 4,65%) | ~71 $ | Brand Awareness, Engagement | Se promociona un post organico existente; requiere aprobacion del autor |
| **Single Image** | Workhorse de volumen y alcance en feed | ~0,42-0,54% | ~104 $ | Todos | 1200x627 (1.91:1) o 1200x1200 (1:1); vertical 4:5 solo movil; JPG/PNG/GIF, max 5MB |
| **Document Ad** | Gating/preview de eBooks, whitepapers, guias in-feed | **1,10%** (mejor CTR estandar) | ~78 $ | Lead Gen, Engagement, Awareness | PDF/DOC/PPT; vista previa renderizada; emparejar con Lead Gen Form |
| **Carousel** | Storytelling, multi-feature, secuencias paso a paso | 0,78% | ~89 $ | Awareness, Engagement, Website Visits, Lead Gen | 2-10 tarjetas, cada una 1080x1080 (1:1), max 10MB/tarjeta; titular/tarjeta <=45 car |
| **Video** | Awareness + construir audiencias retargetables | 0,71% | ~96 $ | Awareness, Video Views, Engagement | 16:9 / 1:1 / 4:5 (1080x1350 mejor movil); MP4, max 200MB, 3s-30min; 15-30s para awareness |
| **Conversation / Message Ad** | Ofertas late-funnel de alto valor (demos, eventos) en listas ABM ajustadas | n/a (open/response) | Variable | Lead Gen, Website Visits, Engagement | Solo desktop; mensaje <=8.000 car; hasta 5 CTAs/mensaje (<=25 car c/u); banner opcional 300x250 |
| **Spotlight / Follower (Dynamic)** | Branding personalizado y crecimiento de seguidores de Pagina | n/a | n/a | Awareness, seguidores | Right-rail solo desktop; titular <=50, descripcion <=70, CTA <=18; logo 100x100 |
| **Event Ad** | Promocion de eventos con registro nativo | n/a | n/a | Awareness, Engagement | URL debe ser pagina de Evento LinkedIn, http(s)://, max 2000 car |

> [!important] Regla de oro: objetivo antes que formato
> LinkedIn optimiza literalmente para el objetivo seleccionado. Si eliges Lead Gen pero mides alcance (o al reves), el algoritmo de subasta dirige mal el presupuesto. Elige primero el KPI de negocio real, luego el formato.

### Thought Leader Ads (TLA)

> [!tip] Las TLA son la piedra angular de engagement y top-of-funnel del plan 2026
> Las TLA entregan aproximadamente **2,5-7x el CTR** de los anuncios de marca: **CTR ~2,68% vs ~0,42%** del single image (algunos estudios citan 4,65% vs 0,68%), un **3x de CTR** consistente, **CPC ~2,29 $ vs ~13,23 $**, **CPL 40-50%+ mas bajo**, y multiples veces mas comentarios. Las personas confian y se enganchan con voces individuales mucho mas que con logos; el mayor relevance score baja los costes de subasta mientras el formato humano gana comentarios y shares que alimentan los pools de retargeting.

**Por que funcionan**
- Los miembros confian en voces individuales sobre handles de marca (efecto Interest Graph + sesgo anti-corporativo del feed).
- El relevance score mas alto reduce el coste por subasta -> menor CPC y CPL.
- Los comentarios y shares generados crean audiencias de engagement retargetables gratis.

**Permisos y aprobacion del autor**

> [!warning] Consentimiento obligatorio del autor
> Necesitas la **aprobacion explicita del autor** antes de patrocinar cualquier post individual. NO necesitas acceso a la cuenta publicitaria personal del autor.

| Requisito | Detalle |
|---|---|
| Permiso de contenido | El autor recibe notificacion y aprueba/deniega desde Campaign Manager |
| Auto-aprobacion | El autor puede activar aprobacion automatica para futuras solicitudes de un anunciante concreto (programas always-on sin friccion) |
| Rol de Pagina | Super Admin / Content Admin **o** Sponsored Content Poster |
| Rol de cuenta publicitaria | Creative Manager o superior |
| No empleados | Se pueden patrocinar posts de clientes, partners o advocates (testimonios); mismo flujo de aprobacion + confirmar consentimiento de uso comercial |

**Cadencia y ciclo de vida**
1. Ghost-write / co-crear con el lider; el lider revisa, aprueba y publica organicamente primero.
2. Dejar que el post acumule senal organica.
3. Patrocinar solo los mejores performers (objetivo Brand Awareness o Engagement).
4. Favorecer video de movil crudo <90s, hook bajo ~150 palabras antes del "ver mas".
5. Pico de rendimiento pagado ~semanas 8-12; decay hacia ~semana 19 -> rotar creadores/refrescar creatividad antes.
6. Rutear engagers a una Engagement Matched Audience para retargeting downstream.

### Targeting

> [!info] Filosofia 2026: Function + Seniority > Job Title
> Los titulos son inconsistentes y autoreportados. Combinar **Job Function + Job Seniority** consolida variantes de titulo y alcanza de forma fiable al comite de compra.

**Atributos principales**

| Tipo | Filtros recomendados |
|---|---|
| Profesionales | Job Function + Job Seniority (base), Company Size, Industry, Skills, Group membership, Company Growth Rate |
| Empresa | Company Size, headcount growth, annual revenue, buyer intent, department headcount growth, technologies used |

**Matched Audiences y ABM**

| Tactica | Detalle | Match rate |
|---|---|---|
| Company List (ABM) | Lista de 50-500 cuentas; nombre + dominio; convierte ~2,7x mejor que targeting amplio | 90-98% |
| Contact List | Emails de trabajo | 70-85% (emails personales solo 40-60%) |
| Engagement Audience | Retargetear quien interactuo con anuncios/Pagina | n/a |

**Lookalike / Predictive**

> [!warning] Lookalikes legacy deprecadas
> La creacion tradicional de Lookalike Audiences fue deprecada en la transicion 2024-2025. Usa **Predictive Audiences**.

- **Predictive Audiences**: sembradas desde una lista CRM limpia de convertidores (closed-won). El ML de LinkedIn expande usando senales de grafo + engagement. Benchmark: **~14-21% menor CPL** y **~19% mas CTR** vs targeting amplio.

**Audience expansion y exclusiones**

> [!important] Las exclusiones son la palanca de mayor ROI mas infrautilizada
> Configura SIEMPRE exclusiones: empleados propios (nombre de empresa), competidores, seniorities junior/no compradoras, industrias/tamanos irrelevantes, y cuentas/contactos ya convertidos (lista CRM de exclusion).

| Ajuste | Recomendacion |
|---|---|
| Audience Expansion | **OFF** en campanas de precision/ABM |
| LinkedIn Audience Network (LAN) | OFF para precision; si ON, aplicar block lists y exclusiones de categoria |
| Tamano de audiencia | Sweet spot 50.000-200.000; minimo de servicio 300 miembros; si <50k quitar una dimension, si >300k anadir una; no sobre-apilar (>2-3 atributos) |

### Lead Gen Forms y tracking (Insight Tag / CAPI)

**Lead Gen Forms (LGF)**

> [!check] Los LGF nativos convierten ~5x mejor que las landing pages
> LGF **~8-13%** vs landing page **~1,6-2,35%**. La pre-cumplimentacion desde el perfil del miembro elimina casi toda la friccion.

| Regla | Detalle |
|---|---|
| Campos | Hasta 12 campos/preguntas; **3-4 campos optimo** (cada campo eliminado +10-20% CVR) |
| Preguntas custom | Hasta 3; cada pregunta de texto libre cuesta ~3-4% de tasa de envio -> usar 1-2 de cualificacion (budget/timeline/authority) max |
| Pre-fill | Nombre, email, job title, empresa, etc. desde el perfil |
| CRM + follow-up | Sincronizar a CRM/marketing automation; SLA de seguimiento <24h (lead de alta intencion) |
| Thank-you | Mensaje de agradecimiento + enlace a oferta |

**Conversion tracking: Insight Tag + CAPI**

> [!important] En 2026 el Insight Tag solo no basta
> Los ad blockers y restricciones de privacidad pierden conversiones. Empareja el Insight Tag con la **Conversions API (CAPI) server-side** con deduplicacion por `event_id` compartido.

| Paso | Como |
|---|---|
| Insight Tag | Instalar site-wide (Campaign Manager > Measurement > Insights/Manage Sources) |
| Enhanced Conversions | Activar en el Insight Tag |
| CAPI | Implementar directo o via Marketing Partner/GTM; generar access token en Campaign Manager > Measurement |
| Deduplicacion | Enviar un `event_id` compartido en eventos de navegador y servidor (LinkedIn conserva el de navegador, descarta el duplicado de servidor) |
| Atribucion first-party | Capturar `li_fat_id` de las URLs/cookies de landing y pasarlo como `LINKEDIN_FIRST_PARTY_ADS_TRACKING_UUID` |
| Validacion | Respuesta **HTTP 201** confirma aceptacion del evento |

### Especificaciones y benchmarks 2026

**Specs de anuncios**

| Formato | Dimensiones / formato | Limites de caracteres | Archivo |
|---|---|---|---|
| Single Image | 1200x627 (1.91:1) o 1200x1200 (1:1); vertical 4:5 y 1:1.91 solo movil | Intro <=150, titular <=70, descripcion <=100 | JPG/PNG/GIF no animado, max 5MB |
| Carousel | 2-10 tarjetas, cada una 1080x1080 (1:1) | Titular/tarjeta <=45; intro <=150 (max 255) | Max 10MB/tarjeta |
| Video | 16:9 (1920x1080), 1:1 (1080x1080), 4:5 (1080x1350) | n/a | MP4 preferido (MOV/ASF), max 200MB, 3s-30min |
| Conversation/Message | Solo desktop | Mensaje <=8.000, footer <=20.000, CTA <=25; hasta 5 CTAs/mensaje, 50/flow | Banner opcional JPG/PNG 300x250 max 2MB |
| Spotlight | Right-rail solo desktop; logo 100x100, fondo 300x250 | Titular <=50, descripcion <=70, CTA <=18 | Dynamic Ad |
| Event Ad | URL de pagina de Evento LinkedIn, http(s)://, max 2000 car | n/a | Auto-muestra fecha/hora/lugar + boton de registro |

**Benchmarks CTR / CPL / CPC / CPM 2026**

| Metrica | Valor | Nota |
|---|---|---|
| CPC cross-industry | 5,74 $ (+~9% YoY) | Rango habitual 5-12 $ |
| CPM cross-industry | 33,80 $ | Rango habitual 30-50 $ |
| CPL cross-industry | 94 $ (+~8% desde 87 $ en 2025) | Via LGF; landing page mas caro |
| Sponsored Content CTR medio | ~0,61% | Mezcla de formatos |
| CTR por formato | TLA ~2,68% > Document 1,10% > Carousel 0,78% > Video 0,71% > Single Image ~0,42-0,54% | |
| CPL por formato | TLA ~71 $ < Document ~78 $ < Carousel ~89 $ < Video ~96 $ < Single Image ~104 $ | |
| LGF CVR | ~8-13% (normalizando a 8-11%); ~6,1% medio mezclado | vs landing ~1,6-2,35% |

**Premiums de coste por segmento**

| Segmento | CPC | Nota |
|---|---|---|
| C-Suite | ~14,85 $ | Premium por seniority |
| VP/SVP | ~11,20 $ | |
| Individual Contributor | ~3,18 $ | |
| Industria (rango CPC) | 3,12 $ (Nonprofit) a 7,95 $ (Legal) | Financial 6,84 $, IT/Cyber 6,41 $, Education 4,18 $ |
| Industria (rango CPL) | 48 $ (Nonprofit) a 148 $ (Financial Services) | B2B SaaS ~79 $, Insurance ~135 $ |

### Best practices y testing

**Pujas y presupuesto**

| Estrategia | Cuando |
|---|---|
| Maximum Delivery (default, automatica) | Arranque para recopilar datos; gasta el presupuesto completo |
| Manual | Mover campanas probadas para control de coste (puja max exacta por subasta) |
| Cost Cap | Ultimo recurso; coste medio objetivo por resultado, el menos recomendado |

> [!note] Presupuesto minimo y de test
> Minimo 10 $/dia. Recomendado 50-100 $/dia por campana y ~5.000-10.000 $/mes total para un test con datos suficientes. Infrafinanciar (<5.000 $/mes) produce muy poca senal para optimizar.

**Testing A/B**
- Cambiar una sola variable a la vez (creatividad, titular, audiencia o formato).
- Mantener gasto/duracion constantes.
- Comparar CTR/CVR/CPL segun el KPI real del objetivo, no metricas de vanidad.
- Refrescar creatividad antes de la fatiga (TLA ~semana 19).

> [!failure] Errores a evitar
> - Dejar Maximum Delivery permanentemente (gasta el presupuesto entero para beneficio de LinkedIn).
> - Audience Expansion o LAN encendidos en campanas de precision/ABM.
> - Sobre-apilar targeting (4+ atributos) por debajo de la banda de 50k.
> - LGF con demasiados campos o multiples preguntas de texto libre.
> - Confiar solo en el Insight Tag sin CAPI + dedup por `event_id`.
> - Olvidar exclusiones (empleados, competidores, junior, ya convertidos).
> - TLA sin aprobacion del autor, o creer que necesitas acceso a su cuenta publicitaria.
> - Objetivo de campana que no coincide con el KPI real.
> - Usar Lookalikes legacy en vez de Predictive Audiences.
> - No seguir los leads de LGF en <24h.

> [!check] Checklist de lanzamiento de campana
> - Definir el KPI de negocio real y elegir el objetivo que lo iguala
> - Elegir formato despues del objetivo; ponderar presupuesto hacia formatos de alto engagement (TLA, Document, Carousel, Video)
> - Construir audiencia en la banda 50k-200k con Function + Seniority + Company Size/Industry; max 2-3 atributos
> - Aplicar exclusiones (empleados, competidores, seniorities junior, industrias irrelevantes, lista CRM convertida)
> - Decidir estrategia Matched: ABM company list (nombre+dominio) y/o Predictive Audience de convertidores CRM
> - Apagar Audience Expansion y LAN en precision/ABM
> - Verificar specs de creatividad por formato y anadir captions a video
> - Adjuntar LGF de 3-4 campos con como mucho una pregunta de cualificacion (objetivo Lead Gen)
> - Pujas: Maximum Delivery al inicio, plan de migracion a Manual al conocer el coste por resultado
> - Presupuesto 50-100 $/dia, total 5k-10k $/mes para test valido
> - Verificar que el Insight Tag dispara + CAPI envia eventos con `event_id` compartido y `li_fat_id` capturado
> - Plan de test A/B: una variable, gasto/duracion iguales, KPI alineado al objetivo

## Social Selling y Sales Navigator

> [!info] Principio 2026: relevancia sobre volumen
> Los caps duros de plataforma (~100-200 solicitudes de conexion/semana compartidas entre todos los tiers) y la deteccion agresiva de bots empujan a secuencias multi-touch calidas y personalizadas, no a automatizacion masiva. El indice canonico de salud del habito es el **SSI**.

### Funcionalidades de Sales Navigator

**Tiers y precios**

| Plan | Precio | Incluye |
|---|---|---|
| Core | ~99,99-119,99 $/mes (79,99-89,99 $/mes anual) | Busqueda avanzada, saved searches, alertas, listas custom, 50 InMails |
| Advanced | ~149,99-179,99 $/mes | Anade Smart Links, TeamLink, carga CSV de cuentas, SSO, Account IQ |
| Advanced Plus | Custom, ~1.600+ $/asiento/ano | Anade sincronizacion CRM, validacion de datos, integraciones enterprise |

> [!warning] Ningun tier exporta emails/telefonos ni listas
> Pagar Advanced Plus es gasto desperdiciado salvo que necesites sync CRM bidireccional. Sigues necesitando una herramienta separada de enrichment/CRM.

**Herramientas clave**

| Funcionalidad | Que hace | Tier |
|---|---|---|
| Lead Lists / Account Lists | Pipeline vivo segmentado (ABM con Account Lists, compradores con Lead Lists) | Todos |
| Busqueda avanzada | Filtros lead: "cambio de trabajo en 90 dias", "publico en 30 dias", "sigue tu empresa", seniority, funcion, headcount, geografia, TeamLink "best path in". Filtros cuenta: headcount, headcount growth, revenue, buyer intent, technologies used | Todos |
| Saved searches + alertas | Notificacion de nuevos leads/cuentas que matchean; alertas de job changes, posts, funding, growth -> feed de trabajo diario priorizado | Todos |
| Smart Links | Colateral trackeable (quien abrio, cuanto vio cada asset, a quien reenvio) sin formularios gated | Advanced+ |
| TeamLink | Surface de colegas 1er grado conectados a un prospect -> intros calidas | Advanced+ |
| Relationship Explorer | Mapea el comite de compra y mejores caminos a una cuenta | Advanced+ |
| Account IQ / Lead IQ | Briefings AI de cuenta (prioridades, retos, noticias) y resumen de comprador individual | Advanced/Plus |
| Buyer intent signals | Marca cuentas con interes basado en actividad/engagement LinkedIn | Todos |

### SSI (4 pilares) y como subirlo

> [!info] Social Selling Index
> Escala 0-100, cuatro pilares de 25 puntos cada uno, ventana movil de 90 dias, actualiza a diario. Consultar en **linkedin.com/sales/ssi** (gratis para cualquier miembro, sin Sales Nav). Media de usuarios 40-50; "bueno" para vendedores B2B activos **65+**; thought-leader / top 1% **75+**.

> [!check] Impacto de negocio
> Los reps con SSI alto generan **~45% mas oportunidades** y son **~51% mas propensos a cumplir cuota** (datos LinkedIn).

| Pilar | Que mide | Como subirlo |
|---|---|---|
| **1. Establecer marca profesional** | Completitud de perfil + contenido de autoridad | Perfil "All-Star" 100%, headline de outcome (no titulo de puesto), banner, About, Featured, recomendaciones; postear 4-5x/semana (~2x lift de engagement). **Win mas rapido: 5-8 pts.** |
| **2. Encontrar a las personas correctas** | Prospeccion eficiente con busqueda/filtros | Usar saved searches y lead recommendations a diario; mantener alta la **tasa de aceptacion** de conexion (evitar spray-and-pray) |
| **3. Engage con insights** | Compartir, comentar, reaccionar con sustancia | Comentarios especificos (no genericos) en posts de prospects; sesiones diarias de 30 min > binges esporadicos. **Pilar mas movible.** |
| **4. Construir relaciones** | Profundidad de relacion + tasa de aceptacion | Conectar con decision-makers senior/relevantes, reconocer cambios de trabajo e hitos, dar valor sin pedir |

### Outreach: connection requests e InMail

**Connection requests**

> [!warning] Caps duros y ritmo humano
> Manten **<~100 solicitudes/semana (~15-20/dia)** independientemente del plan (el cap se comparte entre Free, Premium y Sales Nav; cuentas calidas/establecidas pueden flexionar a ~200). Nunca dispares todas en un solo lote (p. ej. lunes por la manana): supera la deteccion de spam/automatizacion incluso "por debajo" del limite numerico.

| Atributo | Limite / best practice |
|---|---|
| Nota de conexion | **300 caracteres** max (todos los planes); incluye espacios, saltos, emojis |
| Longitud optima de nota | **120-180 caracteres** (acepta mejor que usar los 300) |
| Free: notas/mes | **~5 invitaciones con nota/mes**; despues van sin nota. Premium/Sales Nav sin cap mensual de nota |
| Aceptacion media plataforma | ~29-30% |
| Aceptacion buena (ICP) | 25-45% |
| Aceptacion con engagement previo de contenido | **60%+** (vs 20-30% en frio) |
| Lift de nota personalizada | hasta +58% (B2B/SaaS) |

**InMail**

> [!info] Economia de creditos
> Todos los tiers de Sales Nav incluyen **50 creditos/mes**, rollover hasta **150 max** (3 meses). Los InMails respondidos (en 90 dias) reembolsan el credito. Creditos extra **~21 $ cada uno** (subido desde 3 $ en oct 2025) -> no malgastar en contactos de 2o/3er grado alcanzables gratis.

| Atributo | Valor / best practice |
|---|---|
| Limite de cuerpo | ~1.900-2.000 caracteres |
| Longitud optima | **<400 caracteres** (~22% sobre la media de respuesta); hasta 800 car +5%; 800-1.200 car -6% |
| Subject line | 16-27 caracteres (3-5 palabras) -> 11,6-15,2% open rate |
| Respuesta media | 10-25% (~300% mas que email identico); top performers 30-40% |
| Individual vs bulk | 1:1 personalizado **~+15%** de respuesta vs plantilla bulk |
| Mejor momento de envio | Mar-Jue por la manana, hora local del destinatario |

**Secuencias value-first**

> [!tip] Las secuencias multi-touch convierten ~3,1x mejor que mensajes unicos
> Flujo recomendado: ver perfil -> engage con contenido -> solicitud de conexion personalizada (sin pitch) -> mensaje de valor (insight/recurso, sin pedir) -> soft ask relevante -> follow-ups espaciados 2-5 dias laborables. Los follow-ups espaciados anaden ~49% sobre one-offs. **Nunca pitches en la nota de conexion.**

**Que arriesga restriccion de cuenta**

> [!failure] Limite automatizacion vs restriccion
> La deteccion es conductual, no solo numerica: "parecer un bot" te restringe incluso dentro de limites. Disparadores:
> - Alta velocidad de invites o lotes en rafaga (todas el mismo dia/hora)
> - Alta tasa de rechazo/ignorados (mantener aceptacion >30-40%)
> - Automatizacion de terceros con timings identicos, scraping, picos de actividad
> - Logins desde muchas IPs/ubicaciones en poco tiempo
> - Mensajes/plantillas identicos a escala; pitch inmediato tras conectar
>
> Restricciones: 24h-7 dias (primera/menor); **indefinida** para reincidencia/severa (requiere verificacion de ID gubernamental + apelacion, revision ~3-7 dias laborables). Nunca crear cuenta nueva tras ban permanente: el fingerprint de dispositivo + IP la re-restringe de inmediato.
