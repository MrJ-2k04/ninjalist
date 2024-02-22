import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h2 className={styles.title}>Home Page</h2>
        <section>
          <h3 className={styles.subtitle}>Shadowblade Master</h3>
          <p className="text">
            Unseen and swift, the Shadowblade Master moves through the darkness like a whispering breeze. Master of stealth and silent takedowns, this ninja leaves no trace behind.
          </p>
        </section>
        <section>
          <h3 className={styles.subtitle}>Mystic Shuriken Sorcerer</h3>
          <p className="text">
            Wielding enchanted shurikens imbued with mystical powers, the Mystic Shuriken Sorcerer combines deadly precision with arcane energies. Each throw is a dance of magic and lethal precision.
          </p>
        </section>
        <br />
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}