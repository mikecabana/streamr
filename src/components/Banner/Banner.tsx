import React from 'react'
// import styles from './Banner.module.scss';

export type BannerProps = {
    message?: string;
}

export function Banner({ message }: BannerProps) {
    return (
        <div className="flex flex-row items-center justify-center h-12 bg-gray-900 text-indigo-300 font-semibold">
            <p>{message}</p>
        </div>
    );
}