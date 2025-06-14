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
      copyToClipboard("+1 647-774-1738");
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
              alt="A photo of me."
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
              Hello! I am recent computer science graduate from the University
              of Waterloo. I started as a Fullstack developer, but have recently
              transitioned into infrastructure and systems work. I have
              internship experience from many startups and prominently from X
              (formerly known as twitter).
            </p>
            <p className="AboutMeText">
              I specialize in backend and systems development, with a strong
              foundation in data structures, algorithms, and distributed
              systems. I'm proficient in C++, Python, and Bash, and experienced
              with infrastructure tools like Docker, Kubernetes, and Puppet.
              My background spans compiler internals, type systems, and
              intermediate representations, as well as practical knowledge of
              PostgreSQL, SQL, and distributed computing frameworks such as
              Spark and Hadoop. I'm comfortable working in both cloud-native and
              large-scale in-house production environments.
            </p>
            <p>Please enjoy my portfolio.</p>
          </div>
        </div>
        <Projects />
      </div>
    </>
  );
}

export default App;
