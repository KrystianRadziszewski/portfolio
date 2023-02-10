import LanguageContext from '@/context/language';

const { useContext, useState } = require('react');

const ButtonLanguage = (props) => {
	const ctx = useContext(LanguageContext);

	return (
		<div className=" cursor-pointer flex flex-row justify-between w-max items-center rounded-full shadow-lg shadow-gray-700 p-3 mx-5  hover:scale-90 ease-in duration-500 " onClick={ctx.setLanguage}>
			{props.children}
		</div>
	);
};

export default ButtonLanguage;
