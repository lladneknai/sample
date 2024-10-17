import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const FileTreeSkeleton = () => {
  return (
    <Stack spacing={0.5}>
      <Skeleton variant="rounded" width={250} height={40} />
      <Skeleton variant="rounded" width={250} height={40} />
      <Skeleton variant="rounded" width={250} height={40} />
      <Skeleton variant="rounded" width={250} height={40} />
      <Skeleton variant="rounded" width={250} height={40} />
      <Skeleton variant="rounded" width={250} height={40} />
      <Skeleton variant="rounded" width={250} height={40} />
      <Skeleton variant="rounded" width={250} height={40} />
      <Skeleton variant="rounded" width={250} height={40} />
    </Stack>
  );
  //   return <p>FileTreeSkeleton</p>;
};

export default FileTreeSkeleton;
