---
layout: post
title:  "Linux Administration - Notes: LVM"
date:   2018-02-07 11:11:11 -0500
categories: linux lvm
---

Content

* TOC
{:toc} 

LVM: Logical Volume Manager

# Pros

- You can create file systems that extend accross multiple storage devices.

- You can aggregate multiple storage devices into a single logical volume.

- Convenient Device Naming: you can use human-readable device names of your choosing.

- Disk Striping: increase throughput by allowing your system to read data in parallel.

- Data Redudancy / Data Mirroring: increase fault tolerance and reliability by having more than one copy of your data.

- Snapshopts: point-in-time backups of filesystems.

# Layers of Abstraction

The abstractions layers between the Storage Devices and the File Systems are:

1. Physical Volumes (PV): it is simply the partition with LVM metadata added which can be either hard disks, hard disk partitions, or Logical Unit Numbers (LUNs) of an external storage device. Each PV is treated as being composed of a sequence of chunks called physical extents (PEs).
2. Volume Group (VG): made of one or more VGs (like a pool of storages that can have different types).
3. Logical Volumes (LV): in each VG you can create one or more LV. 

# Creating PVs

- Requires root privileges: `su -`.
- Before you can create a PV you need to know what storage devices are available: `lvmdiskscan`: the command shows you all the storage devices that have the ability to be used with LVM.
- However, at least of these storage devices is being used at the root filesystem:
  - To figure this out: `lsblk -p`.
  - To show what is available (disk space usage): `df -h`:
  - You can also use `fdisk -l` command to see the storage devices attached to your Linux system.
- To intialize (a) physical volume(s) PV on storage: `pvcreate /your/storage/path`.
- To view the list of PVs: `pvs`