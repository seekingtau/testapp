import React from "react";
import render from "react-dom";
import { BrowserRouter, Link } from "react-router-dom";

export default function Launch() {
  return (
    <main id="launch--main">
      <h1 id="launch--prepare">
        <span id="launch--preparefor">Prepare for</span>
        <span id="launch--launch"> launch.</span>
      </h1>
      <h2 id="launch--savethedate">More information coming soon.</h2>
      <h2 id="launch--socialmedia">Join us on social media</h2>

      <a
        id="launch--twitter"
        target="_blank"
        href="https://twitter.com/aquaonjuno?s=11"
      ></a>
      <a
        id="launch--medium"
        target="_blank"
        href="https://medium.com/@AquaOnJuno"
      ></a>
      <a
        id="launch--telegram"
        target="_blank"
        href="https://t.me/AquaOnJuno"
      ></a>

      <a
        id="launch--discord"
        target="_blank"
        href="https://discord.gg/an3j4YWN"
      ></a>
      <h2 id="launch--copyright">
        Copyright Change a Heart Foundation, Inc. 2022
      </h2>
      <h2 id="launch--decision">
        Any decision to purhcas AQUA tokens is made at your own risk.
      </h2>
    </main>
  );
}
