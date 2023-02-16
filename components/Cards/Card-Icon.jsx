import React from 'react';

const Cardicon = (props) => {
	return <div className=" rounded-full shadow-lg shadow-gray-700 p-3 mx-5 cursor-pointer hover:scale-150 ease-in duration-500 text-xl">{props.children}</div>;
};

export const Cardiconmobile = (props) => {
	return <div className=" rounded-full shadow-lg shadow-gray-700 p-3 mx-5 cursor-pointer hover:scale-105 ease-in duration-500 text-xl">{props.children}</div>;
};
export const Cardiconcv = (props) => {
	return <div className="  cursor-pointer hover:scale-125 ease-in duration-500 text-xl">{props.children}</div>;
};

export default Cardicon;
