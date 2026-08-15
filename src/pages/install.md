---
layout: ../layouts/Base.astro
title: Install — Novoforge
docs: true
---

# Install

Novoforge ships installers for Linux and Windows. Grab the latest from the
[releases page](https://github.com/mahabubone/project-novoforge/releases/latest).
macOS builds are planned.

## Linux

| Package   | Format        | Best for                          |
| --------- | ------------- | --------------------------------- |
| AppImage  | `.AppImage`   | Portable — no install, just run   |
| Debian    | `.deb`        | Debian / Ubuntu / Mint            |
| RPM       | `.rpm`        | Fedora / RHEL / openSUSE          |

AppImage:

```bash
chmod +x Novoforge-*.AppImage
./Novoforge-*.AppImage
```

Debian / Ubuntu:

```bash
sudo apt install ./Novoforge-*.deb
```

Fedora / RHEL:

```bash
sudo dnf install Novoforge-*.rpm
```

## Windows

Run `Novoforge-*-setup.exe` and follow the installer. It creates a desktop
shortcut and registers the app for auto-updates.

## Updates

Installers check this site's release feed automatically. For the AppImage,
update by simply running the new version; the Windows installer updates in
place.

## Requirements

64-bit Linux or Windows, ~500 MB disk space. Works offline after download —
your data never leaves your machine.