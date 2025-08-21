"use client"

// import Iphone15Pro from "@/components/magicui/iphone-15-pro";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// More realistic phone mockup with silver frame
const PhoneMockup = ({ className, children }) => {
  return (
    <div className={cn("relative bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-[3.2rem] p-[3px] shadow-2xl", className)}>
      {/* Outer titanium frame */}
      <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-[3rem] p-[2px] relative">
        {/* Inner frame */}
        <div className="bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 rounded-[2.9rem] p-[1px]">
          {/* iPhone body */}
          <div className="bg-black rounded-[2.8rem] w-full aspect-[9/19.5] relative overflow-hidden">
            {/* Power button */}
            <div className="absolute right-[-3px] top-24 w-[3px] h-14 bg-gradient-to-b from-gray-200 to-gray-400 rounded-l-sm"></div>
            
            {/* Volume buttons */}
            <div className="absolute left-[-3px] top-20 w-[3px] h-8 bg-gradient-to-b from-gray-200 to-gray-400 rounded-r-sm"></div>
            <div className="absolute left-[-3px] top-32 w-[3px] h-12 bg-gradient-to-b from-gray-200 to-gray-400 rounded-r-sm"></div>
            
            {/* Action button (new in iPhone 15 Pro) */}
            <div className="absolute left-[-3px] top-48 w-[3px] h-6 bg-gradient-to-b from-orange-300 to-orange-500 rounded-r-sm"></div>
            
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-black rounded-full w-28 h-7 z-20 shadow-inner border border-gray-800"></div>
            
            {/* Screen area */}
            <div className="absolute inset-[3px] bg-black rounded-[2.5rem] overflow-hidden">
              {/* This is where your content goes */}
              {children}
            </div>
          </div>
        </div>
      </div>
      
      {/* Reflection effect */}
      <div className="absolute inset-[6px] rounded-[2.7rem] bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};

export function Iphone15ProDemo({ children, size = "w-72" }) {
  return (
    <div className={`relative ${size} mx-auto`}>
      <PhoneMockup className="w-full">
        {/* The scrollable content area */}
        <div className="w-full h-full overflow-y-auto overflow-x-hidden pt-8 pb-4 px-4">
          {children}
        </div>
      </PhoneMockup>
    </div>
  );
}
