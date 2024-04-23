import React from "react";
import Title from "./components/Title";
import ImageCarousel from "@/lib/components/ImageCarousel";
import ImageFill from "@/lib/components/ImageFill";
import Image from "next/image";
import TitleBorderTop from "@/components/TitleBorderTop";
import YoungAdults from "./components/YoungAdults";
import {
  getChildrenContent,
  getMinistryContent,
  getPrayerContent,
  getWellnessContent,
} from "@/app/utils/subMinistriesActions";

export default async function page({ params }: { params: { slug: string } }) {
  let content;
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
      content = await getMinistryContent(
        "pre-marital-marriage-department"
      ).then((res) => ({
        title: res?.settings.settings.body.title,
        body: res?.settings.settings.body.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
        </TitleBodyContainer>
      );

    case "women-s-ministry":
      content = await getMinistryContent("womens_ministry").then((res) => ({
        title: res?.settings.settings.body.title,
        body: res?.settings.settings.body.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
        </TitleBodyContainer>
      );
    case "music-ministry":
      content = await getMinistryContent("embassy_choir_ministry").then(
        (res) => ({
          title: res?.settings.settings.body.title,
          body: res?.settings.settings.body.content,
        })
      );

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
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
      content = await getMinistryContent("connect_ministry").then((res) => ({
        title: res?.settings.settings.body.title,
        body: res?.settings.settings.body.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
        </TitleBodyContainer>
      );
    case "prayer-ministry":
      content = await getPrayerContent().then((res) => ({
        title: res?.settings.settings.body.title,
        body: res?.settings.settings.body.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
          {/* <p>
              Prayer is the life wire of our church. Our vision is to raise
              dynamic prayer warriors with integrity, who are committed to the
              task of bringing down the presence of God during our worship
              services. Our mission is to serve in HGE as prayer intercessors
              for God’s people, and to encourage and assist each person in
              personal and corporate prayer. We do this by praying in faith in
              the name of our Lord Jesus Christ, relentlessly opposing the works
              of Satan in the lives of the people of God, whilst encouraging
              others to also do the same.
            </p>
            <p className="uppercase">OUR STRATEGIES ARE AS FOLLOWS :</p>
            <ul className=" marker:text-black">
              <li>To live a righteous and holy life by the grace of God;</li>
              <li>
                To be consistent in our goals and foster unity by praying in one
                accord;
              </li>
              <li>
                To pray for our Pastors, Ministers, Workers and HGE
                Congregation;
              </li>
              <li>To pray for the church staff & church projects;</li>
              <li>To pray for our community and the nation;</li>
              <li>
                To develop a family oriented environment free of ethnicity
                through our prayers;
              </li>
              <li>To encourage and assist others in learning how to pray;</li>
              <li>
                To ensure every request we receive is handled timely &
                effectively in prayers;
              </li>
              <li>
                We are a militant prayer team, obedient servants and there is no
                tolerance for sin. We meet twice a week, to pray and have online
                prayer meetings twice a week.
              </li>
            </ul> */}
        </TitleBodyContainer>
      );
    case "hge-wellness-ministry":
      content = await getWellnessContent().then((res) => ({
        title: res?.settings.settings.body.title,
        body: res?.settings.settings.body.content,
      }));
      return (
        <>
          <TitleBodyContainer title={content?.title ?? ""}>
            <div
              dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
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
      content = await getChildrenContent().then((res) => ({
        title: res?.settings.settings.body.title,
        body: res?.settings.settings.body.content,
      }));
      const imgArr = await getChildrenContent().then((res) => {
        return res?.carousel?.map((slide) => slide.item_url);
      });

      return (
        <>
          <TitleBodyContainer title={content?.title ?? ""}>
            <div
              dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
            {/* <p>
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
            </ul> */}
          </TitleBodyContainer>
          {/* carousel */}
          <div className="w-full wrapper h-80 md:h-[450px] relative mt-10 ">
            <ImageCarousel imgArr={imgArr || []} time={5000} />
          </div>
        </>
      );

    // DEPARTMENTS
    case "evangelism":
      content = await getMinistryContent("evangelism_ministry").then((res) => ({
        title: res?.settings.settings.body.title,
        body: res?.settings.settings.body.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
        </TitleBodyContainer>
      );
    case "believers-class-membership-class":
      content = await getMinistryContent("believers_membership").then(
        (res) => ({
          title: res?.settings.settings.body.title,
          body: res?.settings.settings.body.content,
        })
      );

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
        </TitleBodyContainer>
      );
    case "protocol-department":
      content = await getMinistryContent("protocol_department").then((res) => ({
        title: res?.settings.settings.body.title,
        body: res?.settings.settings.body.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
        </TitleBodyContainer>
      );
    case "greeters-department":
      content = await getMinistryContent("greeters_department").then((res) => ({
        title: res?.settings.settings.body.title,
        body: res?.settings.settings.body.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
        </TitleBodyContainer>
      );
    case "holy-police-department":
      content = await getMinistryContent("holy_police_deparment").then(
        (res) => ({
          title: res?.settings?.settings.body.title,
          body: res?.settings?.settings.body.content,
        })
      );
      console.log(content);
      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
        </TitleBodyContainer>
      );
    case "ushering-department":
      content = await getMinistryContent("ushering_department").then((res) => ({
        title: res?.settings.settings.body.title,
        body: res?.settings.settings.body.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
        </TitleBodyContainer>
      );
    case "media-publication-department":
      content = await getMinistryContent("media_publication_ministry").then(
        (res) => ({
          title: res?.settings.settings.body.title,
          body: res?.settings.settings.body.content,
        })
      );

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
        </TitleBodyContainer>
      );
    case "it-department":
      content = await getMinistryContent("it_department").then((res) => ({
        title: res?.settings.settings.body.title,
        body: res?.settings.settings.body.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
        </TitleBodyContainer>
      );
    case "public-relations-department":
      content = await getMinistryContent("public_relations_ministry").then(
        (res) => ({
          title: res?.settings.settings.body.title,
          body: res?.settings.settings.body.content,
        })
      );

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
        </TitleBodyContainer>
      );
    case "sunday-school-department":
      content = await getMinistryContent("sunday_school_ministry").then(
        (res) => ({
          title: res?.settings.settings.body.title,
          body: res?.settings.settings.body.content,
        })
      );

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
        </TitleBodyContainer>
      );
    case "sanitation-janitorial-department":
      content = await getMinistryContent("sanitation_ministry").then((res) => ({
        title: res?.settings.settings.body.title,
        body: res?.settings.settings.body.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
        </TitleBodyContainer>
      );

    case "transportation-department":
      content = await getMinistryContent("transportation_department").then(
        (res) => ({
          title: res?.settings.settings.body.title,
          body: res?.settings.settings.body.content,
        })
      );

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
        </TitleBodyContainer>
      );
    case "follow-up-department":
      content = await getMinistryContent("follow_up_ministry").then((res) => ({
        title: res?.settings.settings.body.title,
        body: res?.settings.settings.body.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
        </TitleBodyContainer>
      );
    case "hospitality-care-department":
      content = await getMinistryContent("hospitality_care_department").then(
        (res) => ({
          title: res?.settings.settings.body.title,
          body: res?.settings.settings.body.content,
        })
      );

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
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
