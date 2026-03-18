// runMigrations.ts
// runMigrations.ts
import { runMigrations } from "./001_init.ts";
import "dotenv/config";
async function main() {
  await runMigrations();
  console.log("Migrations done");
  process.exit(0);
}

main();