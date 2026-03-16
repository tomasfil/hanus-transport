# Learnings Log

Corrections, discoveries, and patterns. Claude logs here on every correction AND every command failure.
Promote to CLAUDE.md or rules via `/reflect`. Prune after promoting.

---

### 2026-03-16 — Patch v2.1: env detection + SessionStart hook
- **Trigger**: bootstrap patch
- **Changes applied**:
  - Created `.claude/settings.json` with SessionStart + PreToolUse safety hooks
  - SessionStart hook + `.claude/hooks/detect-env.sh`: auto-detects OS, shell, tools on every session
  - CLAUDE.md: added Environment section with auto-detection
- **Status**: applied
