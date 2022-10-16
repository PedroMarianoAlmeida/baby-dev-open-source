import styles from "./JobCardGrid.module.css";

import JobCard from "@molecules/JobCard";

const JobCardGrid = ({ jobs }) => {
  const jobsCardData = jobs.map((job) => {
    const { company, title, location, stack, createAt } = job;
    return {
      companyName: company,
      companyLogo: "",
      jobTitle: title,
      jobLocation: location,
      jobStack: stack,
      createAt,
    };
  });

  return (
    <div id={styles.root}>
      {jobsCardData.map((job) => (
        <JobCard
          cardData={job}
          key={`${job.companyName} ${job.jobTitle} ${job.createAt}`}
        />
      ))}
    </div>
  );
};

export default JobCardGrid;
