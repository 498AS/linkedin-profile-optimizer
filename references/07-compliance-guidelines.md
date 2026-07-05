# Guidelines, cumplimiento y anti-patrones (VINCULANTE)

> Parte del skill **linkedin-profile-optimizer**. Contenido sincronizado con el system prompt canonico `system_prompt_linkedin_specialist_zoopa.md` (v3.0). Cargar bajo demanda segun el paso del flujo.

---

## Guidelines, Cumplimiento y Anti-patrones

> [!important] Por qué esta sección es vinculante
> LinkedIn restringe aproximadamente **2 millones de cuentas/mes** por violaciones de automatización y uso. En 2026 la detección es **conductual, no solo numérica**: parecer un bot te restringe aunque estés "por debajo" de los límites. Esta sección es el núcleo de cumplimiento que la skill DEBE hacer cumplir antes de recomendar cualquier táctica de crecimiento, outreach o contenido. Ante conflicto entre alcance y cumplimiento, **gana siempre el cumplimiento**.

El marco normativo se asienta en tres documentos de LinkedIn que la skill debe tratar como ley:

| Documento | Qué cubre | Aplicabilidad |
|-----------|-----------|---------------|
| **User Agreement** | Términos de uso de la plataforma | PERSONA + EMPRESA |
| **Professional Community Policies** | 3 pilares: Be Safe · Be Trustworthy · Be Professional | PERSONA + EMPRESA |
| **Prohibited Software and Extensions** | Prohibición de bots, scrapers, extensiones de automatización | PERSONA + EMPRESA |

A esto se superponen capas regulatorias externas: **GDPR/ePrivacy** (outreach B2B en UE/UK), **EU AI Act Artículo 50** (etiquetado obligatorio de contenido IA desde el 2 de agosto de 2026), **FTC/EU** (divulgación de endorsements pagados) y la **Copyright Policy + DMCA** de LinkedIn.

### Professional Community Policies (principios)

Los tres pilares de las Professional Community Policies son la base de toda recomendación de contenido y conducta. La skill debe validar cada pieza contra ellos.

**Pilar 1 — Be Safe**

> [!warning] Categorías de tolerancia cero (ban permanente sin aviso)
> Explotación sexual infantil · terrorismo / organizaciones extremistas · amenazas creíbles de violencia · incitación o glorificación de la violencia · apoyo a crimen organizado. Una sola incidencia salta la escalera normal de avisos y conduce a eliminación permanente inmediata.

- No publicar contenido que acose, intimide, avergüence, haga doxing, troleo o use lenguaje abusivo hacia personas.
- Mantener todo comentario sobre **ideas y trabajo, nunca sobre personas**, incluso en debates acalorados. Reportar, no replicar.
- **Bienes/servicios restringidos** nombrados explícitamente en la política: **data scraping** (sí, el scraping figura como servicio restringido), proxies/realización de tests por encargo, certificaciones falsas, documentos forjados, prostitución/escort, loterías/sorteos.

**Pilar 2 — Be Trustworthy**

- **Identidad auténtica**: nombre real + foto real de uno mismo. Prohibido nombre falso, foto de otra persona, persona inventada por IA, título engañoso o credenciales fabricadas. Una persona = una cuenta personal. Las Páginas las crea un representante autorizado con logos/marcas que la entidad tiene derecho a usar.
- **Desinformación**: prohibido contenido falso/engañoso destinado a engañar, incluida **media sintética/manipulada sin divulgación**, interferencia electoral, contradicción de directrices sanitarias autorizadas y endorsements pagados no divulgados (marcar `#ad` / "paid partnership").
- **Estafas**: prohibidos romance scams, esquemas piramidales/Ponzi, reclutamiento MLM, phishing, malware y fraude financiero (MLM también prohibido en LinkedIn Ads).

**Pilar 3 — Be Professional**

- Sin discurso de odio ni acoso: nada que ataque, deshumanice o incite al odio contra grupos protegidos (raza, etnia, origen, casta, género, identidad de género, orientación sexual, religión, edad, discapacidad); sin negacionismo de atrocidades históricas; sin acoso sexual, insinuaciones no deseadas ni imágenes explícitas no solicitadas.
- **Spam y engagement falso**: no enviar mensajes comerciales no solicitados ni masivos; no usar el sistema de invitaciones para spam a desconocidos; **no inflar artificialmente el engagement ni prearreglar likes/reshares (pods)**. Crear contenido original y relevante.

### Límites de la plataforma

> [!important] Tope conductual sobre tope numérico
> Estos límites son **techos duros**, no objetivos. Operar al máximo es señal de riesgo. La regla de oro: **ritmo humano** — variar volúmenes y horarios, repartir a lo largo de días y horas, pausar fines de semana. Disparar todo el lote un lunes por la mañana activa la detección de automatización aunque la cifra semanal esté dentro del límite.

| Acción | Límite duro | Ritmo seguro recomendado | Notas operativas |
|--------|-------------|--------------------------|------------------|
| **Invitaciones de conexión / semana** | ~100 (hasta ~200 cuentas establecidas/cálidas) | **~15-20/día** | Compartido entre Free, Premium y Sales Navigator. El contador resetea exactamente 7 días tras la primera invitación del lote. |
| **Invitaciones pendientes (sin aceptar)** | **2.500** (tope acumulado) | Retirar pendientes > 30 días | Tras retirar una invitación, esperar **3 semanas** para reinvitar a la misma persona. |
| **Conexiones de 1.er grado** | **30.000** (techo) | — | Al alcanzarlo no se pueden enviar más invitaciones; sí se pueden seguir ganando seguidores. |
| **Mensajes / semana (Free)** | ~100 (ventana móvil 7 días) | 50-100/día máx. en cuentas establecidas | LinkedIn puntúa **calidad** del mensaje, no solo volumen. |
| **Mensajes / semana (Premium)** | ~150 (ventana móvil 7 días) | 50-100/día máx. | Plantillas idénticas a escala = disparador de spam. |
| **Nota en invitación** | 300 caracteres | **120-180 caracteres** | Free: solo **~5 invitaciones con nota/mes**; después van sin nota. Premium/Sales Nav: sin tope mensual de nota. |
| **InMail (Sales Nav)** | 50 créditos/mes | Reservar para prospectos inalcanzables de otro modo | Acumulables hasta 150; InMail respondido reembolsa el crédito; crédito extra ~$21 (subió desde $3 en oct. 2025). |

**KPI de salud de la cuenta**: tasa de aceptación de invitaciones **> 30-40%**. Por debajo, LinkedIn lee comportamiento spammy y endurece tu límite. Disparadores nombrados de restricción: nombre/identidad/credenciales falsos, foto o banner ofensivo, uso no autorizado de logo, mensajería idéntica masiva, promoción inmediata tras conectar, alta velocidad de acciones y logins desde muchas IPs/ubicaciones en poco tiempo.

> [!warning] Tras un ban permanente, NO crear cuenta nueva
> LinkedIn rastrea huella de dispositivo, datos de navegador e IP. Las cuentas de evasión de ban se vuelven a restringir casi de inmediato. La mayoría de restricciones son temporales (24h-7 días en primeras infracciones) y se recuperan vía verificación de identidad (revisión ~3-7 días hábiles).

### Prohibido: automatización, scraping, pods, engagement bait

> [!failure] Las cuatro líneas rojas que la skill nunca debe cruzar ni recomendar
> Automatización con bots/extensiones · scraping de datos · engagement pods · engagement bait. Cada una conlleva **riesgo real de restricción o shadowban silencioso**, a menudo sin aviso previo.

**1. Automatización y extensiones (Prohibited Software and Extensions)**

- Prohibido cualquier crawler, bot, script, plug-in/extensión de navegador o software de terceros que haga scraping, copie perfiles/datos, automatice actividad, auto-añada/descargue contactos o auto-envíe/redirija mensajes.
- Las herramientas de **inyección en navegador (extensiones Chrome)** son las más detectadas vía fingerprinting; tanto las cloud como las de navegador son violación de política.
- Outreach **manual** o solo vía **APIs/programas de partners oficiales** de LinkedIn.
- **Riesgo**: viola directamente el User Agreement. LinkedIn restringe ~2M cuentas/mes y en 2025 eliminó las Páginas de vendedores de scraping (**Apollo.io, Seamless.ai**). Capas de detección: patrones conductuales, velocidad, fingerprinting de navegador, monitorización de API, anomalías de IP y similitud de mensajes.

**2. Scraping**

- Figura **explícitamente como servicio restringido** en las Professional Community Policies (no es un mero tecnicismo de ToS).
- **Riesgo**: eliminación de cuenta/Página y acción legal (LinkedIn litiga activamente contra scrapers).

**3. Engagement pods**

- Prohibidos los pods y anillos de engagement recíproco.
- **Riesgo**: el sistema 2026 detecta patrones recíprocos con **~97% de precisión** y aplica **shadowbans silenciosos** (no avisos retirables); el alcance puede caer **> 90% de la noche a la mañana**, con penalización de hasta ~45%. Recuperación: 60-90 días de publicación conforme.

**4. Engagement bait**

- Prohibido: "Comenta SÍ si estás de acuerdo", "etiqueta a 3 personas", "follow-for-follow", "like-for-like", encuestas como cebo de reacción.
- **Riesgo**: clasificadores NLP 2026 lo detectan y suprimen el alcance **hasta ~60%**.
- **Sustituir** por preguntas abiertas genuinas ligadas al tema, que invitan a conversación real (los comentarios pesan ~15x un like).

> [!note] Penalización de enlaces externos (relacionada)
> Aunque no es "prohibido", el enlace externo en el cuerpo del post recorta el alcance ~18-60% (comúnmente citado ~50%). El truco del "enlace en el primer comentario" ya está parcialmente parcheado (solo recupera ~10-15%). Mantener enlaces fuera del cuerpo; CTA on-platform (DM/comentario) preserva distribución.

### Política de contenido generado por IA

> [!important] Divulgación de IA: norma actual + obligación legal inminente
> Divulgar todo contenido generado por IA o significativamente editado por IA. Usar el indicador nativo de IA de LinkedIn cuando esté disponible, o una divulgación en texto plano **en las dos primeras frases** del post.

- **Cómo divulgar**: "Imagen generada por IA", "Este mockup es generado por IA", "Fotografía de producto asistida por IA". Divulgar claramente toda media sintética (imágenes, voz, vídeo).
- **Por qué**: alinea con las normas de LinkedIn y con el **EU AI Act Artículo 50** (etiquetado obligatorio de texto/imágenes/voz significativamente generados por IA, **aplicable desde el 2 de agosto de 2026**).
- **Penalización algorítmica de IA genérica**: los clasificadores NLP marcan output de IA sin editar (aperturas tipo "In today's fast-paced world", estructura de bullets sin voz, frameworks repetidos entre cuentas) y recortan bruscamente la distribución inicial. En 2026, frases plantilla sobreutilizadas restan ~4-7% de alcance cada una. La IA genérica además produce **dwell time casi nulo, cero saves y cero discusión**, lo que mata el ranking orgánicamente.

> [!tip] Regla de oro Zoopa: IA para borrador, humano para publicar
> Usar IA para draftear; después inyectar **insight personal específico, ejemplos de primera mano, números y opinión**. Cada post debe llevar voz humana. Nunca enviar output crudo de IA.

- **Términos de datos IA (vigentes desde 3 nov. 2025)**: LinkedIn puede usar ciertos datos de miembros para entrenar IA generativa. Revisar y, si procede, optar por no participar en **Configuración y privacidad > Privacidad de datos > "Datos para mejora de IA generativa"**. Factor de gobernanza para marcas con contenido propietario.

### Accesibilidad

> [!check] Estándar de casa Zoopa
> La accesibilidad es estándar de buenas prácticas (no regla dura), pero **expectativa profesional creciente** en B2B y, además, **señal de alcance**: vídeo subtitulado e imágenes descritas obtienen más completion y engagement. La skill la trata como obligatoria en todo entregable.

| Elemento | Regla | Cómo | Por qué |
|----------|-------|------|---------|
| **Alt text** | Descriptivo en toda imagen/documento/infografía, **máx. ~120 caracteres** | Opción "Add alt text" (Alt) en el editor antes de publicar. Transcribir el texto incrustado en gráficos. | Hace el contenido perceptible para lectores de pantalla; añade contexto semántico SEO. |
| **Subtítulos** | SRT en todo vídeo; no fiarse solo de auto-captions | Subir archivo .SRT o revisar/corregir los automáticos antes de publicar. | ~80-91% del vídeo se ve en silencio; sube watch time y sirve a usuarios sordos/con dificultad auditiva. |
| **Hashtags en camelCase** | `#ContentMarketing`, no `#contentmarketing`; 3-5 al final del post | Capitalizar cada palabra (camelCase/PascalCase); agrupar al final, no dispersos ni en la primera línea. | Los lectores de pantalla parsean cada palabra; mejora legibilidad para todos. |
| **Lenguaje claro** | Plain language, sin muros de jerga | Frases cortas, una idea por párrafo, espacios en blanco. | Mejora comprensión, dwell time y read-completion para toda la audiencia. |
| **Emojis con intención** | Nunca como viñetas/marcadores de lista ni decoración | 1 por sección máx. en contexto B2B. | Los lectores de pantalla leen cada emoji en voz alta; en cadena son ruido. Exceso = señal de baja confianza/engagement-bait. |

### Anti-patrones

> [!failure] Lista exhaustiva de lo que NUNCA hacer
> **Automatización y datos**
> - Usar CUALQUIER extensión de navegador o bot para automatizar conexiones, mensajes o scraping — causa #1 de las ~2M restricciones/mes; las extensiones Chrome son especialmente detectables por fingerprinting.
> - Hacer scraping de perfiles/datos — figura como servicio restringido y expone a acción legal.
> - Crear cuenta nueva tras un ban permanente — el tracking de dispositivo/IP la re-restringe casi al instante.
> - Loguear desde muchas IPs/ubicaciones/dispositivos en poco tiempo (VPN-hopping, cuentas compartidas) — dispara restricciones de seguridad.
>
> **Engagement artificial**
> - Unirse a o gestionar engagement pods o anillos de like/comentario recíproco — detectados al ~97% y castigados con shadowban silencioso sin aviso.
> - Usar engagement bait ("Comenta SÍ", "etiqueta a 3", follow-for-follow) — penalización de alcance hasta ~60%.
> - Perseguir likes en vez de comentarios, saves y dwell time — los likes son señal de bajo peso en 2026.
>
> **Mensajería y conexión**
> - Lanzar todas las invitaciones semanales en una sola ráfaga (p. ej. lunes por la mañana) — dispara detección de automatización aunque estés bajo el tope de 100/semana.
> - Vender en la nota de invitación o pitch comercial inmediato tras aceptar la conexión — disparador top del filtro de spam y exposición ePrivacy.
> - Blasts de mensajes idénticos/plantilla a escala — LinkedIn puntúa calidad, no volumen.
> - Dejar acumular invitaciones pendientes por encima de 2.500 o mantener tasa de aceptación baja — endurece tu tope semanal.
> - Gastar los ~5 InMails/créditos en contactos alcanzables gratis de 2.º/3.er grado y luego pagar ~$21/crédito.
>
> **Identidad y contenido**
> - Datos de perfil falsos o inflados (título inventado, foto prestada, credenciales fabricadas) — disparador de impersonation que salta la escalera de avisos.
> - Publicar imágenes/texto/voz de IA sin etiquetar — incumple las normas ahora y el EU AI Act desde el 2 ago. 2026.
> - Enviar output de IA genérico sin editar — marcado por clasificadores NLP; cada frase plantilla resta ~4-7% de alcance.
> - Editar el post durante la golden hour — puede resetear/dañar el test de distribución temprana.
> - Reposts idénticos frecuentes / reciclaje de bajo valor — throttled como contenido recicl­ado.
>
> **Enlaces, formato y compliance externo**
> - Poner enlaces externos en el cuerpo del post — recorta el alcance ~18-60%; usar primer comentario o CTA on-platform.
> - Apilar 10+ hashtags o incrustarlos a mitad de texto — señal de spam.
> - Hashtags multipalabra en minúsculas (`#socialmediamarketing`) que los lectores de pantalla no parsean — usar camelCase.
> - Omitir alt text y subtítulos — daña accesibilidad Y señales de alcance.
> - Outreach B2B en frío en UE/UK sin Legitimate Interest Assessment documentado, sin opt-out o con pitch comercial en la primera nota — exposición GDPR/ePrivacy (multas acumuladas > €5,88B a ene. 2025; LinkedIn multado con €310M en oct. 2024).
> - Usar logos, marcas o imágenes con copyright sin autorización — expone a takedowns DMCA y acción por reincidencia.
> - Ejecutar categorías de anuncios prohibidas (políticos, MLM, juego/sorteos, armas, adulto, falsificaciones, reclamos sanitarios engañosos) o targeting discriminatorio — anuncio retirado y cuenta de anunciante restringida.
>
> **Estrategia desfasada (no recomendar nunca)**
> - Decir "activa Creator Mode" — retirado en feb-mar 2024; sus funciones son ya por defecto.
> - Añadir "hashtags de los que hablo" al perfil — eliminado feb. 2024 e irrelevante para el ranking semántico de 360Brew.
> - Recomendar Audio Events nativos — descontinuados (dic. 2024), unificados en LinkedIn Live.
> - Perseguir el badge Community Top Voice (oro) vía Collaborative Articles — retirado dic. 2024.
