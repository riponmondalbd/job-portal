import { useLoaderData } from "react-router";

const ViewApplications = () => {
  const applications = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl">
        Applications for this job:{applications.length}
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {applications.map((app, index) => (
                <tr key={app._id}>
                  <th>{index + 1}</th>
                  <td>{app.applicant_email}</td>
                  <td>{app.applicationCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </h2>
    </div>
  );
};

export default ViewApplications;
