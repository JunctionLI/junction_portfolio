import BlurText from "../BlurText/BlurText";
import styles from "./AboutMe.module.css";

function Badge({ label }) {
  return (
    <span className="px-4 py-2 bg-gray-100 rounded-full shadow-sm text-sm text-gray-800">
      {label}
    </span>
  );
}

export default function Introduction(){

      const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const platforms = [
  { name: "github", url: "https://github.com/JunctionLI" },
  { name: "linkedin", url: "https://www.linkedin.com/in/junxian-li-junction/" },
  { name: "instagram", url: "https://www.instagram.com/junction_photograph/" }
];

    return(

        
        <div className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-3xl border border-gray-300 shadow-md bg-white max-w-5xl mx-auto gap-4">
              {/* Left Side: Avatar + Info */}
              <div className="flex items-center gap-4">
                <img
                  src="/assets/people.svg"
                  alt="avatar"
                  className="w-16 h-16 rounded-xl border border-gray-300"
                />
                <div>
                  <h2 className="text-xl font-semibold">Junction Li</h2>
                  <p className="text-gray-500 font-semibold tracking-wide">WEB DEVELOPER</p>
                </div>
              </div>

              {/* Right Side: Social icons */}
              <div className="flex gap-3 justify-center sm:justify-end">
                {platforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 hover:shadow-sm transition"
                  >
                    <img
                      src={`/assets/${platform.name}.svg`}
                      alt={platform.name}
                      className="w-5 h-5 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>


            
        <div className={styles.contentBlock}>
        <BlurText
          text="Web developer blending finance analytics with creative storytelling."
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight py-5 text-center sm:text-left"
        />
        <p className="py-2">Always learning, leading, and solving — growing with every step.</p>

        </div>

        <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        <div className="flex flex-wrap gap-3">
          <Badge label="Web Designer | since 2024 " />
          <Badge label="Event and Fund Development Assistant | since 2025.04" />
          <Badge label="Multimedia Assistant | 2024.05 - 2024.12" />
          <Badge label="Bond Trader | 2019.07 - 2023.07 " />
          <Badge label="Junior Financial Consultant | 2019.01 - 2019.07" />
        </div>
      </div>

    {/* Certification */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Certification</h2>
        <div className="flex flex-wrap gap-3">
          <Badge label="Meta Front-End Developer" />
          <Badge label="AWS Cloud Support Associate" />
          <Badge label="Google Digital Marketing & E-commerce" />
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <div className="flex flex-wrap gap-3">
          <Badge label="Southern Alberta Institute of Technology - Software Development Diploma" />
          <Badge label="University of Sheffield - Master of Accounting, Governance and Financial Management" />
        </div>
      </div>

      {/* Core Stack */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Technical Set</h2>
        <div className="flex flex-wrap gap-3">
          <Badge label="JavaScript" />
          <Badge label="TypeScript" />
          <Badge label="Next.js" />
          <Badge label="React" />
          <Badge label="Python" />
          <Badge label="C#" />
          <Badge label="Docker" />
          <Badge label="Firebase" />
          <Badge label="MySQL" />
          <Badge label="React Native" />
          <Badge label="Tailwind" />
          <Badge label="Bootstrap" />
          <Badge label="Mantine" />
          <Badge label="Figma" />
          <Badge label="WordPress/WIX" />
        </div>
      </div>




        </div>
    );
}