import Image from "next/image";
import CardText from "./cards";
import picture1 from "@/../public/assets/Homepage/product-cover-5.png";
import pic2 from "@/../public/assets/Homepage/product-cover-5 (1).png";
import pic3 from "@/../public/assets/Homepage/product-cover-5 (2).png";
import pic4 from "@/../public/assets/Homepage/product-cover-5 (3).png";
import pic5 from "@/../public/assets/Homepage/product-cover-5 (4).png";
import pic6 from "@/../public/assets/Homepage/product-cover-5 (5).png";
import pic7 from "@/../public/assets/Homepage/product-cover-5 (6).png";
import pic8 from "@/../public/assets/Homepage/product-cover-5 (7).png";
import CenterText from "./CenterText";

export default function ProductCard() {
  return (
    <section>

      {/* Heading */}
      <CenterText 
      headings={[
        { 
          smallHeading: "FEATURED PRODUCTS",
          title: "BESTSELLER PRODUCTS", 
          subheading: "Problems trying to resolve the conflict between" 
        }
      ]} 
      />

      {/* Cards */}
      <div className="w-full flex justify-center">
      <div className="sm:w-[90%] w-[95%]  flex flex-col gap-[80px]">
        

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {/* Product Cards */}
          {[picture1, pic2, pic3, pic4, pic5, pic6, pic7, pic8].map(
            (pic, index) => (
              <div key={index} className="w-[238px] h-[615px] mx-auto">
                <div className="w-full h-full">
                  <div className="w-[239px] h-[427px]">
                    <Image src={pic} alt={`picture${index + 1}`} />
                  </div>
                  <CardText />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
    </section>
  );
}