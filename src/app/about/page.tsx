import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";

export default function AboutPage() {
  return (
    <div className="relative flex justify-center bg-cover">
      <div className="hidden 2xl:block">
        <Image
          className="blur-sm"
          src="/carsbg.jpg"
          width={1920}
          height={1080}
          alt=""
        />
      </div>
      <Card className="z-10 absolute max-w-[400px] bg-[#2a2e39] lg:top-[300px] w-[350px] translate-y-1/2">
        <CardHeader className="flex gap-3">
          <Image alt="CarzZz logo" height={40} src="/icon.png" width={40} />
          <div className="flex flex-col">
            <p className="text-md">CarzZz</p>
            <p className="text-small text-default-500">carzzz.com</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            This is an example web-site for my portfolio. Based in Warsaw,
            Poland. Site created by Osman Aliyev.
          </p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://www.linkedin.com/in/osman-aliyev-2b6527270/"
          >
            Visit my page on LinkedIn.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
