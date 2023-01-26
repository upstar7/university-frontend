import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import CreateAcademic from "@/pages/universitymodule/CreateAcademic";
import CreateUniversity from "@/pages/universitymodule/CreateUniversity";
import CreateInvoice from "@/pages/InvoiceManagement/CreateInvoice";
import CreateMailing from "@/pages/InvoiceManagement/CreateMailing";
import { Home } from "@/pages/dashboard";

const defaultRoleType = "superAdmin";

const roles = {
  superAdmin: [
    "dashboard",
    "university",
    "leads",
    "application",
    "invoice",
    "accounting",
    "system-reports",
    "reports",
    "settings",
    "currency",
    "system",
  ],
  admin: [
    "dashboard",
    "university",
    "leads",
    "application",
    "invoice",
    "accounting",
    "system-reports",
    "reports",
    "settings",
    "currency",
    "system",
  ],
  counselor: ["dashboard", "university", "leads", "application", "currency"],
  accountant: [
    "dashboard",
    "application",
    "invoice",
    "accounting",
    "reports",
    "currency",
  ],
  adminBranch: [
    "dashboard",
    "university",
    "leads",
    "application",
    "invoice",
    "accounting",
    "reports",
    "currency",
  ],
  counselorBranch: [
    "dashboard",
    "university",
    "leads",
    "application",
    "currency",
  ],
  accountantBranch: [
    "dashboard",
    "application",
    "invoice",
    "accounting",
    "reports",
    "currency",
  ],
  applicant: ["dashboard"],
};

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;

  return (
    <div className="min-h-screen overflow-y-auto bg-blue-gray-50/50">
      <Sidenav routes={routes} role={roles[defaultRoleType]} />

      <div
        className={` ${
          openSidenav ? "" : ""
        } ml-0 p-4  sm:ml-[110px] lg:ml-[390px]`}
      >
        {/* <Configurator /> */}
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
        <Routes>
          <Route path="/" element={<Home />} />
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages
                .filter(({ id }) => roles[defaultRoleType].includes(id))
                .map(({ path, element }) => (
                  <Route path={path} element={element} />
                ))
          )}
          <Route
            path="/university_module/createUniversity"
            element={<CreateUniversity />}
          />
          <Route
            path="/university_module/createAcademic"
            element={<CreateAcademic />}
          />
          <Route
            path="/InvoiceManagement/createInvoice"
            element={<CreateInvoice />}
          />
          <Route
            path="/InvoiceManagement/CreateMailing"
            element={<CreateMailing />}
          />
        </Routes>
        {/* <div className="text-blue-gray-600">
          <Footer />
        </div> */}
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
