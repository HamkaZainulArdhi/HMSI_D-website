
import ChromaGrid from "@/components/ui/ChromaGrid";
import ChromaGridHead from "@/components/ui/ChromaGridHead";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kelas S1S1-23-D | Our Team Page",
  description:
    "ini kelas isinya anak-anak keren banget, penuh semangat, dan pastinya seru-seruan bareng. Di halaman ini, kamu bisa kenal lebih dekat dengan teman-teman sekelas yang selalu siap berbagi cerita, pengalaman, dan momen seru selama kuliah di kelas S1S1-23-D Telkom University Purwokerto. Yuk, jelajahi profil mereka dan temukan keunikan masing-masing anggota kelas kita!",
  // other metadata
};

const OurTeamPage = () => {
  return (
    <>
      {/* <OurTeam /> */}
      <ChromaGridHead />
      <ChromaGrid />
    </>
  );
};

export default OurTeamPage;
