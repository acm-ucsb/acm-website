import { Button, Typography } from "@mui/material";

export const InternHeroSection = () => {
  return (
    <div className="flex flex-col align-center items-center gap-4 pt-[2rem]">
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "black",
        }}
      >
        ACM Interns
      </Typography>

      <Typography maxWidth="70%" sx={{ color: "gray", textAlign: "center" }}>
        ACM at UCSB is excited to offer students the opportunity to gain
        hands-on experience in leadership, event planning, technical
        development, and more through our internship program. Whether you’re
        looking to grow your technical expertise, network with industry
        professionals, or make a lasting impact on the computer science
        community, our program is designed to help you succeed. Join us to
        learn, lead, and collaborate with like-minded peers and mentors who are
        passionate about technology and innovation!
      </Typography>
    </div>
  );
};
