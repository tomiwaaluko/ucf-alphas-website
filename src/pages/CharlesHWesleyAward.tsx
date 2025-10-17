import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Award,
  Users,
  Calendar,
  Trophy,
  FileText,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const CharlesHWesleyAward = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<{
    src: string | string[];
    title: string;
    fullCaption: string;
  } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const categories = [
    {
      title:
        "Demonstrated Joint Participation in the National Programs and Projects of the Fraternity",
      points: 30,
      icon: Users,
      description:
        "Showcasing our chapter's active involvement in fraternity-wide initiatives",
      images: [
        {
          src: "/CHWPhotos/jun14.png",
          title: "Brother's Keeper – June 14, 2025",
          shortCaption: "Supporting elder brothers through hands-on service",
          fullCaption:
            "Brother's Keeper – June 14, 2025. Both chapters served an elderly Alpha brother by cleaning and maintaining his property. This early-year act of service reinforced the fraternity's value of intergenerational brotherhood.",
        },
        {
          src: "/lovable-uploads/wesley-award/national-programs-4.jpg",
          title: "Brother's Keeper Service Project – August 24, 2025",
          shortCaption:
            "Supporting DXL charter member through national initiative",
          fullCaption:
            "Brother's Keeper Service Project – August 24, 2025. Xi Iota and Delta Xi Lambda collaborated to support DXL charter member Bro. Felton A. Johnson through Alpha's national initiative, Brother's Keeper. Brothers completed yard work, removed debris, and maintained the property, reinforcing Alpha's value of lifelong brotherhood and intergenerational care.",
        },
        {
          src: "/lovable-uploads/wesley-award/national-programs-5.jpg",
          title: "Brother's Keeper Yard Service – November 2, 2024",
          shortCaption: "Ongoing support for elder brothers",
          fullCaption:
            "Brother's Keeper Yard Service – November 2, 2024. Undergraduates and alumni reunited to assist Bro. Felton Johnson, performing additional yard cleanup and home care. This ongoing collaboration demonstrates consistency in supporting elder brothers through hands-on service.",
        },
        {
          src: "/lovable-uploads/wesley-award/national-programs-1.jpg",
          title: "Go To High School Go To College Program",
          shortCaption:
            "Mentoring young students on the importance of education",
          fullCaption:
            "Go To High School Go To College Program - Xi Iota and Delta Xi Lambda partnered to mentor young students, emphasizing the critical importance of education and higher learning as pathways to success.",
        },
        {
          src: [
            "/CHWPhotos/feb21/IMG_7446.png",
            "/CHWPhotos/feb21/IMG_7447.png",
          ],
          title:
            "Campus Visit with the King Solomon Foundation – February 21, 2025",
          shortCaption:
            "Encouraging higher education and leadership development",
          fullCaption:
            "Campus Visit with the King Solomon Foundation - February 21, 2025. In partnership with the King Solomon Foundation, an initiative led by brothers of Delta Xi Lambda, Xi Iota hosted a campus visit for high school students to the University of Central Florida. Undergraduate brothers provided campus tours and shared personal experiences about college life, academic success, and leadership. The event encouraged students to pursue higher education while highlighting Alpha Phi Alpha's mission of developing leaders and advocating for educational equity.",
        },
        {
          src: "/lovable-uploads/wesley-award/national-programs-2.jpg",
          title: "A Voteless People Is A Hopeless People – October 29, 2024",
          shortCaption: "Voter registration and civic engagement initiative",
          fullCaption:
            "A Voteless People Is A Hopeless People - October 29, 2024. Xi Iota hosted a voter education seminar in collaboration with the UCF NAACP Chapter and Equal Ground, supported by DXL alumni. The event informed attendees about ballot measures, voting rights, and civic engagement, continuing Alpha's historical advocacy for political empowerment.",
        },
        {
          src: "/lovable-uploads/wesley-award/national-programs-3.jpg",
          title: "Project Alpha",
          shortCaption: "Health and wellness education for youth",
          fullCaption:
            "Project Alpha - Health and wellness education program targeting at-risk youth, providing critical information about health decisions and life skills.",
        },
      ],
    },
    {
      title: "Collaboration in Planning and Implementation of Alpha Functions",
      points: 20,
      icon: Calendar,
      description:
        "Founders' Day events, Black and Gold ball, MLK days, Fundraising, etc.",
      images: [
        {
          src: "/lovable-uploads/wesley-award/alpha-3.jpg",
          title: "Founders' Day Celebration – December 4, 2024",
          shortCaption: "Honoring the legacy of our seven jewels",
          fullCaption:
            "Founders' Day Celebration - December 4, 2024. Annual commemoration honoring the legacy of our seven jewels and the founding of Alpha Phi Alpha Fraternity, Inc. on December 4, 1906.",
        },
        {
          src: "/lovable-uploads/wesley-award/alpha-functions-2.jpg",
          title: "Black and Gold Ball",
          shortCaption: "Annual formal celebrating brotherhood and sisterhood",
          fullCaption:
            "Black and Gold Ball - Annual formal event celebrating the bonds of brotherhood and sisterhood, bringing together undergraduates and alumni in an elegant evening of fellowship.",
        },
        {
          src: [
            "/CHWPhotos/jan20/IMG_7444.png",
            "/CHWPhotos/jan20/IMG_7445.png",
          ],
          title: "MLK Day of Service – January 20, 2025",
          shortCaption: "Serving the community in honor of Dr. King",
          fullCaption:
            'MLK Day of Service - January 20, 2025. Xi Iota and DXL partnered with Orlando Alphas and the NAACP for the MLK Million Dollar Pack Initiative, assembling meal kits for local families. The collaboration embodied Alpha\'s mission of "Service to All."',
        },
        {
          src: "/lovable-uploads/wesley-award/alpha-functions-4.jpg",
          title: "Chapter Fundraising Event",
          shortCaption: "Supporting our programs and initiatives",
          fullCaption:
            "Chapter Fundraising Event - Collaborative fundraising efforts between Xi Iota and Delta Xi Lambda to support chapter programs, scholarships, and community service initiatives.",
        },
        {
          src: [
            "/CHWPhotos/jan17/IMG_7440.png",
            "/CHWPhotos/jan17/IMG_7441.png",
          ],
          title: "MLK Commemorative Luncheon – January 17, 2025",
          shortCaption: "Honoring Dr. King's leadership and legacy",
          fullCaption:
            "MLK Commemorative Luncheon - January 17, 2025. The Xi Iota Chapter attended DXL's MLK Commemorative Luncheon, honoring Dr. King's leadership and Alpha's historical role in civil rights. The event served as a moment of unity and reflection on purpose and progress.",
        },
        {
          src: [
            "/CHWPhotos/jan18/IMG_7442.png",
            "/CHWPhotos/jan18/IMG_7443.png",
          ],
          title: "Orlando MLK Parade – January 18, 2025",
          shortCaption: "Marching together for equality and justice",
          fullCaption:
            "Orlando MLK Parade - January 18, 2025. Brothers from both chapters proudly marched together in the annual MLK Parade, representing Alpha Phi Alpha and honoring Dr. King's enduring legacy of equality, justice, and service.",
        },
      ],
    },
    {
      title:
        "Joint Recognition of Progress and Services to and from the Chapters",
      points: 15,
      icon: Trophy,
      description:
        "Plaques, certificates, letters of sponsorship of activities or events, scholarships presented or received, etc.",
      images: [
        {
          src: "/CHWPhotos/mar3/image0.jpg",
          title: "First Place – 2025 Metro Orlando NPHC Alumni Step Show",
          shortCaption: "$2,000 prize for excellence in performance",
          fullCaption:
            'First Place - 2025 Metro Orlando NPHC Alumni Step Show. Theme: "25: A Silver Opportunity for Unity in Motion". Award: $2,000 prize and trophy for excellence in performance, teamwork, and representation of Alpha Phi Alpha Fraternity, Inc.',
        },
        {
          src: [
            "/CHWPhotos/dec4/IMG_7454.png",
            "/CHWPhotos/dec4/IMG_6980.jpg",
            "/CHWPhotos/dec4/IMG_7456.png",
            "/CHWPhotos/dec4/IMG_7457.png",
            "/CHWPhotos/dec4/IMG_7458.png",
          ],
          title: "Founder's Day Breakfast Celebration – December 4, 2024",
          shortCaption: "Recognizing chapter achievements and excellence",
          fullCaption:
            "Founder's Day Breakfast Celebration - December 4, 2024. Xi Iota and Delta Xi Lambda came together to celebrate Founder's Day with a joint breakfast honoring both undergraduate and graduate chapter successes throughout the year. Awards were presented including Outstanding Brother of the Year and Most Spirited Brother, recognizing excellence in scholarship, service, and brotherhood. Brothers also received complimentary professional headshots, promoting career readiness and professional development. This event exemplified the strong partnership between both chapters while honoring the legacy of Alpha Phi Alpha's founding on December 4, 1906.",
        },
      ],
    },
    {
      title: "Chapters Participation in Past Conferences and Conventions",
      points: 10,
      icon: FileText,
      description: "List with documentation",
      images: [
        {
          src: "/lovable-uploads/wesley-award/conferences-1.jpg",
          title: "FFAC Regional Conference",
          shortCaption: "Xi Iota delegation representing UCF",
          fullCaption:
            "FFAC Regional Conference - Xi Iota Chapter delegation representing UCF and engaging in regional fraternity programming and leadership development.",
        },
        {
          src: "/CHWPhotos/mar11/image0.jpg",
          title: "94th Southern Regional Convention – March 7-10, 2025",
          shortCaption: "Leadership workshops and networking",
          fullCaption:
            "94th Southern Regional Convention - Atlanta, GA (March 7–10, 2025). Both chapters attended the regional convention, participating in leadership workshops, Alpha trainings, and networking sessions. Xi Iota and DXL also held a joint brotherhood dinner, fostering mentorship and fraternal unity.",
        },
        {
          src: "/lovable-uploads/wesley-award/conferences-3.jpg",
          title: "Leadership Summit",
          shortCaption: "Chapter officers developing skills",
          fullCaption:
            "Leadership Summit - Chapter officers participating in intensive leadership development training, skill-building workshops, and networking opportunities with brothers from across the region.",
        },
      ],
    },
    {
      title: "Community Service Initiatives",
      points: 25,
      icon: Users,
      description:
        "Joint service projects demonstrating Alpha's commitment to serving our community",
      images: [
        {
          src: "/CHWPhotos/jun18.png",
          title:
            "Community Food Distribution with Zeta Phi Beta – June 18, 2025",
          shortCaption:
            "Cross-organizational collaboration for community benefit",
          fullCaption:
            "Community Food Distribution with Zeta Phi Beta - June 18, 2025. Xi Iota and DXL joined the Sigma Epsilon Chapter of Zeta Phi Beta Sorority, Inc. to distribute food and household items to Orlando residents, promoting collaboration across Greek organizations for community benefit.",
        },
        {
          src: "/CHWPhotos/aug22.png",
          title: "Livingston Street Church Food Drive – August 21, 2025",
          shortCaption: "Addressing food insecurity in Orlando",
          fullCaption:
            "Livingston Street Church Food Drive - August 21, 2025. Xi Iota and Delta Xi Lambda partnered with Livingston Street Church of God to distribute food and household supplies to underserved families. This service initiative demonstrated commitment to addressing food insecurity in the Orlando community.",
        },
        {
          src: "/CHWPhotos/sept18.png",
          title: "Livingston Street Church Food Drive – September 18, 2025",
          shortCaption: "Continued partnership addressing hunger",
          fullCaption:
            "Livingston Street Church Food Drive - September 18, 2025. Both chapters returned to partner with Livingston Street Church of God for another food distribution event, providing essential supplies to families in need. This recurring service demonstrates consistency in addressing food insecurity in Orlando.",
        },
        {
          src: "/CHWPhotos/oct8.png",
          title: "Literacy Domain Day at Callahan Head Start – October 8, 2025",
          shortCaption: "Promoting literacy and youth development",
          fullCaption:
            "Literacy Domain Day at Callahan Head Start - October 8, 2025. Both chapters participated in Literacy Domain Day, where brothers read to children and distributed books to promote literacy and educational engagement. The event emphasized mentorship and Alpha's dedication to youth development.",
        },
        {
          src: [
            "/CHWPhotos/nov9/IMG_7428.png",
            "/CHWPhotos/nov9/IMG_7429.png",
            "/CHWPhotos/nov9/IMG_7430.png",
            "/CHWPhotos/nov9/IMG_7431.png",
          ],
          title: "Community Food Distribution with YMOD – November 9, 2024",
          shortCaption: "Partnerships across community organizations",
          fullCaption:
            "Community Food Distribution with YMOD - November 9, 2024. Xi Iota joined forces with DXL and the Young Men of Distinction (YMOD) program to distribute food to Orlando families in need. The event fostered partnerships across community organizations while promoting collective service.",
        },
        {
          src: [
            "/CHWPhotos/dec3/IMG_7432.png",
            "/CHWPhotos/dec3/IMG_7433.png",
            "/CHWPhotos/dec3/IMG_7434.png",
            "/CHWPhotos/dec3/IMG_7435.png",
          ],
          title:
            "Christmas Gift Giveaway at Forsyth Woods Elementary – Dec 3, 2024",
          shortCaption: "Spreading holiday joy to students",
          fullCaption:
            "Christmas Gift Giveaway at Forsyth Woods Elementary - December 3, 2024. Brothers from both chapters celebrated the holiday season by providing gifts to students at Forsyth Woods Elementary School, spreading joy and ensuring that every child experienced a memorable Christmas.",
        },
        {
          src: [
            "/CHWPhotos/dec16/IMG_7436.png",
            "/CHWPhotos/dec16/IMG_7437.png",
            "/CHWPhotos/dec16/IMG_7438.png",
            "/CHWPhotos/dec16/IMG_7439.png",
          ],
          title: "Second Harvest Food Bank Collaboration – December 16, 2024",
          shortCaption: "Large-scale servant leadership and impact",
          fullCaption:
            "Second Harvest Food Bank Collaboration - December 16, 2024. Xi Iota and Delta Xi Lambda worked alongside community volunteers at Second Harvest Food Bank, packaging 1,455 boxes and 21,825 meals for families across Central Florida. This project reflected large-scale servant leadership and measurable community impact.",
        },
        {
          src: [
            "/CHWPhotos/apr4.png",
            "/CHWPhotos/april4.png",
            "/CHWPhotos/apr4/image0.jpg",
          ],
          title:
            "Head Start Literacy Event & Disney's Children's Gala – April 4, 2025",
          shortCaption: "Education and empowerment through literacy",
          fullCaption:
            "Head Start Literacy Event & Disney's Celebrate the Children's Gala - April 4, 2025. Xi Iota brothers joined DXL at Head Start Orlando to read to children and assist with Disney's Children's Gala, advancing Alpha's mission of education and empowerment through literacy.",
        },
      ],
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white font-lora relative overflow-hidden"
    >
      {/* Floating Background Elements */}
      <motion.div className="fixed inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-yellow-600/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-yellow-500/4 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-yellow-400/2 to-transparent rounded-full"></div>
      </motion.div>

      {/* Greek Letter Background Pattern */}
      <div className="fixed inset-0 opacity-5 z-0">
        <div className="absolute top-1/4 left-1/4 text-9xl font-cinzel text-yellow-400 transform rotate-12">
          Α
        </div>
        <div className="absolute top-1/3 right-1/4 text-8xl font-cinzel text-yellow-400 transform -rotate-12">
          Φ
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-9xl font-cinzel text-yellow-400 transform rotate-45">
          Α
        </div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <div className="pt-16">
          {/* Hero Section */}
          <motion.section
            className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent"></div>

            {/* Animated Stars */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
              <motion.div className="mb-8" style={{ y: textY }}>
                <motion.div
                  className="inline-block mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Award className="w-24 h-24 text-yellow-400 mx-auto" />
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6 font-cinzel"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Charles H. Wesley Award
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Recognizing Excellence in Chapter Collaboration and Service
                </motion.p>
              </motion.div>
            </div>
          </motion.section>

          {/* Categories Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4">
              <div className="space-y-20">
                {categories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* Category Header */}
                      <div className="mb-12">
                        <div className="flex items-start gap-6 mb-6">
                          <motion.div
                            className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 rounded-2xl flex items-center justify-center border-2 border-yellow-400/40 shadow-2xl"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <IconComponent className="w-10 h-10 text-yellow-400" />
                          </motion.div>

                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-4 mb-4">
                              <h3 className="text-2xl md:text-3xl font-bold text-white font-cinzel leading-tight">
                                {category.title}
                              </h3>
                              <div className="flex-shrink-0 bg-gradient-to-br from-yellow-400 to-yellow-600 text-black font-bold text-2xl px-6 py-3 rounded-full shadow-xl border-2 border-yellow-300">
                                {category.points} pts
                              </div>
                            </div>

                            <p className="text-lg text-gray-300 leading-relaxed">
                              {category.description}
                            </p>
                          </div>
                        </div>

                        <div className="w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full"></div>
                      </div>

                      {/* Image Gallery */}
                      <div className="bg-gradient-to-br from-yellow-400/5 to-yellow-600/5 border-2 border-yellow-400/20 rounded-3xl p-8 backdrop-blur-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {category.images.map((image, imgIndex) => (
                            <motion.div
                              key={imgIndex}
                              className="group relative cursor-pointer"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.6,
                                delay: imgIndex * 0.1,
                              }}
                              viewport={{ once: true }}
                              onClick={() => {
                                setSelectedImage({
                                  src: image.src,
                                  title: image.title,
                                  fullCaption: image.fullCaption,
                                });
                                setCurrentImageIndex(0);
                              }}
                            >
                              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-yellow-400/20 group-hover:border-yellow-400/50 transition-all duration-300 overflow-hidden relative">
                                {/* Actual Image */}
                                <img
                                  src={
                                    Array.isArray(image.src)
                                      ? image.src[0]
                                      : image.src
                                  }
                                  alt={image.title}
                                  className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-all duration-300 flex items-center justify-center">
                                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold bg-black/50 px-4 py-2 rounded-lg">
                                    Click to view details
                                  </span>
                                </div>

                                {/* Multiple Images Indicator */}
                                {Array.isArray(image.src) &&
                                  image.src.length > 1 && (
                                    <div className="absolute top-3 right-3 bg-black/70 text-yellow-400 text-xs font-bold px-2 py-1 rounded-full border border-yellow-400/50">
                                      {image.src.length} photos
                                    </div>
                                  )}
                              </div>

                              {/* Title */}
                              <div className="mt-3 px-2">
                                <h4 className="text-yellow-400 font-semibold text-base mb-1 font-cinzel">
                                  {image.title}
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                  {image.shortCaption}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        {/* Image Detail Modal */}
        <Dialog
          open={selectedImage !== null}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedImage(null);
              setCurrentImageIndex(0);
            }
          }}
        >
          <DialogContent className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-400/40 max-w-4xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setSelectedImage(null);
                setCurrentImageIndex(0);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400 transition-colors z-50"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <DialogTitle className="text-2xl font-bold text-yellow-400 font-cinzel mb-4 pr-8">
              {selectedImage?.title}
            </DialogTitle>

            {/* Expanded Image with Carousel */}
            {selectedImage?.src && (
              <div className="mb-6 rounded-xl overflow-hidden border-2 border-yellow-400/30 relative">
                <img
                  src={
                    Array.isArray(selectedImage.src)
                      ? selectedImage.src[currentImageIndex]
                      : selectedImage.src
                  }
                  alt={selectedImage.title}
                  className="w-full h-auto object-contain max-h-[50vh]"
                />

                {/* Carousel Navigation */}
                {Array.isArray(selectedImage.src) &&
                  selectedImage.src.length > 1 && (
                    <>
                      {/* Previous Button */}
                      <button
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev === 0 ? selectedImage.src.length - 1 : prev - 1
                          )
                        }
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-yellow-400/90 text-white hover:text-black transition-all p-3 rounded-full border-2 border-yellow-400/50 hover:border-yellow-400"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>

                      {/* Next Button */}
                      <button
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev === selectedImage.src.length - 1 ? 0 : prev + 1
                          )
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-yellow-400/90 text-white hover:text-black transition-all p-3 rounded-full border-2 border-yellow-400/50 hover:border-yellow-400"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      {/* Image Counter */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-yellow-400 px-4 py-2 rounded-full border border-yellow-400/50 font-bold">
                        {currentImageIndex + 1} / {selectedImage.src.length}
                      </div>
                    </>
                  )}
              </div>
            )}

            <DialogDescription className="text-gray-300 text-lg leading-relaxed">
              {selectedImage?.fullCaption}
            </DialogDescription>
          </DialogContent>
        </Dialog>

        <Footer />
      </div>
    </div>
  );
};

export default CharlesHWesleyAward;
