<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Aptpro Repository Boundary

- `D:\aptpro-dash` is the canonical and only Aptpro repository; perform all Aptpro repository operations from this repository.
- Before destructive, dependency, Git, build, Graphify, or deployment-related operations, verify that the Git root is exactly `D:\aptpro-dash`. If it differs, stop rather than guessing.
- Do not discover or substitute another Aptpro checkout.
- Graphify must only index `D:\aptpro-dash`.
- After Graphify identifies relevant context, exact source files remain authoritative.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, refresh the graph using the local commands below (AST-only, no API cost).
### Aptpro local Graphify commands

- Work from `D:\aptpro-dash`. The CLI is isolated in `.tools/graphify`; it is not on global PATH. Substitute `.\.tools\graphify\Scripts\graphify.exe` for `graphify` in the skill and rules above.
- Before broad source searches or reads, run `.\.tools\graphify\Scripts\graphify.exe query "<question>" --budget 1500`. Refine vocabulary with `explain` or `path` if results are incomplete. Do not load the full graph into context.
- The graph is a navigation map, not authoritative source text. Open exact files and line ranges returned by the graph when implementation details are needed. Use targeted source searches for missing or unsupported relationships.
- If the graph is missing or code has changed, run `.\.tools\graphify\Scripts\graphify.exe extract . --code-only`, then `.\.tools\graphify\Scripts\graphify.exe cluster-only . --no-label --no-viz`. Extraction uses the file manifest/cache for incremental updates; add `--force` to extraction for a full rebuild.
- Refresh after code changes and before answering questions about changed code. No background watcher or Git hooks are installed. CSS, Cloudflare JSONC, docs and assets are outside this AST-only graph; inspect those exact files when relevant.
- Recreate the local tool with `python -m venv .tools/graphify`, then `.\.tools\graphify\Scripts\python.exe -m pip install -r tools/graphify-requirements.txt` if absent. No credentials are required.
