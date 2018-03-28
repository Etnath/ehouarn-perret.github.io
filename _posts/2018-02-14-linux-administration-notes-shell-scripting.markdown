---
layout: post
title:  "Linux Administration - Notes: Shell Scripting"
date:   2018-02-14 11:11:11 -0500
categories: linux shell scripting
---

Content

* TOC
{:toc}

# Scripts
- Contain a series of commands.
- An interpreter executes commands in the script.
- Anything you can type at the command line, you can put it in a script.
- Execute a script file: `./[script_sh_filename]`.

# Simple Example

{% highlight bash linenos %}
#!/bin/bash
sleep 50
echo "Scripting is fun!"
{% endhighlight %}

# Shebang: #!
- Syntax: `#!/bin/[shell]`.
- Specify which shell has to be used.
- If not defined, the current shell is used.
- Different shells have slightly different syntax.
- Can be also something else than an actual shell, like a Python interpreter, e.g. `#!/usr/bin/python`

# Variables
- Syntax: `VARIABLE_NAME="VALUE`.
- No space...
- Case-sensitive.
- By convention, upper-case.
- Usage:

{% highlight bash linenos %}
#!/bin/bash
MY_SHELL="bash"
echo "I like the $MY_SHELL shell".
# or...
echo "I like the ${MY_SHELL} shell".
# Assign command output to a variable
SERVER_NAME=$(hostname)
echo "You are running this script on ${SERVER_NAME}.
{% endhighlight %}

# Naming

## Valid Examples
- `FIRST3LETTERS`.
- `FIRST_THREE_LETTERS`.
- `firstThreeLetters`.

## Invalid Examples
- `3LETTERS`.
- `first-three-letters`.
- `first@Three@Letters`.

# Tests
- Syntax: `[ condition-to-test-for ]`.
- Example: `[ -e /etc/passwd ]`.

## File Test Operators

|----------------------+-----------------|
|      Description     |     Syntax      |
|:---------------------|----------------:|
| Is a directory       | `-d [filename]` |
| Exists               | `-e [filename]` |
| Exists and Regular   | `-f [filename]` |
| Exists and not empty | `-s [filename]` |
| Readable by you      | `-r [filename]` |
| Writable by you      | `-w [filename]` |
| Executable by you    | `-x [filename]` |

## String Test Operators

|-------------------+---------------|
|     Description   |    Syntax     |
|:------------------|--------------:|
| Empty             | `-z [string]` |
| Not Empty         | `-n [string]` |
| `a` == `b`        | `[a] = [b]`   |
| `a` != `b`        | `[a] != [b]`  |

## Arithemtic Test Operators

|---------------+----------------|
|  Description  |     Syntax     |
|:--------------|---------------:|
| `a` == `b`    | `[a] -eq [b]`  |
| `a` != `b`    | `[a] -ne [b]`  |
| `a` <  `b`    | `[a] -lt [b]`  |
| `a` <= `b`    | `[a] -le [b]`  |
| `a` >  `b`    | `[a] -gt [b]`  |
| `a` >= `b`    | `[a] -ge [b]`  |

# if / elif / else 

{% highlight bash linenos %}
#!/bin/bash
if [ condition-is-true ]
then
  # Something...
elif [ condition-is-true ]
then
  # Something else...
else
  # Yet another thing...
fi
{% endhighlight %}

# for loop

Example:
{% highlight bash linenos %}
#!/bin/bash
for ITEM in ITEM_1 ITEM_2 ITEM_N
do
  echo "ITEM: $ITEM"  
done
{% endhighlight %}

Another one:
{% highlight bash linenos %}
#!/bin/bash
COLORS = "red green blue"
for COLOR in $COLORS
do
  echo "COLOR: $COLOR"  
done
{% endhighlight %}

Yet another one:
{% highlight bash linenos %}
#!/bin/bash
PICTURES=$(ls *jpg)
DATE=$(date +%F)
for PICTURE in $PICTURES
do
  echo "Renaming ${PICTURE} to ${DATE}-${PICTURE}"
  mv ${PICTURE} ${DATE}-${PICTURE}  
done
{% endhighlight %}


# Positional Paremeters
- Example: `script.sh parameter1 parameter2`:
  - `script.sh` = `$0`.
  - `parameter1` = `$1`. 
  - `parameter2` = `$2`. 

# Accepting User Input (STDIN)
- Syntax: `read -p "PROMPT" VARIABLE`.

