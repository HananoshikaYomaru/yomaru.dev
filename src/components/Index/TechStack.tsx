import {
  Nextdotjs,
  ReactJs,
  Tailwindcss,
  CssThree,
  Typescript,
  Graphql,
  Postgresql,
  Docker,
  Remix,
  Figma, 
  Nodedotjs,
  Awsamplify , 
} from "@icons-pack/react-simple-icons";
import React from "react";

const Item = ({children , text  } :{children : React.ReactNode , text : string }   ) => { 
  return <div className="flex flex-col items-center">
    {children}
    <p className="mt-3">{text}</p>
  </div>
}

const TechStack = () => {
  return (
    <div className="mx-[12vw] mt-24 xl:mt-36">
      <p className="text-4xl">My favourite Techstack</p>
      <p className="text-lg lg:text-xl mb-12">
        My tech stack is my swiss knife to help me complete complicated tasks.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center">
        <Item text="React"><ReactJs size={100}></ReactJs></Item>
        <Item text="Next.js"><Nextdotjs size={100}></Nextdotjs></Item>
        <Item text="Tailwind CSS"><Tailwindcss size={100}></Tailwindcss></Item>
        <Item text="CSS"><CssThree size={100}></CssThree></Item>
        <Item text="Typescript"><Typescript size={100}></Typescript></Item>
      <Item text="GraphQL"><Graphql size={100}></Graphql></Item>
<Item text="PostgresQL"><Postgresql size={100}></Postgresql></Item>

<Item text="Docker"> <Docker size={100}></Docker></Item>
<Item text="Remix"><Remix size={100}></Remix></Item>
<Item text="Node Js"><Nodedotjs size={100}></Nodedotjs></Item>
<Item text="Figma"><Figma size={100}></Figma></Item>
<Item text="AWS Amplify"><Awsamplify size={100}></Awsamplify></Item>
    </div>
    </div>
  );
};

export default TechStack;
