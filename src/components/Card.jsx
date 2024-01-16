import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { GrDownload } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.05 }} dragElastic={0.2} dragTransition={{bounceStiffness:100, bounceDamping:20}} className='relative flex-shrink-0 w-60 h-80 py-10 px-8 rounded-[45px] bg-zinc-900/90 text-white overflow-hidden'>
            <FaRegFileAlt />

            <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>

            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between mb-3 py-3 px-8'>
                    <h4>{data.filesize}</h4>
                    <spa className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {
                            data.close
                                ?
                                <IoClose size=".7em" color='#fff' />
                                :
                                <GrDownload size=".7em" color='#fff' />
                        }
                    </spa>
                </div>

                {
                    data.tag.isOpen
                    &&
                    <div className={`tag w-full py-4 ${data.tag.tagColor} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>
                            {data.tag.tagTitle}
                        </h3>
                    </div>
                }
            </div>

        </motion.div>
    )
}

export default Card
