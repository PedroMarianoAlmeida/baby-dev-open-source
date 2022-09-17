import { Typography } from "../components/atoms";
import StackBadge from "../components/atoms/StackBadge";

export default function Home() {
  return (
    <div>
      <Typography variant="h1">Hello World!</Typography>
      <StackBadge name="teste" />
    </div>
  );
}
