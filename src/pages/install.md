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
sudo dnf install Novoforge-*.rpm
```

## Updates

Installers check the GitHub Releases feed automatically and prompt when a new
version is available (Help → Check for Updates triggers a manual check). For
the AppImage, update by simply running the new version; the Windows installer
updates in place.

## Requirements

64-bit Linux, Windows or macOS, ~500 MB disk space. Works offline after download —
your data never leaves your machine.
