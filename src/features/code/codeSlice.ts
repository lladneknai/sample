import { TreeViewBaseItem } from "@mui/x-tree-view";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Shape of state
interface CodeState {
  expandedItems: string[];
  filename: string;
  filetype: string;
  fileTreeItems: TreeViewBaseItem[];
  fileTreeShown: boolean;
  fullscreen: boolean;
  minimized: boolean;
  open: boolean;
  text: string;
}

// Initial state
const initialState: CodeState = {
  expandedItems: [],
  filename: "App.tsx",
  filetype: "tsx",
  fileTreeItems: [],
  fileTreeShown: false,
  fullscreen: false,
  minimized: false,
  open: false,
  text: "",
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
    setMinimized(state, action: PayloadAction<boolean>) {
      state.open = true;
      state.fullscreen = false;
      state.minimized = action.payload;
    },
    setFullscreen(state, action: PayloadAction<boolean>) {
      state.open = true;
      state.minimized = false;
      state.fullscreen = action.payload;
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
  setMinimized,
  setFullscreen,
  setText,
  setFileTreeItems,
  setFileTreeShown,
  setExpandedItems,
} = codeSlice.actions;

export default codeSlice.reducer;
