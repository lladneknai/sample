import * as React from "react";
import { TreeViewBaseItem, TreeViewItemId } from "@mui/x-tree-view/models";
import { useAppDispatch } from "@hooks/useApp";
import {
  setExpandedItems,
  setFileTreeShown,
  setFileTreeItems,
} from "@code/codeSlice";
import { useAppSelector } from "@hooks/useApp";
import { convertPathToTreeView } from "../features/code/FileTree/util";

/**
 *  Custom hook that powers the collapsable file tree.
 */
export const useFileTree = () => {
  const dispatch = useAppDispatch();
  const { fileTreeItems } = useAppSelector((state) => state.code);

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
      dispatch(setFileTreeShown(true));
    }
  }, [fileTreeItems]);

  const handleExpandedItemsChange = (
    _event: React.SyntheticEvent,
    itemIds: string[]
  ) => {
    dispatch(setExpandedItems(itemIds));
  };

  const handleExpandClick = () => {
    dispatch(
      setExpandedItems((oldExpanded: string[]) =>
        oldExpanded.length === 0 ? getAllItemsWithChildrenItemIds() : []
      )
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
      .then((response) => response.json())
      .then((text) => {
        const items = convertPathToTreeView(text);
        dispatch(setFileTreeItems(items));
      });
  };

  React.useEffect(() => {
    getCodeData();
  }, []);

  return {
    handleExpandClick,
    handleExpandedItemsChange,
    handleListItemClick,
    getCodeData,
  };
};
