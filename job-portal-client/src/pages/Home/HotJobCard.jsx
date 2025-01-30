import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";

const HotJobCard = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex gap-2 mt-2">
        <figure>
          <img className="w-16" src={company_logo} alt={company} />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="flex gap-1 items-center">
            <CiLocationOn />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
          {requirements.map((skill, idx) => (
            <p
              className="border rounded-md text-center px-2 py-3 hover:text-white hover:bg-blue-400"
              key={idx}
            >
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center mt-4">
          <p className="flex items-center">
            Salary:
            <FaDollarSign /> {salaryRange.min} - {salaryRange.max}{" "}
            {salaryRange.currency}
          </p>
          <button className="btn btn-sm btn-primary">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
