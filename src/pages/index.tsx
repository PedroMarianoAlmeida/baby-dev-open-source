import StackBadge from "@atoms/StackBadge";
import JobCard from "src/components/molecules/JobCard";
import styles from "src/styles/Home.module.css";

const cardData = {
  company: {
    logo: "/public/sample/login-avatar.png",
    name: "Google",
  },
  job: {
    title: "Frontend Developer",
    place: "Remote",
  },
  stack: ["React", "Next", "Typescript"],
};
export default function Home() {
  return (
    <div className={styles.container}>
      <StackBadge name="teste" />
      <JobCard cardData={cardData} />
    </div>
  );
}
