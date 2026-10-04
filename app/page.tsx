export default function Home() {
  const whatsappUrl =
    "https://wa.me/918921901702?text=Hi%20LEVION%2C%20I%20want%20to%20start%20a%20project.";

  const services = [
    {
      number: "01",
      title: "Websites",
      description:
        "High-performance business websites designed to make your brand stand out online.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=90",
      tag: "Websites",
    },
    {
      number: "02",
      title: "Mobile Apps",
      description:
        "Modern mobile experiences built for iOS, Android and cross-platform products.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=90",
      tag: "Mobile",
    },
    {
      number: "03",
      title: "Web Applications",
      description:
        "Secure, scalable web applications built around your customers and internal workflows.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=90",
      tag: "Apps",
    },
    {
      number: "04",
      title: "ERP Systems",
      description:
        "Connected ERP systems that simplify operations, reporting and business management.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90",
      tag: "ERP",
    },
    {
      number: "05",
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that turn complex products into simple experiences.",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=90",
      tag: "Design",
    },
    {
      number: "06",
      title: "Ecommerce Solutions",
      description:
        "Conversion-focused online stores with smooth product discovery, checkout and management.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=90",
      tag: "Commerce",
    },
    {
      number: "07",
      title: "Custom Software Development",
      description:
        "Powerful custom software created around your exact business requirements.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=90",
      tag: "Custom",
    },
  ];

  const projects = [
    {
      title: "Digital Business Platform",
      category: "Web Application",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=90",
    },
    {
      title: "Modern Mobile Experience",
      category: "Mobile Application",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=90",
    },
    {
      title: "Business Intelligence",
      category: "Custom Software",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=90",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090C] text-white">

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}
      <style>{`
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(45px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes glowMove {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(60px, -30px) scale(1.12);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .nav-animation {
          animation: fadeDown 0.8s ease-out both;
        }

        .hero-label {
          animation: fadeUp 0.8s ease-out 0.15s both;
        }

        .hero-title {
          animation: fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;
        }

        .hero-description {
          animation: fadeUp 1s ease-out 0.5s both;
        }

        .hero-buttons {
          animation: fadeUp 1s ease-out 0.65s both;
        }

        .gradient-text {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
        }

        .glow {
          animation: glowMove 9s ease-in-out infinite;
        }

        .float {
          animation: float 6s ease-in-out infinite;
        }

        .service-card:hover .service-image {
          transform: scale(1.06);
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }
      `}</style>


      {/* =====================================================
    LEVION NAVBAR
===================================================== */}
      <nav
        className="
    fixed
    left-0
    right-0
    top-0
    z-50
    border-b
    border-white/[0.07]
    bg-[#08090C]/80
    backdrop-blur-xl
  "
      >
        <div
          className="
      mx-auto
      flex
      h-16
      max-w-7xl
      items-center
      justify-between
      px-6
      md:px-10
      lg:px-12
    "
        >

          {/* LOGO */}
          <a
            href="#top"
            className="
        group
        flex
        items-center
        transition
        duration-300
        hover:scale-[1.03]
      "
          >
            <img
              src="/levion-logo.svg"
              alt="LEVION"
              className="
          h-8
          w-auto
          object-contain
        "
            />
          </a>


          {/* DESKTOP NAVIGATION */}
          <div
            className="
        hidden
        items-center
        gap-9
        md:flex
      "
          >

            <a
              href="#services"
              className="
          group
          relative
          py-2
          text-sm
          text-[#9DA1A9]
          transition
          duration-300
          hover:text-white
        "
            >
              Services

              <span
                className="
            absolute
            bottom-0
            left-0
            h-px
            w-0
            bg-[#E8606F]
            transition-all
            duration-300
            group-hover:w-full
          "
              />
            </a>


            <a
              href="#work"
              className="
          group
          relative
          py-2
          text-sm
          text-[#9DA1A9]
          transition
          duration-300
          hover:text-white
        "
            >
              Work

              <span
                className="
            absolute
            bottom-0
            left-0
            h-px
            w-0
            bg-[#E8606F]
            transition-all
            duration-300
            group-hover:w-full
          "
              />
            </a>


            <a
              href="#about"
              className="
          group
          relative
          py-2
          text-sm
          text-[#9DA1A9]
          transition
          duration-300
          hover:text-white
        "
            >
              About

              <span
                className="
            absolute
            bottom-0
            left-0
            h-px
            w-0
            bg-[#E8606F]
            transition-all
            duration-300
            group-hover:w-full
          "
              />
            </a>


            <a
              href="#contact"
              className="
          group
          relative
          py-2
          text-sm
          text-[#9DA1A9]
          transition
          duration-300
          hover:text-white
        "
            >
              Contact

              <span
                className="
            absolute
            bottom-0
            left-0
            h-px
            w-0
            bg-[#E8606F]
            transition-all
            duration-300
            group-hover:w-full
          "
              />
            </a>

          </div>


          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* START PROJECT */}
            <a
              href="#start-project"
              className="
          group
          hidden
          items-center
          gap-3
          rounded-full
          bg-white
          px-4
          py-2
          text-sm
          font-medium
          text-black
          transition
          duration-300
          hover:scale-105
          hover:bg-[#F2F2F2]
          sm:flex
        "
            >
              Start a project

              <span
                className="
            transition
            duration-300
            group-hover:translate-x-1
          "
              >
                →
              </span>
            </a>


            {/* MOBILE MENU BUTTON */}
            <button
              className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          text-white
          md:hidden
        "
              aria-label="Open menu"
            >
              <div className="space-y-1.5">

                <span className="block h-px w-4 bg-white" />

                <span className="block h-px w-4 bg-white" />

              </div>
            </button>

          </div>

        </div>
      </nav>


      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        className="
          relative
          flex
          min-h-[calc(100vh-64px)]
          items-center
          justify-center
          overflow-hidden
          px-5
          py-14
          md:py-16
        "
      >

        {/* GRID */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.45) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.45) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
          }}
        />


        {/* LEFT GLOW */}
        <div
          className="
            glow
            pointer-events-none
            absolute
            left-[5%]
            top-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#D4256A]/20
            blur-[160px]
          "
        />


        {/* RIGHT GLOW */}
        <div
          className="
            glow
            pointer-events-none
            absolute
            right-[5%]
            top-[25%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#F9825E]/15
            blur-[160px]
          "
        />


        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl text-center">

          <div className="hero-label">

            <span
              className="
                inline-flex
                flex-wrap
                justify-center
                items-center
                gap-2
                text-[10px]
                uppercase
                tracking-[0.24em]
                text-[#E8606F]
                sm:gap-3
                sm:text-xs
                sm:tracking-[0.35em]
              "
            >
              <span className="h-px w-6 bg-[#E8606F] sm:w-8" />

              Software Development Company

              <span className="h-px w-6 bg-[#E8606F] sm:w-8" />
            </span>

          </div>


          <h1
            className="
              hero-title
              mt-5
              text-[clamp(3rem,8vw,6.25rem)]
              font-semibold
              leading-[0.92]
              tracking-[-0.04em]
            "
          >

            We build

            <br />

            <span
              className="
                gradient-text
                bg-gradient-to-r
                from-[#D4256A]
                via-[#E8606F]
                to-[#F9825E]
                bg-clip-text
                text-transparent
              "
            >
              digital experiences
            </span>

            <br />

            that matter.

          </h1>


          <p
            className="
              hero-description
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-6
              text-[#9DA1A9]
              md:text-lg
              md:leading-8
            "
          >
            LEVION creates modern software, websites and digital
            products that help ambitious businesses grow.
          </p>


          <div
            className="
              hero-buttons
              mt-8
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
            "
          >

            <a
              href="#start-project"
              className="
                group
                rounded-full
                bg-gradient-to-r
                from-[#D4256A]
                via-[#E8606F]
                to-[#F9825E]
                px-7
                py-3.5
                text-sm
                font-medium
                text-white
                shadow-[0_0_45px_rgba(232,96,111,0.18)]
                transition
                duration-500
                hover:scale-105
                hover:shadow-[0_0_60px_rgba(232,96,111,0.35)]
              "
            >
              Start a project
              <span className="ml-3 transition group-hover:translate-x-1">
                →
              </span>
            </a>


            <a
              href="#work"
              className="
                group
                rounded-full
                border
                border-white/15
                px-7
                py-3.5
                text-sm
                transition
                duration-500
                hover:border-[#E8606F]/50
                hover:bg-white/[0.04]
              "
            >
              Explore our work
              <span className="ml-3 transition group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section
        id="services"
        className="
          relative
          border-t
          border-white/[0.07]
          px-6
          py-28
          md:px-10
          md:py-36
          lg:px-12
        "
      >

        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-[20%]
            top-[20%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#D4256A]/[0.06]
            blur-[170px]
          "
        />


        <div className="relative z-10 mx-auto max-w-7xl">


          {/* HEADER */}
          <div className="max-w-4xl">

            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-[#E8606F]
              "
            >
              What we do
            </p>


            <h2
              className="
                mt-5
                text-4xl
                font-semibold
                leading-[0.95]
                tracking-[-0.05em]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              We turn ideas into
              <br />

              <span
                className="
                  gradient-text
                  bg-gradient-to-r
                  from-[#D4256A]
                  via-[#E8606F]
                  to-[#F9825E]
                  bg-clip-text
                  text-transparent
                "
              >
                digital products.
              </span>
            </h2>


            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-[#858992]
                md:text-lg
              "
            >
              From strategy and design to development and deployment,
              we create digital experiences that help businesses move
              forward.
            </p>

          </div>


          {/* SERVICES */}
          <div className="mt-20 grid gap-5 md:grid-cols-2">

            {services.map((service) => (

              <article
                key={service.number}
                className="
                  service-card
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.08]
                  bg-[#0D0F13]
                  transition
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#E8606F]/30
                "
              >

                {/* IMAGE */}
                <div className="relative h-[260px] overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      service-image
                      h-full
                      w-full
                      object-cover
                      opacity-70
                      transition
                      duration-700
                    "
                  />


                  {/* Image overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#0D0F13]
                      via-[#0D0F13]/30
                      to-transparent
                    "
                  />


                  {/* Brand glow */}
                  <div
                    className="
                      absolute
                      bottom-[-80px]
                      left-1/2
                      h-[180px]
                      w-[180px]
                      -translate-x-1/2
                      rounded-full
                      bg-[#E8606F]/20
                      blur-[70px]
                    "
                  />


                  {/* Number */}
                  <div
                    className="
                      absolute
                      left-6
                      top-6
                      text-xs
                      font-medium
                      tracking-[0.25em]
                      text-white/70
                    "
                  >
                    {service.number}
                  </div>


                  {/* Tag */}
                  <div
                    className="
                      absolute
                      right-6
                      top-6
                      rounded-full
                      border
                      border-white/15
                      bg-black/30
                      px-4
                      py-2
                      text-xs
                      text-white/70
                      backdrop-blur-md
                    "
                  >
                    {service.tag}
                  </div>

                </div>


                {/* CONTENT */}
                <div className="p-7 md:p-9">

                  <div className="flex items-start justify-between gap-6">

                    <div>

                      <h3
                        className="
                          text-2xl
                          font-medium
                          tracking-tight
                          md:text-3xl
                        "
                      >
                        {service.title}
                      </h3>


                      <p
                        className="
                          mt-4
                          max-w-lg
                          text-sm
                          leading-6
                          text-[#858992]
                        "
                      >
                        {service.description}
                      </p>

                    </div>


                    {/* Arrow */}
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        text-white/50
                        transition
                        duration-500
                        group-hover:border-[#E8606F]/40
                        group-hover:bg-[#E8606F]/10
                        group-hover:text-[#E8606F]
                      "
                    >
                      →
                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WORK
      ===================================================== */}
      <section
        id="work"
        className="
          relative
          border-t
          border-white/[0.07]
          px-6
          py-28
          md:px-10
          md:py-36
          lg:px-12
        "
      >

        <div className="mx-auto max-w-7xl">


          {/* HEADER */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-[#E8606F]
                "
              >
                Selected work
              </p>


              <h2
                className="
                  mt-5
                  text-4xl
                  font-semibold
                  tracking-[-0.05em]
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Work that
                <br />

                <span className="text-[#858992]">
                  speaks for itself.
                </span>
              </h2>

            </div>


            <p className="max-w-md text-sm leading-6 text-[#858992] md:text-right">
              A selection of digital products, platforms and
              experiences designed and developed by LEVION.
            </p>

          </div>


          {/* PROJECTS */}
          <div className="mt-20 space-y-8">

            {projects.map((project, index) => (

              <article
                key={project.title}
                className="
                  project-card
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.08]
                  bg-[#0D0F13]
                "
              >

                <div className="grid md:grid-cols-2">


                  {/* IMAGE */}
                  <div
                    className={`
                      relative
                      h-[320px]
                      overflow-hidden
                      md:h-[430px]
                      ${index % 2 === 1 ? "md:order-2" : ""}
                    `}
                  >

                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        project-image
                        h-full
                        w-full
                        object-cover
                        opacity-75
                        transition
                        duration-700
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-tr
                        from-[#08090C]/80
                        via-transparent
                        to-[#D4256A]/10
                      "
                    />

                  </div>


                  {/* CONTENT */}
                  <div
                    className="
                      flex
                      flex-col
                      justify-between
                      p-8
                      md:p-12
                      lg:p-16
                    "
                  >

                    <div>

                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[0.3em]
                          text-[#E8606F]
                        "
                      >
                        {project.category}
                      </p>


                      <h3
                        className="
                          mt-5
                          max-w-lg
                          text-3xl
                          font-medium
                          leading-tight
                          tracking-tight
                          md:text-4xl
                        "
                      >
                        {project.title}
                      </h3>


                      <p
                        className="
                          mt-5
                          max-w-md
                          text-sm
                          leading-6
                          text-[#858992]
                        "
                      >
                        A modern digital experience created to
                        simplify workflows, improve engagement and
                        help businesses grow.
                      </p>

                    </div>


                    <div className="mt-12">

                      <span
                        className="
                          inline-flex
                          items-center
                          gap-3
                          text-sm
                          font-medium
                          transition
                          group-hover:text-[#E8606F]
                        "
                      >
                        View project

                        <span className="transition group-hover:translate-x-2">
                          →
                        </span>

                      </span>

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>


          {/* WORK CTA */}
          <div className="mt-12 text-center">

            <a
              href="#start-project"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                px-7
                py-4
                text-sm
                transition
                hover:border-[#E8606F]/50
                hover:bg-white/[0.04]
              "
            >
              Start your project
              <span>→</span>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}
      <section
        id="about"
        className="
          relative
          overflow-hidden
          border-t
          border-white/[0.07]
          px-6
          py-28
          md:px-10
          md:py-36
          lg:px-12
        "
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 md:grid-cols-2 md:items-center">


            <div>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-[#E8606F]
                "
              >
                About LEVION
              </p>


              <h2
                className="
                  mt-5
                  text-4xl
                  font-semibold
                  leading-[0.95]
                  tracking-[-0.05em]
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Technology should
                <br />

                <span className="text-[#858992]">
                  move your business.
                </span>
              </h2>

            </div>


            <div>

              <p
                className="
                  text-lg
                  leading-8
                  text-[#9DA1A9]
                "
              >
                LEVION is a software development company focused
                on building thoughtful digital products for modern
                businesses.
              </p>


              <p
                className="
                  mt-6
                  text-base
                  leading-7
                  text-[#70747C]
                "
              >
                We combine strategy, design and technology to turn
                ideas into reliable products that people enjoy using.
              </p>


              <a
                href="#contact"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  text-sm
                  font-medium
                  transition
                  hover:text-[#E8606F]
                "
              >
                Get to know us
                <span>→</span>
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
    CONTACT SECTION
===================================================== */}
      <section
        id="start-project"
        className="
    relative
    overflow-hidden
    border-t
    border-white/[0.07]
    px-6
    py-28
    md:px-10
    md:py-36
    lg:px-12
  "
      >

        {/* BACKGROUND GLOW */}
        <div
          className="
      pointer-events-none
      absolute
      left-[-150px]
      top-[20%]
      h-[450px]
      w-[450px]
      rounded-full
      bg-[#D4256A]/10
      blur-[150px]
    "
        />

        <div
          className="
      pointer-events-none
      absolute
      right-[-150px]
      bottom-[10%]
      h-[450px]
      w-[450px]
      rounded-full
      bg-[#F9825E]/10
      blur-[150px]
    "
        />


        {/* CONTAINER */}
        <div className="relative z-10 mx-auto max-w-7xl">


          {/* TOP LABEL */}
          <div className="mb-16">

            <p
              className="
          text-xs
          uppercase
          tracking-[0.35em]
          text-[#E8606F]
        "
            >
              Start a project
            </p>

          </div>


          {/* MAIN GRID */}
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">


            {/* =================================================
          LEFT CONTENT
      ================================================= */}
            <div>

              <h2
                className="
            text-5xl
            font-semibold
            leading-[0.92]
            tracking-[-0.055em]
            sm:text-6xl
            md:text-7xl
          "
              >
                Let&apos;s build
                <br />

                <span
                  className="
              bg-gradient-to-r
              from-[#D4256A]
              via-[#E8606F]
              to-[#F9825E]
              bg-clip-text
              text-transparent
            "
                >
                  something
                </span>

                <br />

                great.
              </h2>


              <p
                className="
            mt-8
            max-w-lg
            text-base
            leading-7
            text-[#858992]
            md:text-lg
            md:leading-8
          "
              >
                Have an idea, a product or a business challenge?
                Tell us about it. We&apos;d love to hear what you&apos;re
                building and explore how LEVION can help.
              </p>


              {/* AVAILABILITY */}
              <div className="mt-12">

                  <p
                    className="
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-[#555960]
              "
                  >
                    Availability
                  </p>

                  <div className="mt-2 flex items-center gap-2">

                    <span
                      className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#E8606F]
                  shadow-[0_0_12px_rgba(232,96,111,0.8)]
                "
                    />

                    <span className="text-sm text-[#C1C4CA]">
                      Currently accepting projects
                    </span>

                  </div>

                </div>

            </div>


            {/* =================================================
          CONTACT FORM
      ================================================= */}
            <div
              className="
          rounded-3xl
          border
          border-white/[0.08]
          bg-[#0D0F13]/80
          p-7
          backdrop-blur-xl
          md:p-10
        "
            >

              <form className="space-y-7">


                {/* NAME */}
                <div>

                  <label
                    htmlFor="name"
                    className="
                mb-3
                block
                text-xs
                uppercase
                tracking-[0.2em]
                text-[#70747C]
              "
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="
                w-full
                border-b
                border-white/[0.12]
                bg-transparent
                px-0
                py-3
                text-base
                text-white
                outline-none
                placeholder:text-[#4F535A]
                transition
                focus:border-[#E8606F]
              "
                  />

                </div>


                {/* EMAIL */}
                <div>

                  <label
                    htmlFor="email"
                    className="
                mb-3
                block
                text-xs
                uppercase
                tracking-[0.2em]
                text-[#70747C]
              "
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    className="
                w-full
                border-b
                border-white/[0.12]
                bg-transparent
                px-0
                py-3
                text-base
                text-white
                outline-none
                placeholder:text-[#4F535A]
                transition
                focus:border-[#E8606F]
              "
                  />

                </div>


                {/* COMPANY */}
                <div>

                  <label
                    htmlFor="company"
                    className="
                mb-3
                block
                text-xs
                uppercase
                tracking-[0.2em]
                text-[#70747C]
              "
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    type="text"
                    placeholder="Your company"
                    className="
                w-full
                border-b
                border-white/[0.12]
                bg-transparent
                px-0
                py-3
                text-base
                text-white
                outline-none
                placeholder:text-[#4F535A]
                transition
                focus:border-[#E8606F]
              "
                  />

                </div>


                {/* PROJECT DETAILS */}
                <div>

                  <label
                    htmlFor="message"
                    className="
                mb-3
                block
                text-xs
                uppercase
                tracking-[0.2em]
                text-[#70747C]
              "
                  >
                    Tell us about your project
                  </label>

                  <textarea
                    id="message"
                    rows={4}
                    placeholder="What are you looking to build?"
                    className="
                w-full
                resize-none
                border-b
                border-white/[0.12]
                bg-transparent
                px-0
                py-3
                text-base
                text-white
                outline-none
                placeholder:text-[#4F535A]
                transition
                focus:border-[#E8606F]
              "
                  />

                </div>


                {/* BUTTON */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
              group
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-[#D4256A]
              via-[#E8606F]
              to-[#F9825E]
              px-7
              py-4
              text-sm
              font-medium
              text-white
              shadow-[0_0_40px_rgba(232,96,111,0.15)]
              transition
              duration-500
              hover:scale-[1.02]
              hover:shadow-[0_0_60px_rgba(232,96,111,0.3)]
            "
                >

                  Chat on WhatsApp

                  <span
                    className="
                transition
                duration-300
                group-hover:translate-x-1
              "
                  >
                    →
                  </span>

                </a>


                <p className="text-center text-[11px] text-[#4F535A]">
                  We&apos;ll get back to you as soon as possible.
                </p>

              </form>

            </div>

          </div>


          {/* BOTTOM LINE */}
          <div
            id="contact"
            className="
        mt-24
        border-t
        border-white/[0.07]
        pt-7
        scroll-mt-24
      "
          >

            <div
              className="
          flex
          flex-col
          justify-between
          gap-8
          text-xs
          text-[#555960]
          lg:flex-row
          lg:items-start
        "
            >

              <span>
                LEVION — Software Development Company
              </span>

              <div className="lg:text-right">
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-[#555960]
                  "
                >
                  Contact
                </p>

                <div className="mt-5 flex flex-wrap gap-4 lg:justify-end">
                  <a
                    href="mailto:hello.levion@gmail.com"
                    aria-label="Email LEVION"
                    title="Email"
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-[#E8606F]
                      transition
                      hover:-translate-y-1
                      hover:border-[#E8606F]/50
                      hover:bg-[#E8606F]/10
                    "
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M4 6.5h16v11H4v-11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      <path d="m5 7 7 6 7-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Kerala"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open LEVION location on Google Maps"
                    title="Location"
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-[#E8606F]
                      transition
                      hover:-translate-y-1
                      hover:border-[#E8606F]/50
                      hover:bg-[#E8606F]/10
                    "
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 21s7-5.7 7-12a7 7 0 1 0-14 0c0 6.3 7 12 7 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with LEVION on WhatsApp"
                    title="WhatsApp"
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-[#E8606F]
                      transition
                      hover:-translate-y-1
                      hover:border-[#E8606F]/50
                      hover:bg-[#E8606F]/10
                    "
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M6.6 18.2 4 20l.7-3.1A8 8 0 1 1 8 19.3l-1.4-1.1Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.4 8.7c.2-.5.4-.6.8-.6h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.5.6c.5 1 1.3 1.8 2.4 2.4l.6-.5c.2-.2.5-.2.7-.1l1.6.7c.3.1.4.3.4.6v.5c0 .4-.2.6-.6.8-.7.3-1.6.3-2.6-.1-2.4-.9-4.6-3.1-5.4-5.4-.4-1-.4-1.9-.1-2.6Z" fill="currentColor" />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/levion.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open LEVION on Instagram"
                    title="Instagram"
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-[#E8606F]
                      transition
                      hover:-translate-y-1
                      hover:border-[#E8606F]/50
                      hover:bg-[#E8606F]/10
                    "
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="5" y="5" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M15 11.4a3 3 0 1 1-5.8 1.4 3 3 0 0 1 5.8-1.4Z" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M16.5 8.2h.1" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer
        className="
          border-t
          border-white/[0.07]
          px-6
          py-8
          md:px-10
          lg:px-12
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-5
            md:flex-row
          "
        >

          <img
            src="/levion-logo.svg"
            alt="LEVION"
            className="h-8 w-auto object-contain"
          />


          <p className="text-xs text-[#5F636B]">
            © 2026 LEVION. All rights reserved.
          </p>


          <a
            href="#"
            className="text-xs text-[#5F636B] transition hover:text-white"
          >
            Back to top ↑
          </a>

        </div>

      </footer>

    </main>
  );
}
