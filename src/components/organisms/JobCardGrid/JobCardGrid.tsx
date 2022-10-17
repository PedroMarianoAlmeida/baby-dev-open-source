import styles from "./JobCardGrid.module.css";

import JobCard from "@molecules/JobCard";

const JobCardGrid = ({ jobs }) => {
  return (
    <div id={styles.root}>
      {jobs.map((job) => (
        <JobCard
          cardData={job}
          key={`${job.companyName} ${job.jobTitle} ${job.createAt}`}
        />
      ))}
    </div>
  );
};

export default JobCardGrid;
