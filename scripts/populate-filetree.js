import fs from "fs";
import path from "path";

/**
 * RUN THIS LOCALLY TO PRODUCE THE SOURCECODE LIST.
 *
 * This script uses `writePath` (TODO: env it) to create a file
 * manifest in a text file. This is read by the FileTree on mount,
 * which builds out the tree.
 *
 * FOR NOW: when you do this, you have to copy the files into /public/sourcecode.
 * IN THE FUTURE: this will be done by a build script (probably including this file).
 */

// Where the 'fake' sourcecode lives,
const readPath = "../";
// const readPath = "../public/sourcecode";
const writePath = "../public/sourcecode-ref.txt";

// Filled with folders and file names.
const filePaths = [];

// Ignore this stuff.
const excludedDirectories = [
  ".ampt",
  ".git",
  "node_modules",
  "public",
  "sourcecode",
];
const excludedFilenames = [
  ".DS_Store",
  ".amptignore",
  ".devcontainer.json",
  //   ".env",
  ".gitignore",
  //   "README.md",
  "eslint.config.js",
  //   "package.json",
  "package-lock.json",
  "tsconfig.app.json",
  "tsconfig.json",
  "tsconfig.node.json",
  "vite.config.ts",
];

// Declare a Generator that traverses the filetree and returns all paths.
function* readAllFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  const localDir = dir.replace(readPath, "");

  for (const file of files) {
    if (excludedDirectories.includes(file.path.replace(readPath, ""))) {
      continue;
    }

    if (file.isDirectory()) {
      // Head back in...
      yield* readAllFiles(path.join(dir, file.name));
    } else {
      // Ignore certain filenames (.DS_Store, etc.)
      if (!excludedFilenames.includes(file.name)) {
        yield path.join(localDir, file.name);
      }
    }
  }
}

/**
 * Iterare through the Generator and build the filetree accordingly.
 */
for (const fp of readAllFiles(readPath)) {
  /**
   * TODO: For some reason... this had duplicates?
   * TODO: no, it was never the problem.... it was the fucking treebuilder....
   */
  if (!filePaths.includes(fp)) {
    filePaths.push(fp);
  }
}

try {
  console.log("FILE DATA ==>", filePaths);
  console.log("WRITTEN TO ==>", writePath);
  fs.writeFileSync(writePath, JSON.stringify(filePaths));
} catch (err) {
  console.error(err);
}
