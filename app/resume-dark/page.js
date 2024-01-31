import About from "@/components/About";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import GlitcheLayout from "@/layouts/GlitcheLayout";
import Experience from "@/components/Experience";
import "@css/template-dark/dark.css";

const Resume = () => {
  return (
    <GlitcheLayout dark={true}>
      <PageBanner pageLink={"resume-dark"} pageName={"Resume"} dark={true} />
      <About />
      <Experience />
      <Skills />
      <Services />
    </GlitcheLayout>
  );
};
export default Resume;
