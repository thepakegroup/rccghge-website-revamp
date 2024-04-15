import React from "react";
import Title from "./components/Title";
import ImageCarousel from "@/lib/components/ImageCarousel";
import ImageFill from "@/lib/components/ImageFill";
import Image from "next/image";
import TitleBorderTop from "@/components/TitleBorderTop";
import YoungAdults from "./components/YoungAdults";

export default function page({ params }: { params: { slug: string } }) {
  switch (params.slug) {
    // MINISTRIES
    case "young-adult-ministry":
      return (
        <>
         <YoungAdults />
        </>
      );
    case "elders-ministry":
      return (
        <TitleBodyContainer title="HGE Elders’ Ministry">
          <p>
            We Focus on reaching out to men and women who are 55 years old and
            above, fostering closer relationships with one another and,imparting
            younger members with elderly wisdom and knowledge. We hone in on our
            purpose using wisdom, skills, and experience to truly enjoy the
            richness and fullness of our lives in Christ.
          </p>
          <p>
            Our goal is to affirm and strengthen those in the second half of
            life, by providing opportunities for spiritual growth. We want to
            engage every elder in further pursuit of uncovering and embracing
            their identity in Christ, as well as their passion. We desire to
            help them blend experience and maturity with opportunities to grow
            and serve in accordance with the book of Hebrews 6:1-2 “In maturity
            there is unity, reconciliation, healing, and of course, the
            manifestation of the love of Christ.”
          </p>
          <p>
            Our primary focus is to help each elder at HGE have an increasingly
            stronger relationship with Jesus Christ, and equip them to share
            their faith. We strive to address the spiritual, physical,
            intellectual, emotional, and social needs of all elders who are
            fifty five and older.
          </p>
          <p>
            The book of Is.46:4, says “And even to your old age I am he; and
            even to hoar hairs will I carry you: I have made, and I will bear;
            even I will carry, and will deliver you.” We try to stay young by
            getting involved in various fun and exciting Church activities.
          </p>
          <p>
            If you make a plan to join us today, we guarantee you will wonder
            why you haven’t done so much sooner!
          </p>
        </TitleBodyContainer>
      );
    case "pre-marital-marriage-counselling":
      return (
        <TitleBodyContainer title="Pre-Marital & Marriage Counselling">
          <p>
            This Ministry provides pre-marital counseling for intending couples,
            and organizes marriage enrichment programs for all couples such as
            family week with emphasis on married couples as well as intending
            couples. We teach members how to solve their own problems. We allow
            members to talk about their challenges, and help them to resolve
            their issues.
          </p>
          <p>
            We teach each person how to think on his/her own. We lead them in
            the way of finding God’s solutions to their problems, rather than
            merely telling them what God’s solutions are. We appreciate the fact
            that every individual needs God’s perspective. And, they are taught
            how to develop healthy life management skills that will enable them
            to deal more effectively with their challenges, and possibly prevent
            them from re-occurring again in the future.
          </p>
        </TitleBodyContainer>
      );

    case "women-s-ministry":
      return (
        <TitleBodyContainer title="women's ministry">
          <p>
            The Women’s Ministry at HGE nurtures our women and those in the
            community, as they come to faith in Christ; leading them towards
            maturity in serving God through regular Bible interactions, and
            sharing the Word with one another. We have no doubt that, these
            Bible studies, programs and other organized events will nourish
            every woman’s heart, enrich her life, and strengthen her
            relationship with the Almighty God.
          </p>
        </TitleBodyContainer>
      );
    case "music-ministry":
      return (
        <TitleBodyContainer title="The Embassy Choir">
          <p>
            Our Mission is to offer ourselves to the Lord, our God, as
            worshippers of Him in spirit and in truth; to invoke the very
            presence of the Lord daily with the fruit of our lips by continually
            giving God the praise; to honor God through music and singing
            praises to His Holy name! We would very much love you to experience
            a time of worship unto God with us every time we gather. And, to
            enjoy an atmosphere where heavy burdens of life are lifted and yokes
            are destroyed, because of the anointing of God that fills the room
            as we worship Him for His greatness in the beauty of His holiness!
            Our philosophy centers around these core values: Honor and glory
            given to God, purified hearts yielded in service to God, testimony
            for God lived before unbelievers, offering spiritual sacrifices to
            God, ascribing to God the glory due to His Name, thanksgiving and
            praise, giving of our material resources and singing and
            instrumental music in accordance with the Book of Col.3:16.
          </p>
        </TitleBodyContainer>
      );
    case "men-s-ministry":
      return (
        <TitleBodyContainer title="men's ministry">
          <p>
            At H.G.E, we biblically train and equip our men to be spiritual
            leaders, whether at home, inside the church, or at work. The Men’s
            Ministry develops our men in Christian living, so as to create
            positive impacts for the present and future generations. We strive
            to accomplish this mission, through Bible studies, discipleship
            classes, evangelism training, leadership development, accountability
            groups, mentoring, retreats, mission trips and other special events.
            In today’s environment, it’s imperative for men to learn to honor
            God with their hearts, and also to dedicate their lives to Christ.
            We periodically have Men’s Breakfasts on Saturday mornings. These
            breakfasts feature great meals, guest speakers on health, finance,
            immigration and wealth management. It is also a time for men to
            connect with one another in an informal way.
          </p>
        </TitleBodyContainer>
      );
    case "drama-ministry":
      return (
        <>
          <TitleBodyContainer title="Drama Ministry">
            <p>
              Ministering to the body of Christ, by way of soul and spiritual
              skits and drama presentations. This Ministry uses the theatrical
              talents of the members to minister to the church during holidays
              and special events. The members of this ministry use their talents
              in music, spoken word, acting, and dance to communicate the gospel
              of Jesus Christ to the Church and the world at large.
            </p>
          </TitleBodyContainer>
          {/* carousel */}
          <div className="w-full wrapper h-80 md:h-[450px] relative mt-10 ">
            <ImageCarousel
              imgArr={[
                "/images/ourMinistries/drama1.png",
                "/images/ourMinistries/drama2.png",
                "/images/ourMinistries/drama3.png",
              ]}
              time={5000}
            />
          </div>
        </>
      );
    case "connect-ministry":
      return (
        <TitleBodyContainer title="Connect Ministry">
          <p>
            Consists of a group of believers filled with passion and love for
            one another. This Ministry is dedicated to the spiritual growth and
            physical welfare of church members, new converts and our guests. The
            Vision of this Ministry is to ensure all new comers and believers
            that God leads to us at H.G.E; are successfully followed up,
            incorporated and assimilated into an on-going process of
            discipleship program in the Church. Our Mission is to ensure the
            retention of the flock, making sure that the Master’s sheep are
            grounded in the fold; encourage members to be consistent in
            attendance at weekly meetings, Sunday services, house fellowship and
            church programs; encourage new attendees/converts to receive
            assurance of their salvation at home and in the Church; establish an
            atmosphere of love and unity in the church, whereby new converts/
            members are supported and encouraged, to grow in faith and in their
            daily walk with the Lord; enact ways by which members faced with
            challenges are cared and catered for; arrange visitations and
            regular communications by telephone and other means, with new
            members, converts and our guests.
          </p>
        </TitleBodyContainer>
      );
    case "prayer-ministry":
      return (
        <TitleBodyContainer title="Prayer Ministry">
          <p>
            Prayer is the life wire of our church. Our vision is to raise
            dynamic prayer warriors with integrity, who are committed to the
            task of bringing down the presence of God during our worship
            services. Our mission is to serve in HGE as prayer intercessors for
            God’s people, and to encourage and assist each person in personal
            and corporate prayer. We do this by praying in faith in the name of
            our Lord Jesus Christ, relentlessly opposing the works of Satan in
            the lives of the people of God, whilst encouraging others to also do
            the same.
          </p>
          <p className="uppercase">OUR STRATEGIES ARE AS FOLLOWS :</p>
          <ul className=" marker:text-black">
            <li>To live a righteous and holy life by the grace of God;</li>
            <li>
              To be consistent in our goals and foster unity by praying in one
              accord;
            </li>
            <li>
              To pray for our Pastors, Ministers, Workers and HGE Congregation;
            </li>
            <li>To pray for the church staff & church projects;</li>
            <li>To pray for our community and the nation;</li>
            <li>
              To develop a family oriented environment free of ethnicity through
              our prayers;
            </li>
            <li>To encourage and assist others in learning how to pray;</li>
            <li>
              To ensure every request we receive is handled timely & effectively
              in prayers;
            </li>
            <li>
              We are a militant prayer team, obedient servants and there is no
              tolerance for sin. We meet twice a week, to pray and have online
              prayer meetings twice a week.
            </li>
          </ul>
        </TitleBodyContainer>
      );
    case "hge-wellness-ministry":
      return (
        <>
          <TitleBodyContainer title="HGE Wellness Ministry">
            <p>
              The Embassy Wellness Ministry promotes health, wellness and
              healthy living habits. Every quarter the ministry organizes a free
              wellness clinic with health screening activities; including blood
              pressure, cholesterol and blood glucose levels. We are blessed
              with medical professionals who volunteer their time during the
              clinic to educate and encourage our congregation and community.
            </p>
          </TitleBodyContainer>
          {/* carousel */}
          <div className="w-full wrapper h-80 md:h-[450px] relative mt-10 ">
            <ImageCarousel
              imgArr={[
                "/images/ourMinistries/wellness1.png",
                "/images/ourMinistries/wellness2.png",
                "/images/ourMinistries/wellness3.png",
                "/images/ourMinistries/wellness4.png",
                "/images/ourMinistries/wellness5.png",
                "/images/ourMinistries/wellness6.png",
                "/images/ourMinistries/wellness7.png",
                "/images/ourMinistries/wellness8.png",
                "/images/ourMinistries/wellness9.png",
              ]}
              time={5000}
            />
          </div>
        </>
      );
    case "teenage-ministry":
      return (
        <>
          <TitleBodyContainer
            title="HGE Teenagers Ministry
">
            <p>
              Is dedicated to building the spiritual lives of our teenager. Our
              mission is to provide a stimulating and nurturing environment, so
              that our youth may grow in their spirituality and become
              productive Christians. As we are well aware, a lot is going on in
              the life of our youth in this day and age. We endeavor to give our
              youth a Christian education, lead them to a personal relationship
              with Jesus Christ, and encourage them to grow in Christian faith.
              We groom our youth and encourage them to participate in all areas
              of the church. The Teenage Ministry seeks to develop the spiritual
              conscientiousness of members transitioning from childhood to young
              adults. Planned activities are designed to minister to their
              specific needs, and help them understand the responsibility of
              making choices as well as the consequences of their actions.  The
              Teenage Ministry includes children from the age of 13-19. Our
              teenager have fun by learning through Field Trips, Activities,
              Youth Led Worships, Annual Programs and Celebrations etc.
            </p>
          </TitleBodyContainer>
          {/* carousel */}
          <div className="w-full wrapper h-80 md:h-[450px] relative mt-10 ">
            <ImageCarousel
              imgArr={[
                "/images/ourMinistries/teenage1.png",
                "/images/ourMinistries/teenage2.png",
              ]}
              time={5000}
            />
          </div>
        </>
      );
    case "hge-children-ministry":
      return (
        <>
          <TitleBodyContainer title="HGE Children Ministry">
            <p>
              HGE CHILDREN MINISTRY is designed solely to help our children to
              know, love, and follow Christ with all their hearts in a safe,
              high-energy, enriching environment; for preschoolers to preteens.
              Hence, our acronym:{" "}
              <span className="text-primary">
                “CHILD”-Changing Hearts Into Lifelong Disciples.
              </span>
            </p>
            <p>HGE CHILDREN PARTNERS WITH PARENTS TO :</p>
            <ul className=" marker:text-black">
              <li>
                Develop children as Christ-followers and teach them to share
                their faith.
              </li>
              <li>Develop children as worshippers;</li>
              <li>Develop children as prayer warriors;</li>
              <li>
                Teach children to make wise choices according to Scripture;
              </li>
              <li>Teach children to treat all people equally;</li>
              <li>
                Support families with fun, creative ways to enhance each child’s
                spiritual journey in life.
              </li>

              <li>
                We offer weekly activities and frequent opportunities for group
                learning. Sunday morning is filled with fun and interactive
                teaching from the Word of God.
              </li>
            </ul>
          </TitleBodyContainer>
          {/* carousel */}
          <div className="w-full wrapper h-80 md:h-[450px] relative mt-10 ">
            <ImageCarousel
              imgArr={[
                "/images/ourMinistries/children1.png",
                "/images/ourMinistries/children2.png",
                "/images/ourMinistries/children3.png",
                "/images/ourMinistries/children4.png",
              ]}
              time={5000}
            />
          </div>
        </>
      );

    // DEPARTMENTS
    case "evangelism":
      return (
        <TitleBodyContainer title="evangelism">
          <p>
            SWAT (Soul Winning Action Team): S.W.A.T. (Soul Winning Action
            Team): The HGE Soul Winning Action Team is designed to fulfill
            utmost priority of the church, which is the great commission given
            by our Lord Jesus, to go out, seek the lost, and make disciples. It
            is with compassion that we have committed our lives to reaching out
            to the community, and reclaiming those that are spiritually wounded,
            battered, sick, discouraged, and those that have lost hope and are
            ignorant of God’s love and success for their lives. Our primary goal
            is to develop leaders who will impact our community, and provide
            hope as we help transform lives. Our mission is to minister to the
            people who are hurting and to help them achieve wholeness. We are
            the arms of Heaven’s Glorious Embassy, and as our Brother’s Keeper,
            we are very determined to bring people to Christ.
          </p>
        </TitleBodyContainer>
      );
    case "believers-class-membership-class":
      return (
        <TitleBodyContainer title="Believers’ Class & Membership Class">
          <p>
            Believers’ Class teaches and develops H.G.E church members to become
            well-grounded Disciples of Christ, and able workers in His vineyard.
            It also prepares church members for volunteer services in the
            community. This class is for those who have just received Jesus into
            their lives. Receiving Jesus is the most important decision a person
            can ever make. It’s the beginning of a lifetime following Christ. If
            you happen to be one of those who have just given their lives to
            Jesus, the class will offer you informational directions, and you’ll
            also have the opportunity to build relationships with other new
            believers.
          </p>
          <p>
            Our emphasis is on Water Baptism which gives each believer the
            opportunity to publicly share their reasons with other believers as
            to why they have chosen to follow Jesus. Water baptism takes place
            at the end of the believers’ class, and is by immersion in water. In
            the believers’ class, you get answers to some of the Biblical
            questions you may otherwise struggle to find answers to, such as:
            what it actually means to be a Christian; how you can put your past
            behind you and so on, and so forth. The class will also teach you
            how you can continue to grow in the Lord.
          </p>
          <p>
            The Vision of our membership class is to connect you to HGE, and to
            explain our purpose, values, and history as well as our vision for
            the future. You’ll learn more about our leadership and how we
            operate. You’ll also be given the opportunity to become a member of
            HGE workforce, as well as explore the many ways to get involved in
            the ministry.
          </p>
        </TitleBodyContainer>
      );
    case "protocol-department":
      return (
        <TitleBodyContainer title="Protocol Department">
          <p>
            We take care of our Parish Pastors, visiting Pastors and guest
            Ministers, by ensuring safe and secure environment. We maintain
            orderliness and carry out other special duties as may be required.
            We often double up as the ‘Aarons and Hurs’ for the parish Pastors,
            visiting Pastors and guest Ministers as per the word of God in
            Exodus 17:12. It is our responsibility to transport the visiting
            Pastors and Ministers, to and from the airport, and make sure their
            hotel room is in excellent and top condition.
          </p>
          <p>
            We also transport them to and from their hotel room to the Church.
            We work very closely with the hospitality department to ensure the
            very best care of our guests throughout the duration of their time
            with us. Our primary focus is on the comfort, commutability and
            security of our parish Pastors and guest Pastors/Ministers.
          </p>
        </TitleBodyContainer>
      );
    case "greeters-department":
      return (
        <TitleBodyContainer title="Greeters Department">
          <p>
            <span className="text-blue-500">
              “First impression lasts forever as the saying goes.”
            </span>{" "}
            This Department ensures everyone stepping through the door receives
            a very warm welcome to our Church. Meeting people at the door during
            Sunday morning service. Helping open doors, providing directions,
            and passing out bulletins. In general, providing a friendly greeting
            to all who enter and helping our visitors feel welcome.
          </p>
        </TitleBodyContainer>
      );
    case "holy-police-department":
      return (
        <TitleBodyContainer title="Holy Police Department">
          <p>
            Our main responsibility is to ensure maximum security of our
            members, visitors and their properties, whilst on Church premises.
            It is the duty of this department to make sure the parking lots and
            sidewalks are free of any hazards. During inclement weather and in
            winter, we will make sure all sidewalks and walkways are clear of
            ice and snow, and we help people to and from their cars with the aid
            of our state of the art golf cart. We provide a steady arm when
            parking lot is slippery and an umbrella cover when raining. Holy
            Police Officers are responsible for ensuring a safe and secure
            Church environment. This includes providing security at all church
            events.
          </p>
        </TitleBodyContainer>
      );
    case "ushering-department":
      return (
        <TitleBodyContainer title="Ushering Department">
          <p>
            We greet people as they arrive inside the Church auditorium and help
            them find seats and accommodate the needs of our guests. An Usher is
            generally recognized as a door keeper and a tenderer of God’s
            vineyard. This perspective is quite correct, al-be-it limited. We
            are also the caregivers/caretakers of the church members and
            visitors during service, and our duties are patterned after clear
            precepts in the Bible. For example, God appointed Adam to keep and
            dress/care for, the Garden of Eden at the very beginning (Gen 2:15).
          </p>
        </TitleBodyContainer>
      );
    case "media-publication-department":
      return (
        <TitleBodyContainer title="Media & Publication Department">
          <p>
            MEDIA PUBLICATION DEPT: Produces the bi-annual editions of “THE
            AMBASSADOR” -the official magazine of HGE, and handles all church
            publications and newsletters. Though often completed behind the
            scenes, the result of the media/publication department is usually
            highly visible, making first impressions and helping to sustain
            relationships by communicating the messages and church activities
          </p>
          <p>
            We make use of all modern day resources at our disposal to assist in
            producing the kind of quality that says a lot about our Church-HGE
            in general. Our website is designed to help you find a church to
            attend, inform potential and active church members of current
            ministries and events, and provide spiritual content that helps
            people grow in their faith.
          </p>
          <p>
            The Media department seeks to disseminate information pertinent to
            the Church family and the greater community by utilizing and
            coordinating all media vehicles such as the church Magazine,
            Newsletter, website, Facebook, Tweeter, Instagram and other social
            apparatus. We ensure the quality, accuracy and completeness of all
            written contents of both digital and printed materials. Our
            responsibilities include: reviewing and verifying all published
            information making sure they are consistent, accurate and
            up-to-date, and updating announcements on a regular basis.
          </p>
        </TitleBodyContainer>
      );
    case "it-department":
      return (
        <TitleBodyContainer title="IT Department">
          <p>
            We Update and maintain the church website, and meet all office
            computer and technology requirements. The IT Department is also
            responsible for technical support for all church computers including
            laptops, desktops, I-Pads, printers and telephone system, internet,
            etc.
          </p>
        </TitleBodyContainer>
      );
    case "public-relations-department":
      return (
        <TitleBodyContainer title="Public Relations Department">
          <p>
            We serve as a link between the church and the community, city,
            county, state and the country at large. Our mission is to liaise
            with the community to identify the areas where the church may be
            involved; we engage in community service; we visit and provide food
            and materials to homeless shelters within our county, and partner
            with the cities around our church in environmental beautification.
            We have adopted a road within our city, which the church maintains
            and keeps tidy and beautiful. We have also coordinated with United
            States Department of Agriculture (USDA), Center for Faith-Based and
            Neighborhood Partnerships to Feed the community.
          </p>
        </TitleBodyContainer>
      );
    case "sunday-school-department":
      return (
        <TitleBodyContainer title="Sunday School Department">
          <p>
            Comprises of adult Sunday school teachers leading the people of God
            to search through the scriptures every Sunday morning. HGE Sunday
            School Department invites you to attend. We offer classes for
            everyone in the family. Our goal and Purpose is to provide adults of
            all ages with biblical instructions and principles that will aid
            them in their Christian walk, witness, and development. The Adult
            Sunday School at HGE studies various books in the Bible throughout
            the year. Join us each Sunday morning at 9:00 a.m.; inside the
            Church auditorium where you will enjoy a freshly baked bread of
            heavenly Kingdom with us.
          </p>
        </TitleBodyContainer>
      );
    case "sanitation-janitorial-department":
      return (
        <TitleBodyContainer title="Sanitation/Janitorial Department">
          <p>
            Our Motto is:{" "}
            <span className="text-blue-500">
              “Cleanliness is the next to holiness,”
            </span>{" "}
            We ensure Church premises including the bathrooms and the
            surrounding grounds are aesthetically pleasing and clean at all
            times. We take care of the dumpsters and make sure the Church
            premises are free of litters and trash at all times. And, we freshen
            up the entire Church building with air fresheners, before and during
            service.
          </p>
        </TitleBodyContainer>
      );

    case "transportation-department":
      return (
        <TitleBodyContainer title="Transportation Department">
          <p>
            We ensure nobody is left out when it comes to worshipping the Lord.
            This Department fetches new and old members, who have no vehicles of
            their own, to and fro their homes whenever required.
          </p>
        </TitleBodyContainer>
      );
    case "follow-up-department":
      return (
        <TitleBodyContainer title="Follow Up Department">
          <p>
            In this department we are tasked with welcoming our first timers,
            and making sure they all leave with lasting positive impression. We
            follow this up by calling, praying and fellowshipping with them. We
            are dedicated to exploring ideas, options and best practices, on how
            to acclimate and best connect with individuals who have recently
            joined HGE, and others considering an association with our church. 
            Moreover, we connect with new members by playing an active role in
            supporting their successful matriculation through the new member’s
            process at HGE.
          </p>
        </TitleBodyContainer>
      );
    case "hospitality-care-department":
      return (
        <TitleBodyContainer title="Hospitality/Care Department">
          <p>
            We ensure proper care of our guest Pastors, Ministers and august
            visitors. We provide assistance, and meet welfare needs of our
            Church members. We visit Church members in hospitals, and organize
            outreach events in hospitals and other facilities. We are of the
            opinion that, extending a warm welcome through hospitality should go
            far beyond the ordinary. Our duties include, but not limited to the
            following: calling on and praying with those in the hospital;
            stopping by to visit with those who have trouble getting out;
            follow-up on all our visiting Pastors and Ministers with a short,
            friendly greeting message, thanking them for their visit.
          </p>
        </TitleBodyContainer>
      );
    case "technical-department":
      return (
        <div className=" space-y-14 md:space-y-20   ">
          {/* technical */}
          <div className=" space-y-8 lg:flex even:lg:flex-row-reverse mx-auto lg:item-center max-w-7xl  lg:gap-24   ">
            {/* image */}

            <Image
              src={`/images/ourMinistries/technical1.png`}
              width={556}
              height={449}
              className="w-full lg:w-2/5 object-contain "
              alt="technical department image"
            />

            {/* text-section */}
            <div className="space-y-2 md:space-y-5 prose  lg:w-3/5">
              <Title title={`Technical`} />

              <p className="text-justify">
                We are responsible for the installation and maintenance of the
                PA system, and all musical instruments. Our primary goal is to
                maintain high sound quality during service and special events.
                We are also responsible for ensuring adequate lighting inside
                the Church auditorium during service. We work hard to ensure a
                sound system that allows the Word and the music to be heard with
                detail at the appropriate level for our congregation. We
                recognize that truly exceptional sound requires an unusual
                amount of applied skill and attention to technical detail, and
                this meticulous care is exactly what our Church receives from
                us.
              </p>
            </div>
          </div>
          {/* audio */}
          <div className=" space-y-8 lg:flex even:lg:flex-row-reverse mx-auto lg:item-center max-w-7xl  lg:gap-24   ">
            {/* image */}

            <Image
              src={`/images/ourMinistries/technical2.png`}
              width={556}
              height={449}
              className="w-full lg:w-2/5 object-contain "
              alt="technical department image"
            />

            {/* text-section */}
            <div className="space-y-2 md:space-y-5 prose  lg:w-3/5">
              <Title title={`Audio`} />

              <p className="text-justify">
                We are Responsible for audio recording of church sermons, and
                sales of Christian books, Sunday school manuals, audio and video
                recordings of Church services and special programs. We are also
                tasked with editing the audio digital master of church services,
                guest speakers and musical productions.
              </p>
            </div>
          </div>
          {/* video */}
          <div className=" space-y-8 lg:flex even:lg:flex-row-reverse mx-auto lg:item-center max-w-7xl  lg:gap-24   ">
            {/* image */}

            <Image
              src={`/images/ourMinistries/technical3.png`}
              width={556}
              height={449}
              className="w-full lg:w-2/5 object-contain "
              alt="technical department image"
            />

            {/* text-section */}
            <div className="space-y-2 md:space-y-5 prose  lg:w-3/5">
              <Title title={`Video`} />

              <p className="text-justify">
                We record all church services as well as other activities. We
                are responsible for shooting and editing all church service and
                special event videos.
              </p>
            </div>
          </div>
        </div>
      );
    case "church-office":
      return (
        <div className=" space-y-14 md:space-y-20   ">
          {/* pastor assist */}
          <div className=" space-y-8 lg:flex even:lg:flex-row-reverse mx-auto lg:item-center max-w-7xl  lg:gap-24   ">
            {/* image */}

            <Image
              src={`/images/ourMinistries/church-office1.png`}
              width={556}
              height={449}
              className="w-full lg:w-2/5 object-contain "
              alt="technical department image"
            />

            {/* text-section */}
            <div className="space-y-2 md:space-y-5 prose  lg:w-3/5">
              <Title title={`Pastor’s Assistant`} />

              <p className="text-justify">
                The PA (Pastor’s Assistant) in conjunction with the Church
                Administrator, is responsible for the day-to-day operation of
                Church office. This includes ensuring a smooth running office in
                accordance with the church policies and procedures. He draws up
                the Church programs for Sunday service, and assists the Pastor
                in whatever capacity required.
              </p>
            </div>
          </div>
          {/* admin*/}
          <div className=" space-y-8 lg:flex even:lg:flex-row-reverse mx-auto lg:item-center max-w-7xl  lg:gap-24   ">
            {/* image */}

            <Image
              src={`/images/ourMinistries/church-office2.png`}
              width={556}
              height={449}
              className="w-full lg:w-2/5 object-contain "
              alt="technical department image"
            />

            {/* text-section */}
            <div className="space-y-2 md:space-y-5 prose  lg:w-3/5">
              <Title title={`Administration`} />

              <p className="text-justify">
                The Administrator is responsible for the efficient and effective
                operation of the Church office, and for developing policies and
                procedures to support day-to-day operations and activities of
                the Church. The Church Administrator is also the custodian of
                the Church calendar of events and programs.
              </p>
            </div>
          </div>
          {/* accnts */}
          <div className=" space-y-8 lg:flex even:lg:flex-row-reverse mx-auto lg:item-center max-w-7xl  lg:gap-24   ">
            {/* image */}

            <Image
              src={`/images/ourMinistries/church-office3.png`}
              width={556}
              height={449}
              className="w-full lg:w-2/5 object-contain "
              alt="technical department image"
            />

            {/* text-section */}
            <div className="space-y-2 md:space-y-5 prose  lg:w-3/5">
              <Title title={`Accounts`} />

              <p className="text-justify">
                Our primary purpose is to be good stewards of the tithes and
                offerings the Church receives. We take every precaution to
                ensure that all monies received are processed timely,
                accurately, and proper records are maintained. We maintain the
                integrity of all financial matters by ensuring all accounting
                policies and practices are compliant with accepted accounting
                principles. We work with the board of trustees on annual
                budgets, expense reporting and also, with external auditors on
                successful completion of annual audits.
              </p>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

const TitleBodyContainer = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className=" prose md:prose-lg prose-p:text-justify  max-w-none">
      <Title title={title} />
      {children}
    </div>
  );
};
