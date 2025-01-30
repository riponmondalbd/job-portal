import { easeOut } from "motion/react";
import * as motion from "motion/react-client";
import team1 from "../../assets/team/office-happy-team.jpg";
import team2 from "../../assets/team/programming -team-celebrate.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 -ml-36 lg:ml-36">
          <motion.img
            src={team1}
            alt="team image"
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm w-60 md:w-full rounded-[40px] rounded-bl-none border-l-4 border-b-4 border-blue-700 shadow-2xl"
          />
          <motion.img
            src={team2}
            alt="team image"
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            className="max-w-sm w-60 md:w-full rounded-[40px] rounded-bl-none border-l-4 border-b-4 border-blue-700 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#049527", "#33ffdd", "#ff6e33"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
