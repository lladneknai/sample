/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import { TreeViewBaseItem, TreeViewItemId } from "@mui/x-tree-view/models";
import {
  convertPathToTreeView,
  //   //   convertPathToTreeView,
  //   FILETREE_ITEMS,
  //   SAMPLE_ITEMS,
} from "./FileTreeItems";

export default function ControlledExpansion({
  //   requestedFile,
  // TODO: figure out this type
  setRequestedFile,
}) {
  const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

  const [FILETREE_ITEMS, SET_FILETREE_ITEMS] = React.useState<
    TreeViewBaseItem[]
  >([]);

  const getAllItemsWithChildrenItemIds = () => {
    const itemIds: TreeViewItemId[] = [];
    const registerItemId = (item: TreeViewBaseItem) => {
      if (item.children?.length) {
        itemIds.push(item.id);
        item.children.forEach(registerItemId);
      }
    };
    FILETREE_ITEMS.forEach(registerItemId);
    return itemIds;
  };

  const [filetreeShown, setFiletreeShown] = React.useState(false);

  React.useEffect(() => {
    if (FILETREE_ITEMS.length > 0) {
      console.log(FILETREE_ITEMS);
      setFiletreeShown(true);
    }
  }, [FILETREE_ITEMS]);

  // Fetch the generated ref file which populates the tree
  const getCodeData = () => {
    fetch("/sourcecode-ref.txt")
      // .then((response) => response.text())
      .then((response) => response.json())
      .then((text) => {
        const items = convertPathToTreeView(text);
        SET_FILETREE_ITEMS(items);
      });
  };
  React.useEffect(() => {
    getCodeData();
  }, []);

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

  return (
    <Stack spacing={2}>
      <div>
        <Button onClick={handleExpandClick}>
          {expandedItems.length === 0 ? "Expand all" : "Collapse all"}
        </Button>
      </div>

      {/* https://mui.com/x/api/tree-view/rich-tree-view/ */}
      <Box sx={{ minHeight: 352, minWidth: 250 }}>
        {filetreeShown && true && (
          <RichTreeView
            expandedItems={expandedItems}
            // items={SAMPLE_ITEMS}
            items={FILETREE_ITEMS}
            onExpandedItemsChange={handleExpandedItemsChange}
            onItemClick={(e, item) => {
              if (!item.includes("__DIR__")) {
                console.log("GOO -> ", item);
                setRequestedFile(item);
              }
            }}
            // onItemSelectionToggle={(item) => window.alert(JSON.stringify(item))}
          />
        )}
      </Box>
    </Stack>
  );
}
