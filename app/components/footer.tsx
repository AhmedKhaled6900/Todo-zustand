
"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsTwitterX } from "react-icons/bs";
<BsTwitterX />
import { FaFacebook } from "react-icons/fa";
<FaFacebook />
import { FaInstagram } from "react-icons/fa";
<FaInstagram />

import { FaLinkedin } from "react-icons/fa6";
<FaLinkedin />
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { TbClockHour3 } from "react-icons/tb";
<FaWhatsapp />
const Footer = () => {
    const router =useRouter()


    const social = [
        {
    name : "facebook",
    href:"www.facebook.com",
    icon :<FaFacebook size={30} />
    },
        {
    name : "twitter",
    href:"www.twitter.com",
    icon :<BsTwitterX size={30} />
    },
        {
    name : "linkedin",
    href:"www.linkedin.com",
    icon :<FaLinkedin size={30} />
    },
        {
    name : "instagram",
    href:"www.instagram.com",
    icon :<FaInstagram size={30} />
    },
    
]
    return ( 
        <div className="flex items-center flex-col justify-center mt-10 pt-10 bg-sky-800">
<h1>
© Copyright Todo All Rights Reserved
</h1>

<div className="animated-text text-center flex flex-col mt-5">
    <h1 className="text-xl font-semibold">
        Made by    
    </h1>
    <span className="text-3xl mt-4 font-bold">
        Ahmed Khaled
    </span>
   
</div>
<div className="mt-4 ">
    <h1 className="text-xl font-semibold ">
        Follow me
    </h1>
</div>
<div className="flex items-center justify-between my-4 gap-x-3 lg:gap-x-6 ">
    {
        social.map((item)=>(
                <a href={item.href} className="hover:text-white" target="_blank" rel="noopener noreferrer">
            <button key={item.href}  >
            {item.icon}
            </button>
                </a>
        ))
    }
</div>

        </div>
     );
}
 
export default Footer;