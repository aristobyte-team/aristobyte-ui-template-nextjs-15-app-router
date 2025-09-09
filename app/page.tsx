import {
  WebsiteLink,
  DocumentationLink,
  PackagesLink,
  Instagram,
  LinkedIn,
  Logo,
  Github,
  Gradient,
} from "@/components";
import { Label } from "@aristobyte-ui/label";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Gradient />
      <main className={styles.main}>
        <div>
          <Logo />
          <h1 className={styles.title}>AristoByte UI</h1>
          <h2 className={styles.subtitle}> Smart. Scalable. Seamless.</h2>
        </div>

        <ol>
          <li>
            Get started by editing
            <span style={{ marginLeft: 10 }}>
              <Label
                text="app/page.tsx"
                backgroundColor="#6d1715"
                borderColor="#e2312d"
                color="#ffd8d7"
              />
            </span>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <DocumentationLink />
          <PackagesLink />
          <WebsiteLink />
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/aristo_byte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/company/aristobyte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
          LinkedIn
        </a>
        <a
          href="https://github.com/aristobyte-team"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          GitHub
        </a>
      </footer>
    </div>
  );
}
