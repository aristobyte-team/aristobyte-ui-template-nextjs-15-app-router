"use client";
import { Button as AristoByteUIButton } from "@aristobyte-ui/button";
import { Icons } from "@aristobyte-ui/utils";
export const PackagesLink = () => (
  <AristoByteUIButton
    appearance="glowing"
    variant="warning"
    radius="lg"
    icon={{ component: Icons.Package, size: 20, align: "left" }}
    onClick={() => {
      window.open(
        "https://www.npmjs.com/~aristobyte_team?activeTab=packages",
        "_blank"
      );
    }}
  >
    Packages
  </AristoByteUIButton>
);
