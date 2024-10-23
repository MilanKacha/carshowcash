"use client"
import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({ title, containerStyles, handelClick }: CustomButtonProps) => {
    return (
        <button disabled={false} type={"button"} className={`custom-btn ${containerStyles}`} onClick={handelClick}>
            <span className={`flex-1`}>{title}</span>
        </button>
    )
}

export default CustomButton
