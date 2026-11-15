# X Suite

**An engineering governance and evidence toolkit for AI coding projects.**

**Link requirements, changes, and acceptance so the next task starts with traceable evidence.**

**English** · [简体中文](https://github.com/NUVANU/X-Suite/blob/main/README.zh-CN.md)

[Get started](https://github.com/NUVANU/X-Suite/blob/main/INSTALL.md) · [XMi](https://github.com/NUVANU/XMi) · [XDev](https://github.com/NUVANU/XDev) · [XMem](https://github.com/NUVANU/XMem)

**AI keeps getting better at writing code. Who checks the quality of the work?**

A production line has quality checks at critical process stages. AI development needs similar checks: were the requirements confirmed, did the change stay within scope, do the passing tests cover the code being delivered, and can the next session find the original reasoning?

X Suite brings quality-management methods to AI coding projects. **XMi, XDev, and XMem** connect requirement confirmation, execution constraints, delivery verification, and project continuity. You keep using your coding host and model; the toolkit provides inspectable requirements, records, and a basis for engineering decisions.

## Give four questions a traceable answer

| What you need to know | What X Suite connects |
| --- | --- |
| **What did you confirm?** | XMi separates proposals, open questions, and adopted decisions in versioned specifications |
| **What changed in this version?** | XDev associates the current task, permitted scope, and candidate code |
| **What supports a passing result?** | XDev checks applicable non-author Review, actual QA, and the current version |
| **Which record should the next task use?** | XMem retrieves history and expands its original sources, revisions, and applicability |

## Three components, clear responsibilities

| Component | Responsibility | What you receive |
| --- | --- | --- |
| **[XMi](https://github.com/NUVANU/XMi)** | Requirement confirmation · Versioned specifications | An owner-confirmed XSpec covering intent, rules, exceptions, and acceptance, with version-bound architecture and review handoff |
| **[XDev](https://github.com/NUVANU/XDev)** | Execution constraints · Delivery verification | A connection between the task, actual changes, Review, and QA, with reasons a delivery passes or still needs verification |
| **[XMem](https://github.com/NUVANU/XMem)** | Engineering memory · Project continuity | Sourced, revisioned decisions, constraints, failed approaches, and checkpoints for later retrieval and inspection |

Combine the tools or start with one. A clear task can enter development governance directly; a project that only needs history retrieval can use XMem independently.

### XMi: clarify requirements and exceptions before development

Start with an idea, scattered notes, or an existing rule. Identify missing information, ambiguity, conflicts, and unresolved choices. The owner confirms product decisions; the result is a readable, exportable specification that downstream tools can inspect.

Keep what to build, what to exclude, how to judge completion, and what remains undecided visible. A suggestion should remain distinguishable from an approved requirement.

### XDev: connect the task, actual change, and acceptance

Use the host's search, design, coding, debugging, and agent coordination. XDev checks task entry, relevant changes or interruptions, and delivery. Product changes retain non-author Review and actual QA; missing evidence or mismatched versions prevent the affected delivery from being recorded as passed.

Ordinary reversible operations use proportionate checks. After an interruption, inspect the original records before authorized recovery, preserving failures and unknown outcomes.

### XMem: give the next contributor original records to inspect

Preserve permitted engineering decisions, exceptions, failed approaches, and checkpoints. Find records by project, task, or topic; move from previews to original bodies, then check their revision, sources, and present applicability.

Corrections, retractions, and history remain distinguishable. Finding a record still requires deciding whether it applies now. Saving, complete readback, and correct later adoption are separate checks.

## Who is it for?

- **Individuals building products with AI:** clarify requirements, inspect delivery evidence, and continue long tasks.
- **Nontechnical product creators:** participate through understandable confirmations and result explanations, with less manual engineering paperwork.
- **Small teams and multi-agent workflows:** check handoffs, code versions, review conclusions, and project experience.

Our product principles: **clear requirements, evidence-backed results, readable summaries, and accurate memory.**

## A minimal workflow

For a small local tool:

1. **Confirm requirements.** Tell XMi who uses it, its main actions, exclusions, and acceptance criteria. Confirm the specification.
2. **Develop and verify.** Let the host implement the agreed scope. Use XDev to connect the task, candidate code, non-author Review, and actual QA.
3. **Preserve and continue.** Save permitted decisions and findings through XMem, read them back, and checkpoint. A new session rechecks the project and task before adopting history.

```text
Confirm → Versioned specification → Task and scope → Host development → Review / actual QA → Verify delivery
                                        ↕                                                     ↕
                         XMem: retrieve applicable history, save/read back key records, support continuity
```

The host owns tool execution, sessions, scheduling, permissions, and lifecycle. XDev makes governance judgments; XMem persists and retrieves engineering records. Memory supports the process throughout. Historical content does not replace fresh execution authority.

## How can the evidence be checked?

| Mechanism | What it checks |
| --- | --- |
| Versioned product specifications and item states | Which decisions were adopted and which remain open |
| Project/task identity, file references, and content hashes | Which project, task, and actual bytes the material belongs to |
| Candidate-bound Review and QA records | Which code the review, executed command, and result support |
| Original-record reconciliation and bounded recovery | Whether a result already exists and what remains unknown |
| Memory revisions, sources, and scope checks | Whether the original changed and whether history applies now |

Hashes check content consistency; they do not independently prove a conclusion is true. Host policy, program checks, and actual execution evidence play different roles. Component documentation describes the supported paths.

## Current versions and downloads

| Component | Version | Download / documentation |
| --- | --- | --- |
| XMi | **0.1.2** | [Release](https://github.com/NUVANU/XMi/releases/tag/v0.1.2) · [Lightweight ZIP](https://github.com/NUVANU/XMi/releases/download/v0.1.2/xmi-0.1.2-lite.zip) · [Source ZIP](https://github.com/NUVANU/XMi/releases/download/v0.1.2/xmi-0.1.2-source.zip) · [Checksums](https://github.com/NUVANU/XMi/releases/download/v0.1.2/SHA256SUMS.txt) |
| XDev | **0.1.3** | [Source](https://github.com/NUVANU/XDev) · [Source ZIP](https://github.com/NUVANU/XDev/archive/refs/heads/main.zip) · [Update note](https://github.com/NUVANU/XDev/blob/main/docs/PUBLIC-UPDATE-20261115.md) |
| XMem | **0.1.2** | [Source](https://github.com/NUVANU/XMem) · [Source ZIP](https://github.com/NUVANU/XMem/archive/refs/heads/main.zip) · [Update note](https://github.com/NUVANU/XMem/blob/main/docs/PUBLIC-UPDATE-20261115.md) |

Start with the **[installation guide](https://github.com/NUVANU/X-Suite/blob/main/INSTALL.md)**. The documented local path focuses on Windows/Codex. XDev/XMem main ZIPs change with the branch; record the commit for reproduction. Release notes retain known issues and compatibility boundaries.

After installation and configuration checks, ask your agent:

> Develop the confirmed requirements. Use XDev at key stages to check scope and delivery evidence. Retrieve applicable history and save key records through configured XMem. Finish by explaining what changed, what was actually verified, and what remains unverified.

## Current progress and direction

Community source and installation entry points are public. Component update notes describe their actual validation records. Inspectable source, passing tests for a specific version, and user benefit require separate evidence.

Near-term priorities are reducing installation, maintenance, and engineering verification costs; strengthening real-project validation; and adapting to hosts such as DeepSeek Harness, WorkBuddy, and Qoder one platform at a time. Pro, team offerings, and broader evaluation capabilities remain roadmap work.

New hosts, cross-platform continuity, and new version combinations are validated separately. The supported Node QA path has explicit command and duration limits; it does not establish browser, game-engine, or all production acceptance, or a fixed bug-reduction or cost-saving percentage.

Engineering memory is stored locally. Retrieved content may be sent to the host's model provider. Save authorized material and redact public feedback appropriately.

## Explore and contribute

- [XMi workflow](https://github.com/NUVANU/XMi/blob/main/docs/public/WORKFLOW.md)
- [XDev community workflow](https://github.com/NUVANU/XDev/blob/main/docs/COMMUNITY.md)
- [XMem setup and daily use](https://github.com/NUVANU/XMem/blob/main/docs/STANDALONE-SEMI-AUTO.md)
- [Report an integration issue](https://github.com/NUVANU/X-Suite/issues)

Include component versions/commits, host/runtime, a small reproduction, and redacted results.

## License

This repository's integration material uses [Apache-2.0](https://github.com/NUVANU/X-Suite/blob/main/LICENSE). XMi uses Apache-2.0; XDev and XMem use MPL-2.0. Dependencies retain their own licenses.
