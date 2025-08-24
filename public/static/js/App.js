import React from "react";
import {
    FaDownload,
    FaTelegramPlane
} from "react-icons/fa";
import {
    FaWhatsapp
} from "react-icons/fa6";

export default function App() {
    return ( <
        div className = "max-w-6xl mx-auto p-4 space-y-8" > { /* Header */ } <
        header className = "space-y-4" >
        <
        div className = "flex items-center justify-between" >
        <
        img src = "logooctax.gif"
        alt = "OxtaX"
        className = "w-16 h-16 md:w-20 md:h-20" /
        >
        <
        div className = "flex" >
        <
        a href = "https://t.me/sakii_sre"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "text-green-500 text-2xl px-4" >
        <
        FaWhatsapp / >
        <
        /a> <
        a href = "https://t.me/sakii_sre"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "text-blue-500 text-2xl" >
        <
        FaTelegramPlane / >
        <
        /a> <
        /div> <
        </div>

        <
        div className = "bg-green-200 rounded-xl p-4 text-center" >
        <
        h1 className = "text-xl md:text-2xl font-bold" > Welcome to OxtaX < /h1> <
        p className = "text-sm md:text-base" >
        Exchange more, earn more.Make your life better. <
        /p> <
        /div> <
        /header>

        { /* Features */ } <
        div className = "grid gap-4 md:grid-cols-2 lg:grid-cols-3" > {
            [{
                    title: "Safe & Secure CDM Withdrawals",
                    desc: "Withdraw USDT safely and receive INR through CDM in minutes. 100% secure, zero risk of account freeze.",
                    img: "money.png",
                },
                {
                    title: "Fast Bank Withdrawals",
                    desc: "Withdraw your USDT and receive INR directly into your bank account within 1 hour.",
                    img: "withdraw.png",
                },
                {
                    title: "Maximize Your Earnings with UPI",
                    desc: "Get the highest withdrawal rates only on UPI transfers, giving you more value and bigger earnings every single time.",
                    img: "UPI-Color.png",
                },
            ].map((item, index) => ( <
                div key = {
                    index
                }
                className = "border rounded-lg p-4 flex gap-4 items-start bg-white shadow-sm" >
                <
                img src = {
                    item.img
                }
                alt = {
                    item.title
                }
                className = "w-16 h-16 mt-1" / >
                <
                div >
                <
                h2 className = "font-semibold" > {
                    item.title
                } < /h2> <
                p className = "text-sm text-gray-600" > {
                    item.desc
                } < /p> <
                /div> <
                /div>
            ))
        } <
        /div>

         { /* Download Button */ } <
        div className = "text-center" >
        <
        a href = "/OctaX.apk"
        download className = "bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-3 px-8 rounded-full inline-flex items-center gap-3" >
        <
        FaDownload className = "text-xl" / >
        DOWNLOAD <
        /a> <
        /div>


 { /* Mobile UI Image */ } <
        div className = "flex justify-center" >
        <
        img src = "screenshotoctax.png"
        alt = "Mobile UI"
        className = "w-full max-w-xs md:max-w-sm rounded-xl shadow-md" /
        >
        <
        /div>

        { /* Platform Advantages */ } <
        div className = "bg-white p-4 rounded-lg shadow space-y-4" >
        <
        h3 className = "font-bold text-lg mb-4" > Platform Advantage < /h3>

        <
        div className = "grid gap-4 md:grid-cols-2" > {
            [{
                    title: "24/7 Support",
                    desc: "Got a problem? Just get in touch. Our customer service support team is available 24/7.",
                    icon: "https://img.icons8.com/ios-filled/50/headset.png",
                },
                {
                    title: "No Transaction Fee",
                    desc: "Zero transaction fees guaranteed, every time, with no hidden charges or deductions.",
                    icon: "https://img.icons8.com/ios-filled/50/bank-card-back-side.png",
                },
                {
                    title: "Best In Market",
                    desc: "We offer the highest price for your USDT, Beating all market rates",
                    icon: "https://img.icons8.com/ios-filled/50money.png",
                },
                {
                    title: "Reliable Security",
                    desc: "Our sophisticated security measures protect your crypto currency from all risks.",
                    icon: "https://img.icons8.com/ios-filled/50/privacy.png",
                },
            ].map((item, index) => ( <
                div key = {
                    index
                }
                className = "flex items-start gap-4 bg-gray-50 p-4 rounded-md shadow-sm" >
                <
                img src = {
                    item.icon
                }
                alt = "icon"
                className = "w-6 h-6 mt-1" / >
                <
                div >
                <
                p className = "font-semibold" > {
                    item.title
                } < /p> <
                p className = "text-sm text-gray-700" > {
                    item.desc
                } < /p> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /div>
    );
}