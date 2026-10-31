import { aboutContent, localized, whatsappLink } from "../../../content";
import type { SiteControls } from "../../types/site";
import { PageMotion } from "../PageMotion/PageMotion";
import { SpaceField } from "../SpaceField";
import { SiteHeader } from "./SiteHeader";
import { PageShellTokens } from "./PageShell.tokens";

export const PageShell = ({
  children,
  ...siteControls
}: SiteControls & { children: React.ReactNode }) => (
  <div {...PageShellTokens.root}>
    <SiteHeader {...siteControls} />
    <SpaceField className={PageShellTokens.field.className} />
    <PageMotion>{children}</PageMotion>
    <footer {...PageShellTokens.footer}>
      <span>{aboutContent.brand.name} © 2026</span>
      <span>
        {localized(
          siteControls.language,
          "I build what the work actually needs.",
          "أبني ما يحتاج إليه عملك فعلًا.",
        )}
      </span>
    </footer>
    <a {...PageShellTokens.whatsapp} href={whatsappLink} target="_blank" rel="noreferrer">
      {localized(siteControls.language, "WhatsApp", "واتساب")}
    </a>
  </div>
);
