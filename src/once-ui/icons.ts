import { IconType } from 'react-icons';

import {
	HiChevronUp,
	HiChevronDown,
	HiChevronRight,
	HiChevronLeft,
	HiArrowUpRight,
	HiOutlineArrowPath,
	HiCheck,
	HiOutlineInformationCircle,
	HiMiniQuestionMarkCircle,
	HiMiniXMark,
	HiOutlineLink,
	HiExclamationTriangle,
	HiInformationCircle,
	HiExclamationCircle,
	HiCheckCircle,
	HiMiniGlobeAsiaAustralia,
	HiOutlineEnvelope,
	HiCalendarDays,
	HiEnvelope,
	HiOutlinePhone,
	HiOutlineCreditCard,
	HiOutlineShoppingBag,
	HiOutlineChartBar,
	HiOutlineSquares2X2,
	HiOutlineUserGroup,
	HiOutlineCog,
	HiOutlineBell,
	HiOutlineSparkles
} from "react-icons/hi2";

import {
	PiHouseDuotone,
	PiUserCircleDuotone,
	PiGridFourDuotone,
	PiBookBookmarkDuotone,
	PiImageDuotone,
	PiShoppingCartDuotone,
	PiChartLineUpDuotone,
	PiSquaresFourDuotone,
	PiUsersDuotone,
	PiGearDuotone,
	PiBellDuotone
} from "react-icons/pi";

import {
	FaDiscord,
	FaGithub,
	FaLinkedin,
	FaXTwitter,
	FaGoogle
} from "react-icons/fa6";

import {LiaPaperPlane} from "react-icons/lia";

export const iconLibrary: Record<string, IconType> = {
	// Navigation
	chevronUp: HiChevronUp,
    chevronDown: HiChevronDown,
	chevronRight: HiChevronRight,
	chevronLeft: HiChevronLeft,
	refresh: HiOutlineArrowPath,
	arrowUpRight: HiArrowUpRight,
	
	// Status
	check: HiCheck,
	helpCircle: HiMiniQuestionMarkCircle,
	infoCircle: HiInformationCircle,
	warningTriangle: HiExclamationTriangle,
	errorCircle: HiExclamationCircle,
	checkCircle: HiCheckCircle,
	
	// Contact & Social
	email: HiEnvelope,
	contact: HiOutlineEnvelope,
	phone: HiOutlinePhone,
	discord: FaDiscord,
	github: FaGithub,
	linkedin: FaLinkedin,
	x: FaXTwitter,
	google: FaGoogle,
	
	// General UI
	about: HiOutlineInformationCircle,
	globe: HiMiniGlobeAsiaAustralia,
	person: PiUserCircleDuotone,
	grid: PiGridFourDuotone,
	book: PiBookBookmarkDuotone,
	close: HiMiniXMark,
	openLink: HiOutlineLink,
	calendar: HiCalendarDays,
	home: PiHouseDuotone,
	gallery: PiImageDuotone,
	send: LiaPaperPlane,
	
	// Business & Commerce
	cart: PiShoppingCartDuotone,
	bag: HiOutlineShoppingBag,
	payment: HiOutlineCreditCard,
	analytics: PiChartLineUpDuotone,
	chart: HiOutlineChartBar,
	dashboard: PiSquaresFourDuotone,
	squares: HiOutlineSquares2X2,
	
	// Settings & Users
	users: PiUsersDuotone,
	team: HiOutlineUserGroup,
	settings: PiGearDuotone,
	cog: HiOutlineCog,
	notifications: PiBellDuotone,
	bell: HiOutlineBell,
	sparkles: HiOutlineSparkles,
	// Aliases for legacy icon names
	arrowRight: HiChevronRight,
	HiCheckCircle: HiCheckCircle,
	PiShoppingCartDuotone: PiShoppingCartDuotone,
	PiChartLineUpDuotone: PiChartLineUpDuotone,
	PiGridFourDuotone: PiGridFourDuotone,
	PiSquaresFourDuotone: PiSquaresFourDuotone
};
