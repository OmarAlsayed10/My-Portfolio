import { Link } from "react-router";
import {
  localized,
  projectBySlug,
  type Language,
  type Project,
} from "../../../../content";
import { DisplayHeading } from "../../../../shared/ui/DisplayHeading";
import { AvailableProductsTokens } from "./AvailableProducts.tokens";

const productSlugs = ["ikseer-health", "noterel", "OverQualified"];
const productsYouCanTry = productSlugs
  .map(projectBySlug)
  .filter((project): project is Project => Boolean(project));

export const AvailableProducts = ({ language }: { language: Language }) => (
  <section {...AvailableProductsTokens.root} aria-labelledby="available-products-title">
    <header {...AvailableProductsTokens.header}>
      <p {...AvailableProductsTokens.eyebrow}>
        {localized(language, "Available products", "منتجات متاحة")}
      </p>
      <div {...AvailableProductsTokens.introduction}>
        <DisplayHeading as="h2" variant="section" id="available-products-title">
          {localized(language, "Products you can try.", "منتجات يمكنك تجربتها.")}
        </DisplayHeading>
        <p>
          {localized(
            language,
            "Products I own and run. Try them yourself before you decide to work with me.",
            "منتجات أملكها وأديرها. جربها بنفسك قبل أن تقرر العمل معي.",
          )}
        </p>
      </div>
    </header>
    <div {...AvailableProductsTokens.grid}>
      {productsYouCanTry.map((product, index) => {
        const isAvailable = product.status === "done";
        return (
          <article
            {...AvailableProductsTokens.card}
            className={`${AvailableProductsTokens.card.className} ${isAvailable ? AvailableProductsTokens.available.className : AvailableProductsTokens.upcoming.className}`}
            key={product.slug}
          >
            <div {...AvailableProductsTokens.meta}>
              <span>0{index + 1}</span>
              <span {...AvailableProductsTokens.status}>
                <i {...AvailableProductsTokens.statusMark} />
                {localized(
                  language,
                  isAvailable ? "Available now" : "Coming soon",
                  isAvailable ? "متاح الآن" : "قريباً",
                )}
              </span>
            </div>
            <DisplayHeading as="h3" variant="feature">
              {product.name}
            </DisplayHeading>
            <p {...AvailableProductsTokens.discipline}>
              {product.discipline[language]}
            </p>
            <p {...AvailableProductsTokens.description}>
              {product.description[language]}
            </p>
            <div {...AvailableProductsTokens.actions}>
              {product.links.download && (
                <a
                  {...AvailableProductsTokens.primaryAction}
                  href={product.links.download}
                >
                  {localized(language, "Download", "نزّل التطبيق")} ↓
                </a>
              )}
              {product.links.demo && (
                <a
                  {...AvailableProductsTokens.primaryAction}
                  href={product.links.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  {localized(language, "Try product", "جرّب المنتج")} ↗
                </a>
              )}
              <Link
                {...AvailableProductsTokens.secondaryAction}
                to={`/projects/${product.slug}`}
                viewTransition
              >
                {localized(language, "View details", "التفاصيل")} →
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);
