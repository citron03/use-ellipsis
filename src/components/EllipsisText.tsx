import "./EllipsisText.style.css";

import type { FC } from "react";

import { useRef } from "react";
import useEllipsis from "../hooks/useEllipsis";

interface EllipsisTextProps {
  text: string;
  maxLength: number;
  tooltip?: boolean;
  className?: string;
  tooltipClassName?: string;
}

const EllipsisText: FC<EllipsisTextProps> = ({
  text,
  maxLength,
  tooltip = true,
  className = "",
  tooltipClassName = "",
}) => {
  const { truncatedText, isTruncated } = useEllipsis({ text, maxLength });
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <div className={className} ref={textRef}>
      {tooltip && isTruncated ? (
        <span className="tooltip-container">
          {truncatedText}
          <span className={`tooltip ${tooltipClassName}`}>{text}</span>
        </span>
      ) : (
        truncatedText
      )}
    </div>
  );
};

export default EllipsisText;
