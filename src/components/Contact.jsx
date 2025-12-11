
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_p9twf4i',
            'template_g1j9pbu',
            formData,
            'I-001MbXPnzR8wTgs'
        ).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            },
            (error) => {
                console.error('FAILED...', error);
                alert('Message failed to send. Try again later.');
            }
        );

        // Clear the form after submission
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="main-content">
            <section className="contact section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Contact Me</h2>
                        </div>
                    </div>
                    <h3 className="contact-title padd-15">Have You Any Questions ?</h3>
                    <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
                    <div className="row">
                        <div className="contact-info-item padd-15">
                            <div className="icon">
                                <i className="fa fa-phone"></i>
                                <h4>Call Us On</h4>
                                <p>9947859163</p>
                            </div>
                        </div>

                        <div className="contact-info-item padd-15">
                            <div className="icon">
                                <i className="fa fa-map-marker-alt"></i>
                                <h4>Location</h4>
                                <p>Alappuzha, Kerala, India</p>
                            </div>
                        </div>

                        <div className="contact-info-item padd-15">
                            <div className="icon">
                                <i className="fa fa-envelope"></i>
                                <h4>Email</h4>
                                <p>krishnapriyareji345@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <h3 className="contact-title padd-15">Have You Any Questions ?</h3>
                    <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>

                    <div className="row">
                        <div className="contact-form padd-15">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-item col-12 padd-15">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-item col-12 padd-15">
                                        <div className="form-group">
                                            <textarea
                                                className="form-control"
                                                placeholder="Message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-item col-12 padd-15">
                                        <button type="submit" className="btn">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
