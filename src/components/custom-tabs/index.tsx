"use client";
import { useState, useRef, useEffect, ReactNode } from "react";

interface Props {
  tabsArray: string[];
  children: ReactNode[];
}

const CustomTabs = (props: Props) => {
  const { tabsArray, children } = props;
  const [activeTab, setActiveTab] = useState(0);
  const [borderLeft, setBorderLeft] = useState(0);
  const [borderWidth, setBorderWidth] = useState(0);
  const tabRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      setBorderLeft(tabRefs.current[activeTab].offsetLeft);
      setBorderWidth(tabRefs.current[activeTab].clientWidth);
    }
  }, [activeTab]);

  return (
    <div className="mt-10">
      <div className="relative flex gap-7 border-b border-gray-900">
        {tabsArray.map((tab: string, i: number) => (
          <div
            key={i}
            ref={(el) => (tabRefs.current[i] = el as any)}
            className="cursor-pointer"
            onClick={() => setActiveTab(i)}
          >
            <p
              className={`tracking-wider pb-3 ${
                activeTab === i ? "text-primary-main" : "text-gray-400"
              }`}
            >
              {tab}
            </p>
          </div>
        ))}
        <div
          className="absolute bottom-0 h-0.5 bg-primary-main transition-all duration-300"
          style={{ left: borderLeft, width: borderWidth }}
        ></div>
      </div>
      <div className="mt-5">{children[activeTab]}</div>
    </div>
  );
};

export default CustomTabs;
