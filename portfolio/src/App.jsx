import "./App.css";
import Navbar from "./components/Navbar";
import Clouds from "../public/clouds.json";
import { Player } from "@lottiefiles/react-lottie-player";
function App() {
  return (
    <div className="font-ORB text-base lg:text-xl text-white ">
      <Navbar />
      <section
        id="profile"
        className="w-full m-0 px-[10%] py-[10%] bg-cover overflow-hidden text-white custom-profile-bg custom-clouds-anim"
      >
        <div className="flex flex-col-reverse md:grid md:grid-cols-3">
          <div className="w-90 col-span-2 text-center md:pr-10">
            <div className="hello">HELLO MY NAME IS...</div>
            <div className="myName">Haluethaichanok Ittisawetchaikul</div>
            <p className="intro mb-5">
              I'm a junior full-stack developer. I gather customer requirements
              to understand business requirements and design technical solutions
              to deliver on-scope products within a project timeline. I
              participate in Agile software development projects and tasks
              include coding, testing, debugging, peer-review, deploying,
              monitoring, and support. My experience as a junior full-stack
              developer has honed my communication, organization, and time
              management skills, making me an effective collaborator and a
              strong team player. My skills, experience, and passion will enable
              me to create innovative software solutions that can positively
              impact people's lives.
            </p>
            <div className="grid grid-cols-3 md:gap-4 grid-cols-6 justify-center ">
              <img className="w-20" src="./html.png" />
              <img className="w-20" src="./css.png" />
              <img className="w-20" src="./javascript.png" />
              <img className="w-20" src="./react_js.png" />
              <img className="w-20" src="./node_js.png" />
              <img className="w-20" src="./mongodb.png" />
              <img className="w-20" src="./mysql.png" />
              <img className="w-20" src="./next_js.png" />
              <img className="w-20" src="./material-ui.png" />
              <img className="w-20" src="./git.png" />
              <img className="w-20" src="./flutter.png" />
              <img className="w-20" src="./figma.png" />
            </div>
          </div>
          <div className="relative sm:flex sm:justify-center m-auto ">
            <img className="rounded-full p-5" src="./profile.jpeg" />
            <Player
              src={Clouds}
              className="player size-full absolute inset-0 left-0 top-auto"
              loop
              autoplay
            />
          </div>
        </div>
      </section>

      <section
        id="projects"
        className=" bg-[#DBDCCD] font-ORB   px-[10%] py-[5%]"
        style={{ color: "#08284E" }}
      >
        <h2 className="head font-bold">Projects</h2>
        <article className="miniProject">
          <div className="py-5 mx-50 grid md:grid-cols-2">
            <div className="w-full h-[300px] mr-10  overflow-hidden relative">
              <div className="photoProject">
                <img src="./orangecat.jpg" />
              </div>
            </div>
            <div className="detailProject">
              <h3 className="mt-5 md:px-10 md:mt-0">
                <b>OrangeCat Exercise Tracker Web Application</b>
              </h3>
              <p className="md:pl-10">
                Responsive web application page for OrangeCat exercise tracker
                as a group project. Our Target group is 7 to 25 years. Using
                React.js for frontend and node.js, express, mongoose, MongoDB
                Atlas, and Cloudinary for the backend.
              </p>
              <div className="allBut flex justify-between md:justify-center gap-10 mt-5">
                <a href="https://orangecat.vercel.app/" target="_blank">
                  <button className="btn bg-white text-[#08284E] rounded p-1 border border-[#08284E] font-bold">
                    DEMO
                  </button>
                </a>
                <a
                  href="https://github.com/lethal1147/frontend-jsd4-groupE"
                  target="_blank"
                >
                  <button className="btn bg-white text-[#08284E] rounded p-1 border border-[#08284E] font-bold">
                    FRONTEND
                  </button>
                </a>
                <a
                  href="https://github.com/lethal1147/backend-jsd4-groupE.git"
                  target="_blank"
                >
                  <button className="btn bg-white text-[#08284E] rounded p-1 border border-[#08284E] font-bold">
                    BACKEND
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="py-5 mx-50 grid md:grid-cols-2">
            <div className="w-full h-[300px] mr-10 overflow-hidden relative">
              <div className="photoProject">
                <img src="./colmar-mii6-vercel-app-.jpg" />
              </div>
            </div>
            <div className="detailProject">
              <h3 className="mt-5 md:px-10 md:mt-0">
                <b>Colmar Academy</b>
              </h3>
              <p className="md:pl-10">
                Responsive landing page for Colmar Academy. Using HTML and CSS.
              </p>
              <div className="allBut flex gap-20 justify-center mt-5">
                <a href="https://colmar-mii6.vercel.app/" target="_blank">
                  <button className="btn bg-white text-[#08284E] rounded p-1 border border-[#08284E] font-bold">
                    DEMO
                  </button>
                </a>
                <a
                  href="https://github.com/Haluethaichanok-J/Colmar.git"
                  target="_blank"
                >
                  <button className="btn bg-white text-[#08284E] rounded p-1 border border-[#08284E] font-bold">
                    REPO
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="py-5 mx-50 grid md:grid-cols-2">
            <div className=" w-full h-[300px] mr-10">
              <div className="w-full h-full">
                <img className="w-full h-full" src="./img-find-you-hat.png" />
              </div>
            </div>
            <div className="detailProject">
              <h3 className="mt-5 md:px-10 md:mt-0">
                <b>Find You Hat</b>
              </h3>
              <p className="md:pl-10">
                Mini console game in that you have to find your hat. Using
                Node.js{" "}
              </p>
              <div className="allBut flex gap-20 justify-center mt-5">
                <a
                  href="https://replit.com/join/rxsnzoicvq-haluethaichanok"
                  target="_blank"
                >
                  <button className="btn bg-white text-[#08284E] rounded p-1 border border-[#08284E] font-bold">
                    REPLIT
                  </button>
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section id="experience" className="w-100 px-[10%] py-[5%] bg-[#8FB7D1]">
        <h2 className="head font-bold">Experience</h2>
        <div className="work">
          <span className="education">Work</span>
          <article className="petervision grid md:grid-cols-3">
            <div className="logo md:p-10">
              <img className="w-full p-5 md:p-0" src="./petervision.png" />
            </div>
            <div className="information md:col-span-2 md:p-10">
              <h3 className="position font-bold">
                Junior Full-Stack Developer
              </h3>
              <h3 className="company font-bold">Peter Vision Co., Ltd.</h3>
              <h3 className="duration font-bold">September 2023 to Present</h3>
              <ul className="list-disc pl-10">
                <li>
                  Understand client specifications and develop websites to meet
                  client needs
                </li>
                <li>
                  Developed websites using React.js, Material UI, Next.js, and
                  SQL
                </li>
                <li>Developed mobile apps with Flutter</li>
                <li>
                  Collaborated with teammates to develop and review code,
                  provide feedback, and troubleshoot issues
                </li>
                <li>
                  Gained code feedback from senior developers and mentors to
                  improve code quality
                </li>
              </ul>
            </div>
          </article>
        </div>

        <div className="education">
          <span className="education">Education</span>
          <article className="generation grid md:grid-cols-3">
            <div className="logo md:p-10">
              <img className="w-full p-5 md:p-0" src="./generation.png" />
            </div>
            <div className="information md:col-span-2 md:p-10">
              <h3 className="position font-bold">
                Fullstack Web Developer Learner
              </h3>
              <h3 className="company font-bold">Generation Thailand</h3>
              <h3 className="duration font-bold">February - May 2023</h3>
              <ul className="list-disc pl-10">
                <li>
                  Learned how to build websites by using diverse programming
                  languages and frameworks
                </li>
                <li>
                  Technical Skills: HTML5, CSS3, JavaScript, React, Node.js,
                  Express, Relational databases, MongoDB and git version
                  control.
                </li>
              </ul>
            </div>
          </article>

          <article className="science grid md:grid-cols-3">
            <div className="logo md:p-10">
              <img
                className="w-full p-5 md:p-0"
                src="./chula-logo_square_75pc.png"
              />
            </div>
            <div className="information md:col-span-2 md:p-10">
              <h3 className="position font-bold">
                Bachelor's Degree of Science in Food Technology
              </h3>
              <h3 className="company font-bold">Chulalongkorn University</h3>
              <h3 className="duration font-bold">August 2017 - July 2021</h3>
              <ul className="list-disc pl-10">
                <li>
                  Senior project: PUFA-related gene expression analysis of
                  copepod Apocyclops royi
                </li>
              </ul>
            </div>
          </article>
        </div>

        <div className="internship">
          <span className="head">Internship</span>
          <article className="dairy-home grid md:grid-cols-3">
            <div className="logo  md:p-10">
              <img className="w-full p-5 md:p-0" src="./dairy-home-logo.png" />
            </div>
            <div className="information md:col-span-2 md:p-10">
              <h3 className="position font-bold">Internship</h3>
              <h3 className="company font-bold">Dairy Home Co., Ltd</h3>
              <h3 className="duration font-bold">May - July 2020</h3>
              <ul className="list-disc pl-10">
                <li>
                  Apprenticed production department to practice controlling the
                  processes, and produced the products to meet customer demand
                  by following production schedules
                </li>
                <li>
                  Apprenticed QC department to practice controlling the quality
                  of finished products to meet the standards
                </li>
                <li>
                  Apprenticed at the warehouse department to ensure the product
                  distribution followed the FIFO rule
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#DBDCCD] font-ORB  px-[10%] py-[15%]"
        style={{ color: "#08284E" }}
      >
        <h2 className="head font-bold">Contact</h2>
        <h3>Reach me on</h3>
        <div className="container flex justify-between md:gap-20 md:justify-center mt-5">
          <a
            href="https://docs.google.com/document/d/1idGYx4drzlZcaH21bOuXozSdcUQxAQ1qeWUkuE-JvrE/edit?usp=sharing"
            target="_blank"
          >
            <button className="btn bg-white text-[#08284E] rounded p-1 border border-[#08284E] font-bold">
              Resume
            </button>
          </a>
          <a
            href="mailto:haluethaichanok@gmail.com?subject=Mail fro our Website"
            target="_blank"
          >
            <button className="btn bg-white text-[#08284E] rounded p-1 border border-[#08284E] font-bold">
              Email
            </button>
          </a>
          <a href="https://github.com/Haluethaichanok-Itti" target="_blank">
            <button className="btn bg-white text-[#08284E] rounded p-1 border border-[#08284E] font-bold">
              GitHub
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/haluethaichanok-itti"
            target="_blank"
          >
            <button className="btn bg-white text-[#08284E] rounded p-1 border border-[#08284E] font-bold">
              LinkedIn
            </button>
          </a>
        </div>
      </section>
      <footer className="bg-[#8FB7D1] w-full text-center">
        <h6 className="text-sm font-light">
          @Haluethaichanok Ittisawetchaikul
        </h6>
      </footer>
    </div>
  );
}

export default App;
