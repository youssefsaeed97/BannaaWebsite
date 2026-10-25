# Bannaa (بنّاء)

Bannaa is an Arabic-first desktop app for Mac and Windows that locks distracting apps on the user's own phone, in a way the phone alone can't undo. A one-time USB setup makes the desktop the "key holder". After that, the phone enforces blocks by itself and obeys only commands signed by that desktop.

- **Android:** a device-owner agent, installed by the desktop over USB, blocks apps and runs schedules on the phone.
- **iPhone:** supervision plus a permanent profile locks the phone down, and a small Bannaa helper app (Screen Time APIs) runs schedules on the phone.
- **Languages:** Arabic (RTL) first, with a full English (LTR) version at launch.

## Status

Planning is done and the MVP scope is final (18 Oct 2026). No app code yet. The build starts with the phase 0 feasibility spikes in the plan.

The marketing website template is up (25 Oct 2026): https://d5ts1a7bd9bbi.cloudfront.net (temporary address until a domain is chosen). See [website/README.md](website/README.md).

## Documents

| File | What it is |
| --- | --- |
| [docs/architecture-and-mvp-scope.md](docs/architecture-and-mvp-scope.md) | The full plan: how enforcement works, architecture, rules, recovery, tech stack, MVP scope, milestones, risks |
| [docs/decisions.md](docs/decisions.md) | Every product decision made so far, with dates, plus what is still open |
| [docs/roadmap.md](docs/roadmap.md) | The implementation roadmap: phases, tasks, engineering standards, tests and how each step is reviewed (proposal, 21 Oct) |
| [CLAUDE.md](CLAUDE.md) | Working rules for AI coding assistants on this repo |

The plan also lives as an editable doc: https://claude.ai/code/artifact/92c68e04-ca3e-4611-99b7-1ebd14c61271 . If the two ever differ, update this repo copy to match.

## Layout

`website/` exists. The other folders don't exist yet; they are created as each part of the build starts.

| Folder | Part | Stack |
| --- | --- | --- |
| `website/` | Marketing website (static, separate from the app) | React + TypeScript + Vite, hosted on S3 + CloudFront, deployed by GitHub Actions |
| `desktop/` | Desktop app | Tauri 2, Rust core, React + TypeScript + Vite, Tailwind, i18next |
| `desktop/ios-bridge/` | iPhone USB and profile sidecar | Go on go-ios (MIT) |
| `android-agent/` | Android device-owner agent | Kotlin, Jetpack Compose, minSdk 26 |
| `ios-helper/` | iPhone helper app | Swift, SwiftUI, Screen Time APIs |
| `tools/recovery-signer/` | The creator's offline recovery-code tool | Rust |
