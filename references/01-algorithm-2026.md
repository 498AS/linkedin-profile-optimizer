# Algoritmo LinkedIn 2026 (360Brew) - deep dive

> Parte del skill **linkedin-profile-optimizer**. Contenido sincronizado con el system prompt canonico `system_prompt_linkedin_specialist_zoopa.md` (v3.0). Cargar bajo demanda segun el paso del flujo.

---

## Algoritmo LinkedIn 2026 (Deep Dive)

> [!important]
> El feed de LinkedIn en 2026 ya no es un contador de "me gusta": lo ordena un modelo de IA basado en embeddings (360Brew). El especialista de Zoopa/498A optimiza para **relevancia semantica, dwell time y comentarios**, no para reacciones. Esta seccion es el modelo mental que rige TODA decision de contenido en ambos modos (PERSONA y EMPRESA).

### Como funciona el ranking (360Brew / depth and authority)

LinkedIn migro de un sistema de ranking fragmentado a un **modelo fundacional unico**, discutido publicamente como **360Brew**: un modelo decoder-only de **~150.000 millones de parametros**, entrenado sobre los datos propios de LinkedIn (perfiles, posts, interacciones, descripciones de empleo). El cambio estructural es doble:

1. **De grafo de relaciones a grafo de intereses.** El contenido ya no se muestra "a tu red" sino a quien **interactua con tu TEMA**, aunque no te conozca. Solo ~31% del feed medio procede de conexiones de 1er grado; ~25% de 2o/3er grado; ~10% es contenido sugerido/stranger puro. Seguidores y alcance estan **estructuralmente desacoplados** (8.000 seguidores enfocados pueden batir a 80.000 dispersos).
2. **De alcance viral a profundidad, relevancia y autoridad tematica (depth and authority).** El modelo cruza semanticamente cada post contra el perfil del autor (Titular / Acerca de / Experiencia) y **suprime la distribucion cuando hay disonancia** (ej. un "disenador grafico" publicando consejos de cripto).

**Pipeline de ranking por etapas:**

| Etapa | Que hace | Implicacion operativa |
|-------|----------|-----------------------|
| 1. Filtro calidad/spam | Clasificador NLP descarta spam, engagement bait, IA generica | Si lo activas, mueres antes de empezar |
| 2. Retrieval LLM | Reduce de millones de candidatos a **~2.000 posts** via embeddings + similitud coseno | Tu post debe ser semanticamente coherente para entrar en el set |
| 3. Generative recommender | Re-rankea los ~2.000 contra **~1.000+ interacciones recientes** del que mira | Tu tema debe casar con lo que ese viewer ya consume |
| 4. Audiencia de test | Muestra a un grupo pequeno (~2-5% de la red) en la golden hour | El early engagement decide si escala o se corta |

> [!info]
> **Autoridad tematica = activo medible.** Tres inputs la construyen: (1) consistencia tematica entre posts, (2) calidad del engagement, (3) claridad semantica (clasificacion limpia). El modelo tarda **~90 dias de publicacion consistente sobre un tema** en categorizar tu expertise y desbloquear alcance amplio. No saltes de tema: fragmenta la clasificacion y baja la confianza del modelo.

### Senales y pesos

> [!important]
> Regla de oro 2026: **dwell time > comentarios > guardados/shares > reacciones**. El "me gusta" es la senal de menor peso. Disena cada post para retener tiempo de lectura y provocar conversacion, no para acumular likes.

| Senal | Efecto / peso | Implicacion para el contenido |
|-------|---------------|-------------------------------|
| **Dwell time** (tiempo en post) | Senal de mayor peso. 0-3s ≈ 1,2% ER; 61s+ ≈ 15,6% ER (~13x) | Hook fuerte, saltos de linea, cliffhanger "ver mas", formato carrusel/video |
| **Comentarios** | ≈ **15x** un like; top-tier en 360Brew | Pregunta abierta genuina; responder con sustancia 24-48h |
| **Guardados (saves)** | ≈ **5x** un like; senal de valor duradero | Frameworks, checklists, cheat-sheets "de referencia" |
| **Shares / reposts con valor** | Por encima de likes; senal de respaldo | Contenido evergreen, opinion fuerte, dato citable |
| **Watch time (video)** | API 202601 mide 15s/30s/2min; vista cuenta a los 3s | Video 30-90s, captions, hook en primeros 2s |
| **Velocidad early (golden hour)** | Gating de distribucion; 3+ comentarios en 60 min ≈ **5,2x** alcance | Presencia activa la primera hora |
| **Reacciones (likes)** | Peso bajo | No optimizar por ellas |
| **Click-bounce** (abrir y salir) | Senal negativa: deprioriza el post | Evitar clickbait que no entrega; el hook debe cumplir |
| **Coherencia perfil-post** | Si hay match, desbloquea alcance; si hay disonancia, lo estrangula | Alinear pilares de contenido con Titular/Acerca de |

### Dwell time

El dwell time es el **norte de calidad de 2026**. Es el proxy mas influenciable sobre el alcance. Relacion observada entre rango de segundos de lectura y engagement rate aproximado:

| Rango de dwell (segundos) | ER aproximado |
|---------------------------|---------------|
| 0-3s | ~1,2% |
| 4-15s | ~3-5% |
| 16-30s | ~6-9% |
| 31-60s | ~10-13% |
| 61s+ | ~15,6% |

> [!tip]
> **Como engineerear dwell time:** (1) hook de 1-2 lineas que pare el scroll antes del pliegue "ver mas"; (2) estructura narrativa (Hook-Story-Lesson, PAS, Before-After-Bridge); (3) saltos de linea y aire visual; (4) carruseles/documentos (3-5 min de dwell, el formato top); (5) video nativo (2-3x el dwell del texto); (6) longitud de texto 150-300 palabras (1.300-1.900 caracteres). Un video de 2 min visto al 50% = 60s de dwell, alimentando directamente el ranking.

### Golden hour y ciclo de distribucion

Los **primeros 60-90 minutos** (la "golden hour") deciden el destino del post. LinkedIn lo testea primero en una audiencia pequena y lo escala solo si supera el umbral de engagement temprano.

| Fase | Ventana | Audiencia | Umbral para avanzar |
|------|---------|-----------|---------------------|
| Stage 1 (test) | 0-60 min | ~2-5% de tu red | ~5%+ engagement avanza; <~2% mata el post |
| Stage 2 (expansion) | 1-6 h | 10-20% red + 2o grado | Mantener velocidad de comentarios/dwell |
| Stage 3 (viral) | 6 h+ | Fuera de tu red | <1% de los posts llegan aqui |

> [!check]
> **Playbook de golden hour (primeros 60-90 min):**
> - Estar online y responder cada comentario con sustancia (la respuesta del autor cuenta como engagement fresco).
> - Objetivo: **3+ comentarios significativos en los primeros 60 min** (≈ 5,2x amplificacion).
> - Publicar en horario pico de la audiencia (Mar-Jue 10-14h; pico Mie 11h; ventana en alza 15-20h).
> - Notificar a unas pocas personas **genuinamente relevantes** (NO un pod).
> - **NO editar el post durante la ventana de test** (reinicia/perturba la evaluacion).
> - Mantener el hilo vivo 24-48h para acumular depth score.

> [!info]
> **Half-life del contenido 2026:** un post fuerte vive **2-3 semanas** (antes 24-48h) SI sigue generando comentarios y dwell. El depth score compone. Sigue respondiendo y resurfaceando el hilo durante dias; no abandones el post a las 48h.

### Penalizaciones

> [!failure]
> Estas practicas activan supresion algoritmica, shadowban silencioso o demotion. La recuperacion de una penalizacion algoritmica tarda **60-90 dias** de publicacion limpia.

| Penalizacion | Magnitud | Como evitarla |
|--------------|----------|---------------|
| **Enlace externo en el cuerpo** | -18,8% mediana (un link); rango ~45-70% en posts link-heavy | Link en **primer comentario** (recupera solo ~10-15% en 2026, el truco esta parcialmente parcheado) o editarlo tras la golden hour; nativo primero |
| **Engagement bait** ("Comenta SI", "etiqueta a 3", reaction polls) | Supresion hasta **~60%** (clasificadores NLP) | Pregunta abierta genuina ligada al tema; pedir opinion/experiencia, no reacciones mecanicas |
| **Engagement pods** / anillos reciprocos | Hasta **~45%** perdida de alcance; **~97%** precision de deteccion; shadowban silencioso | No participar nunca; construir comunidad tematica real |
| **IA de bajo esfuerzo** (output generico sin editar) | Recorte fuerte de distribucion inicial; cada frase-plantilla sobreusada ≈ **-4-7%** | Anadir insight personal, ejemplos de primera mano, numeros, voz propia; evitar aperturas tipo "In today's fast-paced world" |
| **Reposts identicos frecuentes** | Throttling por reciclaje de bajo valor; repost simple ≈ ~2 likes mediana vs ~28 de un original | Repost **con 100+ palabras** de comentario propio (cuenta como post nuevo) o espaciar y anadir valor real |
| **Ediciones en la golden hour** | Reinicia/perturba el test de early engagement | Finalizar la copy ANTES de publicar |
| **Sobre-publicar** | >5-7/dia activa senales de spam | Cap ~1/dia ideal; consistencia > volumen |
| **Stack de hashtags** | 10+ ≈ penalizacion 30-50%; posts sin hashtags rinden ~5-10% mejor | 0-3 hashtags precisos; el tema lo lee la semantica, no los tags |
| **Topic-hopping** | Diluye el embedding, baja la confianza del modelo, suprime alcance | Mantener 3-4 pilares ≥90 dias |

### Realidad de alcance 2026

> [!warning]
> **El alcance se ha reseteado a la baja de forma estructural. NO benchmarkees contra cifras de 2023-2024.** Segun el *Algorithm Insights Report 2026* de Richard van der Blom (1,3M posts / 50k creadores):
> - **Vistas: ~-50% YoY.**
> - **Engagement: ~-25% YoY.**
> - **Crecimiento de seguidores: ~-59% YoY.**
> - **Alcance: ~-60% para creadores activos en dos anos.**
> En paralelo, el engagement medio de la plataforma subio ~+18% en 6 meses (efecto grafo de intereses: mas engagement, menos alcance bruto).
>
> **Implicacion estrategica para el cliente: calidad > volumen, y reenfocar los KPIs.** No es un fallo personal del cliente, es un reset de plataforma. (1) Plantea metas contra la **nueva baseline mas baja**. (2) Mide **rendimiento relativo** (tu mejor post vs tu media), no alcance absoluto. (3) Sustituye "vistas/seguidores" como KPI norte por **dwell time, comentarios significativos, guardados y miembros (unicos) alcanzados de tu ICP**. (4) 3 posts excelentes baten a 7 mediocres: el algoritmo penaliza la caida de calidad mas de lo que premia la frecuencia.

### Distribucion: perfil personal vs pagina de empresa

> [!important]
> **El alcance organico vive en los perfiles personales, no en la pagina de empresa.** Esta es la decision de routing mas importante del programa: metas de alcance organico → perfiles personales (founder/empleados); pagina de empresa → marca evergreen, ads, audiencias de retargeting.

| Dimension | Perfil personal | Pagina de empresa |
|-----------|-----------------|-------------------|
| Asignacion de feed | **~65%** | **~5%** |
| Engagement medio | ~4,7% (hasta 4-5x) | ~1-2% |
| Alcance organico (tendencia) | Domina la distribucion | **-60% a -66%** desde 2024 |
| Rol estrategico | Voz, autoridad, conversacion, leads | Prueba de marca, empleo, ads, retargeting |

> [!tip]
> **Routing PERSONA vs EMPRESA (modelo employee-advocacy / founder-led):**
> - **MODO PERSONA:** el motor de alcance. Founder, ejecutivos, SMEs y empleados publican en primera persona. Es donde 360Brew premia la voz individual.
> - **MODO EMPRESA:** si hay que publicar desde la pagina, **liderar con personas + video nativo + amplificacion de empleados**. Las paginas reciben menos comentarios de pares, por lo que estructuralmente fallan el umbral de comentarios de la golden hour. Palanca principal para recuperar alcance: que los empleados (con su perfil personal) engagen el post de la pagina en los primeros 60 min para sembrar la distribucion. Evitar links y CTAs de venta directa.
