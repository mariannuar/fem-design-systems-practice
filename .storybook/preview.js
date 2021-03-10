import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withContexts(contexts));
