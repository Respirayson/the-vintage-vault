import { rotate, fileIcon, tshirt, adjustShirt } from "../assets";

export const EditorTabs = [
  {
    name: "uploadfile",
    icon: fileIcon,
  },
  {
    name: "rotateshirt",
    icon: rotate,
  },
  {
    name: "adjustshirt",
    icon: adjustShirt,
  }
];

export const UserTabs = [
  {
    name: "tshirt",
    icon: tshirt,
  },
];

export const DecalTypes = {
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
