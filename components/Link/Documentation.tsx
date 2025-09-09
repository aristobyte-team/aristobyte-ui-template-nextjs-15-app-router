"use client";
import { Button as AristoByteUIButton } from "@aristobyte-ui/button";
import { Icons } from "@aristobyte-ui/utils";
export const DocumentationLink = () => (
  <AristoByteUIButton
    appearance="glowing"
    variant="warning"
    radius="lg"
    icon={{ component: Icons.Components, size: 20, align: "left" }}
    onClick={() => {
      window.open("https://ui.aristobyte.com", "_blank");
    }}
  >
    Documentation
  </AristoByteUIButton>
);
