import React from 'react'
// import { Link } from 'react-router-dom'
import '../features/PricingStyles.css'
import jpg1 from '../../assets/img1.jpg'
import jpg2 from '../../assets/img2.jpg'
import jpg3 from '../../assets/img3.jpg'
// import jpg4 from '../../assets/img4.jpg'
// import jpg5 from '../../assets/img5.jpg'
// import jpg6 from '../../assets/img6.jpg'
// import jpg7 from '../../assets/img7.jpg'
// import pdf from '../../assets/SCI-BONO_CEO_2022.pdf'

const btnClick = () => {
  console.log('Im here')
  window.open('https://forms.gle/gcFaw26hrtirEyQRA')
}

const btnClick2 = () => {
  console.log('Im here')
  window.open('https://forms.gle/hK4i4vf1379iJw2K9')
}


const btnClick3 = () => {
  console.log('Im here')
  window.open('https://forms.gle/skGeeyQFvrtxqdDt9')
}

// const btnClick4 = () => {
//   console.log('Im here')
//   window.open('https://forms.gle/Nu2sSQKZZKedmjHW9')
// }

// const btnClick5 = () => {
//   console.log('Im here')
//   window.open('https://forms.gle/XuH6EjZewAaXNSZz6')
// }

// const btnClick6 = () => {
//   console.log('Im here')
//   window.open('https://forms.gle/4jhws6RDKXhpekVq6')
// }

// const btnClick7 = () => {
//   console.log('Im here')
//   window.open('https://forms.gle/v435DHdXQycK4snr8')
// }






// const onDownload = () => {
//   const link = document.createElement("a");
//   link.download = `https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=5fc14e0f6a&attid=0.1&permmsgid=msg-f:1735696149535191869&th=18166e73af0ef33d&view=att&disp=safe&saddbat=ANGjdJ9jYCmRGbrSHjwp5JwVaw2UdyLpjLIiunkzF6r5m7ajZisWA15rH7noN_K78PyNBlKmeQbi9XOl2raYzSS-otj32DhWbuKr-RDyuLv7RSiiY6K6MyYDKpWLWww0SfNGJKi2nuWxPpN_9u7oL_bDYHWvduTwMYgcqnACOImxtGLBpmLLVylJwcAyjysPNxCaOWl9mOR96Jdq0YmMPuSxibhz1JzcP2PJVH4Hyz5ORCkYOcCVrVIC7YCUTzwF04Rx-sYchZ0zYtK29x3oPN3DtHh6FRMEh8GQsHb0L2qY897xZ_c6tKmmcNVemX5LHPjqPDtPNkvHZiB26OaiBZSkxPlsvV_Nk6_Y32Cj23xO3xhe4tE4BnLmwsfqBMWG51n8_fUwA_40_R-NrGX_S0luog-zEqdrQlryL_1kIPCRY1DF44AHR8frT4FHNaCGNKK0TdxS4BSoD36EqK6jY_EEuPRyUQ9-GDednngyR4NLScskO-9owIOPAqXC0XSi_jNqeCrJo4sZdu0s25tjW12JOWmqkwEYJfjXje_ruTb2vT9kvxdJ3QCtkb_6hF_BqLdonilA4fCauG67we9kMShzqI9_TS4jB6J5H7v2CARbjVOwu0SF_nTuVlDDK2QFebF5VGki_RiieVG5hOdpR0arQqzCjUFFH0imO6kknYhBmpoQTpPExnEk6o_AX16SLFK18l0zcUFI9mudq-i4tQnh3zppONrr6ZVjQxlzPVj7B9W9i8zHQXPEiOCBZ3Y`;
//   link.href = 'https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=5fc14e0f6a&attid=0.1&permmsgid=msg-f:1735696149535191869&th=18166e73af0ef33d&view=att&disp=safe&saddbat=ANGjdJ9jYCmRGbrSHjwp5JwVaw2UdyLpjLIiunkzF6r5m7ajZisWA15rH7noN_K78PyNBlKmeQbi9XOl2raYzSS-otj32DhWbuKr-RDyuLv7RSiiY6K6MyYDKpWLWww0SfNGJKi2nuWxPpN_9u7oL_bDYHWvduTwMYgcqnACOImxtGLBpmLLVylJwcAyjysPNxCaOWl9mOR96Jdq0YmMPuSxibhz1JzcP2PJVH4Hyz5ORCkYOcCVrVIC7YCUTzwF04Rx-sYchZ0zYtK29x3oPN3DtHh6FRMEh8GQsHb0L2qY897xZ_c6tKmmcNVemX5LHPjqPDtPNkvHZiB26OaiBZSkxPlsvV_Nk6_Y32Cj23xO3xhe4tE4BnLmwsfqBMWG51n8_fUwA_40_R-NrGX_S0luog-zEqdrQlryL_1kIPCRY1DF44AHR8frT4FHNaCGNKK0TdxS4BSoD36EqK6jY_EEuPRyUQ9-GDednngyR4NLScskO-9owIOPAqXC0XSi_jNqeCrJo4sZdu0s25tjW12JOWmqkwEYJfjXje_ruTb2vT9kvxdJ3QCtkb_6hF_BqLdonilA4fCauG67we9kMShzqI9_TS4jB6J5H7v2CARbjVOwu0SF_nTuVlDDK2QFebF5VGki_RiieVG5hOdpR0arQqzCjUFFH0imO6kknYhBmpoQTpPExnEk6o_AX16SLFK18l0zcUFI9mudq-i4tQnh3zppONrr6ZVjQxlzPVj7B9W9i8zHQXPEiOCBZ3Y';
//   link.click();
// };


const Pricing = () => {
  return (
    <div className='pricing'>
      <div className='card-container'>
        <div className='card'>
          <h3> Broker Consultant </h3>
          <span className='bar'></span>
          <img src={jpg1} className='img' alt='' />
          <p> Accountable for membership growth and retention by establishing and maintaining sound relations with
brokers and other key stakeholders.</p>
          <p>Closing Date: 15th December 2022 </p>
          <p>Contract Type: Permanent</p>
          {/* <Link to='/contact' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick.bind(this)} >
            Apply Now
          </button>
        </div>
        <div className='card'>
          <h3> Manager: Disease Management | Medicine Management |
Ambulatory Care </h3>
          <span className='bar'></span>
          <img src={jpg2} className='img2' alt='' />
          <p> Accountable for the implementation of tactical work plans and formulate associated procedures to minimise the
financial risk of the Scheme by implementing, maintaining, and improving the defined care programs with special
emphasis on Medicine Management, Disease Management, and Ambulatory Care; providing clinical support for
maintaining the acceptable level of quality and cost-effective risk measures.</p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 15th December 2022</p>
          {/* <p>Email CV to: responses@tafadzwa.co.za</p> */}
          {/* <Link to='/contact' className='btn'>Apply</Link> */}
          {/* <button btnClass={"btn"} onClick={onDownload.bind(this)} >
          Apply Now
          </button> */}
          <button btnClass={"btn"} onClick={btnClick2.bind(this)} >
            Apply Now
          </button>
        </div>
        <div className='card'>
          <h3> BCCEI : General Secretary </h3>
          <span className='bar'></span>
          <img src={jpg3} className='img3' alt='' />
          <p> The person must be outcome driven, promotes equitable people management and strives for business
excellence. The vacancy exists within the National Office of the Bargaining Council for the Civil
Engineering Industry (BCCEI) for a General Secretary, with outstanding vision, strong
leadership skills and the ability to provide strategic leadership for the Council. The position reports to the Management Committee of the BCCEI, which is representative of
all parties.</p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 30th December 2022</p>
          {/* <Link to='https://forms.gle/KEgQLDYjfyMrg9kJ6' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick3.bind(this)} >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing;
