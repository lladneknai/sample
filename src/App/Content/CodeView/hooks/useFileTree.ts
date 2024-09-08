/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { TreeViewBaseItem, TreeViewItemId } from "@mui/x-tree-view/models";
import { convertPathToTreeView } from "./file-tree-helpers";

export const useFileTree = () => {
  const [fileTreeShown, setFileTreeShown] = React.useState(false);
  const [expandedItems, setExpandedItems] = React.useState<string[]>([]);
  const [fileTreeItems, setFileTreeItems] = React.useState<TreeViewBaseItem[]>(
    []
  );

  const getAllItemsWithChildrenItemIds = () => {
    const itemIds: TreeViewItemId[] = [];
    const registerItemId = (item: TreeViewBaseItem) => {
      if (item.children?.length) {
        itemIds.push(item.id);
        item.children.forEach(registerItemId);
      }
    };
    fileTreeItems.forEach(registerItemId);
    return itemIds;
  };

  React.useEffect(() => {
    if (fileTreeItems.length > 0) {
      console.log(fileTreeItems);
      setFileTreeShown(true);
    }
  }, [fileTreeItems]);

  const handleExpandedItemsChange = (
    _event: React.SyntheticEvent,
    itemIds: string[]
  ) => {
    setExpandedItems(itemIds);
  };

  const handleExpandClick = () => {
    setExpandedItems((oldExpanded) =>
      oldExpanded.length === 0 ? getAllItemsWithChildrenItemIds() : []
    );
  };

  const handleListItemClick = (item: any, cb: any) => {
    if (!item.includes("__DIR__")) {
      cb(item);
    }
  };

  /**
   * RUNS ON LOAD: Fetch the generated ref file which populates the tree
   */
  const getCodeData = () => {
    fetch("/sourcecode-ref.txt")
      // .then((response) => response.text())
      .then((response) => response.json())
      .then((text) => {
        const items = convertPathToTreeView(text);
        setFileTreeItems(items);
      });
  };

  React.useEffect(() => {
    getCodeData();
  }, []);

  return {
    handleExpandClick,
    handleExpandedItemsChange,
    handleListItemClick,
    expandedItems,
    setExpandedItems,
    getCodeData,
    fileTreeShown,
    fileTreeItems,
    setFileTreeShown,
  };
};
