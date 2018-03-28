---
layout: post
title:  "Linux Administration - Notes: Permissions"
date:   2018-02-11 11:11:11 -0500
categories: linux permissions
---

Content

* TOC
{:toc}

# Symbols
- When listing files with `ls -al`.

## Type Symbol 
- First symbol.

|--------+---------------|
| Symbol |  Equivalent   |
|:------:|---------------|
| `-`    | Regular file  |
| `d`    | Directory     |
| `l`    | Symbolic link |

## Permission Symbol
- Subsequent Symbols

|--------+------------|
| Symbol | Equivalent |
|:------:|------------|
| `r`    | Read       |
| `w`    | Write      |
| `x`    | Execute    |

## Permissions: Files vs Directories

|------------+--------------+--------------------------------------------|
| Permission |    File      |                 Directory                  |
|:----------:|--------------|--------------------------------------------|
| `r`        | Read file    | Read filenames                             |
| `w`        | Modify file  | Modify entries                             |
| `x`        | Execute file | Access to content and metadata for entries |

## Permission Categories

|--------+----------|
| Symbol | Category |
|:------:|----------|
| `u`    | User     |
| `g`    | Group    |
| `o`    | Other    |
| `a`    | All      |

## Interpretation

|--------+----------|
| Index  | Indices  |
|:------:|----------|
| 0      | Type     |
| [1, 3] | User     |
| [4, 6] | Group    |
| [7, 9] | Other    |

## chmod command
- Permissions are also known as modes.
- Syntax: `chmod [options] [filename]`
- Options:
  - `ugoa`: user category (user, group, other, all).
  - `+-=`: add, substract, set permissions.
  - `rwx`: read, write, execute.
- E.g. `chmod g+w [filename]`

## Numeric Based Permissions

|-----+-----+-----+-------------|
|  r  |  w  |  x  | Description |
|:---:|:---:|:---:|-------------|
| 0   | 0   | 0   | off value   |
| 1   | 1   | 1   | binary on   |
| 4   | 2   | 1   | decimal on  |


Examples 

|--------+----------+----------+----------------------------------|
| Octal  |  Binary  |  String  | Description                      |
|:------:|:--------:|:--------:|----------------------------------|
| 0      | 0        | `---`    | No permissions                   |
| 1      | 1        | `--x`    | Execute only                     |
| 2      | 10       | `-w-`    | Write only                       |
| 3      | 11       | `-wx`    | Write and Execute (2 + 1)        |
| 4      | 100      | `r--`    | Read only                        |
| 5      | 101      | `r-x`    | Read and execute (4 + 1)         |
| 6      | 110      | `rw-`    | Read and write (4 + 2)           |
| 7      | 111      | `rwx`    | Read, write, execute (4 + 2 + 1) |

Note: order has a meaning.


# Groups

## User Groups
- Every user is in at least one group.
- Users can belong to many groups.
- Groups are used to organize users.
- In addition to the `groups` command to display user's groups: `id -Gn`.

## chgroup command
- Changes the group.
- Syntax: `chgrp [group] [filename]`.

# Directory Permissions revisited
- Permissions on a directory can affect the files in the directory.
- If file permissions look correct, start checking directory permissions.
- Then you work your way up to the root.

# Permissions on creation

## umask command
- Syntax: `umask [-S] [mode]`.
- `-S` option: symbolic notation.
- File creation mask determines default permissions.
- If no mask were used permissions would be:
  - 777 for directories.
  - 666 for files.

## Examples

|-----------------------+-------------+------|
|                       |  Directory  | File |
|:----------------------|:-----------:|:----:|
| Base Permission       | 777         | 666  |
| Subtract Umask        | -022        | -022 |
| Creations Permission  | 755         | 644  |


|-----------------------+-------------+------|
|                       |  Directory  | File |
|:----------------------|:-----------:|:----:|
| Base Permission       | 777         | 666  |
| Subtract Umask        | -002        | -002 |
| Creations Permission  | 775         | 664  |

    
Octal substraction is an estimation:

|-----------------------+-------------+------|
|                       |  Directory  | File |
|:----------------------|:-----------:|:----:|
| Base Permission       | 777         | 666  |
| Subtract Umask        | -007        | -007 |
| Creations Permission  | 770         | 660* |

## Special Modes
- A first digit, what's for?
  - `umask 0022` is the same as `umask 022`
  - `umask 0644` is the same as `umask 644`
-  Access rights flags that allow users to run an executable with the permissions of the executable's owner or group:
  - setuid: 
    - File: to be able to run it as someone else rights (uid).
    - Directory: does not exist.
  - setgid:
    - File: to be able to run it as another group rights (gid).
    - Directory: Every file in that directory will also be "setgid-ed" (and not to the users who created those files).
  - sticky: 
    - File: executable remains in memory even when the execution is done (buffering). Restricted to the administrator.
    Note: not really used anymore.
    - Directory: avoid that in a directory where everybody can write someone else delele your files (restricted to the owner).

## Examples
- When a process is started, it runs using the starting user's UID and GID.
- setuid: **S**et **U**ser **ID** upon execution.
- setgid: **S**et **G**roup **ID** upon execution.
- Usually on binary files.
- setuid are an attack surface.
- Example: 
  - `ls -l /usr/bin/passwd`
  - `-rwsr-xr-x 1 root root 54256 May 16  2017 /usr/bin/passwd`
- Other examples: 
  - `ping`
  - `chsh`
- Add:
  - setuid:
    - E.g. `chmod u+s /path/to/file`
    - E.g. `chmod 4755 /path/to/file`
  - setgid:
    - E.g. `chmod g+s /path/to/file_or_directory`
    - E.g. `chmod 2755 /path/to/file_or_directory`
  - Combined:
    - E.g. `chmod ug+s /path/to/file_or_directory`
    - E.g. `chmod 6755 /path/to/file_or_directory`
  - Sticky Bit:
    - E.g. `chmod o+t /path/to/file_or_directory`
    - E.g. `chmod 1777 /path/to/file_or_directory`
- Remove:
  - setuid:
    - E.g. `chmod u-s /path/to/file`
    - E.g. `chmod 0755 /path/to/file`
  - setgid:
    - E.g. `chmod g-s /path/to/file_or_directory`
    - E.g. `chmod 0755 /path/to/file_or_directory`
  - Sticky Bit:
    - E.g. `chmod o-t /path/to/file_or_directory`
    - E.g. `chmod 0777 /path/to/file_or_directory`
- Find files: 
  - setuid: `find / -perm /4000 -ls`
  - setgid: `find / -perm /2000 -ls`
  - Combined: `find / -perm /6000 -ls`

## Octal Permissions

|----------+----------+----------+-------------|
|  setuid  |  setgid  |  sticky  | Description |
|:--------:|:--------:|:--------:|-------------|
| 0        | 0        | 0        | off value   |
| 1        | 1        | 1        | binary on   |
| 4        | 2        | 1        | decimal on  |

## Only the Owner should edit setuid files

|------------+----------------+----------|
|  Quality   |    Symbolic    |   Octal  |
|:----------:|:--------------:|:--------:|
| Good       | -rwsr-xr-x     | 4755     |
| Bad        | -rwsrwxr-x     | 4775     |
| Really Bad | -rwsrwxrwx     | 4777     |

## Reading ls output
- A capitalized special permission == underlying normal permission is NOT set.
- A lowercase special permission == underlying normal permission set.
