import { Link } from "react-router";
import {
  localized,
  projectBySlug,
  type Language,
  type Project,
} from "../../../../content";
import { DisplayHeading } from "../../../../shared/ui/DisplayHeading";
import { AvailableProductsTokens } from "./AvailableProducts.tokens";

const productSlugs = ["ikseer-health", "kestrel-harness", "Hirfaya"];
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
          {localized(language, "Products you can try.", "منتجات تقدر تجرّبها.")}
        </DisplayHeading>
        <p>
          {localized(
            language,
            "Products I own and build directly. Use what is live today and see what is coming next.",
            "منتجات بملكها وببنيها بنفسي. جرّب المتاح دلوقتي، وشوف إيه اللي جاي بعد كده.",
          )}
        </p>
      </div>
    </header>
    <div {...AvailableProductsTokens.grid}>
      {productsYouCanTry.map((product, index) => {
        const isAvailable = Boolean(product.links.demo);
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
                  isAvailable ? "متاح دلوقتي" : "قريباً",
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
                {localized(language, "View details", "شوف التفاصيل")} →
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);
