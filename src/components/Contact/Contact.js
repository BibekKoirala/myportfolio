import React, { useEffect } from "react";


import INFO from '../../common/userInfo'


const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>
			
            <div className="page-content">
            <div className="content-wrapper">
                <div className="contact-container">
                    <div className="title contact-title">
                        Let's Get in Touch: Ways to Connect with Me
                    </div>
                    <div className="subtitle contact-subtitle">
                        Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at
                        &nbsp;<a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Alternatively, if you prefer to connect on social media, you can find me on
                        &nbsp;<a href={INFO.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>, &nbsp;<a href={INFO.socials.twitter} target="_blank" rel="noreferrer">Twitter</a>, and &nbsp;<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>. Thanks again for your interest, and I look forward to hearing from you!
                    </div>
                </div>
            </div>
        </div>
		</React.Fragment>
	);
};

export default Contact;
