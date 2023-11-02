import React from "react";
import { formateDate } from "../../utilis/formatDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Aniket Chavan
          </span>
        </h3>
        <p className="text__para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          officia asperiores. Tempore amet recusandae vero illum soluta sint
          adipisci est, maxime dolores minus cupiditate hic quas. Enim incidunt
          necessitatibus in?
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          Parking Offices
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
              {/* {formateDate('02-04-2014')} -   {formateDate('12-04-2016')} */}
              10:00 - 05:00
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">
                Office Timings
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Multiplex ParkStation,Kolhapur
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                 {/* {formateDate('12-04-2010')} */}
                 10:00 AM - :11:00 PM
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
              Office Timings
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Duplex Parkstation, Delhi
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
          <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
            Experince
          </h3>
          <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className="p-4 rounded bg-[#fff9ea]">
            2015-2020
              <span className="text-yellowColor text-[15px] leading-6 font-semibold">

              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
              Parking Services
              </p>

              <p className="text-[14px] leading-5 font-medium text-textColor">
              Multiplex ParkStation,Kolhapur
            </p>
            </li>

            <li className="p-4 rounded bg-[#fff9ea]">
            2015-2023
              <span className="text-yellowColor text-[15px] leading-6 font-semibold">

              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
              Parking Services
              </p>

              <p className="text-[14px] leading-5 font-medium text-textColor">
              Duplex Parkstation, Delhi
            </p>
            </li>
          </ul>


      </div>
    </div>
  );
};

export default DoctorAbout;
