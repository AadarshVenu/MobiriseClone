import React from "react";
import DownloadLink from "./DownloadLink";

function HeroSection(props) {
    const { aboutpage } = props;
    return (
        <section>
            <div className={aboutpage ? "aboutSectionHero" : "sectionHero"}>
                <div className={aboutpage ? "overlaySectionHero" : ""}>
                    <div className="text-center">
                        <div>
                            {aboutpage ? (
                                <div >We help you create
                                    <br />
                                    better websites!
                                </div>
                            ) : (
                                <div>
                                    <div className="textBlue mb-1">
                                        <p>FREE WEBSITE BUILDER SOFTWARE</p>
                                    </div>
                                    <div className="textMain mb-1">
                                        <p>
                                            Create awesome websites on your computer! <br />
                                            No code & free. Publish anywhere.
                                        </p>
                                    </div>

                                    <DownloadLink />
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
