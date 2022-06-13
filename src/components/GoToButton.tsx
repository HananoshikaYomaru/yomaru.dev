import { ArrowDownIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type Props = {
  text: string;
  href: string;
  direction?: "right" | "down";
};

const GoToButton = ({ text, href, direction = "right" }: Props) => {
  return (
    <Link href={href}>
      <a
        className={`flex flex-row  items-center text-left font-medium focus:outline-none cursor-pointer transition space-x-3`}
      >
        <>
          <p className="textlg md:text-xl font-medium whitespace-nowrap ">
            {text}
          </p>
          <div className="relative h-10 w-10 md:h-14 md:w-14 flex items-center justify-center p-1 border rounded-full ">
            {direction == "right" ? (
              <ArrowRightIcon className="h-4 w-4 md:h-8 md:w-8 text-gray-600 "></ArrowRightIcon>
            ) : (
              <ArrowDownIcon className="h-4 w-4 md:h-8 md:w-8 text-gray-600"></ArrowDownIcon>
            )}
          </div>
        </>
      </a>
    </Link>
  );
};

export default GoToButton;
