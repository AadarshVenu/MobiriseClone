import React from "react";

function DownloadLink(props) {
  const { enableLinux } = props;
  return (
    <section>
      <div className="d-flex justify-content-center flex-wrap mt-4">
        <div className="premiumButton me-2">
          {enableLinux ? (
            <p>For Windows (XP +)</p>
          ) : (
            <p> Download For Windows</p>
          )}
        </div>

        <div className="premiumButtonBlue ms-2">
          {enableLinux ? <p>For Mac (OS X 10.7+)</p> : <p> Download For Mac</p>}
        </div>
        {enableLinux && (
          <div className="premiumButtonGrey ms-2">
            <p>For Linux (Debian)</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default DownloadLink;
