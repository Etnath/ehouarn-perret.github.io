---
layout: post
title:  "Linux Administration - Notes: Disk Management"
date:   2018-02-07 11:11:11 -0500
categories: linux disk management
---

Content

* TOC
{:toc} 

# Partitions
- Disks can be divided into parts called partitions
- Partitions allows you to separate data
- Partitioning scheme examples:
  - 1) OS, 2) Application, 3) User, 4) Swap
  - 1) OS, 2) User home directories
  - As an administrator, you decide

# Partitioning 
- Can protect the overall system
- Keep users from outages by using a home directory partition

# MBR
- Master Boot Record
- Boot sector at the beginning of the storage device
- The partition that resides in the MBR how the logical partitions on the disk
- Can only address 2TB of disk space
- Being phased out by GPT
- MBR partitioning scheme: up to 4 primary partitions
- If more than 4 primary partitions is needed then you need to create extended partitions to create logical partitions

# GPT
- GPT: GUID Partition Table
- GUID: Global Unique Identifier
- Part of UEFI
- UEFI: Unified Extensible Firmware Interface
- UEFI is replacing the traditional BIOS
- No primary or extended partitions
- Default configuration:
  - Supports up to 128 partitions
  - Supports up to 9.4 ZB disk sizes
- Not supported by older OS
- May require newer or special tools

# Mount Point
- A directory used to access the data on a partition
- `/` is always a mount point
- `/home`, e.g. `/home/jason` is on the partition mounted on `/home`

# fdisk command
- Alternatives: `gdisk`, `parted`
- Earlier versions of fdisk did not support GPT
- Display a list of devices: `fdisk -l`
- Perform actions on a device: `fdisk /path/to/device`

# File Systems
- ext = Extended file system
  - ext2, ext3, ext4 (latest release)
  - Often default file system
- Other file systems:
  - ReiserFS
  - JFS
  - XFS
  - ZFS
  - Btrfs

# mfks command
- Create a file system
- E.g. `mkfs -t Type Device`
- `mfks` is just a front end for various file system builders: `ls -l /sbin/mkfs*`

# mount command
- To list the current mount points (both physical and virtual [ often RAM based] file systems): `mount`
- To mount a device to a given mount point: `mount Device MountPoint`

# umount command
- To umount a device OR a given mount point: `umount DeviceOrMountPoint`

# Mounting over existing data
- Changing the mount point:
    - `mkdir /home/sarah`
    - `mount /dev/sdb2 /home`
    - Outcome: you will not be able to see `/home/sarah` now.
    - `umount /home`
    - Outcome: you can now see `/home/sarah` again.

# df command
- Short list of mount points ("disk free") with storage devices (`-h`: human-readable): `df -h`

# mkswap command
- Preparing swap space: `mkswap Device`

# swapon command
- Enable swap partition: `swapon Device`
- To see swap devices in use: `swapon` or `swapon -s`

# /etc/fstab
- The File System Table
- Controls what devices get mounted and where on boot
- Entry starting with a `#` is considered as a comment
- Each entry is made up of 6 fields
  - `device`
  - `mount point`
  - `file system type`
  - `mount` options (e.g. `defaults`)
  - `dump`: used by the dump utility, usually can be ignored if the dump utility is not used (these days dump is rarely used for backups)
    - `0`: no dump
    - `1`: dump backup this file system
  - `fsck order`: tells whether a filesystem has to be checked
    - `0`: skip check
    - `1`: will be checked first
    - `2`: will be checked next

# lsblk command
- View Label and UUIDs: `lsblk -f`

# blkid command
- View only UUIDs: `blkid`

# e2label command
- Label a file system: `e2label Device Label`
