// import React from "react";
// // import { Pagination } from 'swiper';
// import   { Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import patientAvatar from "../../assets/images/patient-avatar.png";
// import { HiStar } from "react-icons/hi";
// 
// const Testimonials = () => {
//   return (
//     <div className="mt-[30px] lg:mt-[55px]">
//       <Swiper
//         modules={[Pagination]}
//         spaceBetween={30}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//           },
//         }}
//       >
//         <SwiperSlide  >
//           <div className="py-[30px] px-5 rounded-3">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading[30px] font-semibold text-headingColor">
//                   Aniket Chavan
//                 </h4>
//                 <div className="flex items-center gap-[2px]">
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                 </div>
//               </div>
//             </div>
//             <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
//                  Lorem ipsum dolor sit amet, 
//             </p>
//           </div>
//         </SwiperSlide>
// 
//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-3">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading[30px] font-semibold text-headingColor">
//                   Aniket Chavan
//                 </h4>
//                 <div className="flex items-center gap-[2px]">
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                 </div>
//               </div>
//             </div>
//             <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
//                 Lorem ipsum dolor, sit amet  <br /> Repudiandae soluta incidunt.
//             </p>
//           </div>
//         </SwiperSlide>
// 
//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-3">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading[30px] font-semibold text-headingColor">
//                   Aniket Chavan
//                 </h4>
//                 <div className="flex items-center gap-[2px]">
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                 </div>
//               </div>
//             </div>
//             <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
//                 Lorem ipsum dolor, sit amet  <br /> Repudiandae soluta incidunt.
//             </p>
//           </div>
//         </SwiperSlide>
// 
//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-3">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading[30px] font-semibold text-headingColor">
//                   Aniket Chavan
//                 </h4>
//                 <div className="flex items-center gap-[2px]">
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                 </div>
//               </div>
//             </div>
//             <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
//                 Lorem ipsum dolor, sit amet  <br /> Repudiandae soluta incidunt.
//             </p>
//           </div>
//         </SwiperSlide>
// 
//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-3">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading[30px] font-semibold text-headingColor">
//                   Aniket Chavan
//                 </h4>
//                 <div className="flex items-center gap-[2px]">
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                 </div>
//               </div>
//             </div>
//             <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
//                 Lorem ipsum dolor, sit amet  <br /> Repudiandae soluta incidunt.
//             </p>
//           </div>
//         </SwiperSlide>
// 
//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-3">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading[30px] font-semibold text-headingColor">
//                   Aniket Chavan
//                 </h4>
//                 <div className="flex items-center gap-[2px]">
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                 </div>
//               </div>
//             </div>
//             <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
//                 Lorem ipsum dolor, sit amet  <br /> Repudiandae soluta incidunt.
//             </p>
//           </div>
//         </SwiperSlide>
// 
//          
//       </Swiper>
//     </div>
//   );
// };
// 
// export default Testimonials;
// 
// 
// 
//  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const Testimonials = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading[30px] font-semibold text-headingColor">
                  Aniket Chavan
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            This parking system saved me time and stress, making parking hassle-free.,
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading[30px] font-semibold text-headingColor">
                  Ayush Kinake
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            Parking has never been this easy and efficient. A must-try system!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading[30px] font-semibold text-headingColor">
                  Avinash Rathod
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            The convenience of booking parking slots with this system is unparalleled
            </p>
          </div>
        </SwiperSlide>

     

       
        {/* Additional SwiperSlides here... */}
      </Swiper>
    </div>
  );
};

export default Testimonials;
