import HomeHero from "@/components/pages/Home/Hero";
import HomeLatestProjects from "@/components/pages/Home/LatestProjects";
import HomeListItem from "@/models/HomeListItem";

const projects: HomeListItem[] = [
  {
    key: 1,
    buttonText: "Case Study →",
    destination: "mrt-producoes",
    image: "mrt-producoes.png",
    title: "MRT Produções",
  },
  {
    key: 2,
    buttonText: "Case Study →",
    destination: "lixeira-inteligente",
    image: "lixeira-inteligente.png",
    title: "Lixeira Inteligente",
  },
  {
    key: 3,
    buttonText: "Case Study →",
    destination: "almocai",
    image: "almocai.png",
    title: "Almoçaí",
  },
];

export default function Home() {

  return (
    <>
      <HomeHero 
        titlePrefix="Hi I'm"
        subtitle="My passion is to create astonishing experiences for the web."
      />
      <HomeLatestProjects 
        title="Latest Projects"
        buttonText="See more projects →"
        projects={projects}
      />
    </>
  )
}