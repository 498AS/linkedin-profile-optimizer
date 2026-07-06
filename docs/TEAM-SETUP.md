# Onboarding de equipo — usar este skill en tu máquina (5 minutos)

> Para miembros de Zoopa / 498A (o cualquiera): cómo instalar y usar `linkedin-profile-optimizer` en tu propio Claude Code.

## 1. Requisitos

- **Claude Code** instalado y con sesión iniciada (app de escritorio, CLI o claude.ai/code).
- Git.

## 2. Instalación (un comando)

```bash
git clone https://github.com/498AS/linkedin-profile-optimizer.git ~/.claude/skills/linkedin-profile-optimizer
```

Reinicia la sesión de Claude Code y ya puedes invocarlo:

```
/linkedin-profile-optimizer
```

O en lenguaje natural: "optimiza mi perfil de LinkedIn", "auditar la company page de X", "afinidad con mi nuevo jefe".

## 3. Qué funciona de serie y qué necesita configuración

| Funcionalidad | ¿De serie? | Si no, qué necesitas |
|---|---|---|
| Modos A (persona), B (empresa), C (afinidad), DUAL, FLOTA | ✅ Sí | Nada: references y templates van en el repo |
| Auditoría, reescritura, planes, compliance gate | ✅ Sí | Nada |
| Lectura de tu perfil en vivo | ✅ Sí | Extensión **Claude in Chrome** + tu sesión de LinkedIn abierta. Solo lectura y solo tu propio perfil |
| **Capa GEO del perfil** (paso 3.5) | ⚙️ No | El MCP de GEORadar con **tu API key personal** (el equipo ya tiene keys: pídesela a Carlos/Tomás). Añadir a `~/.claude.json`: `"georadar": {"type": "http", "url": "https://mcp.georadar.app/mcp", "headers": {"X-API-Key": "TU_KEY"}}`. Sin MCP, el skill ofrece la versión manual (prompts sonda a mano) |
| Entregable con marca (one-pager/deck) | ⚙️ No | Skills `mczoopa` / `deck-zoopa` instalados. Sin ellos, el skill entrega en markdown (funciona igual) |
| Filtro de voz humana | ⚙️ Parcial | Skill `humanize-text` instalado (recomendado). La referencia de voz de Carlos (`content-factory`) solo aplica a su cuenta personal |
| Publicación en entregas.zoopa.es | ⚙️ No | Skill `customer-docs` + permisos en el repo `498AS/customer-docs` |

## 4. Rutas de salida

Las rutas por defecto del SKILL.md apuntan al vault de Carlos. Si no lo tienes montado, di al skill dónde guardar los entregables ("guárdalo en ~/Documents/…") o edita la tabla "Rutas de output" de tu copia local.

## 5. Mantenimiento

- **Actualizaciones**: `git -C ~/.claude/skills/linkedin-profile-optimizer pull` de vez en cuando (el cerebro se re-verifica cada trimestre y los cambios llegan por aquí).
- **No toques el canon**: el prompt canónico y las references los mantiene Carlos (el cron trimestral corre en su máquina). Si mejoras algo, PR al repo.
- **Cumplimiento**: el skill nunca automatiza acciones en LinkedIn ni scrapea; todo cambio de perfil lo pega el titular a mano. No lo puentees.

## 6. Primer uso recomendado

1. Invoca `/linkedin-profile-optimizer`.
2. Elige **A) Persona** y pega tu headline + About + experiencia (o lectura en vivo).
3. Responde el discovery (objetivo, audiencia, pruebas reales).
4. Recibirás scorecard → opciones de headline → About → plan 30 días → checklist de cumplimiento.
5. Pega tú los cambios en LinkedIn. El skill nunca lo hace por ti.
