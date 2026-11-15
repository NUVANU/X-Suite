# X Suite

**Take your idea beyond the prototype.**

An open-source engineering governance and evidence toolkit for AI-assisted development.

**English** · [简体中文](README.zh-CN.md)

[Get started](INSTALL.md) · [XMi](https://github.com/NUVANU/XMi) · [XDev](https://github.com/NUVANU/XDev) · [XMem](https://github.com/NUVANU/XMem)

The first AI-built demo looks promising. Then a small change breaks an earlier rule, a new chat loses a decision, or “tests passed” turns out to refer to yesterday's code.

**X Suite makes intent, project history, and delivery evidence easier to inspect.** XMi clarifies what to build. XDev checks scope and delivery evidence. XMem preserves applicable engineering history. Your coding host and model still perform development.

## Three tools, clear responsibilities

| Tool | What it adds | When it helps |
| --- | --- | --- |
| **XMi** | Guided clarification, owner-confirmed XSpec, version-bound architecture, and review handoff | Turn a product idea into agreed behavior and scope |
| **XDev** | Lightweight governance at entry, changes/interruption, and delivery; candidate-bound Review/QA evidence and bounded recovery | Judge whether the actual change is ready to deliver |
| **XMem** | Local engineering records, revisions, sources, bounded retrieval, and checkpoints | Carry constraints, decisions, failures, and unknowns across sessions |

Use each tool independently or combine them. XMi is optional for an already clear task; XDev does not require creating a memory database for every project.

## Why try it?

| A common AI development problem | The suite's response |
| --- | --- |
| An idea leaves behavior undefined | XMi surfaces open questions before confirmation |
| A suggestion becomes an unapproved feature | Preserve decisions and scope; inspect conformance in Review |
| New sessions repeat a failed approach | Retrieve the original engineering record and its evidence |
| Review and QA refer to different candidates | Bind stage records to the project, task, and actual files |
| Interruption causes duplicate execution | Inspect original claims/results before bounded recovery |
| Small operations accumulate excessive process | XDev routes ordinary reversible work to proportionate checks |

## A typical flow

```text
Describe the product
       ↓
XMi: clarify → confirm → specification / architecture
       ↓
Host: search → design → code → debug → coordinate agents
       ↕
XMem: retrieve applicable history; save/read back key findings
       ↓
XDev: check current scope, independent Review, actual QA, delivery
```

The host owns tools, scheduling, sessions, permissions, and lifecycle. XDev is the governance layer; XMem persists evidence. Historical content is context, not fresh execution authority. Hashes check content consistency, not whether a conclusion is true.

## Current public sources and downloads

| Component | Version | Download / documentation |
| --- | --- | --- |
| XMi | **0.1.2** | [Release](https://github.com/NUVANU/XMi/releases/tag/v0.1.2) · [Lightweight ZIP](https://github.com/NUVANU/XMi/releases/download/v0.1.2/xmi-0.1.2-lite.zip) · [Source ZIP](https://github.com/NUVANU/XMi/releases/download/v0.1.2/xmi-0.1.2-source.zip) · [Checksums](https://github.com/NUVANU/XMi/releases/download/v0.1.2/SHA256SUMS.txt) |
| XDev | **0.1.3 — R4 / MECH-02 source update** | [Source](https://github.com/NUVANU/XDev) · [Source ZIP](https://github.com/NUVANU/XDev/archive/refs/heads/main.zip) · [Update note](https://github.com/NUVANU/XDev/blob/main/docs/PUBLIC-UPDATE-20261115.md) |
| XMem | **0.1.2 — R6 RestoreBudget source update** | [Source](https://github.com/NUVANU/XMem) · [Source ZIP](https://github.com/NUVANU/XMem/archive/refs/heads/main.zip) · [Update note](https://github.com/NUVANU/XMem/blob/main/docs/PUBLIC-UPDATE-20261115.md) |

XDev/XMem main-branch ZIPs are moving source archives, not fixed binary Release assets; record the commit when reproducing a result. XMi's release notes include known dependency-audit findings.

### What changed in this update?

**XDev:** new formal Node work uses one v5 contract without a three-tier selector. Ordinary reversible operations use necessary checks; product changes retain non-author Review and actual QA. Shallow integration keeps the host in charge of development.

**XMem:** reserve recovery-interpretation bytes before context compilation, then check the combined context/continuity/interpretation against the unchanged budget. Mandatory material is preserved or fails explicitly; optional records can remain references.

**Integration:** prefer the host's directly configured native XMem connection. The older XDev bridge remains restricted to qualified builds/storage modes; these new sources do not automatically establish a new bridge qualification or joint end-to-end acceptance.

## Get started

Follow [INSTALL.md](INSTALL.md) for the Windows/Codex source path. Keep source/runtime directories, initialize actual projects with consent, and verify the loaded services after reconnecting. Installation, project binding, independent Review, actual QA, and release acceptance are separate checks.

Once set up, an example request is:

> Clarify the unresolved product decisions with XMi. Let the host implement the confirmed scope. Use configured XMem for applicable history and XDev to inspect entry, relevant changes, and delivery. Report the actual candidate, evidence, and remaining unknowns.

## Evidence and limits

The upstream XDev R4 core has scoped local acceptance. MECH-02 passed independent Review and six host-policy scenarios: three executed fixture operations plus three decision cases. XMem's budget fix passed an 89/89 regression package and a separate overlapping 19/19 supplementary Core package. These are component results, not a benchmark proving model accuracy, lower cost, or universal installation support.

The XDev MCP runner supports an exact bounded Node command, not general browser/game-engine QA. Other hosts, operating systems, fresh-machine setup, unattended recovery, and the newly combined suite need their own validation. No bug-reduction, recall-accuracy, or token-saving percentage is claimed here.

Memory is stored locally; retrieved content may still be sent to the coding host's model provider. Keep credentials, private conversations, and live databases out of public repositories.

## Explore and contribute

- [XMi workflow](https://github.com/NUVANU/XMi/blob/main/docs/public/WORKFLOW.md)
- [XDev community workflow](https://github.com/NUVANU/XDev/blob/main/docs/COMMUNITY.md)
- [XMem setup and daily use](https://github.com/NUVANU/XMem/blob/main/docs/STANDALONE-SEMI-AUTO.md)
- [Report an integration issue](https://github.com/NUVANU/X-Suite/issues)

Include component commits, host/runtime versions, a small reproduction, and redacted receipts when reporting issues.

## License

This repository's integration material uses [Apache-2.0](LICENSE). XMi uses Apache-2.0; XDev and XMem use MPL-2.0. Dependencies retain their own licenses.
