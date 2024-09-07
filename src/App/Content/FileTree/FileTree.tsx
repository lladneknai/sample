import { Dispatch, SetStateAction } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import FileTreeContainer from "./FileTreeContainer";
import FileTreeSkeleton from "./FileTreeSkeleton";
import { useFileTree } from "./useFileTree";

export default function ControlledExpansion({
  //   requestedFile,
  setRequestedFile,
}: {
  //   requestedFile: string;
  setRequestedFile: Dispatch<SetStateAction<string>>;
}) {
  const {
    handleExpandClick,
    handleExpandedItemsChange,
    handleListItemClick,
    expandedItems,
    fileTreeShown,
    fileTreeItems,
  } = useFileTree();

  return (
    <Stack spacing={2}>
      <FileTreeContainer>
        {fileTreeShown ? (
          <RichTreeView
            expandedItems={expandedItems}
            items={fileTreeItems}
            // items={SAMPLE_ITEMS}
            onExpandedItemsChange={handleExpandedItemsChange}
            onItemClick={(_e, item) =>
              handleListItemClick(item, setRequestedFile)
            }
          />
        ) : (
          <FileTreeSkeleton />
        )}
      </FileTreeContainer>

      <Button onClick={handleExpandClick}>
        {expandedItems.length === 0 ? "Expand all" : "Collapse all"}
      </Button>
    </Stack>
  );
}
