---
layout: post
title:  "Linux Administration - Notes: Boot Process"
date:   2018-02-05 11:11:11 -0500
categories: linux boot
---

Content

* TOC
{:toc}

# Booting

## BIOS

- Basic Input/Output System (special firmware).
- First piece of software run when a computer is powered on.
- It is OS independant.
- Contains a list of bootable devices (Hard Drives, USB drives, old-fashioned DVD drives, the priority / search order  can be changed).
- Main purpose: (find and ) load the bootloader.
- Performs a POST (Power-On Self Test).
- Test the underlying hardware components (CPU, RAM and memory storage devices).
- Only if the POST succeeds then the BIOS will move on to the bootload step.


## Boot Loaders
- LILO (Linux Loader): old-fashion.
- GRUB (Grand Unified Bootloader): replaced LILO.
  - Checkout the different kernel grub boot configuration.
  - E.g. for example `/boot/vmlinuz` with the quiet parameter.
- Boot loaders start the OS (with different options).

## Initial RAM Disk
- initrd: initial RAM disk.
- Temporary filesystem that is loaded from disk and stored in memory.
- Contains helpers and modules required to load the permanent OS file system (and perform hardware detection) in order to get the actual filesystem mounted.
- If the root filesystem is stored on a LVM, initrd image will contain the kernel modules to mount that logical volume as the root filesystem.   
- Once initrd has mounted the actual root filesystem, its job is done.

## The /boot Directory
- The linux kernel, initrd and other files needed to boot the OS are stored in the `/boot` directory.
- The kernel is named `vmlinux` / `vmlinuz` (ends with a "z" if compressed).

# Runlevels and Targets

## Runlevels / Description
Linux uses runlevels to determine what processes and services to start.

Each distribution has its own configuration, but generally-speaking we have the following descriptions:

|----------+----------------------------------------------------------|
| Runlevel |                        Description                       |
|:--------:|----------------------------------------------------------|
| 0        | Shuts down the system.                                   |
| 1        | Single user mode: used for maintenance.                  |
| 2        | Multi-user mode with graphical interface (Debian/Ubuntu).|
| 3        | Multi-user text mode (Redhat/CentOS).                    |
| 4        | Undefined.                                               |
| 5        | Multi-user with graphical interface (Redhat/CentOS).     |
| 6        | Reboot                                                   |

## Init
- Traditionally runlevels were controller by the init program. 
- The init configuration was stored in `/etc/inittab`. 
- e.g. To set runlevel 3 to be the default `runlevel: id:3:initdefault`.
- However, init is being phased out by systemd.
- If you still have a configuration file in `/etc/inittab` this usually tell you the configuration in this does to use `systemctl` (Systemd).

## Systemd
- Uses targets instead of runlevels.
- A list of targets is available in `/lib/systemd/system`.
- runlevel targets are actually symlinks to the real targets being used.
- Example: 
  - `cd /lib/systemd/system`
  - `ls -l runlevel5.target`
  - `lrwxrwxrwx 1 root root 16 Feb  1 09:31 runlevel5.target -> graphical.target`
- Change the current runlevel: `telinit 5`.
- Change the current target: `systemctl isolate graphical.target`.
- To change the default runlevel target: 
  - `systemctl set-default graphical.target`
  - Create manually a symlink from `/etc/systemd/system/default.target` to `graphical.target`.
- To get the current default runlevel target: `systemctl get-default`.

## Basic Operations

### Kernel Ring Buffer
- Contains messages from the Linux Kernel.
- Command: `dmesg` (human-readable: `dmesg -T | less`): fetch messages from the buffer.
- Messages are also saved in `/var/log/dmesg` (useful to analyze boot phase messages): `cat /var/log/dmesg`.

### Rebooting
- `telinit 6`
- `systemctl isolate reboot.target`
- `reboot`
- `shutdown [options] time [message]` 
- Examples:
  - `shutdown -r 15:30 "rebooting!"`
  - `shutdown -r +5 " rebooting soon!"`
  - `shutdown -r now`

### Poweroff
- `telinit 0`
- `systemctl isolate poweroff.target`
- `poweroff`
