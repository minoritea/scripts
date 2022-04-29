#!/usr/bin/env node
/*
 * License:
 * https://creativecommons.org/publicdomain/zero/1.0/deed
 */

require("fs/promises")
  .readFile("package.json", { encoding: "utf-8" })
  .then((str) =>
    console.log(JSON.stringify(JSON.parse(str)?.scripts || {}, null, 2))
  );
