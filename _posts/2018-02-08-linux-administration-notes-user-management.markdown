---
layout: post
title:  "Linux Administration - Notes: User Management"
date:   2018-02-08 11:11:11 -0500
categories: linux user management
---

Content

* TOC
{:toc}

# User Account Management

## User Account Properties
- Username (or login ID)
- UID (user ID). This is a unique number
- Default group.
- Comments
- Shell
- Home directory location

## /etc/passwd
- Contains the user accounts
- First entry is the `root` account, e.g. `root:x:0:0:root:/root:/bin/bash`
- Entry Format: `[username]:[password]:[uid]:[gid]:[comments]:[home_dir]:[shell]`
- Different fields separated by a colon `:` :
  - `username`
  - `password` (if `x`, the password is encrypted)
  - `uid`: user ID
  - `gid`: default group ID
  - `comments`
  - `home_dir`: home directory location
  - `shell`: to execute when the user log in the system

### Username
- Usually less than 8 characters (by convention).
- Case sensitive.
- But usually, in all lowercase (by convention).
- Numbers are allowed in usernames.
- Do not use special characters.

### Password
- Encrypted passwords used to be stored in `/etc/passwd`.
- But since `/etc/passwd` is readable by everyone...
- Now, encrypted passwords are stored in `/etc/shadow`.
- `/etc/shadow` is only readable by root.
- Prevents users from trying to crack the passwords.
- `/etc/shadow` entries fields are separated by a colon `:` (e.g. entry: `root:$6$9g...21:16502:0:99999:7:::`)
  - 1: `username`.
  - 2: `encrypted_password`.
  - 3: `days since the password has been changed`.
  - 4: `days before the password can be changed`.
  - 5: `days after which the password must be changed`.
  - 6: `days to warn the user that the password will expire`.
  - 7: `days after the password has expired that the account is disabled`.
  - 8: `days that an account has been disabled`.
  - 9: `reserved for future use`.

### UID
- Unique number.
- Root account: always 0.
- System accounts have UIDs < 1000.
- Configured in `/etc/login.defs`.

### GID
- `GID` listed in `/etc/passwd` is the default group ID for an account.
- New files belong to a user's default group.
- Users can switch groups by using the `newgrp` command.

### Comment
- Typically contains the user's full name.
- In the case of a system or application account, it often contains what the account is used for.
- May contain additional information like a phone number.
- Also called the GECOS field.

### Home Directory
- Upon login the user is placed in their home directory.
- If that directory does not exist, they are placed in `/`.

### Shell
- The shell will be executed when a user log in.
- A list of available shells are in `/etc/shells`.
- The shell doesn't have to be a shell.
- To prevent interactive use of an account, use `/usr/sbin/nologin` or `/bin/false` as the shell.
- Shells can be command line applications.

## Management Commands

### useradd command
- Create a new user's account.
- Syntax: `useradd [options] username`.
- Some options:
  - `-c`: comments for the account.
  - `-m`: create the home directory.
  - `-d`: to specify the home directory.
  - `-s`: the path to the user's shell.
  - `-g`: specify the default group for the account.
  - `-G`: list of additional groups (separated by a comma `,`).
  - `-r`: to create a system account.
  - `-u`: to specify a UID (remainder: used by linux for file ownership).
- E.g. `useradd -c "Grant Stewart" -m -s /bin/bash grant`.

### usermod command
- Update or modify a user's account.
- Syntax: `usermod [options] username`.
- Some options: 
  - `-c`: comments for the account.
  - `-g`: specify the default group for the account.
  - `-G`: list of additional groups (separated by a comma `,`).
  - `-s`: the path to the user's shell.

### userdel command
- Delete an existing user's account.
- Synax: `userdel [username]`.
- `-r` option: deleted the user's account home directory (also removes the user's mail spool file if it exists).

### passwd command
- Set user's password.
- Syntax: `passwd [username]`.

## /etc/skel
- When using `useradd` with the option `-m` the home directory for the account is created.
- The contents of `/etc/skel` are copied into the home directory.
- `/etc/skel` typically contains the shell configuration files (`.profile`, `.bashrc`, etc.).

## whoami command
- Displays the current effective username.

# Group Management

## /etc/group
- Contains groups details.
- First entry is the root group, e.g. `root:x:0:`. 
- Entry Format: `[group_name]:[password]:[gid]:[account_names]`
- Fields (separated by a colon `:`):
  - `group_name`.
  - `password`: if `x` password in encrypted in the `/etc/gshadow` file.
  - `gid`.
  - `account_names` (account names separated by a comma `,`).

## groups command
- Display the groups that a member belongs to.
- Syntax: `groups [username]`.
- Note: if no argument is passed the current username is used.

## groupadd command
- To create a new group.
- Syntax: `groupadd [options] [group_name]`.
- `-g` option: to specify the GID

## groupmod command
- To change the properties of an existing group.
- Syntax: `groupmod [options] [group_name]`.
- Some options:
- `-g`: to specify the new GID.
- `-n`: to rename the group. 

## groupdel command
- To delete an existing group.
- Syntax: `groupdel [options] [group_name]`.

# User Switching

## su command
- Switch to another user.
- Syntax: `su [username]`.
- Without argument, the shell assumes that the uersname is `root`.
- Some options:
  - `-`: makes the shell a login shell (so the environment variables of the initial user are not passed onto the newly switched user).
  - `-c`: specify a command to be executed.

## sudo command
- Execute a command as another user.
- Syntax: `sudo -u [username] [command]`.
- Same as the `su` command, without argument, the shell assumes that the uersname is `root`, so `sudo -u root [command]` and `sudo [command]` are equivalent.
- List user's privileges: `sudo -l`.
- Start a new shell: `sudo -s` (same as `sudo -u root -s`).

## /etc/sudoers
- Contains a list of users and what commands those users can run.
- Entry Format: `[username] [hostname]=([users])[NOPASSWD:][commands]`:
  - `username`: the username.
  - `hostname`: the host on which the user can execute those priveleges on.
  - `users`: the list of users that the commands will run as (can use the decorator `ALL:ALL` for all users) separated by a comma `,`.
  - `commands`: a list of commands that the user can run separated by a comma `,`. If you don't require that a password be entered when using sudo, you can use the `NOPASSWD:` decorator in front of the `commands`.

