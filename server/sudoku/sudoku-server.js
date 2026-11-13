// SUDOKU (update 146) - the original single-file game server, wrapped as a CommonJS module and mounted on the platform:
// Socket.IO namespace /sudoku, static page at /sudoku/, shared TikTok connection through PlatformHub.
import { createRequire } from "module";
const require = createRequire(import.meta.url);
export async function mountSudoku(app, io, opts = {}) {
  const { registerSudoku } = require("./sudoku-server.cjs");
  await registerSudoku(app, io, { mountPath: opts.mountPath || "/sudoku" });
}
