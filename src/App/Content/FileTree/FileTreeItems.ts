import { TreeViewBaseItem } from "@mui/x-tree-view/models";

interface TreeView {
  children?: TreeView[];
  id: string;
  label: string;
  path: string;
}

function convertFolderOrFileToTree(
  currentTree: TreeView,
  fileNames: string[],
  fileId: string,
  fileIndex: number,
  fullPath: string[]
): TreeView {
  if (!fileNames.length) {
    return currentTree;
  }
  // If the current tree name is the same as the current file name, it means that the next file in fileNames will be a child of the currentTree. (for example, if currentTree.name === root and fileNames[0] === root, we know that we are at the root, and we can consider that the next fileName will be a child of the current tree, library in this case)
  if (currentTree.label === fileNames[0]) {
    return convertFolderOrFileToTree(
      currentTree,
      [...fileNames.slice(1)],
      fileId,
      fileIndex,
      fullPath
    );
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
          convertFolderOrFileToTree(
            child,
            [...fileNames.slice(1)],
            fileId,
            fileIndex,
            fileNames
          ),
        ],
      };
    } else if (fileNames.length > 1) {
      // If the fileName is not registered as a child in the tree and it's not the last fileName (meaning it's a folder), we add it and parse the other fileNames recursively
      const newTree: TreeView = {
        id: `__DIR__${fullPath.join("/")}__${Math.random()}`,
        label: fileNames[0],
        path: fullPath.join("/"),
        children: [],
      };
      return {
        ...currentTree,
        children: [
          ...(currentTree.children ?? []),
          convertFolderOrFileToTree(
            newTree,
            fileNames.slice(1),
            fileId,
            fileIndex,
            fileNames
          ),
        ],
      };
    } else {
      // If the fileName is not registered as a child in the tree and it is the last fileName, meaning it's a file, we just add it to the children and return the tree.
      const newTree: TreeView = {
        id: fullPath.join("/"),
        path: fullPath.join("/"),
        label: fileNames[0],
      };
      return {
        ...currentTree,
        children: [...(currentTree.children ?? []), newTree],
      };
    }
  }
}

// The main function we call, to convert a list of fileInfo to the tree
export function convertPathToTreeView(filepaths: string[]): TreeViewBaseItem[] {
  let tree: TreeView = {
    children: [],
    id: "TREE_BASE",
    path: "/",
    label: "BASE",
  };
  filepaths.forEach((fileInfo, fileIndex) => {
    const fileNames = fileInfo.replace(/^\//, "").split("/");
    tree = convertFolderOrFileToTree(
      tree,
      fileNames,
      fileInfo,
      fileIndex,
      fileNames
    );
  });

  const TreeItems: TreeViewBaseItem[] = [];
  const BaseItems = tree.children;
  //   console.log("please tell me what the fuck", BaseItems);
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
