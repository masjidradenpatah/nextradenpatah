export interface GalleryImageType {
  src: string;
  blurData?: string;
  className?: string;
  sizes?: string;
  variants?: {
    hidden: Record<string, unknown>;
    visible: Record<string, unknown>;
  };
  transition?: {
    duration?: number;
    delay?: number;
    [key: string]: unknown;
  };
}
