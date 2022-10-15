import Image from "next/image";
import StackBadge from "@atoms/StackBadge";
import styles from "./JobCard.module.css";
import Box from "@atoms/Box";

interface JobCardProps {
  cardData: {
    companyName: string;
    companyLogo: string;
    jobTitle: string;
    jobLocation: string;
    jobStack: string[];
  };
}

const JobCard = ({ cardData }: JobCardProps) => {
  const { companyName, companyLogo, jobTitle, jobLocation, jobStack } =
    cardData;

  return (
    <div id={styles.root}>
      <Box>
        <div id={styles.content}>
          <div id={styles.logoTitle}>
            <Image
              src={companyLogo}
              alt={`${companyName} - ${jobTitle}`}
              id={styles.logo}
              width={50}
              height={50}
            />
            <div id={styles.title}>
              <h4 id={styles.name}>{companyName}</h4>
              <h3 id={styles.job}>{jobTitle}</h3>
            </div>
          </div>
          <h5 id={styles.place}>{jobLocation}</h5>
        </div>
        <hr />
        <div id={styles.stack}>
          {jobStack.map((tec) => (
            <StackBadge name={tec} key={tec} />
          ))}
        </div>
      </Box>
    </div>
  );
};

export default JobCard;
