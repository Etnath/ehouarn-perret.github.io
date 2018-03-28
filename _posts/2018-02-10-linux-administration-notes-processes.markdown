---
layout: post
title:  "Linux Administration - Notes: Processes"
date:   2018-02-10 11:11:11 -0500
categories: linux processes
---

Content

* TOC
{:toc}

# ps command
- Provide information about currently running processes.
- Syntax: `ps [options]`
- Without options: display processes associated with the current session.
- Some options:

|-----------------+---------------------------------------------|
|    Options      |                Description                  |
|:---------------:|---------------------------------------------|
| `-e`            | All processes.                              |
| `-f`            | Full format listing.                        |
| `-u [username]` | Display username's processes.               |
| `-p [pid]`      | Even more verbose output.                   |

# Other ways to view processes
- `pstree`: display processes in a tree format.
- `top`: interactive process viewer.
- `htop`: advanced interactive process viewer.

# Background and Foreground Processes
- `command &`: start command in background.
- `Ctrl-c`: kill the foreground process.
- `Ctrl-z`: Suspend the foreground process.
- `bg [job_number]`: background a suspended process. 
- `fg [job_number]`: foreground a background process. 
- `jobs`: list jobs.

# Kill a process
- `kill [-sig] [pid or job_number]`: kill a process by job number of PID.
- List signals: `kill -l`.
  - `SIGTERM`: 15 (default when using the `kill` command).
  - `SIGKILL`: 9.

# Crontab command
- Program to create, read, update and delete crons.
- Cron: A time based job scheduling service.
- Install a new crontab from file: `crontab [filename]`.
- Options without `filename`
- `-l`: list cron jobs.
- `-e`: edit cron jobs.
- `-r`: remove all cron jobs.
- Configuration Entry Format: `[minute] [hour] [month_day] [month] [week_day] [command]`:
  - `minute`: [0, 59].
  - `hour`: [0, 23].
  - `month_day`: [1, 31].
  - `month`: [1, 12].
  - `week_day`: [0, 6].
- Wildcards are supported.
- Example, every monday: `0 7 * * 1 [command]`
- Shortcuts:

|-------------+--------------|
|   Shortcut  |  Equivalent  |
|:-----------:|--------------|
| `@yearly`   | `0 0 1 1 *`  |
| `@annually` | `0 0 1 1 *`  |
| `@monthly`  | `0 0 1 * *`  |
| `@weekly`   | `0 0 * * 0`  |
| `@daily`    | `0 0 * * *`  |
| `@midnight` | `0 0 * * *`  |
| `@hourly`   | `0 * * * *`  |
