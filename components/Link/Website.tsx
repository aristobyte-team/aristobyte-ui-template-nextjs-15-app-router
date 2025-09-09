"use client";
import { Button as AristoByteUIButton } from "@aristobyte-ui/button";
import { Icons } from "@aristobyte-ui/utils";
export const WebsiteLink = () => (
  <AristoByteUIButton
    appearance="glowing"
    variant="error"
    radius="lg"
    icon={{ component: Icons.ArrowRight, size: 20, align: "right" }}
    onClick={() => {
      window.open("https://aristobyte.com", "_blank");
    }}
  >
    Website
  </AristoByteUIButton>
);
