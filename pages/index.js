import styles from "../styles/Home.module.css";
import Nav from "../components/navBar/Nav";
import Content from "../components/Content./Content";
import Benefits from "../components/benefit/Benefits";
import Subjects from "../components/subjects/Subjects";
import Pricing from "../components/pricing/Pricing";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.nav_container}>
          <Nav />
        </nav>
        <section>
          <Content />
        </section>
        <section className={styles.benefits}>
          <Benefits title="Amazing benefits for everyone" />
        </section>
        <section>
          <Subjects />
        </section>
        <section>
          <Pricing />
        </section>
      </div>
    </>
  );
}
