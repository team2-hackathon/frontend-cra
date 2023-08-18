import React from "react";
import AdvisorSvg from "../assets/icons/about/Advisor.svg";
import BabySvg from "../assets/icons/about/Baby.svg";
import BusinessSvg from "../assets/icons/about/Business.svg";
import HouseSvg from "../assets/icons/about/House.svg";
import LoansSvg from "../assets/icons/about/Loans.svg";
import MarriedSvg from "../assets/icons/about/Married.svg";
import PartnerSvg from "../assets/icons/about/Partner.svg";
import RentSvg from "../assets/icons/about/Rent.svg";
import ClickableBox from "../component/ClickableBox";

export const OnboardingAboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-15">
      <h1 className="mt-10 mb-20 text-3xl font-bold">Tell us about yourself</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-15">
        <ClickableBox image={MarriedSvg} alt="Married" text="I am married" />
        <ClickableBox image={BabySvg} alt="Baby" text="I have kids" />
        <ClickableBox image={RentSvg} alt="Rent" text="I rent" />
        <ClickableBox image={HouseSvg} alt="House" text="I own a house" />
        <ClickableBox
          image={BusinessSvg}
          alt="Business"
          text="I have a business"
        />
        <ClickableBox image={LoansSvg} alt="Loan" text="I pay student loans" />
        <ClickableBox
          image={AdvisorSvg}
          alt="Advisor"
          text="I have a financial advisor"
        />
        <ClickableBox
          image={PartnerSvg}
          alt="Partner"
          text="I share finances with a partner"
        />
      </div>

      <div className="mt-12">
        <a href="/goals">
          <button className="px-16 py-2 text-black bg-[#C5E1F2] rounded-lg hover:bg-gray-600 border-[1px] border-[#82B8D9] shadow-md">
            Continue
          </button>
        </a>
      </div>
    </div>
  );
};
