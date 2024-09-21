import { useState, useEffect } from "react";

interface UseEllipsisProps {
  text: string;
  maxLength: number;
}

interface UseEllipsisReturn {
  truncatedText: string;
  isTruncated: boolean;
}

/**
 * useEllipsis hook for truncating text and managing tooltip behavior
 *
 * @param text - The input text to possibly truncate
 * @param maxLength - The maximum length of the text before truncation
 * @returns - Truncated text and truncation state
 */
const useEllipsis = ({
  text,
  maxLength,
}: UseEllipsisProps): UseEllipsisReturn => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [truncatedText, setTruncatedText] = useState(text);

  useEffect(() => {
    if (text.length > maxLength) {
      setTruncatedText(`${text.slice(0, maxLength)}...`);
      setIsTruncated(true);
    } else {
      setTruncatedText(text);
      setIsTruncated(false);
    }
  }, [text, maxLength]);

  return { truncatedText, isTruncated };
};

export default useEllipsis;
