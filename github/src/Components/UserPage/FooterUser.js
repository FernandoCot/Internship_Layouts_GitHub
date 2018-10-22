import React from 'react'

class FooterUser extends React.Component{

    render(){
        var currentYear = new Date().getFullYear();
        return(
                <footer className="div_large">
                    <div className="div_footer_user">
                        <div>
                            <span className="links_footer_user no_mobile year_footer_user">© {currentYear} GitHub, Inc.</span>
                            <span>
                                <a href="https://github.com/site/terms" target="_blank" className="links_footer_user" rel="noopener noreferrer">
                                    Terms
                                </a>
                            </span>
                            <span>
                                <a href="https://github.com/site/privacy" target="_blank" className="links_footer_user" rel="noopener noreferrer">
                                    Privacy
                                </a>
                            </span>
                            <span>
                                <a href="https://help.github.com/articles/github-security/" target="_blank" className="links_footer_user" rel="noopener noreferrer">
                                    Security
                                </a>
                            </span>
                            <span>
                                <a href="https://status.github.com/messages" target="_blank" className="links_footer_user" rel="noopener noreferrer">
                                    Status
                                </a>
                            </span>
                            <span>
                                <a href="https://help.github.com/" target="_blank" rel="noopener noreferrer">
                                    Help
                                </a>
                            </span>
                        </div>

                        <a aria-label="Homepage" title="GitHub" className="link_octicon_footer_user" href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <svg height="24" className="octicon_footer_user" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true">
                                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </a>

                        <div>
                            <span>
                                <a href="https://github.com/contact" target="_blank" className="links_footer_user" rel="noopener noreferrer">
                                    Contact GitHub
                                </a>
                            </span>
                            <span>
                                <a href="https://github.com/pricing" target="_blank" className="links_footer_user" rel="noopener noreferrer">
                                    Pricing
                                </a>
                            </span>
                            <span>
                                <a href="https://developer.github.com/" target="_blank" className="links_footer_user" rel="noopener noreferrer">
                                    API
                                </a>
                            </span>
                            <span>
                                <a href="https://services.github.com/" target="_blank" className="links_footer_user" rel="noopener noreferrer">
                                    Training
                                </a>
                            </span>
                            <span>
                                <a href="https://blog.github.com/" target="_blank" className="links_footer_user" rel="noopener noreferrer">
                                    Blog
                                </a>
                            </span>
                            <span>
                                <a href="https://github.com/about" target="_blank" rel="noopener noreferrer">
                                    About
                                </a>
                            </span>
                        </div>
                        <div className="only_mobile link_footer_year_mobile">
                            <span className="year_footer_user">© {currentYear} GitHub, Inc.</span>
                        </div>
                    </div>
                </footer>
        )
    };
}

export default FooterUser;