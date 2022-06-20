import GoToButton from "../GoToButton";
import { WorkCard } from "../work/WordCards";
import { trpc } from "../../utils/trpc";
import { useWork } from "../../contexts/work";
import text from "../../css/text.module.css";

const Work = () => {
  // const query = trpc.useQuery(["work.getAllWorkWithSlug" , {limit : 3} ])
  // if ( query .status != "success"){
  //   return <>Loading...</>
  // }
  // const {data: works } = query
  const { works } = useWork();
  return (
    <div className="mx-[12vw] mt-24 xl:mt-36">
      <p className={`${text.h1} mb-6`}>
        Projects and Work. Always aim for production.
      </p>
      <p className="text-lg lg:text-xl mb-6">
        When I was still studying in the university, I already helped companies
        create software applications by taking freelance, part time and
        internship. I learn by experience. Sometimes I can discover new areas
        and see if that area is suitable for me. Although usually I work in
        small teams, I always aim for production level so that I can make the
        most out of it. I also made a lot of good relationships.
      </p>
      <GoToButton
        direction="right"
        text="See all previous work"
        href="/work"
      ></GoToButton>
      <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl gap-y-16 mt-16">
        <WorkCard {...works[0]}></WorkCard>
        <WorkCard {...works[1]}></WorkCard>
        <WorkCard {...works[2]} hiddenSm></WorkCard>
      </div>
    </div>
  );
};

export default Work;
