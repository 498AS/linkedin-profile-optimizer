#!/usr/bin/env python3
"""kb_diff.py — compara dos knowledge bases del skill linkedin-profile-optimizer
y genera una propuesta de actualizacion en markdown.

Uso:
    python3 kb_diff.py OLD.json NEW.json [-o proposal.md]

OLD = references/knowledge-base-2026.json (el KB vigente)
NEW = salida `packs` del workflow scripts/kb-refresh.workflow.js

El diff es una AYUDA a la propuesta, no un veredicto: los agentes reescriben
los textos entre runs, asi que el matching es por claves estables (dimension,
area, field). Revision humana obligatoria antes de tocar el prompt canonico.
"""
import argparse
import json
import sys
from datetime import date


def norm(s):
    return " ".join(str(s or "").lower().split())


def spec_map(pack):
    return {norm(x.get("field")): str(x.get("value", "")).strip()
            for x in (pack.get("specs_or_benchmarks") or []) if x.get("field")}


def guideline_keys(pack):
    return {(norm(g.get("area")), norm(g.get("guideline"))): g
            for g in (pack.get("guidelines") or []) if g.get("guideline")}


def by_dim(packs):
    return {norm(p.get("dimension")): p for p in packs}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("old")
    ap.add_argument("new")
    ap.add_argument("-o", "--out", default=None)
    args = ap.parse_args()

    old_raw = json.load(open(args.old, encoding="utf-8"))
    new_raw = json.load(open(args.new, encoding="utf-8"))
    # aceptar tanto la lista de packs como {packs: [...]}
    old = by_dim(old_raw if isinstance(old_raw, list) else old_raw.get("packs", []))
    new = by_dim(new_raw if isinstance(new_raw, list) else new_raw.get("packs", []))

    L = []
    L.append(f"# Propuesta de actualizacion del KB — {date.today().isoformat()}")
    L.append("")
    L.append(f"> Diff `{args.old}` (vigente) vs `{args.new}` (re-investigado). "
             "Matching por claves estables; los textos reescritos pueden inflar el churn. "
             "REVISION HUMANA obligatoria: solo los cambios sustantivos pasan al prompt canonico.")
    L.append("")

    dims_old, dims_new = set(old), set(new)
    if dims_new - dims_old:
        L.append(f"**Dimensiones nuevas:** {sorted(dims_new - dims_old)}")
    if dims_old - dims_new:
        L.append(f"**Dimensiones sin datos frescos (mantener las vigentes):** {sorted(dims_old - dims_new)}")
    L.append("")

    total_changed = total_new_g = 0
    for dim in sorted(dims_old & dims_new):
        po, pn = old[dim], new[dim]
        changed = []   # specs con valor distinto
        added_s = []   # specs nuevas
        so, sn = spec_map(po), spec_map(pn)
        for f, v in sn.items():
            if f in so and norm(so[f]) != norm(v):
                changed.append((f, so[f], v))
            elif f not in so:
                added_s.append((f, v))
        go, gn = guideline_keys(po), guideline_keys(pn)
        # guideline nueva = area+texto no visto; con textos reescritos esto sobre-detecta,
        # asi que solo listamos las de AREAS nuevas o las 10 primeras del resto
        areas_old = {a for a, _ in go}
        new_area_g = [g for (a, _), g in gn.items() if a not in areas_old]
        maybe_new_g = [g for (a, t), g in gn.items() if a in areas_old and (a, t) not in go]

        if not (changed or added_s or new_area_g):
            continue
        total_changed += len(changed)
        total_new_g += len(new_area_g)

        L.append(f"## {dim}")
        L.append("")
        if changed:
            L.append("### Valores que han cambiado (revisar y actualizar)")
            L.append("")
            L.append("| Campo | Vigente | Fresco |")
            L.append("|---|---|---|")
            for f, a, b in changed:
                L.append(f"| {f} | {a} | **{b}** |")
            L.append("")
        if added_s:
            L.append("### Specs nuevas detectadas")
            L.append("")
            L.append("| Campo | Valor |")
            L.append("|---|---|")
            for f, v in added_s[:20]:
                L.append(f"| {f} | {v} |")
            if len(added_s) > 20:
                L.append(f"| ... | +{len(added_s)-20} mas |")
            L.append("")
        if new_area_g:
            L.append("### Guidelines en areas NUEVAS (alta señal de cambio real)")
            L.append("")
            for g in new_area_g[:15]:
                L.append(f"- **[{g.get('area','')}]** {g.get('guideline','')}")
            L.append("")
        if maybe_new_g:
            L.append(f"<details><summary>Posibles guidelines nuevas en areas conocidas "
                     f"({len(maybe_new_g)} — churn probable por reescritura)</summary>")
            L.append("")
            for g in maybe_new_g[:10]:
                L.append(f"- [{g.get('area','')}] {g.get('guideline','')}")
            L.append("")
            L.append("</details>")
            L.append("")
        srcs = pn.get("sources") or []
        if srcs:
            L.append(f"<details><summary>Fuentes del run fresco ({len(srcs)})</summary>")
            L.append("")
            for s in srcs[:15]:
                L.append(f"- {s}")
            L.append("")
            L.append("</details>")
            L.append("")

    L.append("---")
    L.append("")
    L.append(f"**Resumen:** {total_changed} valores cambiados · {total_new_g} guidelines en areas nuevas.")
    if total_changed == 0 and total_new_g == 0:
        L.append("")
        L.append("**Sin cambios sustantivos detectados.** No tocar el prompt canonico este trimestre; registrar el run.")
    else:
        L.append("")
        L.append("**Siguiente paso (runbook §4):** actualizar prompt canonico -> resync 5 copias (MD5) -> "
                 "regenerar references afectadas -> CHANGELOG -> commit+push.")
    out = "\n".join(L) + "\n"
    if args.out:
        open(args.out, "w", encoding="utf-8").write(out)
        print(f"proposal: {args.out} ({total_changed} cambios, {total_new_g} guidelines nuevas)")
    else:
        sys.stdout.write(out)


if __name__ == "__main__":
    main()
