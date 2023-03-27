import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { Platform } from "../hooks/useGame";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack marginY={2}>
      {platforms.map((platform, index) => (
        <Icon as={iconsMap[platform.slug]} color={"gray.400"} />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
