import { TreeViewBaseItem } from "@mui/x-tree-view/models";
interface TreeView {
  children?: TreeView[];
  id: string;
  label: string;
  path: string;
}

/**
 * This var keeps track of the FULL filepath of each file in the tree.
 * It is reset on every iteration of the file loop in convertPathToTreeView().
 * It supersedes the `fileNames` variable which keeps track of ONE piece of the tree, but only enough to build it.
 */
let currentFilename = "";

/**
 * Recursisve function that builds the filetree, using previous nodes to check where this current ndoe should go.
 */
function convertFolderOrFileToTree(
  currentTree: TreeView,
  fileNames: string[],
  fileId: string
): TreeView {
  if (!fileNames.length) {
    return currentTree;
  }
  // If the current tree name is the same as the current file name, it means that the next file in fileNames will be a child of the currentTree. (for example, if currentTree.name === root and fileNames[0] === root, we know that we are at the root, and we can consider that the next fileName will be a child of the current tree, library in this case)
  if (currentTree.label === fileNames[0]) {
    return convertFolderOrFileToTree(currentTree, fileNames.slice(1), fileId);
  } else {
    // We check if current fileName is already a child of the tree.
    const child = currentTree.children?.find((t) => t.label === fileNames[0]);
    if (child) {
      // If it is, we will parse the next fileName as the child of current fileName.
      return {
        ...currentTree,
        children: [
          ...(currentTree.children?.filter(
            (tree) => tree.label !== child.label
          ) ?? []),
          convertFolderOrFileToTree(child, fileNames.slice(1), fileId),
        ],
      };
    } else if (fileNames.length > 1) {
      // If the fileName is not registered as a child in the tree and it's not the last fileName (meaning it's a folder), we add it and parse the other fileNames recursively
      const newTree: TreeView = {
        //
        // The Math.random() here is admittedly pretty damn gross. The issue is how the tree is keyed when you need a standalone file.
        // TODO: implement something approaching a best practice in place of Math.random() to keep these key errors away.
        //
        id: `__DIR__${currentFilename}__${Math.random()}`,
        label: fileNames[0],
        path: fileNames.join("/"),
        children: [],
      };
      return {
        ...currentTree,
        children: [
          ...(currentTree.children ?? []),
          convertFolderOrFileToTree(newTree, fileNames.slice(1), fileId),
        ],
      };
    } else {
      // If the fileName is not registered as a child in the tree and it is the last fileName, meaning it's a file, we just add it to the children and return the tree.
      const newTree: TreeView = {
        id: currentFilename,
        path: fileNames.join("/"),
        label: fileNames[0],
      };
      return {
        ...currentTree,
        children: [...(currentTree.children ?? []), newTree],
      };
    }
  }
}

/**
 * Exported func that converts the filepaths to an array of TreeViewBaseItem[].
 */
export function convertPathToTreeView(filepaths: string[]): TreeViewBaseItem[] {
  // Initial declaration of the tree. This is the root node onto which all other nodes are attached.
  let tree: TreeView = {
    children: [],
    id: "TREE_BASE",
    path: "/",
    label: "BASE",
  };

  // Loop through each of the filepaths in /public/sourcecode-ref
  filepaths.forEach((fpath) => {
    currentFilename = fpath;
    const fileNames = fpath.replace(/^\//, "").split("/");
    tree = convertFolderOrFileToTree(tree, fileNames, fpath);
  });

  // Return the tree items and plug them into the FileTree.
  const TreeItems: TreeViewBaseItem[] = [];
  const BaseItems = tree.children;

  BaseItems?.forEach((bi) => {
    TreeItems.push(bi);
  });

  return TreeItems;
}

/**
 * Sample items
 */
export const SAMPLE_ITEMS: TreeViewBaseItem[] = [
  {
    id: "grid",
    label: "Data Grid",
    children: [
      { id: "grid-community", label: "@mui/x-data-grid" },
      { id: "grid-pro", label: "@mui/x-data-grid-pro" },
      { id: "grid-premium", label: "@mui/x-data-grid-premium" },
    ],
  },
  {
    id: "pickers",
    label: "Date and Time Pickers",
    children: [
      { id: "pickers-community", label: "@mui/x-date-pickers" },
      { id: "pickers-pro", label: "@mui/x-date-pickers-pro" },
    ],
  },
  {
    id: "charts",
    label: "Charts",
    children: [{ id: "charts-community", label: "@mui/x-charts" }],
  },
  {
    id: "tree-view",
    label: "Tree View",
    children: [{ id: "tree-view-community", label: "@mui/x-tree-view" }],
  },
];
