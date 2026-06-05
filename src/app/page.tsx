"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Sparkles, Star, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSizeMediumTitles"
        background="grid"
        cardStyle="gradient-mesh"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Collections",          id: "products"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "FAQ",          id: "faqs"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="P N RAO Fine Suits"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "radial-gradient"}}
      title="Tailored Excellence Since 1947"
      description="Handcrafted fine suits for Bangalore’s discerning gentlemen. Premium fabrics, precise measurements, timeless style—delivered with uncompromising attention to detail."
      buttons={[
        {
          text: "Book Your Consultation",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-thimble-silk_23-2148897938.jpg"
      imageAlt="Man in a perfectly tailored suit"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-young-businessman_23-2147899818.jpg",          alt: "Confident executive"},
        {
          src: "http://img.b2bpic.net/free-photo/young-handsome-business-man-standing-with-phone-office_1303-19753.jpg",          alt: "Young professional"},
        {
          src: "http://img.b2bpic.net/free-photo/side-view-attractive-thoughtful-bridegroom-dressed-black-vogue-suit-bow-tie-sitting-stairs-looking-window-while-holding-glass-with-alcohol-beverage_8353-12429.jpg",          alt: "Distinguished gentleman"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelmodern-man-dressed-elegant-white-suit-fashion-male-posing-street-background-europe-city-sunset-sunglasses_158538-22424.jpg",          alt: "Stylish man"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-businessman-model-dressed-elegant-blue-suit-posing-street-background-metrosexual_158538-10528.jpg",          alt: "Happy client"},
      ]}
      avatarText="Trusted by Bangalore's finest."
      marqueeItems={[
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/abstract-gray-cotton-linen-textures_74190-6986.jpg",          alt: "Grey wool fabric"},
        {
          type: "text",          text: "Bespoke Perfection"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/stylish-man-adjusts-sleeve-his-jacket_8353-9802.jpg",          alt: "Suit lapel detail"},
        {
          type: "text",          text: "Luxury Fabrics"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/pin-christmas-ornamental-flowers-orange-slice-jacket-man_114579-1498.jpg",          alt: "Elegant cufflink"},
        {
          type: "text",          text: "Master Craftsmanship"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/gray-lined-paper-texture_1194-5762.jpg",          alt: "Patterned suit fabric"},
        {
          type: "text",          text: "Timeless Style"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/flat-lay-thread-reels-with-copy-space_23-2148528008.jpg",          alt: "Tailoring tools"},
      ]}
      marqueeSpeed={30}
      showMarqueeCard={true}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      imagePosition="right"
      title="Our Legacy of Fine Tailoring"
      description="For decades, P N RAO has been synonymous with exceptional bespoke tailoring. Our heritage is woven into every stitch, ensuring garments of unparalleled quality and distinction for Bangalore's most discerning professionals."
      bulletPoints={[
        {
          title: "Timeless Craftsmanship",          description: "Our master tailors blend traditional techniques with modern precision, creating garments that stand the test of time."},
        {
          title: "Premium Fabric Selection",          description: "Explore an exclusive collection of the world's finest wools, silks, and linens, personally curated for superior comfort and style."},
        {
          title: "Personalized Service",          description: "Experience one-on-one consultations, meticulous fittings, and expert advice for a truly bespoke journey."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-senior-male-fashion-designer-measuring-fabric-with-wooden-ruler_23-2148180314.jpg"
      imageAlt="Tailor hand stitching a suit"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Off-the-rack limitations",          "Subpar fabric quality",          "Generic designs"],
      }}
      positiveCard={{
        items: [
          "Precise bespoke fit",          "Exclusive premium fabrics",          "Timeless, personalized style"],
      }}
      title="The P N RAO Difference"
      description="Experience a world where tradition meets contemporary style. We offer unmatched service and dedication to your perfect fit and sartorial elegance."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "The Classic Navy",          price: "From ₹45,000",          imageSrc: "https://images.unsplash.com/photo-1593032463870-20519159d332?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          imageAlt: "Classic navy blue tailored suit"},
        {
          id: "2",          name: "Charcoal Grey Executive",          price: "From ₹48,000",          imageSrc: "https://images.unsplash.com/photo-1627932644265-27a3c3f912e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          imageAlt: "Charcoal grey executive suit on a mannequin"},
        {
          id: "3",          name: "Heritage Houndstooth",          price: "From ₹55,000",          imageSrc: "https://images.unsplash.com/photo-1616766099516-724d9d4f0d3b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          imageAlt: "Heritage houndstooth pattern suit fabric detail"},
        {
          id: "4",          name: "The Bespoke Tuxedo",          price: "From ₹60,000",          imageSrc: "https://images.unsplash.com/photo-1605634547466-fd57930495f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          imageAlt: "Elegantly tailored black bespoke tuxedo"},
        {
          id: "5",          name: "Summer Linen Ensemble",          price: "From ₹40,000",          imageSrc: "https://images.unsplash.com/photo-1621242337775-4c07b3e215f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          imageAlt: "Light linen summer suit on display"},
        {
          id: "6",          name: "Modern Check Pattern",          price: "From ₹52,000",          imageSrc: "https://images.unsplash.com/photo-1555544710-530263f2c525?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          imageAlt: "Modern checked pattern suit with subtle details"},
      ]}
      title="Discover Our Collections"
      description="From classic wools to luxurious silks, explore our exquisite range of fabrics and bespoke suit designs tailored to your unique style. Each garment is a statement of sophistication."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",          icon: Sparkles,
          title: "Years of Heritage",          value: "80+"},
        {
          id: "2",          icon: Users,
          title: "Satisfied Clients",          value: "1000s"},
        {
          id: "3",          icon: Star,
          title: "Custom Designs",          value: "Unique"},
      ]}
      title="Our Enduring Legacy"
      description="Decades of dedication, countless satisfied clients, and a timeless commitment to sartorial perfection define the P N RAO story in Bangalore's fine tailoring landscape."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Anil K.",          role: "CEO, Tech Solutions",          company: "Bangalore",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-intellegent-man-suit-white-shirt-dark-photo-studio_613910-14922.jpg",          imageAlt: "Anil K."},
        {
          id: "2",          name: "Priya S.",          role: "Marketing Director, Global Corp",          company: "Bangalore",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/successful-time-young-handsome-man-white-shirt-black-jacket-expressing-positivity-talking-phone-leadership-great-career-manager-cheerful-mood_197531-2121.jpg",          imageAlt: "Priya S."},
        {
          id: "3",          name: "Rajesh M.",          role: "Senior Consultant, Financial Services",          company: "Bangalore",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-thoughtful-man-with-long-hair-retro-style-dark-photo-studio_613910-3831.jpg",          imageAlt: "Rajesh M."},
        {
          id: "4",          name: "Smita R.",          role: "Legal Partner, Law Associates",          company: "Bangalore",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-businessman-model-dressed-elegant-blue-suit-posing-street-background-metrosexual_158538-10447.jpg",          imageAlt: "Smita R."},
        {
          id: "5",          name: "Vikram D.",          role: "Architect, Urban Designs",          company: "Bangalore",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-doctor-shaking-hands-with-her-female-patient-while-meeting-clinic-focus-is-happy-woman_637285-1785.jpg",          imageAlt: "Vikram D."},
        {
          id: "6",          name: "Neha P.",          role: "Entrepreneur, Innovate Hub",          company: "Bangalore",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-tuxedo-studio_1303-5854.jpg",          imageAlt: "Neha P."},
      ]}
      kpiItems={[
        {
          value: "5/5",          label: "Average Rating"},
        {
          value: "100%",          label: "Client Satisfaction"},
        {
          value: "Perfect Fit",          label: "Guaranteed"},
      ]}
      title="Voices of Our Esteemed Clients"
      description="Hear firsthand accounts from Bangalore's professionals who trust P N RAO for their bespoke tailoring needs and experience the confidence of a perfect fit and exceptional service."
    />
  </div>

  <div id="faqs" data-section="faqs">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "What is the bespoke tailoring process?",          content: "Our bespoke process begins with a detailed consultation, followed by precise measurements, fabric selection, multiple fittings, and finally, the handcrafted creation of your unique garment."},
        {
          id: "2",          title: "How long does a bespoke suit take to complete?",          content: "Typically, the process takes 4-6 weeks from the initial consultation to final delivery, depending on the complexity of the design and number of fittings required."},
        {
          id: "3",          title: "What types of fabrics do you offer?",          content: "We offer an extensive selection of premium fabrics including fine wools, luxurious silks, comfortable linens, cashmere blends, and more, sourced from renowned mills worldwide."},
        {
          id: "4",          title: "How do I book a consultation?",          content: "You can easily book a consultation through our website's contact form, by calling our Indiranagar studio, or by visiting us during business hours. We recommend booking an appointment for personalized attention."},
      ]}
      title="Your Questions, Answered"
      description="Find detailed answers to common inquiries about our bespoke tailoring process, fabric selection, fitting sessions, and booking your personalized consultation."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Connect With Us"
      title="Book Your Bespoke Consultation"
      description="Ready for the P N RAO experience? Schedule your personalized consultation at our Indiranagar studio. Let our master tailors craft your perfect suit, ensuring a fit that truly defines you."
      imageSrc="http://img.b2bpic.net/free-photo/clothes-store-employee-working_23-2148915581.jpg"
      imageAlt="Interior of a luxury tailor shop"
      mediaAnimation="slide-up"
      mediaPosition="right"
      inputPlaceholder="Enter your email"
      buttonText="Schedule Now"
      termsText="By scheduling, you agree to receive appointment confirmations and offers from P N RAO."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoSrc="http://img.b2bpic.net/free-vector/gentleman-shop-logo-vector-templates-design_460848-6922.jpg"
      logoAlt="P N RAO Fine Suits Logo"
      columns={[
        {
          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Our Heritage",              href: "#about"},
            {
              label: "Testimonials",              href: "#testimonials"},
          ],
        },
        {
          items: [
            {
              label: "Bespoke Tailoring",              href: "#products"},
            {
              label: "Ready-to-Wear",              href: "#products"},
            {
              label: "Fabric Selection",              href: "#products"},
          ],
        },
        {
          items: [
            {
              label: "FAQ",              href: "#faqs"},
            {
              label: "Contact Us",              href: "#contact"},
            {
              label: "Privacy Policy",              href: "#"},
          ],
        },
      ]}
      logoText="P N RAO Fine Suits"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
