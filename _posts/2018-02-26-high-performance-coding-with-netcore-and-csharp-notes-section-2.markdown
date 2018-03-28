---
layout: post
title:  "High Performance Coding with .NET Core and C#: Section 2 - Measure Performance During Development"
date:   2018-02-26 11:11:11 -0500
categories: coursera machine advices
---

Content

* TOC
{:toc}

# CPU

**Always meaure it!**

## Objectives

- CPU Utilization: the percentage of time when the CPU does work.
- Wall clock time: simply the time that an operation takes on one specific hardware.

## Types of profilers

### Sampling

- Huge number of snapshots (high frequency sampling) with callstacks: aggregates this data.
- Can be done on a running process without restart.
- Minimum Overhead.
- Non CPU work is not visible, e.g.: Thread.Sleep(...), I/O Operation, etc.

Samples

- Inclusive: samples that contains the method (Total CPU column in VS Profiler).
- Exclusive: samples with given method is at the top of the stack (Self CPU column in VS Profiler).

### Instrumentation
- The profilter injects code to measure every methods.
- Measure also non CPU work.
- Can potentially have more overhead.
- No attach / detach...

# Memory

## Objectives
- Utilization: Heap Size, Physical Memory Size
- Number of objects

Typical problems:

- Too much work bu the GC (hurts CPU).
- "Not enough work by the GC" (eventually out of memory).

## GC
- Dont' allocate too much.
- Don't have GC roots to objects that we don't need and that prevents objects from being collected.

Settings in the .csproj file:
- Concurrent GC: application threads run almost completely parallel with the GC. 
- Server GC: dedicated GC threads.

Beware that there is no performance counters on .NET Core (windows concept).

# Visual Studio Performance Tools

## PerfTips

Don't use `StopWatch` or worse `DateTime.Now`

Since Visual Studio 2015: PerfTips with breakpoints (i.e. intend to be used during Debug). Basically Debug methods step by step and check out the time. No a precise timing, rather a nice helper during coding.

Just to give you a first idea.

## Performance Profile

- Visual Studio > Analyze > Performance Profiler.
- Sampling Profiler.
- Track Memory Allocations.
- Since 2017 works with .NET Core.

## Diagnostic Hub / Window

- Display events: GC pauses and exceptions.
- Private bytes.
- CPU (% of all processors).
- CPU Usage for each function with Calling Functions, Current Function and Called Functions.
- Memory Usage.

# Event Tracing

## PerfView

### Objectives
- Free, lightweight.
- Good for a quick overview of the methods.
- Designed for both development and production.
- Sources on Github.
- Use ETW events, see below.

### ETW
- Stands for Event Tracing for Windows.
- Efficient kernel-level tracing facility on windows.
- Logs kernel and application level events.
- Designed to handle a huge number of messages.
- Can be consumed from a log file or real time.
- `System.Diagnostics.Tracing` Nuget package: to emit ETW events in your application.
- Downside: Windows Only.

## Perf

### Objectives 
- Linux tool capable of lightweight profiling.
- .NET Core specific.
- Part of the Linux Kernel.
- Use the perf event subsystem, no big overhead, can be used in production systems.
- The perf command can record and visualize data.
- By default writes data into `perf.data` files.

### Steps
- Run your program.
- Ubuntu setup: `sudo apt-get install linux-tools`.
- Tell the CLR to emit debug information about JITED method names: `export COMPlus_PerfMapEnabled=1`. 
  - Note: Files are under: `/tmp/perf-[pid].map`.
- Record:  `sudo perf record -g -F 997 -p $(pidof dotnet)`.
- Result: `perf.data` file.

### Visualization: FlameGraph
- Open-source tool to visualize profiler data.
- Available on Github.

### Steps
- Make sure the current user has access to the `/tmp/perf-[pid].map` file.
- Download FlameGraph:  `git clone https://github.com/brendangregg/FlameGraph`.
- Preprocess Data: `perf script | FlameGraph/stackcollapse-perf.pl > out.perf.folded`.
- Create Graph: `FlameGraph/flamegraph.pl out.perf-folded > DotNetCoreAppSample.svg`.

### Summary
- Very early stage.
- No symbols for framework code, but easy to profile application's code.

## LTTNG
- Similar to perf: tracking system on linux.
- The CoreCLR emits ETW events on Windows (e.g. GC).
- On Linux: LTTng.
- You can collect plain runtime events from the CLR.

### Steps
- Turning on Events: `export COMPlus_EnableEventLog=1`.
- Run you program.
- Start a new lttng session: `lttng create gcTracing`.
- Tell lttng which information to store:
  - `lttng add-context --userspace --type vpid`.
  - `lttng add-context --userspace --type procname`.
- Select what events to call out: `lttng enable-event --userspace --tracepoint DotNETRuntime:GC*`.
- Start the collection: `lttng start`.
- Stop the collection at a latter moment: `lttng stop`.
- Destroy session: `lttng destroy`.
- Check data: `babeltrace lttng-traces/gcTracing-xxxxxxxx/ !grep AllocationTick | grep 'TypeName = ".*" -o sort | uniq -c | sort -n`.

### Summary
- Very early stage.
- Collect runtime events from the CLR.
- No good tools, that would visualize the events (not yet).

# Some GC Basics

## Managed Heap
- Small Object Heap (SOH): objects < 85000 bytes.
- Large Object Heap (LOH): objects > 85000 bytes.

## GC Generations

- 0: every new objects, typically temporary variables or short lifetime objects. Most objects are collected from there. Frequently collected, fast collection.
- 1: Buffer between generations 0 and 2. Less frequently collected.
- 2: Long living objects, e.g. static fields. Rarely collected.

LOH collected with generation 2.

# Micro Benchmarking with BenchmarkDotNet

## What is it?

- Free open source micro benchmarking library for .NET.
- Distributed via NuGet.
- Hosted on GitHub.
- Runs on CoreCLR, Full Framework and Mono.

## Why using a benchmarking framework?
- IL code is JITed when the method is used the first time.
- Other applications can affect your benchmark.
- Different .NET flavours: 
  - RyuJIT vs class JIT.
  - Server vs Workstation GC.
  - etc.

## Some features
- Several launches with warm-up phase.
- Smart heuristic to figure out the number of iterations needed.
- Nice reporting.
- Supports windows, linux and macOS.

## How to use it?
- Add NuGet package: BenchmarkDotNet
- Mark with special attributes.
- Run your program.

Time measurement:
{% highlight CSharp linenos %}

[Benchmark]
public static void MyMethod()
{
    // some critical work goes here...
}

{% endhighlight %}

Gives statistical time information for each marked methods:

- Mean.
- Error (half of 99% confidence interval).
- Standard Deviation.

Additional features:

- Getting GC and allocation statistics: `[MemoryDiagnoser]` attribute.
- Change CLR: `[ClrJob]`, `[CoreJob]`, `[MonoJob]`.
- Control the JIT: `[LegacyJitX86Job]`, `[RyuJitX64Job]`.
- Use special a user-defined `GCSettingConfig` class as configuration: `[Config(typeof(GCSettingConfig))]`, see [Documentation][Config Documentation] for more details.


[Config Documentation]: https://github.com/dotnet/BenchmarkDotNet/blob/master/docs/guide/Configs/Configs.md