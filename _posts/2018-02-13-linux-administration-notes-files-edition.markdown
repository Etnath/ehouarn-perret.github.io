---
layout: post
title:  "Linux Administration - Notes: Files Edition"
date:   2018-02-13 11:11:11 -0500
categories: linux file edition
---

Content

* TOC
{:toc}

# Displaying the Contents of Files
- Display content of a file: `cat [filename]`.
- Browse through a file: `more [filename]`.
- More features than more: `less [filename]`.
- Top / Bottom
    - Output the beginning portion of a file: `head[filename]`.
    - Output the ending portion of a file: `tail[filename]`.
    - Options:
      - `-[n]`: display only `n` lines.
      - `-f`: follow the file.

# Nano
- Simple.
- Easy to learn.
- Not as advanced as `vi` or `emacs`.
- If `nano` not available, look for `pico`.
- Arrow keys work as expected.
- Syntax: `nano [filename]`.
- Get help: `ctrl + g`.
- Save a file: `ctrl + o`.
- Exit:  `ctrl + x`.

# Vi
- Has advanced and powerful features.
- Not intuitive.
- Harder to learn than nano.
- Requires a time investment.
- Syntax:
  - Edit File: `vi [filename]`.
  - With more features: `vim [filename]`.
  - Read-only mode: `view [filename]`.

## Navigation Mode
- Up one line: `k`.
- Down one line: `j`.
- Left one character: `h`.
- Right one character: `l`.
- Right one word: `w`.
- Left one word: `b`.
- Beginning of the line: `^`.
- End of the the line: `$`.

## Insert Mode
- Cursor position: `i`.
- Beginning of the line: `I`.
- Append after the cursor position: `a`.
- Append end of the line: `A`. 

## Line Mode
- Saves the file: `:w`.
- Forces the file to be saved: `:w!`.
- Quit: `:q`.
- Quit without saving changes: `:q!`.
- Write and quit: `:wq!` / `:x`.
- Cursor `n`$$^{th}$$ line: `:n`.
- Cusor last line: `:$`.
- Line numbering:
  - On: `:set nu`.
  - Off: `:set nonu`.
- Get help: `:help [subcommands]`.

## Modes
- Command: `escape`.
- Insert: `i`.
- Line: `:`.

## Deleting Text
- Delete a character: `x`.
- Delete a word: `dw`.
- Delete a line: `dd`.
- Delete from the current positon: `D`.

## Changing Text
- Replace current character: `r`.
- Change current word: `cw`.
- Change current line: `cc`.
- Change text current position: `c$` / `C`.
- Swap character case: `~`.

## Copying and Pasting
- Yank (copy) the current line: `yy`.
- Yank the position: `y[position]`.
- Paste most recent deleted or yanked text: `p`.

## Searching
- Start a forward search: `/[pattern]`.
- Start a reverse search: `?[pattern]`.

## Repeating
- Repeat a command by preceding it with a number:
  - Move up a line 5 times: `5k`.
  - Insert `text` 80 times: `80i[text]<escape>`.
  - Insert `_` 80 times: `80i_<escape>`.

# Emacs
- Powerful editor.
- Some people prefer vi, other emacs.
- Either are great editors.
- Syntax: `emacs [filename]`.
- Ctrl while pressing `character`: `C-[character]`.
- "Meta" (alt or escape) key while pressing `character`: `M-[character]`.

## Commands
- Help: `C-h`.
- Exit: `C-x C-c`.
- Save the file: `C-x C-s`.
- Built-in tutorial: `C-h t`.
- Describe `key`: `C-h [key]`.

## Navigation
- Previous line: `C-p`.
- Next line: `C-n`.
- Back one character: `C-b`.
- Forward one character: `C-f`.
- Forward one word: `M-f`.
- Backward one word: `M-b`.
- Beginning of line : `C-a`.
- End of line : `C-e`.
- Beginning of file : `M-<`.
- End of file : `M->`.

## Copying, pasting and undo
- Kill (cut): `C-k`.
- Yank (paste): `C-y`.
- Undo: `C-x u`.

## Searching
- Start a forward search: `C-s`.
- Start a reverse search: `C-r`.

## Repeating
- Repeat `command` `n` times: `C-u [n] [command]`.

# Graphical Code Editors
- `emacs` again...
- `gvim`.
- Gone: `gedit`...
- Xfce:
  - `xed`.
  - `mousepad`.
- KDE: `kedit`.
- Visual Studio `code`.

# Word Processing Editors
- Lightweight word engine: `AbiWord`.
- Full office suite: `LibreOffice`.
- Source code editor: `Kate`.
