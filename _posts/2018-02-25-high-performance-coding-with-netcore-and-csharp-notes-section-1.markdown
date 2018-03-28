---
layout: post
title:  "High Performance Coding with .NET Core and C#: Section 1 - Setting the stage"
date:   2018-02-25 11:11:11 -0500
categories: coursera machine advices
---

Content

* TOC
{:toc}

# History

Typical .NET Web Application

- ASP.NET (classic).
- Windows Server.
- .NET Full Framework.
- IIS.
- SQL Server.

Cons: tied to Windows and IIS

.NET Core Requirements

- Cross-platform.
- Open-source.
- "Similar" to .NET classic.
- Good for cloud, good for microservices => lightweight and fast.
- Performant.

.NET Core Platform

- Runtime: CoreCLR (i.e. GC, JIT), small and cross-platform.
- Base Library: CoreFx, contains basic types.
- Frameworks: EF Core, ASP.NET Core (not tied to IIS), etc.

# Concepts

## .NET Standard 
- Defines API "surface" (contract).
- Backward compatible.
- Works with bother .NET Full Framework, Mono, .NET Core all support .NET Standard 2.0.
- Replaces the PCL (Portable Class Library) and shared projects initiative.

## Deployment

### Self-contained
- Contains the CLR.
- No preinstall framework needed.
- Bigger Deployment Package which targets specific OS (not cross-platform).

### Shared Framework
- Just application code.
- Requires pre-installed .NET Core on target machine.
- Cross platform deployment package.
- Smaller package size.
- Default option.

# Types of applications
- Web applications: ASP.NET Core.
- Console Applications.



