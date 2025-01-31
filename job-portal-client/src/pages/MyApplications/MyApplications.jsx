import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/job-applications?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);
  return (
    <div>
      <h2 className="text-3xl">My Application: {jobs.length}</h2>
    </div>
  );
};

export default MyApplications;
