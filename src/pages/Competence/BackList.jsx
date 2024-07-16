import { BiLogoMongodb, BiLogoNodejs, BiLogoPhp, BiLogoPython, BiServer } from "react-icons/bi"
import { DiMysql } from "react-icons/di"
import { IoServer } from "react-icons/io5"
import { SiExpress, SiMariadb } from "react-icons/si"

export const BackList1=[
  {
    id:1,
    titre:"Node JS",
    value:70,
    icon:<BiLogoNodejs className="icon-node"/>
  },
  {
    id:2,
      titre:"Express",
      value:80,
      icon:<SiExpress className="icon text-black"/>
    },
  {
    id:3,
      titre:"PHP",
      value:10,
      icon:<BiLogoPhp className="icon text-black"/>
    },
    {
      id:4,
      titre:"Python",
      value:10,
      icon:<BiLogoPython className="icon-python"/>
    }
    
]
export const BackList2=[
   {
    id:5,
    titre:"MongoDB",
    value:70,
    icon:<BiLogoMongodb className="icon-mongo"/>
  },
    {
      id:6,
      titre:"MySQL",
      value:75,
      icon:<DiMysql className="icon-mysql"/>
    },
    {
      id:7,
      titre:"Mariadb",
      value:10,
      icon:<SiMariadb className="icon-mariadb"/>
    },
    {
      id:8,
      titre:"jsonServer",
      value:60,
      icon:<IoServer className="icon-jsonServer "/>
    }
]