import React from "react";
import { SparklesIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

interface Props {
    children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ 
    children,
  }) => { 
  return (
    <div  className=" btn md flex px-24 btn transition-shadow font-semibold py-2 rounded-lg  bg-rood hover:bg-hoveryellow  text-white items-center justify-center">
        {children}
        <SparklesIcon className="h-5 ml-1"/>
    </div>
  );
}

export default Button;