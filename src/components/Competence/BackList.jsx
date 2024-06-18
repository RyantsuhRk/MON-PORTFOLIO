import { BiLogoMongodb, BiLogoNodejs, BiLogoPhp, BiLogoPython, BiServer } from "react-icons/bi"
import { DiMysql } from "react-icons/di"
import { IoServer } from "react-icons/io5"
import { SiExpress, SiMariadb } from "react-icons/si"

export const BackList1=[
  {
    id:1,
    titre:"Node JS",
    // bars:<p className="bar-node"> <span className="node-interieur"></span></p>,
    value:70,
    icon:<BiLogoNodejs className="icon-node"/>
  },
  {
    id:2,
      titre:"Express",
      // bars:<p className="bar-express"> <span className="express-interieur"></span></p>,
      value:80,
      icon:<SiExpress className="icon text-dark"/>
    },
  {
    id:3,
      titre:"PHP",
      // bars:<p className="bar-php"> <span className="php-interieur"></span></p>,
      value:10,
      icon:<BiLogoPhp className="icon text-black"/>
    },
    {
      id:4,
      titre:"Python",
      // bars:<p className="bar-python"> <span className="python-interieur"></span></p>,
      value:10,
      icon:<BiLogoPython className="icon-python"/>
    }
    
]
export const BackList2=[
   {
    id:5,
    titre:"MongoDB",
    // bars:<p className="bar-mongodb"> <span className="mongodb-interieur"></span></p>,
    value:70,
    icon:<BiLogoMongodb className="icon-mongo"/>
  },
    {
      id:6,
      titre:"MySQL",
      // bars:<p className="bar-mysql"> <span className="mysql-interieur"></span></p>,
      value:75,
      icon:<DiMysql className="icon-mysql"/>
    },
    {
      id:7,
      titre:"Mariadb",
      // bars:<p className="bar-mariadb"> <span className="mariadb-interieur"></span></p>,
      value:10,
      icon:<SiMariadb className="icon-mariadb"/>
    },
    {
      id:8,
      titre:"jsonServer",
      // bars:<p className="bar-jsonserver"> <span className="jsonserver-interieur"></span></p>,
      value:60,
      icon:<IoServer className="icon-jsonServer text-dark"/>
    }
]