import { rankWith, scopeEndsWith } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { CustomArrayRenderer } from "./CustomArrayRenderer";

export const CustomArrayControl = {
  tester: rankWith(1000, scopeEndsWith("countries")),
  renderer: withJsonFormsControlProps(CustomArrayRenderer),
};
