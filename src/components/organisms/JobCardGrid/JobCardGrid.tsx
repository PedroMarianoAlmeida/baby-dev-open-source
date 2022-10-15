import JobCard from "@molecules/JobCard";

const JobCardGrid = ({ jobs }) => {
  console.log("Recent Jobs - JobCardGrid->", jobs);

  const jobsCardData = jobs.map((job) => {
    const { company, title, location, stack } = job;
    return {
      company: {
        logo: "",
        name: company,
      },
      job: {
        title,
        place: location,
      },
      stack: stack,
    };
  });

  return (
    <>
      {jobsCardData.map((job) => (
        <JobCard cardData={job} />
      ))}
    </>
  );
};

export default JobCardGrid;
