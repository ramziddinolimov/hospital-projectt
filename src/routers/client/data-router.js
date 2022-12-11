import Home from "../../pages/client/Home";
import Docs from "../../pages/client/Doctors";

export const DataRouters = [
  {
    id: 1,
    path: "/",
    Element: <Home />,
  },
  {
    id: 2,
    path: "doctors",
    Element: <Docs />,
  },
];
