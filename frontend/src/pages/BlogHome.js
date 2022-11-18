import React from 'react'

function BlogHome() {
  return (
      <div className='blogContainer'>
      <section class="projects-section bg-light" id="projects">
            <div class="container px-4 px-lg-5">
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid py-5" src={empathy} alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-white text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-black">Empathy</h4>
                                    <p class="mb-0 text-black-50">
                Fuzzy logic integration for uncertainty in historical knowledge and to account for
                human bias. An upgraded way of handling sitations and sources to be able to show human expression
                and discrepancies between sources by means of an Empath (Stay tooned for the blog post on Empaths!).
                 A dynamic way of handling historical relationships between objects that expands on traditional methods by
                taking advantage of established data processing innovations and by adding qualitative attributes to make
                it more understandable to humans.
</p>
                                    <hr class="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid py-5" src={interactive} alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Interactivity</h4>
                                    <p class="mb-0 text-white-50">
                Interacting with Pathic is made to feel like a natural extension of ones own conciousness and allows
                users to feel immersed in the history they are researching. At the heart is CesiumJS, a robust JavaScript
                library for 3D geospatial visualization. Along Cesium is custom software for
                timeline management and a tooltip for reading more details about the objects being rendered. 
</p>
                                    <hr class="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid py-5" src={keyboard} alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-white text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-black">Human-Computer Interface</h4>
                                    <p class="mb-0 text-black-50">
                Careful consideration
                was also put into the physical human to computer interaction tools needed to take Pathic to the next level.
                The Pathic Keyboard was designed alongside Pathic to blend the transition from desktop to VR (Blog post coming soon!).
</p>
                                    <hr class="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid py-5" src={terrain} alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">In Development</h4>
                                    <p class="mb-0 text-white-50">
                This project is still in its early stages. Check out the Pathic Blog to keep update as components get implemented
                and deployed. There are alot more features that are still to early in development to mention but that get us here 
                at Pathic super excited!
                                    </p>
                                    <hr class="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</div>
  )
}

export default BlogHome