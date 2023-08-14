import React from "react";
import { Container } from "react-bootstrap";
import DownloadLink from "./DownloadLink";

function DownloadSection(props) {
  const { appSection } = props;

  return (
    <section>
      <div className="sectionHero2">
        <Container className="text-center">
          {appSection ? (
            <h1 className="sectionTitle">
              DOWNLOAD FREE MOBIRISE APP <br /> NOW
            </h1>
          ) : (
            <>
              <h1 className="sectionTitle">
                WEBSITE BUILDER SOFTWARE FREE <br /> DOWNLOAD
              </h1>
              <p className="paraClass">
                Mobirise is free, even for commercial use. Use the buttons below
                to
                <br /> download Website Creator Software for Windows or MacOS.
                Start creating
                <br /> your own websites today!
              </p>
            </>
          )}

          <DownloadLink enableLinux={true} />
        </Container>
      </div>
    </section>
  );
}

export default DownloadSection;
