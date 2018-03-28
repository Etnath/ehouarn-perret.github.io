---
layout: post
title:  "Linux Administration - Notes: Package Management"
date:   2018-02-12 11:11:11 -0500
categories: linux package management
---

Content

* TOC
{:toc}

# Packages
- Collection of files.
- Data / Metadata:
  - Description.
  - Version.
  - Dependencies.

# Package Manager
- Installs, upgrade, and removes packages.
- Manages dependencies.
- Keeps track of what is installed.

# DEB Distros
- Debian.
- Linux Mint.
- Ubuntu.

# APT - Advanced Packaging Tool
- Search for string: `apt-cache search [string]`.
- Install package: `apt-get install [-y] [package_name]`.
- Remove package and leave configuration: `apt-get remove [package_name]`.
- Remove package and delete configuration: `apt-get purge [package_name]`.
- Display information about package: `apt-cache show [package_name]`.

# dpkg
- Does not handle dependencies.
- List installed packages: `dpkg -l`.
- Install a deb package: `dpkg -i [deb_package_filename]`.
- List all files in a package: `dpkg -L [package_name]`.
- Find what package owns the file: `dpkg -S [filename]`.
