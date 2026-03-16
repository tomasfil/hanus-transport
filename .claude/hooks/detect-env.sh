#!/usr/bin/env bash
# Lightweight environment detection — runs on every session start
# Output goes to Claude as context (SessionStart stdout is injected)

OS="unknown"; SHELL_NAME="unknown"; PATH_SEP="/"; LINE_ENDINGS="LF"

case "$(uname -s 2>/dev/null)" in
  Linux*)   OS="Linux" ;;
  Darwin*)  OS="macOS" ;;
  MINGW*|MSYS*|CYGWIN*) OS="Windows"; PATH_SEP="\\"; LINE_ENDINGS="CRLF" ;;
  *)        OS="$(uname -s 2>/dev/null || echo 'unknown')" ;;
esac

# Detect shell
if [ -n "$BASH_VERSION" ]; then SHELL_NAME="bash"
elif [ -n "$ZSH_VERSION" ]; then SHELL_NAME="zsh"
elif [ -n "$PSVersionTable" ]; then SHELL_NAME="PowerShell"
else SHELL_NAME="$(basename "${SHELL:-sh}" 2>/dev/null || echo 'sh')"
fi

# Detect if running in web/remote Claude Code session
REMOTE=""
if [ -n "$CLAUDE_CODE_REMOTE" ]; then REMOTE=" (remote/web session)"; fi

# Detect key tools
TOOLS=""
command -v node >/dev/null 2>&1 && TOOLS="$TOOLS node/$(node -v 2>/dev/null)"
command -v python3 >/dev/null 2>&1 && TOOLS="$TOOLS python/$(python3 --version 2>/dev/null | cut -d' ' -f2)"
command -v npm >/dev/null 2>&1 && TOOLS="$TOOLS npm"
command -v jq >/dev/null 2>&1 && TOOLS="$TOOLS jq"
command -v git >/dev/null 2>&1 && TOOLS="$TOOLS git"

BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "N/A")
CHANGED=$(git status --short 2>/dev/null | wc -l | tr -d ' ')

echo "[Environment] OS=$OS | Shell=$SHELL_NAME | Path=$PATH_SEP | Endings=$LINE_ENDINGS${REMOTE} | Branch=$BRANCH | Uncommitted=$CHANGED | Tools:$TOOLS"
