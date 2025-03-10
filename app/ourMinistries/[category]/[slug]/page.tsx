import { Ministry } from '@/app/utils/api-request';
import {
  getChildrenContent,
  getDramaContent,
  getMinistryContent,
  getMinistryContent2,
  getPrayerContent,
  getTeenageContent,
  getWellnessContent,
} from '@/app/utils/subMinistriesActions';
import ImageCarousel from '@/lib/components/ImageCarousel';

import { API_URL } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';
import Title from './components/Title';
import MaxWidthContainer from '@/components/MaxWidthContainer';
export async function generateStaticParams() {
  const res = await fetch(`${API_URL}/groups?category=All&page=1`);

  const ministryData = await res.json();
  return ministryData?.message?.data?.map((data: Ministry) => ({
    category: data?.category,
    slug: data?.slug,
  }));
}

export default async function page({ params }: { params: { category: string; slug: string } }) {
  let content;
  let imgArr;
  switch (params.slug) {
    // MINISTRIES
    case 'young-adult-ministry':
      return <>{/* <YoungAdults /> */}</>;
    case 'elders-ministry':
      content = await getMinistryContent('elders_minstry').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'pre-marital-marriage-counselling':
      content = await getMinistryContent('pre-marital-marriage-department').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );

    case 'women-s-ministry':
      content = await getMinistryContent('womens_ministry').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'music-ministry':
      content = await getMinistryContent('embassy_choir_ministry').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'men-s-ministry':
      content = await getMinistryContent('mens_ministry').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'drama-ministry':
      content = await getDramaContent().then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));
      imgArr = await getDramaContent().then((res) => {
        return res?.carousel?.map((slide) => slide.item_url);
      });

      return (
        <>
          <TitleBodyContainer title={content?.title ?? ''}>
            <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
          </TitleBodyContainer>
          {/* carousel */}
          <div className="wrapper relative mt-10 h-80 w-full md:h-[450px] xl:h-[600px] ">
            <ImageCarousel imgArr={imgArr || []} time={5000} />
          </div>
        </>
      );
    case 'connect-ministry':
      content = await getMinistryContent('connect_ministry').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'prayer-ministry':
      content = await getPrayerContent().then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'hge-wellness-ministry':
      content = await getWellnessContent().then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));
      imgArr = await getWellnessContent().then((res) => {
        return res?.carousel?.map((slide) => slide.item_url);
      });
      return (
        <>
          <TitleBodyContainer title={content?.title ?? ''}>
            <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
          </TitleBodyContainer>
          {/* carousel */}
          <div className="wrapper relative mt-10 h-80 w-full md:h-[450px] xl:h-[600px] ">
            <ImageCarousel imgArr={imgArr || []} time={5000} />
          </div>
        </>
      );
    case 'teenage-ministry':
      content = await getTeenageContent().then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));
      imgArr = await getTeenageContent().then((res) => {
        return res?.carousel?.map((slide) => slide.item_url);
      });
      return (
        <>
          <TitleBodyContainer title={content?.title ?? ''}>
            <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
          </TitleBodyContainer>
          {/* carousel */}
          <div className="wrapper relative mt-10 h-80 w-full md:h-[450px] xl:h-[600px]  ">
            <ImageCarousel imgArr={imgArr || []} time={5000} />
          </div>
        </>
      );
    case 'hge-children-ministry':
      content = await getChildrenContent().then((res) => ({
        title: res?.settings?.settings?.body?.title || '',
        body: res?.settings?.settings?.body?.content || '',
      }));

      imgArr = await getChildrenContent().then((res) => {
        return res?.carousel?.map((slide) => slide.item_url);
      });

      return (
        <>
          <TitleBodyContainer title={content?.title || ''}>
            <div
              className="marker:text-black"
              dangerouslySetInnerHTML={{ __html: content?.body || '' }}
            />
          </TitleBodyContainer>
          {/* carousel */}
          <div className="wrapper relative mt-10 h-80 w-full md:h-[450px] xl:h-[600px] ">
            <ImageCarousel imgArr={imgArr || []} time={5000} />
          </div>
        </>
      );

    // DEPARTMENTS
    case 'evangelism':
      content = await getMinistryContent('evangelism_ministry').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'believers-class-membership-class':
      content = await getMinistryContent('believers_membership').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'protocol-department':
      content = await getMinistryContent('protocol_department').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'greeters-department':
      content = await getMinistryContent('greeters_department').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'holy-police-department':
      content = await getMinistryContent('holy_police_deparment').then((res) => ({
        title: res?.settings?.settings.body.title,
        body: res?.settings?.settings.body.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'ushering-department':
      content = await getMinistryContent('ushering_department').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'media-publication-department':
      content = await getMinistryContent('media_publication_ministry').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'it-department':
      content = await getMinistryContent('it_department').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'public-relations-department':
      content = await getMinistryContent('public_relations_ministry').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'sunday-school-department':
      content = await getMinistryContent('sunday_school_ministry').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'sanitation-janitorial-department':
      content = await getMinistryContent('sanitation_ministry').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );

    case 'transportation-department':
      content = await getMinistryContent('transportation_department').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'follow-up-department':
      content = await getMinistryContent('follow_up_ministry').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'hospitality-care-department':
      content = await getMinistryContent('hospitality_care_department').then((res) => ({
        title: res?.settings?.settings?.body?.title,
        body: res?.settings?.settings?.body?.content,
      }));

      return (
        <TitleBodyContainer title={content?.title ?? ''}>
          <div dangerouslySetInnerHTML={{ __html: content?.body ?? '' }}></div>
        </TitleBodyContainer>
      );
    case 'technical-department':
      content = await getMinistryContent2('technical_ministry').then((res) => {
        return res?.pageSection;
      });

      return (
        <MaxWidthContainer className=" space-y-14    ">
          {content?.map((item, index) => {
            return (
              <div
                key={index}
                className=" lg:item-center mx-auto max-w-7xl space-y-8 lg:flex lg:gap-24  even:lg:flex-row-reverse   "
              >
                {/* image */}

                <Image
                  src={item.image_url}
                  width={556}
                  height={449}
                  className="w-full object-contain lg:w-2/5 "
                  alt="technical department image"
                />

                {/* text-section */}
                <div className="space-y-2 sm:text-lg md:space-y-5  lg:w-3/5">
                  <Title title={item.name} />
                  <div
                    className="text-justify "
                    dangerouslySetInnerHTML={{ __html: item.description ?? '' }}
                  />
                </div>
              </div>
            );
          })}
        </MaxWidthContainer>
      );
    case 'church-office':
      content = await getMinistryContent2('church_office_ministry').then((res) => {
        return res?.pageSection;
      });

      return (
        <MaxWidthContainer className=" space-y-14    ">
          {content?.map((item, index) => {
            return (
              <div
                key={index}
                className=" lg:item-center mx-auto max-w-7xl space-y-8 lg:flex lg:gap-24  even:lg:flex-row-reverse   "
              >
                {/* image */}

                <Image
                  src={item.image_url}
                  width={556}
                  height={449}
                  className="w-full object-contain lg:w-2/5 "
                  alt="technical department image"
                />

                {/* text-section */}
                <div className="space-y-2  sm:text-lg  lg:w-3/5">
                  <Title title={item.name} />
                  <div
                    className="text-justify "
                    dangerouslySetInnerHTML={{ __html: item.description ?? '' }}
                  />
                </div>
              </div>
            );
          })}
        </MaxWidthContainer>
      );
    default:
      return null;
  }
}

const TitleBodyContainer = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <MaxWidthContainer className=" prose  md:prose-lg prose-headings:font-semibold  prose-p:text-justify">
      <Title title={title} />
      {children}
    </MaxWidthContainer>
  );
};
