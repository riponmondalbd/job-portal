import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();
  const { _id, title, company, applicationDeadline } = job;
  return (
    <div className="m-10">
      <h2 className="text-3xl">Job details for {title}</h2>
      <p>Apply for: {company}</p>
      <p>Deadline: {applicationDeadline}</p>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
