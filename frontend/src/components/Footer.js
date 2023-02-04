import React, { Component } from "react";

class Footer extends Component  {

    render () {
        return (
            <section id="footer" class="contact-section bg-black pt-4 pb-4">
                    <div class="container px-4 px-lg-5">
                        <div class="row gx-4 gx-lg-5">
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="card py-4 h-100">
                                    <div class="card-body text-center">
                                        <i class="fab fa-github text-primary mb-2"></i>
                                        <h4 class="text-uppercase m-0">Github</h4>
                                        <hr class="my-4 mx-auto" />
                                        <div class="small text-black-50"><a href="https://github.com/SajjadLab">SajjadLab</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="card py-4 h-100">
                                    <div class="card-body text-center">
                                        <i class="fas fa-envelope text-primary mb-2"></i>
                                        <h4 class="text-uppercase m-0">Email</h4>
                                        <hr class="my-4 mx-auto" />
                                        <div class="small text-black-50"><a href="mailto:alkazzazsajjad@gmail.com">alkazzazsajjad@gmail.com</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="card py-4 h-100">
                                    <div class="card-body text-center">
                                        <i class="fab fa-linkedin text-primary mb-2"></i>
                                        <h4 class="text-uppercase m-0">LinkedIn</h4>
                                        <hr class="my-4 mx-auto" />
                                        <div class="small text-black-50"><a href="https://www.linkedin.com/in/sajjadalkazzaz">Chat with me</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}

export default Footer