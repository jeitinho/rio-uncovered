import type { ElementType, HTMLAttributes } from "react";

type RichTextProps = {
  content: string;
  as?: ElementType;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "dangerouslySetInnerHTML">;

export function RichText({ content, as: Component = "div", ...props }: RichTextProps) {
  return <Component {...props} dangerouslySetInnerHTML={{ __html: content }} />;
}
