import React from 'react'
// import { Link } from 'react-router-dom'
import '../features/PricingStyles.css'
import jpg1 from '../../assets/img1.jpg'
import jpg2 from '../../assets/img2.jpg'
import jpg3 from '../../assets/img3.jpg'
import jpg4 from '../../assets/img4.jpg'
import jpg5 from '../../assets/img5.jpg'
// import pdf from '../../assets/SCI-BONO_CEO_2022.pdf'

const btnClick = () => {
  console.log('Im here')
  window.open('https://forms.gle/ZJDeWUCnMLjNKaZa8')
}

const btnClick2 = () => {
  console.log('Im here')
  window.open('https://forms.gle/enFMS6Ko27dv3Bsk7')
}


const btnClick3 = () => {
  console.log('Im here')
  window.open('https://forms.gle/hpqypRVB4Mv1k3Xq8')
}

const btnClick4 = () => {
  console.log('Im here')
  window.open('https://forms.gle/vyMtAebCyGJbnf3J9')
}

const btnClick5 = () => {
  console.log('Im here')
  window.open('https://forms.gle/DEYUsgHUXfNqFuf7A')
}

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
          <h3> Umgeni Water: Group Company Secretary </h3>
          <span className='bar'></span>
          <img src={jpg1} className='img' alt='' />
          <p> You are responsible to provide company secretariat services to Umgeni Water Board and its subsidiaries to
ensure compliance with statutory, judicial and ethical corporate governance standards.</p>
          <p>Closing Date: 15th November 2022 </p>
          <p>Contract Type: Permanent</p>
          {/* <Link to='/contact' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick.bind(this)} >
            Apply Now
          </button>
        </div>
        <div className='card'>
          <h3> Umgeni Water: Chief Operating Officer </h3>
          <span className='bar'></span>
          <img src={jpg2} className='img2' alt='' />
          <p> This position provides to drive an integrated and coordinated organisation-wide core business operations philosophy. Lead
and direct the division to perform functions in the water and waste water supply value chain.</p>
          <p>Contract Type: 5 Year Fixed Term</p>
          <p>Closing Date: 15th November 2022</p>
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
          <h3> Programme Manager </h3>
          <span className='bar'></span>
          <img src={jpg3} className='img3' alt='' />
          <p> To manage the delivery of Zenex Foundation programmes in line with
the strategic objectives, through building and maintaining effective
partnerships and stakeholder management.</p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 15th November 2022</p>
          {/* <Link to='https://forms.gle/KEgQLDYjfyMrg9kJ6' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick3.bind(this)} >
            Apply Now
          </button>
        </div>
        <div className='card'>
          <h3> Draughtsman: North West Province </h3>
          <span className='bar'></span>
          <img src={jpg4} className='img4' alt='' />
          <p>Providing mechanical and electrical design services, valid flow sheets and updated readily
available technical drawings for Dudfield plant.
 Making up design drawings for specific projects for maintenance department and all plant
managers.</p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 15th November 2022</p>
          {/* <Link to='/contact' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick4.bind(this)} >
            Apply Now
          </button>
        </div>
        <div className='card'>
          <h3> Programme Director </h3>
          <span className='bar'></span>
          <img src={jpg5} className='img5' alt='' />
          <p>To operationalize the Zenex Foundation strategy for portfolio through leading,
organising and managing the team and programmes, building and maintaining
effective partnerships and stakeholder management, thereby contributing to
the achievement of the Zenex Foundation strategic objectives.</p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 15th November 2022</p>
          {/* <Link to='/contact' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick5.bind(this)} >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing;
