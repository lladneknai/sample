import { Dispatch, SetStateAction } from "react";
import Stack from "@mui/material/Stack";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
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
    handleExpandedItemsChange,
    handleListItemClick,
    expandedItems,
    fileTreeShown,
    fileTreeItems,
  } = useFileTree();

  return (
    <Stack spacing={2}>
      {fileTreeShown ? (
        <>
          <RichTreeView
            expandedItems={expandedItems}
            items={fileTreeItems}
            // items={SAMPLE_ITEMS}
            onExpandedItemsChange={handleExpandedItemsChange}
            onItemClick={(_e, item) =>
              handleListItemClick(item, setRequestedFile)
            }
          />
        </>
      ) : (
        <FileTreeSkeleton />
      )}
    </Stack>
  );
}
