import './CSS/DefaultStyle/card.css';

import './CSS/service-overview-card.css'
import GraphicDesign from '../assets/graphicdesign.png';
import ProductDesign from '../assets/productdesign.png';
import BrandIdentity from '../assets/brandidentity.png';
import UI from '../assets/uiux.png';
import Development from '../assets/development.png';
import WebDesign from '../assets/webdesign.png';
import DesignConsultation from '../assets/designconsultation.png';


export function ServiceOverviewCard() {
    const serviceData = [
        {
            image: ProductDesign,
            name: "Product Design",
            subheading: " From sketches to prototypes, we create products that resonate with users and stand out in the market."
        },
        {
            image: BrandIdentity,
            name: "Brand Identity",
            subheading: " Visual storytelling that defines your brand’s personality — from logos to full identity systems."
        },
        {
            image: UI,
            name: "UI/UX",
            subheading: " Seamless, intuitive, and beautiful interfaces that enhance user experiences."

        },
        {
            image: Development,
            name: "Development",
            subheading: " Seamless, intuitive, and beautiful interfaces that enhance user experiences."
        },
        {
            image: GraphicDesign,
            name: "Graphic Design",
            subheading: "Eye-catching designs that share your ideas clearly and attract attention."
        },
        {
            image: WebDesign,
            name: "Web Design",
            subheading: "Visually stunning and user-friendly websites that captivate visitors and drive engagement."
        },
        {
            image: DesignConsultation,
            name: "Design Consultation",
            subheading: "Tailored advice to align design with your goals and target audience."
        },
       
        {
            image: ProductDesign,
            name: "Packaging Design",
            subheading: "Tailored advice to align design with your goals and target audience."
        },
    ]

    return (
        <div
            className="service-overview-card-container ">
            <div className="service-overview-card-grid card-grid">
                {
                    serviceData.map((data, index) => (
                        <div key={index} className="service-card card">
                            <div className="card-image">
                                <img src={data.image} alt="product design" />
                            </div>
                            <div className="card-heading">{data.name}</div>
                            <div className="card-subheading">
                                {data.subheading}

                            </div>
                        </div>
                    ))


                }    </div>

        </div>
    );

}