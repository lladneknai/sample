export interface WindowProps {
  fullscreen: boolean;
  minimized: boolean;
}

export function getHeight({ fullscreen, minimized }: WindowProps) {
  if (fullscreen) {
    return "calc(100vh - 24px) !important";
  }
  if (minimized) {
    return "32px !important";
  }
  return "400px !important";
}

export function getWidth({ fullscreen, minimized }: WindowProps) {
  if (fullscreen) {
    return "calc(100vw - 24px) !important";
  }
  if (minimized) {
    return "300px !important";
  }
  return "800px !important";
}

export function getMinimizedAttributes(minimized: boolean) {
  if (minimized) {
    return {
      bottom: 0,
      position: "absolute !important" as never,
      left: 0,
    };
  }
  return {};
}
