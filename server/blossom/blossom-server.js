// BLOSSOM (update 146) - the original single-file game server, wrapped as a CommonJS module and mounted on the platform:
// Socket.IO namespace /blossom, static page at /blossom/, shared TikTok connection through PlatformHub.
import { createRequire } from "module";
const require = createRequire(import.meta.url);
export async function mountBlossom(app, io, opts = {}) {
  const { registerBlossom } = require("./blossom-server.cjs");
  await registerBlossom(app, io, { mountPath: opts.mountPath || "/blossom" });
}
