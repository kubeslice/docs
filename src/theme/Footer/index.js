import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';
import "./footer.css";

function Footer() {
    return (
        <div className="row av-copyright-footer">
            <div className="main-wrapper">
                <div className="title-wrapper">
                    <div className="title-container">
                        <span className="title">KubeSlice is a CNCF Sandbox Project</span>
                        <img
                            src={useBaseUrl('/img/cncf.svg')}
                            alt="cloud native logo"
                            width={400}
                        />
                    </div>
                    <div className="description">
                        The Linux Foundation® (TLF) has registered trademarks and uses
                        trademarks. For a list of TLF trademarks, see{" "}
                        <a href="https://www.linuxfoundation.org/legal/trademark-usage" target="_blank">
                            Trademark Usage.
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-text">
                        @{new Date().getFullYear()} KubeSlice Authors All rights reserved.
                    </div>
                    <div className="terms-and-privacy-text-wrapper">
                        <div className="footer-text">
                            {" "}
                            <a href="https://avesha.io/terms-and-condition/">
                                Terms and Conditions
                            </a>
                        </div>
                        <div className="footer-text">
                            <a href="https://avesha.io/privacy-policy/">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="social-icons">
                        <a href="https://twitter.com/AveshaSystems" target="_blank">
                            <div>
                                <img
                                    alt="twitter logo"
                                    src={useBaseUrl('/img/x.svg')}
                                    height={16}
                                    width={20}
                                />
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/company/avesha" target="_blank">
                            <div>
                                <img src={useBaseUrl('/img/linked-in.svg')} alt="linkedin logo" />
                            </div>
                        </a>
                        <a
                            href="https://aveshaio.slack.com/join/shared_invite/zt-14xe5bixi-GwaCGVLE5VRs0o0ATGW4hQ#/shared-invite/email"
                            target="_blank"
                        >
                            <div>
                                <img src={useBaseUrl('/img/slack.svg')} alt="slack logo" />
                            </div>
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCtMSqfUzbv33CasQ8mzlSPw"
                            target="_blank"
                        >
                            <div>
                                <img src={useBaseUrl('/img/youtube.svg')} alt="youtube logo" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default React.memo(Footer);
