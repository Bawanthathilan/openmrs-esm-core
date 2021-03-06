import { getAsyncLifecycle } from "@openmrs/esm-framework";

function setupOpenMRS() {
  const moduleName = "@openmrs/esm-implementer-tools-app";
  const options = {
    featureName: "Implementer Tools",
    moduleName,
  };

  return {
    pages: [
      {
        route: () => true,
        load: getAsyncLifecycle(
          () => import("./implementer-tools.component"),
          options
        ),
      },
    ],
    extensions: [
      {
        id: "implementer-tools-button",
        slot: "top-nav-actions-slot",
        load: getAsyncLifecycle(
          () => import("./implementer-tools.button"),
          options
        ),
      },
    ],
  };
}

const importTranslation = () => Promise.resolve();

export { setupOpenMRS, importTranslation };

export { default as ConfigEditButton } from "./config-edit-button/config-edit-button.component";
