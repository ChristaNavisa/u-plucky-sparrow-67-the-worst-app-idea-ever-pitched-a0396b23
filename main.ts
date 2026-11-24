import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
// One sentence, one idea: the pitch itself is the whole entry.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry =
  "FridgeRun is a premium delivery service that carries your leftovers from the top shelf of your own fridge to the bottom shelf, because bending down is a burden no modern family should face alone.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
