---
layout: ../layouts/Base.astro
title: Install — Novoforge
docs: true
description: How to install Novoforge on Linux, Windows, and macOS. Download AppImage, deb, rpm, NSIS, or DMG. Works offline, free for personal use.
---

# Install

Novoforge ships installers for Linux, Windows and macOS. Grab the latest from the
[releases page](https://github.com/mahabubone/project-novoforge/releases/latest).

## macOS

The macOS build is a `.dmg` disk image. It is **unsigned** (no Apple Developer
account), so Gatekeeper will block it on first launch. To open it:

1. Open the `.dmg` and drag Novoforge into **Applications**.
2. Right-click (or Control-click) the app and choose **Open**.
3. Click **Open** in the confirmation dialog.

Or, after the first blocked launch, go to **System Settings → Privacy & Security**
and click **Open Anyway**.

## Quick start

**Linux AppImage** (works on most distros, no install):

```bash
chmod +x Novoforge-*.AppImage
./Novoforge-*.AppImage
```

**Windows**:

Run `Novoforge-*-setup.exe` and follow the installer. It creates a desktop
shortcut and registers the app for auto-updates.

## Linux packages

| Package   | Format        | Best for                          |
| --------- | ------------- | --------------------------------- |
| AppImage  | `.AppImage`   | Portable — no install, just run   |
| Debian    | `.deb`        | Debian / Ubuntu / Mint            |
| RPM       | `.rpm`        | Fedora / RHEL / openSUSE          |

Debian / Ubuntu:

```bash
sudo apt install ./Novoforge-*.deb
```

Fedora / RHEL:

```bash
sudo dnf install ./Novoforge-*.rpm
```

> Prefer `apt`/`dnf` over `dpkg -i`/`rpm -i`: the package managers resolve the
> required system libraries automatically, while the low-level tools leave a
> half-installed package if any are missing.

## Uninstall

Debian / Ubuntu:

```bash
sudo apt remove novoforge
```

Fedora / RHEL:

```bash
sudo dnf remove novoforge
```

AppImage: just delete the `.AppImage` file. Your projects are plain folders on
disk and are never touched by uninstalling.

## Updates

All installers check the GitHub Releases feed and notify you when a new
version is available (Help → Check for Updates triggers a manual check).

- **Windows** — updates install in place.
- **AppImage** — download the new version and run it (replace the old file).
- **deb / rpm** — you'll be pointed to the new installer; download and install
  it with the commands above.

## Requirements

64-bit Linux, Windows or macOS. ~300 MB installed. Works offline after
download — your data never leaves your machine.
