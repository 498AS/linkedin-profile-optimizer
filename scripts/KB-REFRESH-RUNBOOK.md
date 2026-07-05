# Runbook — Refresh trimestral del knowledge base

> El cerebro del skill (`references/knowledge-base-2026.json` + prompt v3.x) se re-verifica cada trimestre. Este runbook lo ejecuta el scheduled task `linkedin-kb-refresh` (cron `0 9 1 1,4,7,10 *`, es decir 1 de enero/abril/julio/octubre a las 9:00) o cualquier sesion de Claude Code a mano.

## Pasos

1. **Re-investigar.** Lanzar el workflow (12 agentes, verificacion web):
   `Workflow({scriptPath: "/Users/cop/.claude/skills/linkedin-profile-optimizer/scripts/kb-refresh.workflow.js"})`
   Guardar el array `packs` del resultado como JSON en el scratchpad: `kb-fresh-YYYYMMDD.json`.

2. **Diff contra el KB vigente.**
   ```bash
   python3 ~/.claude/skills/linkedin-profile-optimizer/scripts/kb_diff.py \
     ~/.claude/skills/linkedin-profile-optimizer/references/knowledge-base-2026.json \
     kb-fresh-YYYYMMDD.json -o kb-refresh-proposal-YYYYMMDD.md
   ```

3. **Archivar la propuesta.** Copiarla al vault:
   `.../BIBLIOTECA_COP_2026/proyectos-claude/_OUTPUTS/{YYYY-MM}/kb-refresh-proposal-YYYYMMDD.md`
   y abrir un issue con ella para dejar rastro auditable:
   ```bash
   gh issue create -R 498AS/linkedin-profile-optimizer \
     -t "KB refresh YYYY-QN: propuesta de actualizacion" -F kb-refresh-proposal-YYYYMMDD.md
   ```

4. **Aplicar (solo con revision humana).** Si hay cambios sustantivos:
   - Actualizar el **prompt canonico** (`SYSTEM-PROMPTS/system_prompt_linkedin_specialist_zoopa.md`).
   - Resincronizar las **5 copias** (vault x2, zoopa_shared, linkedin_profiles_OPT, skill `system-prompt/`) y verificar **mismo MD5**.
   - Regenerar/editar las `references/` afectadas y, si cambian cifras estructurales, sustituir `knowledge-base-2026.json` por el fresco.
   - `CHANGELOG.md` (version minor) -> commit + push.

5. **Si no hay cambios:** comentar el issue con "sin cambios sustantivos" y cerrar. No tocar el prompt.

## Reglas

- El diff **sobre-detecta** en guidelines (los agentes reescriben textos): fiarse de los **valores cambiados** y de las **areas nuevas**; lo demas es churn probable.
- Ninguna cifra entra al prompt sin fuente del run fresco.
- Si el workflow falla a mitad, se puede reanudar: `Workflow({scriptPath, resumeFromRunId})`.
