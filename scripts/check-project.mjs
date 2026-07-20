import fs from "node:fs";
const html = fs.readFileSync("src/pages/login.html", "utf8");
const css = fs.readFileSync("src/styles/login.css", "utf8");
const checks = [
  ["login title exists", html.includes("class=\"auth-heading\"")],
  ["login form exists", html.includes("class=\"login-form\"")],
  ["title rule exists", css.includes(".auth-heading")],
  ["subtitle rule exists", css.includes(".login-subtitle")]
];
for (const [name, passed] of checks) if (!passed) throw new Error(`FAIL: ${name}`);
console.log(`PASS: ${checks.length} project checks`);

