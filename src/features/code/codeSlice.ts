import { TreeViewBaseItem } from "@mui/x-tree-view";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Shape of state
interface CodeState {
  filename: string;
  filetype: string;
  open: boolean;
  text: string;
  // todo: reformat
  expandedItems: string[];
  fileTreeItems: TreeViewBaseItem[];
  fileTreeShown: boolean;
}

// Initial state
const initialState: CodeState = {
  filename: "App.tsx",
  filetype: "tsx",
  open: false,
  text: "",
  fileTreeShown: false,
  expandedItems: [],
  fileTreeItems: [],
};

// Slice
const codeSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    setFilename(state, action: PayloadAction<string>) {
      state.filename = action.payload;
    },
    setFiletype(state, action: PayloadAction<string>) {
      state.filetype = action.payload;
    },
    setOpen(state, action: PayloadAction<boolean>) {
      state.open = action.payload;
    },
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
    setFileTreeShown(state, action: PayloadAction<boolean>) {
      state.fileTreeShown = action.payload;
    },
    setExpandedItems(state, action: PayloadAction<string[]>) {
      state.expandedItems = action.payload;
    },
    setFileTreeItems(state, action: PayloadAction<TreeViewBaseItem[]>) {
      state.fileTreeItems = action.payload;
    },
  },
});

// Exports
export const {
  setFilename,
  setFiletype,
  setOpen,
  setText,
  setFileTreeItems,
  setFileTreeShown,
  setExpandedItems,
} = codeSlice.actions;

export default codeSlice.reducer;
