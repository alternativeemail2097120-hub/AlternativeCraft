// MEMORY MATCH (update 146) - the original single-file game server, wrapped as a CommonJS module and mounted on the platform:
// Socket.IO namespace /memory, static page at /memory/, shared TikTok connection through PlatformHub.
import { createRequire } from "module";
const require = createRequire(import.meta.url);
export async function mountMemory(app, io, opts = {}) {
  const { registerMemory } = require("./memory-server.cjs");
  await registerMemory(app, io, { mountPath: opts.mountPath || "/memory" });
}
