import React from 'react'

function TemplateSection() {
    return (
        <>
            <section>
                <div className="mt-4 text-center">
                    <h1 className="sectionTitle">7600+ amazing templates</h1>
                    <p className="paraClass">
                        Mobirise Drag and Drop Website Builder app offers 7600+ beautiful
                        <br /> website blocks in
                        <span className="primaryText">
                            {" "}
                            free, premium themes and page templates
                        </span>{" "}
                        based on the <br />
                        latest web design trends, and full of customizing options.
                    </p>
                </div>
            </section>
            <section>
                <div>
                    <img
                        src={"https://mobirise.com/assets52/images/temps-3.webp"}
                        alt="hero"
                        width="100%"
                    />
                </div>
            </section>
            <section>
                <div className="mt-4 text-center">
                    <h1 className="sectionTitle">Join 1,000,000+ happy users!</h1>
                    <img
                        src={"https://mobirise.com/assets52/images/clients.webp"}
                        alt="hero"
                        className="my-5"
                        width="100%"
                    />
                </div>
            </section>
        </>

    )
}

export default TemplateSection