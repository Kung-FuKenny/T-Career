import React from 'react'
import {Link} from 'react-router-dom'
import '../features/PricingStyles.css'
import jpg1 from '../../assets/img1.jpeg'
import jpg2 from '../../assets/img2.jpg'
import jpg3 from '../../assets/img3.jpg'


const btnClick = () => {
    console.log('Im here')
    window.open('https://forms.gle/KEgQLDYjfyMrg9kJ6')
  }
  
  const btnClick2 = () => {
    console.log('Im here')
    window.open('https://forms.gle/pesBoWJzQn3oSGgd6https://docs.google.com/forms/d/e/1FAIpQLSf3-PfsUPiQYH6oXGRR_gVhXbB45q4tZtES7wWSGfC7sG9G5A/viewform?usp=sf_link')
  }

  const btnClick3 = () => {
    console.log('Im here')
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe0DZgM-XdydXo_yf_Gezy8nYRKiEcu0PAdvbxLdhMJOftcMw/viewform?usp=sf_link')
  }


const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3> Customer Service Manager </h3>
                    <span className='bar'></span>
                    <img src={jpg1} className='img1' alt='' />
                    <p> You will be reporting to the GM: Life Operations. You will be responsible addressing customer issues and providing them with relevant solutions, while retaining them through building and maintaining strong relationships and the provision of ongoing assistance.</p>
                    <p>Contract Type: Permanent</p>
                    <p>Closing Date: 30 April 2022</p>
                    {/* <Link to='https://forms.gle/KEgQLDYjfyMrg9kJ6' className='btn'>Apply</Link> */}
                    <button btnClass={"btn"} onClick={btnClick.bind(this)} >
                Apply Now
              </button>
                </div>
                <div className='card'>
                    <h3> Business Analytics Manager </h3>
                    <span className='bar'></span>
                    <img src={jpg2} className='img2' alt='' />
                    <p> You will be reporting to the Head: Strategy and Business Integration. You will be responsible for developing analytics strategies and for overseeing a team of analysts and reporting specialists who will be required to translate raw data into insights to support and influence business decision making. You will also be responsible for the design, implementation and delivery of the day-to-day reporting requirements across the Life business.</p>
                    <p>Contract Type: Permanent</p>
                    <p>Closing Date: 30 April 2022</p>
                    {/* <Link to='/contact' className='btn'>Apply</Link> */}
                    <button btnClass={"btn"} onClick={btnClick2.bind(this)} >
                Apply Now
              </button>
                </div>
                <div className='card'>
                    <h3> Channel Marketing Manager </h3>
                    <span className='bar'></span>
                    <img src={jpg3} className='img3' alt='' />
                    <p> you will be responsible for the development and execution of RML’s channel marketing strategy and programs, in order to target specific channels to promote RML’s services and products. You will be responsible for overseeing the development of marketing plans, keeping up to date with the latest digital trends, and coordinating campaigns within the marketing team and with department heads.</p>
                    <p>Closing Date: 30 April 2022</p>
                    {/* <Link to='/contact' className='btn'>Apply</Link> */}
                    <button btnClass={"btn"} onClick={btnClick3.bind(this)} >
                Apply Now
              </button>
                </div>
            </div>
        </div>
    )
}

export default Pricing ;