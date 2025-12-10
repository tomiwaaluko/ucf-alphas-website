import { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  X,
  ChevronLeft,
  ChevronRight,
  Share2,
  Heart,
} from "lucide-react";

const ServiceGalleryDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Sample event data (in a real app, this would come from an API based on the ID)
  const eventData: Record<
    string,
    {
      title: string;
      date: string;
      location: string;
      participants: number;
      description: string;
      tags: string[];
      photos: Array<{
        id: number;
        url: string;
        caption: string;
        photographer: string;
        likes: number;
      }>;
    }
  > = {
    "1": {
      title: "Metro Orlando Food Distribution",
      date: "May 29, 2024",
      location: "Metro Orlando Community",
      participants: 4,
      description:
        "On Thursday, May 29th, Brothers Ibrahim, Brown, Blocker, and Chukes dedicated their time to serving the Metro Orlando community by assisting with the packaging and distribution of food for families in need. Their efforts contributed to a meaningful initiative aimed at addressing food insecurity and supporting those facing hardship in the area.",
      tags: ["Community Outreach", "Food Security", "Servants of All"],
      photos: [
        {
          id: 1,
          url: "/service-gallery/metro-orlando-food-distribution/IMG_7537.jpg",
          caption:
            "Brothers Ibrahim and Brown organizing food donations in safety vests at the distribution center",
          photographer: "Event Coordinator",
          likes: 24,
        },
        {
          id: 2,
          url: "/service-gallery/metro-orlando-food-distribution/IMG_7538.jpg",
          caption:
            "Brother working to package fresh produce and essential items for families in need",
          photographer: "Event Coordinator",
          likes: 18,
        },
        {
          id: 3,
          url: "/service-gallery/metro-orlando-food-distribution/IMG_7540.jpg",
          caption:
            "Team photo of Brothers Ibrahim, Brown, Blocker, and Chukes after completing the food distribution service",
          photographer: "Community Volunteer",
          likes: 32,
        },
      ],
    },
    "2": {
      title: "Head Start Literacy & Disney Gala Service",
      date: "April 4, 2025",
      location: "Head Start to Literacy & Disney",
      participants: 8,
      description:
        "On April 4, 2025, the Xi Iota Chapter of Alpha Phi Alpha Fraternity, Inc. had the incredible opportunity to give back by passing out and reading books to the youth at Head Start to Literacy, alongside our brothers from Delta Xi Lambda. Promoting education and empowerment-one page at a time! Later that day, we also assisted in setting up Disney's 'Celebrate the Children's Gala,' continuing our commitment to service and community impact.",
      tags: ["Education", "Literacy", "Service", "Disney"],
      photos: [
        {
          id: 1,
          url: "/service-gallery/headstart-literacy-disney-gala-service/IMG_7541.jpg",
          caption: "",
          photographer: "",
          likes: 28,
        },
        {
          id: 2,
          url: "/service-gallery/headstart-literacy-disney-gala-service/IMG_7542.jpg",
          caption: "",
          photographer: "",
          likes: 22,
        },
        {
          id: 3,
          url: "/service-gallery/headstart-literacy-disney-gala-service/IMG_7543.jpg",
          caption: "",
          photographer: "",
          likes: 31,
        },
      ],
    },
    "3": {
      title: "UCF Campus Tour & KSFAN Mentorship",
      date: "Recent Monday",
      location: "UCF Campus",
      participants: 6,
      description:
        "This past Monday, the Xi Iota Chapter of Alpha Phi Alpha Fraternity, Inc. welcomed the KSFAN to the campus of UCF. Brothers helped tour the students around campus, sharing insights on college life, academic success, and the legacy of Alpha. It was an honor to inspire the next generation and show them what it means to strive for excellence! Wishing these young men the best in their future endeavors.",
      tags: ["Leadership", "Scholarship", "Mentorship", "UCF"],
      photos: [
        {
          id: 1,
          url: "/service-gallery/ucf-campus-tour-ksfan-mentorship/IMG_7545.jpg",
          caption: "",
          photographer: "",
          likes: 25,
        },
        {
          id: 2,
          url: "/service-gallery/ucf-campus-tour-ksfan-mentorship/IMG_7546.jpg",
          caption: "",
          photographer: "",
          likes: 19,
        },
        {
          id: 3,
          url: "/service-gallery/ucf-campus-tour-ksfan-mentorship/IMG_7547.jpg",
          caption: "",
          photographer: "",
          likes: 27,
        },
        {
          id: 4,
          url: "/service-gallery/ucf-campus-tour-ksfan-mentorship/IMG_7548.jpg",
          caption: "",
          photographer: "",
          likes: 23,
        },
      ],
    },
    "4": {
      title: "Black History Month Outreach",
      date: "February 7-8, 2025",
      location: "Jones High School & Rollins College",
      participants: 10,
      description:
        "The Xi Iota Chapter of Alpha Phi Alpha Fraternity, Inc. alongside NPHC UCF continued our Black History Month outreach by visiting Jones High School (Feb. 7th) and Rollins College for their Upward Bound Program (Feb. 8th). We connected with students, shared the legacy of the Divine Nine, and emphasized the importance of brotherhood, education and service. The impact of Black history is felt every day, and we remain committed to honoring that legacy.",
      tags: ["Black History Month", "Divine Nine", "Education", "Upward Bound"],
      photos: [
        {
          id: 1,
          url: "/service-gallery/black-history-month-jones-rollins-outreach/IMG_7550.jpg",
          caption: "",
          photographer: "",
          likes: 35,
        },
        {
          id: 2,
          url: "/service-gallery/black-history-month-jones-rollins-outreach/IMG_7551.jpg",
          caption: "",
          photographer: "",
          likes: 29,
        },
      ],
    },
    "5": {
      title: "Forsyth Woods Elementary Christmas Gift Giving",
      date: "December 3, 2024",
      location: "Forsyth Woods Elementary School",
      participants: 8,
      description:
        "On Tuesday, December 3rd, the brothers of the Xi Iota Chapter of Alpha Phi Alpha Fraternity Inc. had to the opportunity to be apart of a Christmas gift giving at Forsyth Woods Elementary school. We exuberated the holiday spirit while providing gifts to children who normally are not able to have a traditional Christmas experience.",
      tags: ["Christmas", "Youth Support", "Holiday Spirit", "Gift Giving"],
      photos: [
        {
          id: 1,
          url: "/service-gallery/forsyth-woods-elementary-christmas-gift-giving/IMG_7553.jpg",
          caption: "",
          photographer: "",
          likes: 42,
        },
        {
          id: 2,
          url: "/service-gallery/forsyth-woods-elementary-christmas-gift-giving/IMG_7554.jpg",
          caption: "",
          photographer: "",
          likes: 38,
        },
        {
          id: 3,
          url: "/service-gallery/forsyth-woods-elementary-christmas-gift-giving/IMG_7555.jpg",
          caption: "",
          photographer: "",
          likes: 33,
        },
        {
          id: 4,
          url: "/service-gallery/forsyth-woods-elementary-christmas-gift-giving/IMG_7556.jpg",
          caption: "",
          photographer: "",
          likes: 26,
        },
        {
          id: 5,
          url: "/service-gallery/forsyth-woods-elementary-christmas-gift-giving/IMG_7557.jpg",
          caption: "",
          photographer: "",
          likes: 31,
        },
      ],
    },
    "6": {
      title: "Founder's Day Breakfast Celebration",
      date: "December 4, 2024",
      location: "Orlando, FL",
      participants: 25,
      description:
        "Xi Iota and Delta Xi Lambda came together to celebrate Founder's Day with a joint breakfast honoring both undergraduate and graduate chapter successes. Awards were presented and brothers received complimentary professional headshots.",
      tags: ["Founder's Day", "Awards", "Brotherhood"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/dec4/IMG_7454.png",
          caption: "Brothers gathering for Founder's Day breakfast celebration",
          photographer: "Chapter Photographer",
          likes: 45,
        },
        {
          id: 2,
          url: "/CHWPhotos/dec4/IMG_7455.png",
          caption: "Awards presentation ceremony",
          photographer: "Chapter Photographer",
          likes: 38,
        },
        {
          id: 3,
          url: "/CHWPhotos/dec4/IMG_7456.png",
          caption: "Professional headshot session",
          photographer: "Chapter Photographer",
          likes: 41,
        },
        {
          id: 4,
          url: "/CHWPhotos/dec4/IMG_7457.png",
          caption: "Brotherhood fellowship during breakfast",
          photographer: "Chapter Photographer",
          likes: 36,
        },
        {
          id: 5,
          url: "/CHWPhotos/dec4/IMG_7458.png",
          caption: "Group photo commemorating Founder's Day",
          photographer: "Chapter Photographer",
          likes: 52,
        },
      ],
    },
    "7": {
      title: "Second Harvest Food Bank Collaboration",
      date: "December 16, 2024",
      location: "Second Harvest Food Bank, Orlando",
      participants: 15,
      description:
        "Xi Iota and Delta Xi Lambda worked alongside community volunteers at Second Harvest Food Bank, packaging 1,455 boxes and 21,825 meals for families across Central Florida. This project reflected large-scale servant leadership and measurable community impact.",
      tags: ["Food Bank", "Community Impact", "Service"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/dec16/IMG_7436.png",
          caption: "Brothers packaging meals at Second Harvest Food Bank",
          photographer: "Food Bank Staff",
          likes: 48,
        },
        {
          id: 2,
          url: "/CHWPhotos/dec16/IMG_7437.png",
          caption: "Assembly line meal preparation",
          photographer: "Food Bank Staff",
          likes: 43,
        },
        {
          id: 3,
          url: "/CHWPhotos/dec16/IMG_7438.png",
          caption: "Volunteers working together to serve the community",
          photographer: "Food Bank Staff",
          likes: 39,
        },
        {
          id: 4,
          url: "/CHWPhotos/dec16/IMG_7439.png",
          caption: "Final count: 1,455 boxes and 21,825 meals packaged",
          photographer: "Food Bank Staff",
          likes: 55,
        },
      ],
    },
    "8": {
      title: "MLK Commemorative Luncheon",
      date: "January 17, 2025",
      location: "Orlando, FL",
      participants: 20,
      description:
        "The Xi Iota Chapter attended DXL's MLK Commemorative Luncheon, honoring Dr. King's leadership and Alpha's historical role in civil rights. The event served as a moment of unity and reflection on purpose and progress.",
      tags: ["MLK", "Civil Rights", "Leadership"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/jan17/IMG_7440.png",
          caption: "Brothers at MLK Commemorative Luncheon",
          photographer: "Event Coordinator",
          likes: 37,
        },
        {
          id: 2,
          url: "/CHWPhotos/jan17/IMG_7441.png",
          caption:
            "Honoring Dr. King's legacy and Alpha's civil rights history",
          photographer: "Event Coordinator",
          likes: 44,
        },
      ],
    },
    "9": {
      title: "Orlando MLK Parade",
      date: "January 18, 2025",
      location: "Orlando, FL",
      participants: 18,
      description:
        "Brothers from both chapters proudly marched together in the annual MLK Parade, representing Alpha Phi Alpha and honoring Dr. King's enduring legacy of equality, justice, and service.",
      tags: ["MLK", "Parade", "Community"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/jan18/IMG_7442.png",
          caption: "Brothers marching in the MLK Parade",
          photographer: "Parade Photographer",
          likes: 41,
        },
        {
          id: 2,
          url: "/CHWPhotos/jan18/IMG_7443.png",
          caption: "Representing Alpha Phi Alpha in the community",
          photographer: "Parade Photographer",
          likes: 39,
        },
      ],
    },
    "10": {
      title: "MLK Day of Service",
      date: "January 20, 2025",
      location: "Orlando, FL",
      participants: 15,
      description:
        "Xi Iota and DXL partnered with Orlando Alphas and the NAACP for the MLK Million Dollar Pack Initiative, assembling meal kits for local families. The collaboration embodied Alpha's mission of 'Service to All.'",
      tags: ["MLK", "Service", "NAACP"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/jan20/IMG_7444.png",
          caption: "MLK Million Dollar Pack Initiative service project",
          photographer: "NAACP Photographer",
          likes: 46,
        },
        {
          id: 2,
          url: "/CHWPhotos/jan20/IMG_7445.png",
          caption: "Brothers assembling meal kits for families in need",
          photographer: "NAACP Photographer",
          likes: 42,
        },
      ],
    },
    "11": {
      title: "Black History Month Outreach",
      date: "February 7-8, 2025",
      location: "Jones High School & Rollins College",
      participants: 10,
      description:
        "The Xi Iota Chapter alongside NPHC UCF continued our Black History Month outreach by visiting Jones High School and Rollins College for their Upward Bound Program. We connected with students, shared the legacy of the Divine Nine, and emphasized the importance of brotherhood, education and service.",
      tags: ["Black History Month", "Divine Nine", "Education"],
      photos: [
        {
          id: 1,
          url: "/service-gallery/black-history-month-jones-rollins-outreach/IMG_7550.jpg",
          caption: "Brothers presenting at Jones High School",
          photographer: "School Staff",
          likes: 35,
        },
        {
          id: 2,
          url: "/service-gallery/black-history-month-jones-rollins-outreach/IMG_7551.jpg",
          caption: "Upward Bound Program at Rollins College",
          photographer: "School Staff",
          likes: 29,
        },
      ],
    },
    "12": {
      title: "Campus Visit with King Solomon Foundation",
      date: "February 21, 2025",
      location: "UCF Campus",
      participants: 12,
      description:
        "In partnership with the King Solomon Foundation, an initiative led by brothers of Delta Xi Lambda, Xi Iota hosted a campus visit for high school students to UCF. Undergraduate brothers provided campus tours and shared experiences about college life, academic success, and leadership.",
      tags: ["Education", "Campus Tour", "Mentorship"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/feb21/IMG_7446.png",
          caption: "Brothers leading campus tour for high school students",
          photographer: "Chapter Photographer",
          likes: 33,
        },
        {
          id: 2,
          url: "/CHWPhotos/feb21/IMG_7447.png",
          caption: "King Solomon Foundation mentorship program at UCF",
          photographer: "Chapter Photographer",
          likes: 37,
        },
      ],
    },
    "13": {
      title: "First Place – Metro Orlando NPHC Alumni Step Show",
      date: "March 3, 2025",
      location: "Metro Orlando, FL",
      participants: 10,
      description:
        "Xi Iota won first place at the 2025 Metro Orlando NPHC Alumni Step Show with theme '25: A Silver Opportunity for Unity in Motion'. The chapter earned a $2,000 prize and trophy for excellence in performance, teamwork, and representation of Alpha Phi Alpha Fraternity, Inc.",
      tags: ["Step Show", "Competition", "First Place"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/mar3/image0.jpg",
          caption: "Xi Iota celebrating first place victory at NPHC Step Show",
          photographer: "Event Photographer",
          likes: 58,
        },
      ],
    },
    "14": {
      title: "94th Southern Regional Convention",
      date: "March 7-10, 2025",
      location: "Atlanta, GA",
      participants: 25,
      description:
        "Both chapters attended the regional convention, participating in leadership workshops, Alpha trainings, and networking sessions. Xi Iota and DXL also held a joint brotherhood dinner, fostering mentorship and fraternal unity.",
      tags: ["Regional", "Convention", "Leadership"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/mar11/image0.jpg",
          caption: "Brothers at the 94th Southern Regional Convention",
          photographer: "Convention Photographer",
          likes: 47,
        },
      ],
    },
    "15": {
      title: "Go To High School Go To College – YMOD All-Star Game",
      date: "March 22, 2025",
      location: "Orlando, FL",
      participants: 12,
      description:
        "Xi Iota showed support to Delta Xi Lambda's YMOD program by participating in an all-star basketball game with young students. Brothers combined the fun of athletics with meaningful mentorship, teaching students the importance of seeking higher education.",
      tags: ["YMOD", "Education", "Basketball"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/mar22.png",
          caption: "Brothers playing basketball with YMOD students",
          photographer: "YMOD Staff",
          likes: 34,
        },
      ],
    },
    "16": {
      title: "Go To High School Go To College – UCF Campus Tour",
      date: "March 23, 2025",
      location: "UCF Campus",
      participants: 15,
      description:
        "The Delta Xi Lambda chapter collaborated with the UCF Athletics Department and invited brothers of Xi Iota to host a comprehensive campus tour for out-of-state high school students. The collaboration showcased the university's programs while brothers shared their experiences.",
      tags: ["Campus Tour", "Education", "UCF"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/mar23.png",
          caption: "Brothers hosting campus tour for out-of-state students",
          photographer: "UCF Athletics",
          likes: 31,
        },
      ],
    },
    "17": {
      title: "Head Start Literacy & Disney Gala Service",
      date: "April 4, 2025",
      location: "Head Start Orlando & Disney",
      participants: 8,
      description:
        "Xi Iota brothers joined DXL at Head Start Orlando to read to children and assist with Disney's Celebrate the Children's Gala, advancing Alpha's mission of education and empowerment through literacy.",
      tags: ["Literacy", "Disney", "Youth"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/apr4.png",
          caption: "Brothers reading to children at Head Start",
          photographer: "Head Start Staff",
          likes: 40,
        },
      ],
    },
    "18": {
      title: "Brother's Keeper",
      date: "June 14, 2025",
      location: "Orlando, FL",
      participants: 10,
      description:
        "Both chapters served an elderly Alpha brother by cleaning and maintaining his property. This early-year act of service reinforced the fraternity's value of intergenerational brotherhood.",
      tags: ["Brother's Keeper", "Elder Support", "Service"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/jun14.png",
          caption:
            "Brothers performing yard maintenance for elder Alpha member",
          photographer: "Chapter Photographer",
          likes: 36,
        },
      ],
    },
    "19": {
      title: "Xi Iota Charter Day Celebration",
      date: "June 16, 2025",
      location: "UCF Campus",
      participants: 30,
      description:
        "The Xi Iota Chapter celebrated its Charter Day anniversary with a community cookout, bringing together brothers from Delta Xi Lambda and members of the UCF community. The event featured good food, fellowship, and brotherhood.",
      tags: ["Charter Day", "Brotherhood", "Celebration"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/jun16/IMG_7477.png",
          caption: "Charter Day celebration cookout",
          photographer: "Chapter Photographer",
          likes: 51,
        },
        {
          id: 2,
          url: "/CHWPhotos/jun16/IMG_7478.png",
          caption: "Brothers and community members enjoying fellowship",
          photographer: "Chapter Photographer",
          likes: 44,
        },
        {
          id: 3,
          url: "/CHWPhotos/jun16/IMG_7479.png",
          caption: "Celebrating years of Xi Iota excellence",
          photographer: "Chapter Photographer",
          likes: 48,
        },
      ],
    },
    "20": {
      title: "Community Food Distribution with Zeta Phi Beta",
      date: "June 18, 2025",
      location: "Orlando, FL",
      participants: 12,
      description:
        "Xi Iota and DXL joined the Sigma Epsilon Chapter of Zeta Phi Beta Sorority, Inc. to distribute food and household items to Orlando residents, promoting collaboration across Greek organizations for community benefit.",
      tags: ["Food Distribution", "Divine Nine", "Service"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/jun18.png",
          caption:
            "Brothers collaborating with Zeta Phi Beta for food distribution",
          photographer: "Chapter Photographer",
          likes: 39,
        },
      ],
    },
    "21": {
      title: "2025 General Convention",
      date: "July 2025",
      location: "Philadelphia, PA",
      participants: 15,
      description:
        "Brothers from both chapters attended the 2025 General Convention in Philadelphia, representing the Southern Region and engaging in national fraternity business.",
      tags: ["General Convention", "National", "Philadelphia"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/jul29.png",
          caption: "Brothers representing at the 2025 General Convention",
          photographer: "Convention Photographer",
          likes: 43,
        },
      ],
    },
    "22": {
      title: "Livingston Street Church Food Drive",
      date: "August 21, 2025",
      location: "Livingston Street Church, Orlando",
      participants: 10,
      description:
        "Xi Iota and Delta Xi Lambda partnered with Livingston Street Church of God to distribute food and household supplies to underserved families. This service initiative demonstrated commitment to addressing food insecurity in the Orlando community.",
      tags: ["Food Drive", "Church Partnership", "Service"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/aug22.png",
          caption: "Brothers distributing food at Livingston Street Church",
          photographer: "Church Staff",
          likes: 38,
        },
      ],
    },
    "23": {
      title: "Divine Nine Plots Ribbon-Cutting Ceremony",
      date: "September 20, 2024",
      location: "UCF Campus",
      participants: 20,
      description:
        "A historic moment for the Divine Nine at UCF with the ribbon-cutting of newly built plots honoring the legacy of the NPHC organizations on campus. Brothers from Xi Iota and Delta Xi Lambda gathered alongside UCF alumni to celebrate this milestone.",
      tags: ["Divine Nine", "NPHC", "UCF"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/sept20/IMG_7467.png",
          caption: "Divine Nine ribbon-cutting ceremony at UCF",
          photographer: "UCF Photographer",
          likes: 54,
        },
        {
          id: 2,
          url: "/CHWPhotos/sept20/IMG_7468.png",
          caption: "NPHC brothers celebrating the new plots",
          photographer: "UCF Photographer",
          likes: 49,
        },
      ],
    },
    "24": {
      title: "Livingston Street Church Food Drive",
      date: "September 18, 2025",
      location: "Livingston Street Church, Orlando",
      participants: 10,
      description:
        "Both chapters returned to partner with Livingston Street Church of God for another food distribution event, providing essential supplies to families in need. This recurring service demonstrates consistency in addressing food insecurity.",
      tags: ["Food Drive", "Church Partnership", "Service"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/sept18.png",
          caption:
            "Brothers returning for continued service at Livingston Street Church",
          photographer: "Church Staff",
          likes: 35,
        },
      ],
    },
    "25": {
      title: "Literacy Domain Day at Callahan Head Start",
      date: "October 8, 2025",
      location: "Callahan Head Start, Orlando",
      participants: 12,
      description:
        "Both chapters participated in Literacy Domain Day, where brothers read to children and distributed books to promote literacy and educational engagement. The event emphasized mentorship and Alpha's dedication to youth development.",
      tags: ["Literacy", "Youth", "Education"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/oct8.png",
          caption: "Brothers reading to children on Literacy Domain Day",
          photographer: "Head Start Staff",
          likes: 41,
        },
      ],
    },
    "26": {
      title: "Brother's Keeper Initiative",
      date: "October 20, 2024",
      location: "Orlando, FL",
      participants: 8,
      description:
        "Brother Nelson from Xi Iota joined the Delta Xi Lambda Chapter to host Alpha's national initiative, Brother's Keeper. The brothers joined forces to support DXL charter member, Bro. Felton A. Johnson, by assisting with yard activities and home maintenance.",
      tags: ["Brother's Keeper", "Elder Support", "National Program"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/oct20.png",
          caption:
            "Brothers supporting Bro. Felton Johnson with home maintenance",
          photographer: "Chapter Photographer",
          likes: 37,
        },
      ],
    },
    "27": {
      title: "A Voteless People Is A Hopeless People",
      date: "October 29, 2024",
      location: "UCF Campus",
      participants: 15,
      description:
        "Xi Iota hosted a voter education seminar in collaboration with the UCF NAACP Chapter and Equal Ground, supported by DXL alumni. The event informed attendees about ballot measures, voting rights, and civic engagement.",
      tags: ["Voter Education", "Civic Engagement", "NPHC"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/oct29/IMG_7470.png",
          caption: "Voter education seminar at UCF",
          photographer: "Event Photographer",
          likes: 45,
        },
        {
          id: 2,
          url: "/CHWPhotos/oct29/IMG_7471.png",
          caption: "Brothers educating students about voting rights",
          photographer: "Event Photographer",
          likes: 42,
        },
        {
          id: 3,
          url: "/CHWPhotos/oct29/IMG_7472.png",
          caption: "Community engagement on civic responsibility",
          photographer: "Event Photographer",
          likes: 40,
        },
        {
          id: 4,
          url: "/CHWPhotos/oct29/IMG_7473.png",
          caption: "UCF NAACP and Alpha collaboration",
          photographer: "Event Photographer",
          likes: 38,
        },
      ],
    },
    "28": {
      title: "Go To High School Go To College – Middle School Campus Tour",
      date: "October 29, 2024",
      location: "UCF Campus",
      participants: 12,
      description:
        "The Delta Xi Lambda and Xi Iota chapters collaborated to host a campus tour specifically designed for middle school students from South Florida. Brothers provided age-appropriate guidance about college preparation and the value of education.",
      tags: ["Campus Tour", "Middle School", "Education"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/october29.png",
          caption: "Brothers hosting middle school students at UCF",
          photographer: "Chapter Photographer",
          likes: 33,
        },
      ],
    },
    "29": {
      title: "UCF Campus Tour & KSFAN Mentorship",
      date: "Recent Monday",
      location: "UCF Campus",
      participants: 6,
      description:
        "The Xi Iota Chapter welcomed the KSFAN to the campus of UCF. Brothers helped tour the students around campus, sharing insights on college life, academic success, and the legacy of Alpha.",
      tags: ["Campus Tour", "Mentorship", "UCF"],
      photos: [
        {
          id: 1,
          url: "/service-gallery/ucf-campus-tour-ksfan-mentorship/IMG_7545.jpg",
          caption: "Brothers welcoming KSFAN students to UCF",
          photographer: "Chapter Photographer",
          likes: 25,
        },
        {
          id: 2,
          url: "/service-gallery/ucf-campus-tour-ksfan-mentorship/IMG_7546.jpg",
          caption: "Campus tour and mentorship session",
          photographer: "Chapter Photographer",
          likes: 19,
        },
        {
          id: 3,
          url: "/service-gallery/ucf-campus-tour-ksfan-mentorship/IMG_7547.jpg",
          caption: "Sharing insights on college life and academic success",
          photographer: "Chapter Photographer",
          likes: 27,
        },
        {
          id: 4,
          url: "/service-gallery/ucf-campus-tour-ksfan-mentorship/IMG_7548.jpg",
          caption: "Brotherhood and mentorship in action",
          photographer: "Chapter Photographer",
          likes: 23,
        },
      ],
    },
    "30": {
      title: "2024 District Conference",
      date: "2024",
      location: "Orlando, FL",
      participants: 30,
      description:
        "The Xi Iota Chapter and Delta Xi Lambda Chapter demonstrated strong attendance at the 2024 District Conference with over 30 brothers registered. Serving as the host chapter, both chapters showcased exemplary leadership and DXL won Outstanding Chapter of the Year.",
      tags: ["District", "Conference", "Host Chapter"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/districtconference2024/IMG_7480.png",
          caption: "Brothers at the 2024 District Conference",
          photographer: "Conference Photographer",
          likes: 56,
        },
        {
          id: 2,
          url: "/CHWPhotos/districtconference2024/IMG_7481.png",
          caption: "Outstanding Chapter of the Year celebration",
          photographer: "Conference Photographer",
          likes: 62,
        },
      ],
    },
    "32": {
      title: "Project Alpha",
      date: "Ongoing",
      location: "Orlando, FL",
      participants: 15,
      description:
        "The Xi Iota Chapter and Delta Xi Lambda joined forces to showcase Alpha Phi Alpha's national Project Alpha initiative to the Young Men of Distinction (YMOD) program. This health and wellness education program targeted at-risk youth.",
      tags: ["Project Alpha", "Health", "Youth Development"],
      photos: [
        {
          id: 1,
          url: "/CHWPhotos/projectalpha/IMG_7474.png",
          caption: "Brothers presenting Project Alpha to YMOD students",
          photographer: "YMOD Staff",
          likes: 44,
        },
        {
          id: 2,
          url: "/CHWPhotos/projectalpha/IMG_7475.png",
          caption: "Health and wellness education session",
          photographer: "YMOD Staff",
          likes: 40,
        },
        {
          id: 3,
          url: "/CHWPhotos/projectalpha/IMG_7476.png",
          caption: "Mentoring at-risk youth through Project Alpha",
          photographer: "YMOD Staff",
          likes: 38,
        },
      ],
    },
  };

  const event = eventData[id || "1"];

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">
            Event Not Found
          </h1>
          <Link
            to="/service-gallery"
            className="text-yellow-400 hover:text-yellow-300"
          >
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const toggleLike = (photoId: number) => {
    const newLikedImages = new Set(likedImages);
    if (newLikedImages.has(photoId)) {
      newLikedImages.delete(photoId);
    } else {
      newLikedImages.add(photoId);
    }
    setLikedImages(newLikedImages);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % event.photos.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + event.photos.length) % event.photos.length
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white font-lora relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div className="fixed inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-20 w-80 h-80 bg-yellow-600/3 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="relative z-10">
        <Navigation />
        <div className="pt-16">
          {/* Back Button */}
          <motion.div
            className="max-w-7xl mx-auto px-4 py-8"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/service-gallery"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group"
            >
              <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.3 }}>
                <ArrowLeft className="mr-2 h-5 w-5" />
              </motion.div>
              <span className="font-semibold">Back to Gallery</span>
            </Link>
          </motion.div>

          {/* Event Header */}
          <motion.section
            className="py-12 bg-gradient-to-br from-black via-gray-900/30 to-black relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-7xl mx-auto px-4">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6 font-cinzel"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {event.title}
              </motion.h1>

              <motion.div
                className="grid md:grid-cols-3 gap-6 mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-5 h-5 mr-3 text-yellow-400" />
                  <span className="text-lg">{event.date}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-yellow-400" />
                  <span className="text-lg">{event.location}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="w-5 h-5 mr-3 text-yellow-400" />
                  <span className="text-lg">
                    {event.participants} participants
                  </span>
                </div>
              </motion.div>

              <motion.p
                className="text-xl text-gray-300 leading-relaxed max-w-4xl mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {event.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {event.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm border border-yellow-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Photo Gallery */}
          <motion.section
            className="py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                  Event Gallery ({event.photos.length} Photos)
                </h2>
                <p className="text-gray-300">
                  Click on any photo to view it in full size
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {event.photos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-yellow-400/20 hover:border-yellow-400/40 transition-all"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Photo actions overlay */}
                      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(photo.id);
                          }}
                          className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                            likedImages.has(photo.id)
                              ? "bg-red-500/80 text-white"
                              : "bg-black/50 text-gray-300 hover:text-red-400"
                          }`}
                        >
                          <Heart className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-full bg-black/50 text-gray-300 hover:text-yellow-400 backdrop-blur-sm transition-colors"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
        <Footer />
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={event.photos[selectedImage].url}
                alt={event.photos[selectedImage].caption}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation buttons */}
              {event.photos.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceGalleryDetail;
