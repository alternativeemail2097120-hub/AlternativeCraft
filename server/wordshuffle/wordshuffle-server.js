// WORD SHUFFLE (update 146) - original game server wrapped as a CommonJS module and mounted on the platform (namespace /wordshuffle, page at /wordshuffle/).
import { createRequire } from "module";
const require = createRequire(import.meta.url);
export async function mountWordShuffle(app, io, opts = {}) {
  const { registerWordShuffle } = require("./wordshuffle-server.cjs");
  await registerWordShuffle(app, io, { mountPath: opts.mountPath || "/wordshuffle" });
}
