import { Typography } from "src/components/atoms";
import StackBadge from "@atoms/StackBadge";

export default function Home() {
  return (
    <div>
      <Typography variant="h1">Hello World!</Typography>
      <StackBadge name="teste" />
    </div>
  );
}
