import CloudinaryImg from "../CloudinaryImg";
import text from "../../css/text.module.css";

const Obsidian = () => {
  return (
    <div className="mx-[12vw] mt-24 xl:mt-36 grid grid-cols-1 lg:grid-cols-2 gap-12 ">
      <div>
        <p className={`${text.h1} mb-6`}>
          Expert knowledge management using graph and passive note taking
        </p>
        <div className="text-lg lg:text-xl prose">
          <p>
            I learn new things every day. To consolidate my new knowledges, I
            link them with existing knowledges using graphical linkage. I am an
            expert user of Obsidian and Zettelkasten method. I created my own
            scripts and plugins to automate my notes and generate reports. I
            also contribute the Obsidian open source community by committing
            code on Github.
          </p>

          <p>
            As my learning speed become even faster, active note taking
            can&apos;t capture all my learning. I started passive note taking by
            highlighting text in the article and generate graph automatically
            after each day. I explored tools like Hypothesis and Memex. Then I
            entered the field of web annotation and participated in some Web
            Annotation focus group.
          </p>
          <p>
            The community of passive note taking and web annotation is very
            small, the technology and standard are still not mature so the
            progress is slow. But I believe I am one of pioneer in this field. I
            am happy and excited when I exchange note taking ideas with others.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-gray-200 h-64 rounded-lg overflow-hidden border">
          <CloudinaryImg
            publicId="v1655200934/yomaru.dev/personal/CleanShot_2022-06-14_at_18.01.23_grv8ux.png"
            layout="fill"
          ></CloudinaryImg>
        </div>
        <div className="bg-gray-200 h-64 rounded-lg overflow-hidden border">
          <CloudinaryImg
            publicId="v1655200919/yomaru.dev/personal/signal-2022-01-23-234807_001_crz6cg.png"
            layout="fill"
            y={100}
          ></CloudinaryImg>
        </div>
        <div className="bg-gray-200 h-64 rounded-lg overflow-hidden border">
          <CloudinaryImg
            publicId="v1655201210/yomaru.dev/personal/CleanShot_2022-06-14_at_18.06.34_n8fnfa.png"
            layout="fill"
          ></CloudinaryImg>
        </div>
      </div>
    </div>
  );
};

export default Obsidian;
