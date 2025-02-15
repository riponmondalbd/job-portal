import { useParams } from "react-router";

const JobApply = () => {
  const { id } = useParams();
  console.log(id);

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedin, github, resume);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={submitJobApplication} className="fieldset">
              <label className="fieldset-label">LinkedIn URL</label>
              <input
                type="url"
                name="linkedin"
                className="input"
                placeholder="LinkedIn URL"
              />
              <label className="fieldset-label">Github URL</label>
              <input
                type="url"
                name="github"
                className="input"
                placeholder="Github URL"
              />
              <label className="fieldset-label">Resume URL</label>
              <input
                type="url"
                name="resume"
                className="input"
                placeholder="Resume URL"
              />

              <button className="btn btn-neutral mt-4">Apply</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
