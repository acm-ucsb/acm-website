import { Link } from "@mui/material";

// Searches text for Label[https://url] and replaces it with Link component
export const convertTextToLinks = (text: string) => {
  const linkRegex = /(\b\w+\b)\[(https?:\/\/[^\s]+)\]/gi;

  const parts = text.split(linkRegex);

  return parts.map((part, index) => {
    if (index % 3 === 1) {
      // The word before the URL
      const link = parts[index + 1]; // The URL
      return (
        <Link
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "primary.main", fontWeight: "bold" }}
        >
          {part}
        </Link>
      );
    }
    // Skip the URL part
    return index % 3 === 2 ? null : part;
  });
};
