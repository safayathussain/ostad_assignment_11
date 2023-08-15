import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main_container}>
      <div>
        <p>Welcome to my blog site</p>
        <Link href={'/blogs'}>Read Blogs</Link>
      </div>
    </div>
  );
}
