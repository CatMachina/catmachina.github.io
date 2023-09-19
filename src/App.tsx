import { useEffect, useState } from "react";
import "./Global.css";
import { Projects } from "./Projects/Projects";
import Typewriter from "typewriter-effect";

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

const plugLinks: {
  to: string;
  label: string;
  className?: string;
  onClick?: () => boolean;
}[] = [
  {
    to: "https://github.com/CatMachina",
    label: "github",
  },
  {
    to: "https://www.linkedin.com/in/ryan-dy-zhang/",
    label: "linkedin",
  },
  {
    to: "mailto:dy5zhang@uwaterloo.ca",
    label: "email",
    onClick: () => {
      copyToClipboard("dy5zhang@uwaterloo.ca");
      return true;
    },
  },
  {
    to: "",
    label: "phone",
    onClick: () => {
      copyToClipboard("647-774-1738");
      return true;
    },
  },
  {
    to: "./Resume_External.pdf",
    label: "resumé",
    className: "PlugsLast",
  },
];

function App() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let id: string | number | NodeJS.Timeout | undefined = undefined;
    if (copied) {
      id = setTimeout(() => setCopied(false), 4000);
      return () => {
        clearTimeout(id);
        setCopied((prev) => false);
      };
    }
  }, [copied]);

  return (
    <>
      {copied && (
        <div className="HelpMessage">
          Copied to clipboard! <span style={{ color: "green" }}>&#10004;</span>
        </div>
      )}
      <div className="App">
        <div className="Introduction">
          <Typewriter
            onInit={(typewriter) => {
              const pause = 2000;
              let i = 0;
              const text = [
                "Hello, my name is Ryan Zhang.",
                "I am a software engineer.",
                "I am a mathematician.",
                "I am a cat lover.",
                "I am a bookworm.",
                "I am multilingual.",
              ];
              text.forEach((t) => {
                typewriter.typeString(t).pauseFor(pause).deleteAll(10);
              });
              typewriter.start();
            }}
            options={{
              loop: true,
              delay: 75,
            }}
          />
        </div>
        <div className="AboutMe Section">
          <div className="Profile">
            <div className="LightbulbTicks">
              <div
                className="LightbulbTick"
                style={{ transform: "rotate(-45deg)" }}
              />
              <div
                className="LightbulbTick"
                style={{ transform: "translateY(-57px)" }}
              />
              <div
                className="LightbulbTick"
                style={{ transform: "rotate(45deg)" }}
              />
            </div>
            <img
              className="ProfilePicture"
              src="./Profile.png"
              alt='Supposed to be my "logo", just picture a cyborg cat :3'
            />
            <div className="Plugs">
              {plugLinks.map((linkData) => (
                <a
                  className={linkData.className}
                  key={linkData.label}
                  href={linkData.to ? linkData.to : undefined}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    setCopied((prev) =>
                      linkData.onClick ? linkData.onClick() : copied
                    )
                  }
                >
                  <p className="PlugsText">{linkData.label}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="AboutMeContent">
            <h1 className="AboutMeTitle">About Me</h1>
            <p className="AboutMeText">
              Hello! I am an undergraduate student studying computer science at
              the University of Waterloo. I am an experience fullstack developer
              who is also dabbling in other areas of computer science! I've
              worked in many companies that focused on collaborative work and
              also startups that required independent work.
            </p>
            <p className="AboutMeText">
              I am an expert in frontend frameworks and their languages (i.e.
              HTML, CSS, JS/TS, React, Vue). I have an intermediate
              understanding Object-Oriented programming with C++. Additionally,
              I have intermediate proficiency in backend development using
              technologies such as PostgresQL, python, and Ruby on Rails.
              Finally, I have intermediate experience in database managements
              and SQL.
            </p>
            <p>
              I am looking to experience every field of computer
              science/software development! I specifically have an interest in
              Machine Learning, Data Engineering/Distributed Computing, Video
              Game Development, and Computer Vision. I am taking courses about them but I would love the opportunity to work in them!
            </p>
            <p>Please enjoy my portfolio!</p>
          </div>
        </div>
        <Projects />
      </div>
    </>
  );
}

export default App;
