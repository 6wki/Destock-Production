import Image from "next/image";
import styles from "./page.module.css";
import map from "@/../public/mapLocation.svg";
import phone from "@/../public/phoneCall.svg";
import warehouse from "@/../public/warehouse.svg";
import shopIcon from "@/../public/filledShopIcon.svg";
import truck from "@/../public/deliveryTruck.svg";
import headphones from "@/../public/headphones.svg";
import shoppingBag from "@/../public/shoppingBag.svg";
import packageIcon from "@/../public/package.svg";
import drinks from "@/../public/drinks.svg";
import food from "@/../public/food.svg";
import packaging from "@/../public/packaging.svg";
import banner from "@/../public/banner.svg";
import arrow from "@/../public/arrowRight.svg";
import Product from "@/components/product/Product";
import GeneralProducts from "../components/generalProducts/GeneralProducts";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        {/* Banner */}
        <div className={styles.firstBannerContainer}>
          <div className={styles.info}>
            <h1 className={styles.headline}>
              Frais et de bonne <br /> qualité
            </h1>
            <p>
              Nous proposons des boissons, de la nourriture,
              <br /> des emballages, le tout en un seul endroit
            </p>
            <button className={styles.shopNow}>
              <img src={shopIcon.src} alt="" />
              Achetez maintenant
            </button>
          </div>
          <div className={styles.picture}>
            <img src={warehouse.src} alt="" />
          </div>
        </div>
        {/* Informations of brand */}
        <div className={styles.features}>
          <div className={styles.smallCardContainer}>
            <img src={truck.src} alt="" />
            <div className={styles.smallCardInfo}>
              <p>Livraison Rapide</p>
              <p>livraison rapide disponible</p>
            </div>
          </div>
          <div className={styles.smallCardContainer}>
            <img src={headphones.src} alt="" />
            <div className={styles.smallCardInfo}>
              <p>Assistance client 24/7</p>
              <p>Accès instantané au support</p>
            </div>
          </div>
          <div className={styles.smallCardContainer}>
            <img src={packageIcon.src} alt="" />
            <div className={styles.smallCardInfo}>
              <p>Livraison Rapide</p>
              <p>livraison rapide disponible</p>
            </div>
          </div>
          <div className={styles.smallCardContainer}>
            <img src={shoppingBag.src} alt="" />
            <div className={styles.smallCardInfo}>
              <p>Assistance client 24/7</p>
              <p>Accès instantané au support</p>
            </div>
          </div>
        </div>
        {/* Categories */}
        <div className={styles.categories}>
          <h2 className={styles.centeredHeadline}>Catégories</h2>
          <div className={styles.categoriesContainer}>
            <div className={styles.categoryCard}>
              <div className={styles.headerCategoryCard}>
                <p>Les plus vendus</p>
                <h2>Boissons fraîches</h2>
                <button className={styles.cssbuttonsIoButton}>
                  <Link href={"/products/boissons?page=1"}>
                    Achetez maintenant
                  </Link>
                  <div className={styles.icon}>
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="#1a1a1a"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              <img
                className={styles.productsImage}
                src={drinks.src}
                alt="drinks"
              />
            </div>
            <div className={styles.categoryCard}>
              <div className={styles.headerCategoryCard}>
                <p>milleur prix</p>
                <h2>Alimentation</h2>
                <p>
                  A partir de <span>2.99£</span>
                </p>
                <button className={styles.cssbuttonsIoButton}>
                  <Link href={"/products/alimentation?page=1"}>
                    Achetez maintenant
                  </Link>{" "}
                  <div className={styles.icon}>
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="#1a1a1a"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              <img className={styles.productsImage} src={food.src} alt="food" />
            </div>
            <div className={styles.categoryCard}>
              <div
                className={`${styles.headerCategoryCard} ${styles.specialHeaderCategoryCard}`}
              >
                <p>haute qualité</p>
                <h2>Emballage</h2>
                <p>
                  Jusqu'à <span className={styles.promotion}>64% OFF</span>
                </p>
                <button className={styles.cssbuttonsIoButton}>
                  <Link href={"/products/emballage?page=1"}>
                    Achetez maintenant
                  </Link>
                  <div className={styles.icon}>
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="#1a1a1a"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              <img
                className={styles.productsImage}
                src={packaging.src}
                alt="packaging"
              />
            </div>
          </div>
          {/* Banner */}
          <img
            style={{ borderRadius: "0.5rem" }}
            src={banner.src}
            alt="banner"
            className={styles.banner}
          />
          {/* Popular Products */}
          <div className={styles.productsContainer}>
            <div className={styles.title}>
              <h2>Produits Populaires</h2>
              <Link href={"/products?page=1"} className={styles.viewAll}>
                View All <img src={arrow.src} alt="" />{" "}
              </Link>
            </div>
            <div className={styles.products}>
              <GeneralProducts />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
