# Decisions

Product decisions agreed with Yusuf, newest last. The full reasoning is in [architecture-and-mvp-scope.md](architecture-and-mvp-scope.md). Change a decision here only after it has been agreed again.

## Open

- **Free or paid.** Not decided. If free: no license keys or activation. If paid: Paddle or Lemon Squeezy sells a signed key, with an activation limit checked once at setup (their server, not ours).

## Product and market

- **16 Oct.** Shift (shiftyourphone.com) is a feature reference only. Never copy its design, text or branding, and never reverse-engineer its app.
- **16 Oct.** Android is built first. iPhone follows with the same features.
- **17 Oct.** Launch order: Egypt, then Saudi Arabia and the UAE, then the rest of MENA, then worldwide. Defaults follow Egypt: Friday-Saturday weekend, test phones Samsung, Xiaomi, Oppo, Infinix plus a Pixel.
- **17 Oct.** Parent mode is not in the MVP. It is planned for phase 2 or 3, so the design keeps room for it.
- **17 Oct.** No servers and no user accounts in the MVP. Identity is the 24-word phrase plus device keys. The build is server-ready: signed commands work over any route, recovery codes are a plug-in, messages are versioned, the agent is updatable, and data uses random IDs.

## Languages

- **17 Oct.** Arabic RTL is the default. English LTR is a full second version at launch.
- **17 Oct.** The phone side follows the phone's language. The desktop follows the computer's language on first launch, with a switch in settings. iPhone profile names are written in the iPhone's language at install. Arabic is the fallback.

## Blocking rules

- **16 Oct.** Only the paired desktop can loosen anything. It signs every loosening command, and the phone checks the signature.
- **16 Oct.** Manual blocks end from the desktop, after the cool-off. Focus sessions and scheduled windows end only when their time runs out.
- **16 Oct.** No loosening takes effect during a focus session or scheduled window. Requests made then are held until it ends.
- **16 Oct.** Loosening covers allowing an app, editing or cancelling a schedule, lowering the cool-off, turning off the explicit content filter and retiring the phone.
- **18 Oct.** The cool-off delay can be set from 0 minutes to 7 days (default 10 minutes). Raising it applies at once. Lowering it is itself a loosening.
- **18 Oct.** Setup asks the user to pick a mode, with normal pre-selected. Normal: loosening allowed after the cool-off. Strict: a 7, 30 or 90-day time lock where nothing can be loosened, then back to normal. (Revised the same day, see the next entry.)
- **18 Oct (revised).** Strict mode has no end date. It stays on until the user asks the desktop to end it, and only then does the exit countdown picked at setup (7, 30 or 90 days) start. Nothing can be loosened while strict mode is on, countdown included. Cancelling the request applies at once. A request made during a focus session or window starts counting when the window ends. The countdown length can be raised but never lowered while strict mode is on.
- **18 Oct.** Every loosening passes one policy gate on the phone, so future checks (accountability-partner PIN, never-removable categories) can plug in.
- **18 Oct.** Retiring a phone stays (Shift also allows removal outside blocks). It needs the paired desktop, is refused during any block or window or while strict mode is on, and waits the longer of 24 hours or the cool-off.

## Explicit content filter

- **17 Oct.** In the MVP, always on, separate from blocks. Arabic label: «حجب المحتوى غير اللائق», with a one-line explanation. It was first checked by default at setup with the option to untick it (replaced on 18 Oct, see below).
- **18 Oct.** Filter scope for the MVP: a family-filter provider's site list, with Bannaa's own list added on top if needed, and SafeSearch forced on Google, Bing and DuckDuckGo in every browser on both phones (Android: the agent's VPN answers with SafeSearch-only addresses; iPhone: a locked family DNS in the base profile). Parked: explicit search-term blocking, filtered Instagram/X/Reddit, AI scanning of pages and images.
- **18 Oct (evening).** The filter is mandatory, replacing the setup checkbox. Setup shows that it is being turned on and takes effect on installation, with no option to untick it. It can't be turned off later from the desktop or the phone; only retiring the phone removes it.

## iPhone

- **16 Oct.** Supervision setup is swappable, tried in order: tiny restore (target, no data touched), full backup-modify-restore, then erase. The user turns off Find My during setup.
- **18 Oct.** The iPhone helper app is in the MVP, so neither phone depends on the desktop or Wi-Fi after setup. It is an unlisted, one-screen App Store app, opened from a QR code during setup. Installing it over USB isn't possible for public users.
- **18 Oct.** Plan B if the helper isn't ready in time: the desktop times blocks by pushing the block profile over USB or home Wi-Fi.

## Recovery (lost computer)

- **16 Oct.** Android: the 24-word phrase alone restores the desktop's key. iPhone: the phrase plus an encrypted kit file holding the supervision identity.
- **17 Oct.** Two free restores, counted on the phone. After that, or when the phrase is lost, the creator signs a one-time answer code for that phone's request code, using an offline master key that never leaves the creator.
- **17 Oct.** A restore never resets rules. Nothing loosens for 24 hours after a restore, and a re-key shows a takeover notice and waits a few hours.
- **17 Oct.** On iPhone, the helper app holds a sealed copy of the kit and words, locked with a per-phone key that is itself locked to the creator's public key.

## Parked (not in the MVP)

Accountability-partner PIN, fixed never-removable categories, parent mode, mandatory explicit content filter, optional server, prayer-time and Ramadan presets. See "Future options" in the plan.
