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

  const { root, content, logoTitle, logo, title, name, job, place, stack } =
    styles;

  return (
    <div className={root}>
      <Box>
        <div className={content}>
          <div className={logoTitle}>
            <Image
              src={companyLogo}
              alt={`${companyName} - ${jobTitle}`}
              className={logo}
              width={50}
              height={50}
            />
            <div className={title}>
              <h4 className={name}>{companyName}</h4>
              <h3 className={job}>{jobTitle}</h3>
            </div>
          </div>
          <h5 className={place}>{jobLocation}</h5>
        </div>
        <hr />
        <div className={stack}>
          {jobStack.map((tec) => (
            <StackBadge name={tec} key={tec} />
          ))}
        </div>
      </Box>
    </div>
  );
};

export default JobCard;
