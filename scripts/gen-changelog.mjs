import { execSync } from "node:child_process";
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";

/**
 * Generate changelog.json from the source (private) repo's git history.
 * Reads tags + conventional-commit messages and groups them per version.
 *
 * Usage: node scripts/gen-changelog.mjs
 * Output: src/data/changelog.json  (consumed by src/pages/changelog.astro)
 */

const repoDir = path.resolve(import.meta.dirname, "../../novorge");
const outFile = path.resolve(import.meta.dirname, "../src/data/changelog.json");

const git = (cmd) =>
  execSync(`git -C "${repoDir}" ${cmd}`, { encoding: "utf8" }).trim();

// Tags sorted newest-first by semver. Skip prerelease tags (beta, rc, alpha).
const tags = git("tag --sort=-v:refname")
  .split("\n")
  .map((t) => t.trim())
  .filter((t) => t && !/-/.test(t));

const versions = [];

for (let i = 0; i < tags.length; i++) {
  const tag = tags[i];
  const prev = tags[i + 1];

  const date = git(`log -1 --format=%ad --date=short ${tag}`);
  const range = prev ? `${prev}..${tag}` : tag;

  const raw = git(`log --format=%s ${range} --no-merges`);
  const commits = raw ? raw.split("\n").filter(Boolean) : [];

  const features = [];
  const fixes = [];
  const improvements = [];

  for (const c of commits) {
    // Strip conventional-commit prefix → "feat(export): foo" becomes "foo"
    const msg = c
      .replace(/^(feat|fix|perf|refactor|build|style)(\([^)]+\))?:\s*/, "")
      .trim();
    if (c.startsWith("feat")) features.push(msg);
    else if (c.startsWith("fix")) fixes.push(msg);
    else if (c.startsWith("perf") || c.startsWith("refactor")) improvements.push(msg);
    // skip chore/ci/docs/test — not user-facing
  }

  versions.push({
    version: tag,
    date,
    features,
    fixes,
    improvements,
  });
}

mkdirSync(path.dirname(outFile), { recursive: true });
writeFileSync(outFile, JSON.stringify(versions, null, 2) + "\n");

console.log(`Wrote ${versions.length} versions → src/data/changelog.json`);
