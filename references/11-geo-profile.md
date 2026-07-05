# Modulo GEO del perfil - como te ven las IAs (paso 3.5 opcional)

> Parte del skill **linkedin-profile-optimizer**. Mide como perciben a la PERSONA los motores de respuesta (ChatGPT, Gemini, Perplexity, AI Overviews) y conecta el resultado con la optimizacion del perfil. Usa la plataforma GEORadar (MCP `georadar` o CLI `radar`). Piloto validado: proyecto "Perfil GEO · Carlos Ortet" (jul 2026).

---

> [!info] Por que importa
> LinkedIn es una de las superficies que los motores de respuesta citan al responder "¿quien es X?" o "¿que referentes hay en Y?". En 2026 la marca personal tiene dos audiencias: las personas que te buscan y las IAs que responden por ti. Un perfil optimizado que las IAs no recuperan es visibilidad a medias. Este modulo mide la segunda audiencia.

## 1. Cuando ofrecerlo

- Tras la auditoria (Paso 3) en MODO A o DUAL: "¿Medimos tambien como te ven las IAs?"
- Standalone: "¿que dice ChatGPT de mi?", "¿aparezco cuando preguntan por expertos en mi nicho?"
- En MODO C: el mapa de afinidad gana una dimension (¿a quien recomienda la IA en el nicho del objetivo?).

**Degradacion elegante:** si el MCP de GEORadar no esta disponible, version ligera manual: 10-15 prompts sonda lanzados a mano en los motores, registrados en el template. Menos ciencia, misma estructura.

## 2. Diseno del estudio (convencion validada en el piloto)

| Elemento | Valor piloto | Regla |
|---|---|---|
| Proyecto | `Perfil GEO · {Nombre}` | Descripcion con autor + fecha. `organizationId` requerido al crear |
| Entidades | La persona (type `person`, aliases con variantes del nombre) + sus marcas (empresa, producto) como own secundarias | La coherencia de entidad (¿Carles = Carlos?) se sondea con un prompt especifico |
| Personas (buyer) | 2-3: decisor que contrata en el nicho · periodista/analista · neutral (autocreada) | El neutral lleva los prompts con marca |
| Funnels | awareness / consideration / decision | Decision = share of voice de personas expertas |
| Prompts | ~52 · **mix 70/30 sin marca / con marca** | Sin marca: "¿quien es referente en {nicho}?", "¿a quien contrato para X?". Con marca: "¿quien es {nombre}?", "¿es fiable en {tema}?". Bulk import con tags `persona:` `funnel:` `marca:` |
| Motores | 3: GPT-4o Mini (mainstream) · Gemini Flash Lite (mundo Google) · **Perplexity Sonar (retrieval: unico que revela fuentes)** | 1 run por motor, ~52 tasks cada uno |
| Volumen | ~156 tasks | Trivial frente a los 3.000-30.000 de un estudio de marca |

**Flujo tecnico (MCP):** create_project (con organizationId) → create_entity + put relation own → create_funnel ×3 → create_persona ×2 (neutral autocreada) → prompts/bulk → update_persona.promptIds → create_audit (ad-hoc, personaIds) ×3 → estimate → prepare_and_launch (approved) → progress → analytics.

## 3. Que se mide (el scorecard)

| Dimension | Pregunta | De donde sale |
|---|---|---|
| **Visibilidad sin marca** | ¿Aparece la persona cuando nadie la nombra? ¿En que posicion vs peers? | entity_metrics / mentions en prompts `marca:sin-marca` |
| **Percepcion con marca** | ¿Que dice la IA al preguntar por ella? ¿Acierta cargo, empresa, trayectoria? ¿Alucina? **Regla del piloto: antes de marcar un dato como alucinado, contrastarlo contra las fuentes propias del sujeto (web, LinkedIn); puede ser informacion correcta que el sujeto publico** | responses de prompts `marca:con-marca` |
| **Atributos** | ¿Que atributos asocia la IA vs los que el perfil declara (pilares)? | attribute_mentions + lectura de respuestas |
| **Coherencia de entidad** | ¿Une la IA las variantes del nombre y las marcas (persona ↔ empresa ↔ producto)? | prompt sonda + co-menciones de entidades own |
| **Fuentes** (el dato de oro) | ¿Que superficies alimentan la respuesta? ¿Aparece LinkedIn? ¿Su web? ¿Medios? | response_sources del run de Perplexity (source_domain) |
| **Competencia emergente** | ¿A quien SI menciona la IA en el nicho? | entity_discovery_events (type person/company) |

## 4. Remediacion (conectar con la optimizacion LinkedIn)

La palanca depende del diagnostico:

| Hallazgo | Remediacion |
|---|---|
| Invisible sin marca | Pilares de contenido = exactamente los terminos del nicho que la IA usa; autoridad externa (bylines, medios, podcasts que los motores citan) |
| Con marca: datos pobres o alucinados | **E-E-A-T de entidad**: About/web personal con bio canonica, schema sameAs (LinkedIn ↔ web ↔ X ↔ GitHub), Wikipedia-ability, coherencia de nombre en todas las superficies |
| LinkedIn no aparece como fuente | Perfil publico completo (About indexable), contenido long-form (articulos/newsletter indexables), URL vanity |
| Atributos desalineados | Reescribir headline/About para declarar los atributos objetivo + contenido que los demuestre (el expertise match de 360Brew y el de los motores de respuesta van en la misma direccion) |
| Peers dominan el share of voice | Analizar sus fuentes (¿donde publican?) y plan de presencia en esas superficies |

> [!warning] Compliance del modulo
> Se audita a la persona sujeto (con su encargo) o a peers como **entidades publicas de mercado** (igual que cualquier estudio de marca). Sin scraping de LinkedIn: los motores responden con su propio indice. Los resultados con datos de terceros se tratan como benchmark competitivo profesional, no como dossier personal.

## 5. Entregable

`templates/geo-profile-audit.md` → seccion nueva del informe (o anexo del informe de optimizacion): scorecard por motor + tabla de atributos + fuentes + plan de remediacion. Nomenclatura: `AUDIT_GEO_Perfil_{sujeto}_v01_ZOOPA_{autor}_{YYYYMMDD}`.

## 6. Checklist del modulo

> [!check] GEO del perfil
> - [ ] Consentimiento del sujeto y nicho definido (2-4 territorios)
> - [ ] Proyecto GEORadar con entidad person + aliases + marcas propias
> - [ ] ~52 prompts 70/30 en 3 buyer personas; con-marca en el neutral
> - [ ] 3 runs (mainstream + Google + retrieval) estimados antes de lanzar
> - [ ] Scorecard: visibilidad sin marca · percepcion con marca · atributos · coherencia de entidad · fuentes · competencia emergente
> - [ ] Remediacion conectada al plan LinkedIn (pilares = atributos objetivo)
> - [ ] Re-medicion prevista (trimestral o tras 90 dias de plan)
