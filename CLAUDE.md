# Bannaa: notes for AI coding assistants

Read [docs/architecture-and-mvp-scope.md](docs/architecture-and-mvp-scope.md) before designing or building anything, and [docs/decisions.md](docs/decisions.md) for what has been agreed. Build in the order of [docs/roadmap.md](docs/roadmap.md): one task at a time, each tested and merged before the next. Don't change an agreed decision without asking Yusuf first.

## Working with Yusuf

- Keep answers brief and in plain language.
- When he says "we're still discussing", don't change code or docs yet.
- When a decision changes, update `docs/decisions.md` and the plan in the same change.

## Rules that must never break

- **Never copy Shift.** shiftyourphone.com is a feature reference only. Don't use its design, text, branding or code.
- **Fail closed.** A dead battery, reboot, clock change or lost connection never ends a block early.
- **Only the paired desktop can loosen.** Every loosening command is signed (Ed25519) with a counter and expiry. The phone rejects unsigned or replayed commands. The phone's own UI can only tighten.
- **One policy gate.** Every loosening request on the phone goes through one function that checks the cool-off, active windows and strict mode (including its exit countdown). New checks are added there, never around it.
- **No loosening during a window.** Requests made during a focus session or scheduled window are held until it ends.
- **No servers in the MVP.** Nothing leaves the user's devices.
- **Secrets never enter the repo.** No signing keys, certificates, recovery phrases or the creator's master key. `.gitignore` blocks common key files, but check every commit.

## Arabic first

- Arabic RTL is the default. English LTR is a full second version.
- Use CSS logical properties only (`margin-inline-start`, `ps-`, `me-`). Never `left` or `right`; a lint rule enforces this.
- Wrap Latin app names in `<bdi>` inside Arabic text.
- Write Arabic strings first. Every user-facing string goes through i18n, never hard-coded.

## Planned layout

`desktop/` (Tauri 2 + Rust + React), `desktop/ios-bridge/` (Go on go-ios), `android-agent/` (Kotlin), `ios-helper/` (Swift), `tools/recovery-signer/` (Rust). Only permissive licenses (MIT, Apache). No GPL or LGPL libraries without a license review.
