import GithubIcon from "@mui/icons-material/Github";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { about } from "@/portfolio";
import CustomLink from "./ui/CustomLink";
import ScrollFadeInWrapper from "./ui/ScrollFadeInWrapper";


const About = () => {
 const { name, role, description, social } = about;

 return (
  <ScrollFadeInWrapper className="flex flex-col justify-center items-center md:pt-10 pb-5">
   {name && (
    <h1 className="text-6xl sm:text-7xl md:text-8xl font-display">
     Hi, I am <span className="opacity-75">{name}.</span>
    </h1>
   )}

   {role && <h2 className="text-2xl mt-2 font-display">A {role}.</h2>}
   <p className="max-w-[600px] mt-6 opacity-75 leading-relaxed">
    {description && description}
   </p>

    {social && (
     <>
      {social.github && (
       <CustomLink
        href={social.github}
        aria-label="github"
        variant="icon"
        target="_blank">
        <GitHubIcon />
       </CustomLink>
      )}

      {social.linkedin && (
       <CustomLink
        href={social.linkedin}
        aria-label="linkedin"
        variant="icon"
        target="_blank">
        <LinkedInIcon />
       </CustomLink>
      )}
     </>
    )}
   </div>
  </ScrollFadeInWrapper>
 );
};

export default About;
