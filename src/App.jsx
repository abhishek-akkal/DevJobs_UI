import React from "react";
import "./index.css";
import Card from "./components/card";

const App = () => {
  const jobs = [
    {
      brandLogo:
        "https://imgs.search.brave.com/j5FNhYRZkpcRlamgbXdPpPszJOrLUKGtgQMdE1q-Grg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/NDg0LzUwOS9zbWFs/bC9nb29nbGUtbGVu/cy1pY29uLWxvZ28t/c3ltYm9sLWZyZWUt/cG5nLnBuZw",
      company: "Google",
      posted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$140/hr",
      location: "Bangalore, India",
    },

    {
      brandLogo:
        "https://imgs.search.brave.com/XpJhJk3e2g6YCAm5Lgwjn25RCsL9HGIQR8aT2OrsWP8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NkLzc3/L2UwL2NkNzdlMDRk/OWZlMWE0YWM2NmEy/NjY5M2QwNWUwMmM0/LmpwZw",
      company: "Microsoft",
      posted: "1 week ago",
      post: "React Developer",
      tag1: "Part-Time",
      tag2: "Mid Level",
      pay: "$110/hr",
      location: "Hyderabad, India",
    },

    {
      brandLogo:
        "https://imgs.search.brave.com/rMYhoSBn2NTW46eMWDfrpXtEULEbUGa9y2LZ66m1ROk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZmLzRj/Lzc1LzZmNGM3NWRk/MDRhOTJlMGM1NjAw/MzMzZmM2ZmQ5Y2Uz/LmpwZw",
      company: "Amazon",
      posted: "3 days ago",
      post: "UI/UX Designer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Mumbai, India",
    },

    {
      brandLogo:
        "https://imgs.search.brave.com/zx7cxNMKmQOnZfpcwQbaxGEQVAHp_m6pV_e2gqJCE1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/NDk1LzIwNy9zbWFs/bC9tZXRhLWxvZ28t/cm91bmRlZC1nbG9z/c3ktaWNvbi13aXRo/LXRyYW5zcGFyZW50/LWJhY2tncm91bmQt/ZnJlZS1wbmcucG5n",
      company: "Meta",
      posted: "2 weeks ago",
      post: "Backend Engineer",
      tag1: "Remote",
      tag2: "Junior Level",
      pay: "$130/hr",
      location: "Pune, India",
    },

    {
      brandLogo:
        "https://imgs.search.brave.com/2bFwKi3jj-g9eHpVxp_x5gwQMAh8gt-rMJOyh7bJz0k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9uZXRmbGl4LWxv/Z28taWNvbi5zdmc",
      company: "Netflix",
      posted: "4 days ago",
      post: "Product Designer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$150/hr",
      location: "Delhi, India",
    },

    {
      brandLogo:
        "https://imgs.search.brave.com/G4fmcAaAootV6KfWEAS-LTVIEyfMC0tB3CXP9PU45Zs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8xOC8xOC80MC9h/cHBsZS1sb2dvLTc0/NjM3OTVfNjQwLnBu/Zw",
      company: "Apple",
      posted: "6 days ago",
      post: "iOS Developer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "$145/hr",
      location: "Chennai, India",
    },

    {
      brandLogo:
        "https://imgs.search.brave.com/YFUwfwZ7fRKDMg6SrhUJcXfHItowrxq5c3TwmZxTNWI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzAwLzQxLzE3/LzM2MF9GXzMwMDQx/MTcxOF9BVnhhYUFG/T1JVbXlXU2ZHakVU/NW9TRTRjanRnejJB/ei5qcGc",
      company: "Adobe",
      posted: "1 month ago",
      post: "Creative Developer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$125/hr",
      location: "Noida, India",
    },

    {
      brandLogo:
        "https://imgs.search.brave.com/v6Y1G9miZ9ZRmMRA__-vTsHK6voIqprwmPVGdBDIFG0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDczLzQ5/NC85MjAvbm9uXzJ4/L3ViZXItbG9nby1j/aXJjdWxhci1nbG9z/c3ktaWNvbi13aXRo/LXRyYW5zcGFyZW50/LWJhY2tncm91bmQt/ZnJlZS1wbmcucG5n",
      company: "Uber",
      posted: "2 days ago",
      post: "Software Engineer",
      tag1: "Full-Time",
      tag2: "Junior Level",
      pay: "$115/hr",
      location: "Bangalore, India",
    },

    {
      brandLogo:
        "https://imgs.search.brave.com/On682SE5xZ1Fw8JPf6yaR_O5T1SiJkEMY2AfeLVcpo4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc0L1Nwb3RpZnlf/QXBwX0xvZ28uc3Zn",
      company: "Spotify",
      posted: "8 days ago",
      post: "Music App Designer",
      tag1: "Part-Time",
      tag2: "Mid Level",
      pay: "$100/hr",
      location: "Remote",
    },

    {
      brandLogo:
        "https://imgs.search.brave.com/NIzmJ5XvFZjLlt-frdsY4XX08NOgI4_8bFdfyKz-VVU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWxpbmtlZGluLWxv/Z28taWNvbi1zdmct/ZG93bmxvYWQtcG5n/LTg0NjE1NDEucG5n/P2Y9d2VicCZ3PTEy/OA",
      company: "LinkedIn",
      posted: "5 weeks ago",
      post: "Full Stack Developer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$135/hr",
      location: "Gurgaon, India",
    },

    {
      brandLogo:
        "https://imgs.search.brave.com/nKd3NFbMdj8R87z1rQjwbeGkkfHxaNJhSGoBC4IWSso/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZW5q/aS5jby93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNy9YLWxv/Z28tdHdpdHRlci0x/MDI0eDU3NC5qcGc",
      company: "X",
      posted: "1 day ago",
      post: "React Engineer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "$118/hr",
      location: "Remote",
    },

    {
      brandLogo:
        "https://imgs.search.brave.com/IJXPuNFO0gM2Z3YDQV0A5iZhfNWiGZkah6PeTYjGzow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9udmlkaWEtMS5z/dmc",
      company: "NVIDIA",
      posted: "2 weeks ago",
      post: "AI Engineer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$160/hr",
      location: "Pune, India",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (elem, index) {
        return (
          <Card
            key={index}
            brandLogo={elem.brandLogo}
            company={elem.company}
            posted={elem.posted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        );
      })}
    </div>
  );
};

export default App;
