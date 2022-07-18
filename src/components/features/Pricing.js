import React from 'react'
import { Link } from 'react-router-dom'
import '../features/PricingStyles.css'
import jpg1 from '../../assets/img1.jpg'
import jpg2 from '../../assets/img2.jpg'
import jpg3 from '../../assets/img3.jpg'
import jpg4 from '../../assets/img4.jpg'
import pdf from '../../assets/SCI-BONO_CEO_2022.pdf'

const btnClick = () => {
  console.log('Im here')
  window.open('https://forms.gle/Be1NpigMakF6t148A')
}

const btnClick2 = () => {
  console.log('Im here')
  window.open('https://forms.gle/1BtMnVCicYmL7nvM7')
}


const btnClick3 = () => {
  console.log('Im here')
  window.open('https://forms.gle/XcurtQXe5qadmCkb6')
}

const btnClick4 = () => {
  console.log('Im here')
  window.open('https://forms.gle/jCmbXUVpkz1zqKJ6A')
}

const onDownload = () => {
  const link = document.createElement("a");
  link.download = `https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=5fc14e0f6a&attid=0.1&permmsgid=msg-f:1735696149535191869&th=18166e73af0ef33d&view=att&disp=safe&saddbat=ANGjdJ9jYCmRGbrSHjwp5JwVaw2UdyLpjLIiunkzF6r5m7ajZisWA15rH7noN_K78PyNBlKmeQbi9XOl2raYzSS-otj32DhWbuKr-RDyuLv7RSiiY6K6MyYDKpWLWww0SfNGJKi2nuWxPpN_9u7oL_bDYHWvduTwMYgcqnACOImxtGLBpmLLVylJwcAyjysPNxCaOWl9mOR96Jdq0YmMPuSxibhz1JzcP2PJVH4Hyz5ORCkYOcCVrVIC7YCUTzwF04Rx-sYchZ0zYtK29x3oPN3DtHh6FRMEh8GQsHb0L2qY897xZ_c6tKmmcNVemX5LHPjqPDtPNkvHZiB26OaiBZSkxPlsvV_Nk6_Y32Cj23xO3xhe4tE4BnLmwsfqBMWG51n8_fUwA_40_R-NrGX_S0luog-zEqdrQlryL_1kIPCRY1DF44AHR8frT4FHNaCGNKK0TdxS4BSoD36EqK6jY_EEuPRyUQ9-GDednngyR4NLScskO-9owIOPAqXC0XSi_jNqeCrJo4sZdu0s25tjW12JOWmqkwEYJfjXje_ruTb2vT9kvxdJ3QCtkb_6hF_BqLdonilA4fCauG67we9kMShzqI9_TS4jB6J5H7v2CARbjVOwu0SF_nTuVlDDK2QFebF5VGki_RiieVG5hOdpR0arQqzCjUFFH0imO6kknYhBmpoQTpPExnEk6o_AX16SLFK18l0zcUFI9mudq-i4tQnh3zppONrr6ZVjQxlzPVj7B9W9i8zHQXPEiOCBZ3Y`;
  link.href = 'https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=5fc14e0f6a&attid=0.1&permmsgid=msg-f:1735696149535191869&th=18166e73af0ef33d&view=att&disp=safe&saddbat=ANGjdJ9jYCmRGbrSHjwp5JwVaw2UdyLpjLIiunkzF6r5m7ajZisWA15rH7noN_K78PyNBlKmeQbi9XOl2raYzSS-otj32DhWbuKr-RDyuLv7RSiiY6K6MyYDKpWLWww0SfNGJKi2nuWxPpN_9u7oL_bDYHWvduTwMYgcqnACOImxtGLBpmLLVylJwcAyjysPNxCaOWl9mOR96Jdq0YmMPuSxibhz1JzcP2PJVH4Hyz5ORCkYOcCVrVIC7YCUTzwF04Rx-sYchZ0zYtK29x3oPN3DtHh6FRMEh8GQsHb0L2qY897xZ_c6tKmmcNVemX5LHPjqPDtPNkvHZiB26OaiBZSkxPlsvV_Nk6_Y32Cj23xO3xhe4tE4BnLmwsfqBMWG51n8_fUwA_40_R-NrGX_S0luog-zEqdrQlryL_1kIPCRY1DF44AHR8frT4FHNaCGNKK0TdxS4BSoD36EqK6jY_EEuPRyUQ9-GDednngyR4NLScskO-9owIOPAqXC0XSi_jNqeCrJo4sZdu0s25tjW12JOWmqkwEYJfjXje_ruTb2vT9kvxdJ3QCtkb_6hF_BqLdonilA4fCauG67we9kMShzqI9_TS4jB6J5H7v2CARbjVOwu0SF_nTuVlDDK2QFebF5VGki_RiieVG5hOdpR0arQqzCjUFFH0imO6kknYhBmpoQTpPExnEk6o_AX16SLFK18l0zcUFI9mudq-i4tQnh3zppONrr6ZVjQxlzPVj7B9W9i8zHQXPEiOCBZ3Y';
  link.click();
};


const Pricing = () => {
  return (
    <div className='pricing'>
      <div className='card-container'>
        <div className='card'>
          <h3> Umgeni Water: Group Company Secretary </h3>
          <span className='bar'></span>
          <img src={jpg3} className='img3' alt='' />
          <p> You will be responsible to provide company secretarial services to Umgeni Water Board and its subsidiaries to ensure compliance with
statutory, judicial, and ethical corporate governance standards.</p>
          <p>Closing Date: 31st July 2022 </p>
          <p>Contract Type: 5 Year Fixed-Term Contract</p>
          {/* <Link to='/contact' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick3.bind(this)} >
            Apply Now
          </button>
        </div>
        <div className='card'>
          <h3> SCI-BONO: Chief Executive Officer </h3>
          <span className='bar'></span>
          <img src={jpg4} className='img' alt='' />
          <p> This position provides strategic leadership and effective management of the Sci-bono Discovery Science Centre and its resources in line with the mandate of the board of directors, and principal stakeholders. It is the main point of communication between the board of directors (the board) and corporate operations.
It is responsible for positioning Sci-bono as a world-class science centre, building capacity in Maths, Science and Technology in South Africa through interactive exhibitions, research and training. It is responsible for ensuring that performance targets are met.</p>
          <p>Contract Type: 5 Year Fixed Term</p>
          <p>Closing Date: 24 June 2022</p>
          <p>Email CV to: responses@tafadzwa.co.za</p>
          {/* <Link to='/contact' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={onDownload.bind(this)} >
            Download PDF
          </button>
        </div>
        <div className='card'>
          <h3> Strategy Support Consultant </h3>
          <span className='bar'></span>
          <img src={jpg1} className='img1' alt='' />
          <p> You will be responsible for supporting the formulation
            and implementation of key business strategies in keeping with Group aspirations. This
            includes (but not limited to) identifying industry and competitor trends, translating these
            into business opportunities, and supporting response efforts to the opportunities. You will
            also be responsible for enabling the governance of strategy in the Group. This includes
            (but not limited to) managing the Group strategic planning process and strategy calendar.</p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 24 June 2022</p>
          {/* <Link to='https://forms.gle/KEgQLDYjfyMrg9kJ6' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick.bind(this)} >
            Apply Now
          </button>
        </div>
        <div className='card'>
          <h3> Compliance Officer </h3>
          <span className='bar'></span>
          <img src={jpg2} className='img2' alt='' />
          <p>You will be responsible for pro-actively and constructively assisting
            the RMA Group in managing its responsibility to comply with all applicable regulatory
            legislative requirements, applicable regulatory codes and standards, and internal policies
            and procedures.</p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 16 June 2022</p>
          {/* <Link to='/contact' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick2.bind(this)} >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing;
