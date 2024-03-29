import { atom, useAtom } from "jotai";
export type DRAWER_VIEW = "ABOUT_VIEW" | "MOBILE_MENU";
const drawerAtom = atom({ isOpen: false, view: "ABOUT_VIEW", isRight: false });

export function useDrawer() {
  const [state, setState] = useAtom(drawerAtom);

  const openDrawer = (view: DRAWER_VIEW , isRight?: boolean) => {
    //@ts-ignore
    setState({ ...state, isOpen: true, view , isRight});
  };
  const closeDrawer = () => {
    setState({ ...state, isOpen: false });
  };
  return {
    ...state,
    openDrawer,
    closeDrawer,
  };
}
