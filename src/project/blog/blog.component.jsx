import { ArrowRight, Calendar3 } from 'react-bootstrap-icons';
import './blog.component.css';
import { MainheaderComponent } from '../../mainheader/mainheader.component';
import { MainFooterComponent } from '../../mainfooter/mainfooter.component';
export function BlogComponent() {
    return (
        <div>
            <MainheaderComponent></MainheaderComponent>
            <section className="slice--offset parallax-section parallax-section-xl b-xs-bottom custom-page-head blog_bg_img" >
                <div className="container">
                    <div className="row py-3">
                        <div className="col-lg-12">
                            <h1 className="heading text-uppercase  c-white" style={{ color: 'white' }}>
                                Blog               </h1>

                            <span className="clearfix"></span>

                            <div className="">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="/home" style={{ color: 'white' }}>
                                            Home                            </a>
                                    </li>
                                    <li className="breadcrumb-item active" style={{ color: 'white' }}>
                                        Blog                      </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="slice sct-color-1">
                <div className="container">
                    <div className="row masonry">
                        <div className="masonry-item col-sm-6 col-md-4">
                            <div className="block block--style-3">
                                <div className="block-image relative">
                                    <div className="">
                                        <a>
                                            <img src="https://demo.creativeitem.com/bayanno/uploads/frontend/blog_images/2.jpg"></img>
                                        </a>
                                    </div>
                                </div>
                                <div className="block-body">
                                    <h3 className="heading heading-5 strong-500">
                                        <a >
                                            Why employer healthcare strategies must be local one                            </a>
                                    </h3>
                                    <p>
                                        The best employers care not only about their employees’ productivity, but their well-being. And if you’re heading up a large company that employs ...
                                    </p>
                                </div>
                                <div className="block-footer b-xs-top">
                                    <div className="row align-items-center">
                                        <div className="col-6">
                                            <ul className="inline-links inline-links--style-3">
                                                <li>
                                                    <Calendar3></Calendar3>&nbsp;20 Oct, 2017                                    </li>
                                            </ul>
                                        </div>
                                        <div className="col-6 text-right">
                                            <a href="/blog" className="link link-sm link--style-2">
                                                <ArrowRight></ArrowRight> Read More                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="masonry-item col-sm-6 col-md-4">
                            <div className="block block--style-3">
                                <div className="block-image relative">
                                    <div className="">
                                        <a >
                                            <img src="https://demo.creativeitem.com/bayanno/uploads/frontend/blog_images/3.jpg"></img>
                                        </a>
                                    </div>
                                </div>
                                <div className="block-body">
                                    <h3 className="heading heading-5 strong-500">
                                        <a >
                                            Why employer healthcare strategies must be local two                            </a>
                                    </h3>
                                    <p>
                                        The best employers care not only about their employees’ productivity, but their well-being. And if you’re heading up a large company that employs ...
                                    </p>
                                </div>
                                <div className="block-footer b-xs-top">
                                    <div className="row align-items-center">
                                        <div className="col-6">
                                            <ul className="inline-links inline-links--style-3">
                                                <li>
                                                    <Calendar3></Calendar3>&nbsp;20 Oct, 2017                                    </li>
                                            </ul>
                                        </div>
                                        <div className="col-6 text-right">
                                            <a href="/blog" className="link link-sm link--style-2">
                                                <ArrowRight></ArrowRight> Read More                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="masonry-item col-sm-6 col-md-4">
                            <div className="block block--style-3">
                                <div className="block-image relative">
                                    <div className="">
                                        <a >
                                            <img src="https://demo.creativeitem.com/bayanno/uploads/frontend/blog_images/4.jpg"></img>
                                        </a>
                                    </div>
                                </div>
                                <div className="block-body">
                                    <h3 className="heading heading-5 strong-500">
                                        <a >
                                            Why employer healthcare strategies must be local three                            </a>
                                    </h3>
                                    <p>
                                        The best employers care not only about their employees’ productivity, but their well-being. And if you’re heading up a large company that employs ...
                                    </p>
                                </div>
                                <div className="block-footer b-xs-top">
                                    <div className="row align-items-center">
                                        <div className="col-6">
                                            <ul className="inline-links inline-links--style-3">
                                                <li>
                                                    <Calendar3></Calendar3>&nbsp;20 Oct, 2017                                    </li>
                                            </ul>
                                        </div>
                                        <div className="col-6 text-right">
                                            <a href="/blog" className="link link-sm link--style-2">
                                                <ArrowRight></ArrowRight> Read More                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center pt-5">
                    </div>
                </div>
            </section>
            <MainFooterComponent></MainFooterComponent>
        </div >
    )
}