import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const handleStatusUpdate = (e, id) => {
    console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };

    fetch(`http://localhost:5000/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Status Update Successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };
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
                <th>Status</th>
                <th>Update Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {applications.map((app, index) => (
                <tr key={app._id}>
                  <th>{index + 1}</th>
                  <td>{app.applicant_email}</td>
                  <td>{app.status}</td>
                  <td>
                    <select
                      onChange={(e) => handleStatusUpdate(e, app._id)}
                      defaultValue={app.status || "Change Status"}
                      className="select select-sm"
                    >
                      <option disabled={true}>Change Status</option>
                      <option>Under Review</option>
                      <option>Set Interview</option>
                      <option>Hired</option>
                      <option>Rejected</option>
                    </select>
                  </td>
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
