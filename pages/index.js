import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Home() {
  const [prediction, setPrediction] = useState(null);
  const placeHold = "a photo of an owl, pencil drawing";

  const handleSubmit = async (e) => {
    e.preventDefault();
    var prompt = e.target.prompt.value || placeHold;
    const response = await fetch("/api/banana", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
      }),
    });
    let prediction = await response.json();
    setPrediction(prediction);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Banana + VoltaML</title>
      </Head>
      <p>1.5 second Stable Diffusion - VoltaML + Banana </p>
      <p>Enter a prompt to display an image: </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="prompt"
          placeholder={placeHold}
        />
        <button type="submit">Go!</button>
      </form>
      {prediction && (
        <div>
          <div className={styles.imageWrapper}>
            <Image
              fill
              src={prediction}
              alt="output"
              sizes="100vw" />
          </div>
        </div>
      )}
      <p> Powered by:
        <a target="_blank" href="https://banana.dev">
          <Image
            width="82"
            height="20"
            src="https://www.banana.dev/lib_zOkYpJoyYVcAamDf/x2p804nk9qvjb1vg.svg" />
        </a>
      </p>
    </div>
  );
}
