import { IoFastFoodSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { TbBrandFunimation } from "react-icons/tb";
import { FaHouseDamage } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { FaBusAlt } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";



export const IconoCategoria = ({id}) => {
    switch(id){
		case 'comida':
			return <IoFastFoodSharp />;
		case 'compras':
			return <FaCartShopping />;
		case 'cuentas y pagos':
			return <FaMoneyBillWave />;
		case 'diversion':
			return <TbBrandFunimation />;
		case 'hogar':
			return <FaHouseDamage/>;
		case 'ropa':
			return <GiClothes />;
		case 'salud e higiene':
			return <MdLocalHospital />;
		case 'transporte':
			return <FaBusAlt />;
		default:
		break;
	}
}
