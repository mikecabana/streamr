import { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => {

    return <div className="bg-white mt-8">
        <div className="container mx-auto text-center border-t border-gray-200 py-8">
            {new Date().getFullYear()} &copy; Next Typescript Tailwind Template
        </div>
    </div>
}