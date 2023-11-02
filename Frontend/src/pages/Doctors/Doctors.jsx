 import React from 'react'
 import Doctorcard from '../../components/Doctors/DoctorCard';
 import { doctors } from '../../assets/data/doctors';
 import Testimonials from "../../components/Testimonial/Testimonials";


 const Doctors = () => {
   return (
      <>
      
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Parking space
          </h2>
            <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">

              <input type="search" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none
              cursor-pointer placeholder:text-textColor"
              placeholder = "search Owner" 
              />
              <button className="btn mt-0 rounded-[0px] rounded-r-md">Search</button>
            </div>

        </div>
      </section>

      <section>
        <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {doctors.map((doctor) => (
        <Doctorcard key={doctor.id} doctor={doctor} />
      ))}
    </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[700px] mx-auto">
            <h2 className="heading lg-text-center lg:ml-[60px]">
              what our Patients Says
            </h2>
            <p className="text__para text-center">
              world-class care for everyone. Our health System offers unmatched,
              experts health care.
            </p>
          </div>

          <Testimonials/>

        </div>
      </section>
      </>
   )
 }
 
 export default Doctors
 