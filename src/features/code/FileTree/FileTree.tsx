// import { Dispatch, SetStateAction } from "react";
import Stack from "@mui/material/Stack";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import { useAppDispatch, useAppSelector } from "@hooks/useApp";
import { useFileTree } from "@hooks/useFileTree";
import { setFilename } from "../codeSlice";
import FileTreeSkeleton from "./FileTreeSkeleton";

function FileTree() {
  const dispatch = useAppDispatch();
  const setRequestedFile = (f) => dispatch(setFilename(f));
  const { fileTreeShown, expandedItems, fileTreeItems } = useAppSelector(
    (state) => state.code
  );

  const { handleExpandedItemsChange, handleListItemClick } = useFileTree();

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

export default FileTree;
