import { IoLocationSharp } from "react-icons/io5";
import { LuDollarSign } from "react-icons/lu";
import { Link } from "react-router";

const HotJobCard = ({ job }) => {
  const {
    _id,
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
      <div className="flex gap-2 m-2">
        <figure>
          <img className="w-16" src={company_logo} alt={company} />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="flex items-center gap-1">
            <IoLocationSharp /> {location}
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
          {requirements.map((skill, index) => (
            <p
              className="border rounded text-center px-2 hover:text-blue-500"
              key={index}
            >
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions">
          <p className="flex items-center">
            Salary: <LuDollarSign /> {salaryRange.min} - {salaryRange.max}{" "}
            {salaryRange.currency}
          </p>

          <Link to={`/jobs/${_id}`} className="w-full">
            <button className="btn btn-primary w-full">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
