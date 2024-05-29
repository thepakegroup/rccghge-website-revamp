import { Ministry, getMinistriesSlug } from "@/app/utils/actions";
import {
  getChildrenContent,
  getDramaContent,
  getMinistryContent,
  getMinistryContent2,
  getPrayerContent,
  getTeenageContent,
  getWellnessContent,
} from "@/app/utils/subMinistriesActions";
import ImageCarousel from "@/lib/components/ImageCarousel";
import Image from "next/image";
import React from "react";
import Title from "./components/Title";
import YoungAdults from "./components/YoungAdults";
export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STAGING_API_URL}/groups?category=All&page=1`
  );
  const ministryData = await res.json();
  return ministryData?.message.data.map((data: Ministry) => ({
    category: data.category,
    slug: data.slug,
  }));
}
export default async function page({
  params,
}: {
  params: { category: string; slug: string };
}) {
  let content;
  let imgArr;
  switch (params.slug) {
    // MINISTRIES
    case "young-adult-ministry":
      return (
        <>
          <YoungAdults />
        </>
      );
    case "elders-ministry":
      content = await getMinistryContent("elders_minstry").then((res) => ({
        title: res?.settings.settings.body.title,
        body: res?.settings.settings.body.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
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
      content = await getMinistryContent("mens_ministry").then((res) => ({
        title: res?.settings.settings.body.title,
        body: res?.settings.settings.body.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ""}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
        </TitleBodyContainer>
      );
    case "drama-ministry":
      content = await getDramaContent().then((res) => ({
        title: res?.settings.settings.body.title,
        body: res?.settings.settings.body.content,
      }));
      imgArr = await getDramaContent().then((res) => {
        return res?.carousel?.map((slide) => slide.item_url);
      });

      return (
        <>
          <TitleBodyContainer title={content?.title ?? ""}>
            <div
              dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
          </TitleBodyContainer>
          {/* carousel */}
          <div className="w-full wrapper h-80 md:h-[450px] relative mt-10 ">
            <ImageCarousel imgArr={imgArr || []} time={5000} />
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
      imgArr = await getWellnessContent().then((res) => {
        return res?.carousel?.map((slide) => slide.item_url);
      });
      return (
        <>
          <TitleBodyContainer title={content?.title ?? ""}>
            <div
              dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}></div>
          </TitleBodyContainer>
          {/* carousel */}
          <div className="w-full wrapper h-80 md:h-[450px] relative mt-10 ">
            <ImageCarousel imgArr={imgArr || []} time={5000} />
          </div>
        </>
      );
    case "teenage-ministry":
      content = await getTeenageContent().then((res) => ({
        title: res?.settings.settings.body.title,
        body: res?.settings.settings.body.content,
      }));
      imgArr = await getTeenageContent().then((res) => {
        return res?.carousel?.map((slide) => slide.item_url);
      });
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
            <ImageCarousel imgArr={imgArr || []} time={5000} />
          </div>
        </>
      );
    case "hge-children-ministry":
      content = await getChildrenContent().then((res) => ({
        title: res?.settings.settings.body.title,
        body: res?.settings.settings.body.content,
      }));
      imgArr = await getChildrenContent().then((res) => {
        return res?.carousel?.map((slide) => slide.item_url);
      });

      return (
        <>
          <TitleBodyContainer title={content?.title ?? ""}>
            <div
              className="marker:text-black"
              dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}/>
           
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
      content = await getMinistryContent2("technical_ministry").then((res) => {
        return res?.pageSection;
      });

      return (
        <div className=" space-y-14    ">
          {content?.map((item, index) => {
            return (
              <div
                key={index}
                className=" space-y-8 lg:flex even:lg:flex-row-reverse mx-auto lg:item-center max-w-7xl  lg:gap-24   ">
                {/* image */}

                <Image
                  src={item.image_url}
                  width={556}
                  height={449}
                  className="w-full lg:w-2/5 object-contain "
                  alt="technical department image"
                />

                {/* text-section */}
                <div className="space-y-2 md:space-y-5 sm:text-lg  lg:w-3/5">
                  <Title title={item.name} />
                  <div
                    className="text-justify "
                    dangerouslySetInnerHTML={{ __html: item.description ?? "" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      );
    case "church-office":
      content = await getMinistryContent2("church_office_ministry").then(
        (res) => {
          return res?.pageSection;
        }
      );

      return (
        <div className=" space-y-14    ">
          {content?.map((item, index) => {
            return (
              <div
                key={index}
                className=" space-y-8 lg:flex even:lg:flex-row-reverse mx-auto lg:item-center max-w-7xl  lg:gap-24   ">
                {/* image */}

                <Image
                  src={item.image_url}
                  width={556}
                  height={449}
                  className="w-full lg:w-2/5 object-contain "
                  alt="technical department image"
                />

                {/* text-section */}
                <div className="space-y-2  sm:text-lg  lg:w-3/5">
                  <Title title={item.name} />
                  <div
                    className="text-justify "
                    dangerouslySetInnerHTML={{ __html: item.description ?? "" }}
                  />
                </div>
              </div>
            );
          })}
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
