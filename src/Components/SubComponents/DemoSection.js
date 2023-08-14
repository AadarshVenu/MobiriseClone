import React from 'react'
import DemoCard from './Cards/DemoCard'
import DownloadLink from './DownloadLink'


function DemoSection(props) {
    return (
        <section>
            {
                props.bgRequired ?
                    (
                        <section>
                            <div className="mt-4 text-center">
                                <h1 className="sectionTitle">How website builder software works</h1>
                            </div>
                        </section>
                    ) :
                    (<section>
                        <div className="cardWrapper text-center py-5">
                            <div>
                                <h1 className="sectionTitle">
                                    DOWNLOAD FREE WEBSITE BUILDER <br /> SOFTWARE
                                </h1>
                                <p className="paraClass">
                                    Mobirise Web Design Software is free for both personal and
                                    commercial
                                    <br /> use. Download now and use it for your own or client's
                                    websites without
                                    <br /> restrictions.
                                </p>
                                <DownloadLink />
                            </div>
                        </div>
                    </section>
                    )
            }
            <div className='container'>
                <DemoCard  {...props} />
            </div>
        </section>

    )
}

export default DemoSection