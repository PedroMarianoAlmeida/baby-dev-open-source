import Image from "next/image";
import StackBadge from "@atoms/StackBadge";
import styles from "./JobCard.module.css";
import Box from "@atoms/Box";

interface JobCardProps {
  cardData: {
    company: {
      logo: string;
      name: string;
    };
    job: {
      title: string;
      place: string;
    };

    stack: string[];
  };
}

const JobCard = ({ cardData }: JobCardProps) => {
  const { company, job, stack } = cardData;
  const { logo, name } = company;
  const { title, place } = job;

  return (
    <div id={styles.root}>
      <Box>
        <div id={styles.content}>
          <div id={styles.logoTitle}>
            <Image
              src={logo}
              alt={name}
              id={styles.logo}
              width={50}
              height={50}
            />
            <div id={styles.title}>
              <h4 id={styles.name}>{name}</h4>
              <h3 id={styles.job}>{title}</h3>
            </div>
          </div>
          <h5 id={styles.place}>{place}</h5>
        </div>
        <hr />
        <div id={styles.stack}>
          {stack.map((tec) => (
            <StackBadge name={tec} key={tec} />
          ))}
        </div>
      </Box>
    </div>
  );
};

export default JobCard;
