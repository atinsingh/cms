import type { Schema, Attribute } from '@strapi/strapi';

export interface AdvantageAdvantageHome extends Schema.Component {
  collectionName: 'components_advantage_advantage_homes';
  info: {
    displayName: 'advantageHome';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.String;
    shortDescription: Attribute.Text;
    imageUrl: Attribute.Text;
    images: Attribute.Media;
    advantageJSON: Attribute.Component<'map-json.assured-json', true>;
  };
}

export interface AdvantageJobPosting extends Schema.Component {
  collectionName: 'components_advantage_job_postings';
  info: {
    displayName: 'jobPosting';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.String;
    jobsJSON: Attribute.Component<'map-json.jobs-json', true>;
  };
}

export interface AssuredAcceleratedCareer extends Schema.Component {
  collectionName: 'components_assured_accelerated_careers';
  info: {
    displayName: 'acceleratedCareer';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    shortDescription: Attribute.Text;
    featureJSON: Attribute.Component<'map-json.coursedetails', true>;
  };
}

export interface AssuredAssured extends Schema.Component {
  collectionName: 'components_assured_assureds';
  info: {
    displayName: 'Assured';
  };
  attributes: {
    heading: Attribute.String;
    shortDescription: Attribute.Text;
    image: Attribute.Media;
    imageUrl: Attribute.Text;
    asssuredJSON: Attribute.Component<'map-json.assured-json', true>;
  };
}

export interface CommunityCommunityData extends Schema.Component {
  collectionName: 'components_community_community_data';
  info: {
    displayName: 'communityData';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    shortDescription: Attribute.Text;
    imageUrl: Attribute.Text;
  };
}

export interface CommunityJson extends Schema.Component {
  collectionName: 'components_community_jsons';
  info: {
    displayName: 'json';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media;
    iconUrl: Attribute.Text;
  };
}

export interface CourseCareercoach extends Schema.Component {
  collectionName: 'components_course_career_coach';
  info: {
    displayName: 'careerCoach';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    shortDescription: Attribute.Text;
    imageUrl: Attribute.Text;
    contentHeading: Attribute.String;
    points: Attribute.Component<'course.points', true>;
  };
}

export interface CourseFinance extends Schema.Component {
  collectionName: 'components_course_finances';
  info: {
    displayName: 'finance';
  };
  attributes: {
    paytype: Attribute.Component<'course.paytype', true>;
    name: Attribute.String;
    subHeading: Attribute.String;
    details: Attribute.Text;
    imageUrl: Attribute.Text;
  };
}

export interface CoursePaytype extends Schema.Component {
  collectionName: 'components_course_paytypes';
  info: {
    displayName: 'paytype';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    payTag: Attribute.String;
    shortDescription: Attribute.Text;
    strikePrice: Attribute.String;
    actualPrice: Attribute.String;
    originalPrice: Attribute.String;
    totalPrice: Attribute.String;
    variables: Attribute.Component<'course.variables', true>;
    costDetails: Attribute.Text;
  };
}

export interface CoursePoints extends Schema.Component {
  collectionName: 'components_course_components_points';
  info: {
    displayName: 'points';
  };
  attributes: {
    points: Attribute.String;
  };
}

export interface CourseVariables extends Schema.Component {
  collectionName: 'components_course_variables';
  info: {
    displayName: 'variables';
  };
  attributes: {
    variableName: Attribute.String;
    amount: Attribute.String;
  };
}

export interface GalleryAboutGallery extends Schema.Component {
  collectionName: 'components_gallery_about_galleries';
  info: {
    displayName: 'aboutGallery';
    description: '';
  };
  attributes: {
    Gallery: Attribute.Media;
    heading: Attribute.String;
    galleryJSON: Attribute.Component<'map-json.gallery-json', true>;
  };
}

export interface HeroFeatures extends Schema.Component {
  collectionName: 'components_hero_features';
  info: {
    displayName: 'features';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    shortDescription: Attribute.Text;
    imageUrl: Attribute.Text;
    image: Attribute.Media;
    assuredJSON: Attribute.Component<'map-json.assured-json', true>;
  };
}

export interface HeroHeroComponent extends Schema.Component {
  collectionName: 'components_hero_hero_components';
  info: {
    displayName: 'heroComponent';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.String;
    shortDescription: Attribute.Text;
    btnText: Attribute.String;
    btnHref: Attribute.String;
    imageUrl: Attribute.Text;
    heroImage: Attribute.Media;
  };
}

export interface HiringCloudBriefDeatail extends Schema.Component {
  collectionName: 'components_hiring_cloud_brief_deatails';
  info: {
    displayName: 'briefDeatail';
  };
  attributes: {
    ClientName: Attribute.String;
    ClientRole: Attribute.String;
    CompanyImage: Attribute.Media;
    CompanyImageUrl: Attribute.Text;
    ShortDescription: Attribute.Text;
  };
}

export interface HiringCloudHiringCloud extends Schema.Component {
  collectionName: 'components_hiring_cloud_hiring_clouds';
  info: {
    displayName: 'HiringCloud';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    shortDescription: Attribute.Text;
    btnText: Attribute.String;
    accelerate: Attribute.Boolean;
    hiringImage: Attribute.Media;
    HiringJSON: Attribute.Component<'map-json.hiring-json'>;
  };
}

export interface MapJsonAdvantageJson extends Schema.Component {
  collectionName: 'components_map_json_advantage_jsons';
  info: {
    displayName: 'advantageJSON';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface MapJsonAssuredJson extends Schema.Component {
  collectionName: 'components_map_json_assured_jsons';
  info: {
    displayName: 'assuredJSON';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media;
    iconUrl: Attribute.Text;
  };
}

export interface MapJsonCoursedetails extends Schema.Component {
  collectionName: 'components_map_json_coursedetails';
  info: {
    displayName: 'coursedetails';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    iconUrl: Attribute.Text;
    icon: Attribute.Media;
    courseDuration: Attribute.String;
    courseTotalHours: Attribute.String;
    courseType: Attribute.Enumeration<['Instructor Lead Class Room']>;
  };
}

export interface MapJsonDemoCourse extends Schema.Component {
  collectionName: 'components_map_json_demo_courses';
  info: {
    displayName: 'demoCourse';
  };
  attributes: {
    courseName: Attribute.String;
    city: Attribute.String;
    country: Attribute.String;
    demoDate: Attribute.Date;
    instructors: Attribute.Component<'map-json.demo-instructor', true>;
  };
}

export interface MapJsonDemoInstructor extends Schema.Component {
  collectionName: 'components_map_json_demo_instructors';
  info: {
    displayName: 'demoInstructor';
    description: '';
  };
  attributes: {
    instructorName: Attribute.String;
    position: Attribute.String;
    imageUrl: Attribute.Text;
    image: Attribute.Media;
    company: Attribute.String;
    bio: Attribute.Text;
  };
}

export interface MapJsonFaqJson extends Schema.Component {
  collectionName: 'components_map_json_faq_jsons';
  info: {
    displayName: 'FaqJSON';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.Text;
  };
}

export interface MapJsonFeatureJson extends Schema.Component {
  collectionName: 'components_map_json_feature_jsons';
  info: {
    displayName: 'featureJSON';
  };
  attributes: {
    title: Attribute.String;
    shortDescription: Attribute.Text;
  };
}

export interface MapJsonGalleryJson extends Schema.Component {
  collectionName: 'components_map_json_gallery_jsons';
  info: {
    displayName: 'galleryJSON';
  };
  attributes: {
    imageUrl: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface MapJsonHiringJson extends Schema.Component {
  collectionName: 'components_map_json_hiring_jsons';
  info: {
    displayName: 'HiringJSON';
  };
  attributes: {
    Image: Attribute.Media;
    imageUrl: Attribute.String;
  };
}

export interface MapJsonImageAndSubTitle extends Schema.Component {
  collectionName: 'components_map_json_image_and_sub_titles';
  info: {
    displayName: 'imageAndSubTitle';
  };
  attributes: {
    imageUrl: Attribute.Text;
    image: Attribute.Media;
    imageSubTitle: Attribute.String;
  };
}

export interface MapJsonJobsJson extends Schema.Component {
  collectionName: 'components_map_json_jobs_jsons';
  info: {
    displayName: 'jobsJSON';
  };
  attributes: {
    heading: Attribute.String;
    shortDescription: Attribute.Text;
    jobType: Attribute.String;
    location: Attribute.String;
    salaryRange: Attribute.String;
    jobStatus: Attribute.String;
  };
}

export interface MapJsonMembersJson extends Schema.Component {
  collectionName: 'components_map_json_members_jsons';
  info: {
    displayName: 'membersJSON';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Text;
    role: Attribute.String;
    linkedinUrl: Attribute.Text;
    twitterUrl: Attribute.Text;
  };
}

export interface MapJsonMentorJson extends Schema.Component {
  collectionName: 'components_map_json_mentor_jsons';
  info: {
    displayName: 'MentorJSON';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    imageUrl: Attribute.Text;
    role: Attribute.String;
    currentCompany: Attribute.String;
    companyLogo: Attribute.Text;
    experience: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    companyLogoImage: Attribute.Media;
  };
}

export interface MapJsonNewsJson extends Schema.Component {
  collectionName: 'components_map_json_news_jsons';
  info: {
    displayName: 'NewsJSON';
    description: '';
  };
  attributes: {
    desc: Attribute.RichText;
    createDate: Attribute.Date;
    authorName: Attribute.String;
    authorImageUrl: Attribute.Text;
    newsImageUrl: Attribute.Text;
    newsTitle: Attribute.Text;
    newsImage: Attribute.Media;
    authorImage: Attribute.Media;
    shortDescription: Attribute.Text;
  };
}

export interface MapJsonPartnerJson extends Schema.Component {
  collectionName: 'components_map_json_partner_jsons';
  info: {
    displayName: 'partnerJSON';
  };
  attributes: {
    name: Attribute.String;
    imageURL: Attribute.Text;
  };
}

export interface MapJsonStatsJson extends Schema.Component {
  collectionName: 'components_map_json_stats_jsons';
  info: {
    displayName: 'StatsJSON';
  };
  attributes: {
    title: Attribute.String;
    value: Attribute.String;
    image: Attribute.Media;
  };
}

export interface NotificationNotification extends Schema.Component {
  collectionName: 'components_notification_notifications';
  info: {
    displayName: 'notification';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    shortDescription: Attribute.String;
    read: Attribute.Boolean;
    createdDate: Attribute.Date & Attribute.Required;
    notificationType: Attribute.Enumeration<
      [
        'course',
        'general',
        'assignment',
        'test',
        'videos',
        'certification',
        'badges',
        'points'
      ]
    >;
    specificCourses: Attribute.Enumeration<
      [
        'mern',
        'java developer',
        'business analysis',
        'quality assurance',
        'data analytics',
        'data science',
        'aws',
        'devops',
        'salesforce'
      ]
    >;
  };
}

export interface OurTeamTeam extends Schema.Component {
  collectionName: 'components_our_team_teams';
  info: {
    displayName: 'team';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    shortDescription: Attribute.Text;
    memberImage: Attribute.Media;
    membersJSON: Attribute.Component<'map-json.members-json', true>;
  };
}

export interface PartnerlogoPartners extends Schema.Component {
  collectionName: 'components_partnerlogo_partners';
  info: {
    displayName: 'partners';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    partnersImage: Attribute.Media;
    partnersImageUrl: Attribute.Text;
    partnerJSON: Attribute.Component<'map-json.partner-json', true>;
  };
}

export interface PublicReviewTestimonial extends Schema.Component {
  collectionName: 'components_public_review_testimonials';
  info: {
    displayName: 'reviewTestimonial';
  };
  attributes: {
    clientName: Attribute.String;
    clientCompany: Attribute.String;
    clientTitle: Attribute.String;
    companyUrl: Attribute.Text;
    imageUrl: Attribute.Text;
    review: Attribute.Text;
  };
}

export interface PublicSuccessReviews extends Schema.Component {
  collectionName: 'components_public_success_reviews';
  info: {
    displayName: 'SuccessReviews';
  };
  attributes: {
    ClientName: Attribute.String;
    CompanyName: Attribute.String;
    ShortDescription: Attribute.Text;
    Rating: Attribute.Integer;
    CompanyLink: Attribute.Text;
    ClientRole: Attribute.String;
    ImageUrl: Attribute.Text;
  };
}

export interface PublicTestimonials extends Schema.Component {
  collectionName: 'components_public_testimonials';
  info: {
    displayName: 'Testimonials';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    marketjson: Attribute.Component<'map-json.assured-json', true>;
  };
}

export interface QaTypeQaType extends Schema.Component {
  collectionName: 'components_qa_type_qa_types';
  info: {
    displayName: 'qa-Type';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    marketJSON: Attribute.Component<'map-json.assured-json', true>;
  };
}

export interface ScheduleCourseSchedule extends Schema.Component {
  collectionName: 'components_schedule_course_schedules';
  info: {
    displayName: 'courseSchedule';
    description: '';
  };
  attributes: {
    demoDate: Attribute.Date;
    desc: Attribute.Text;
    city: Attribute.String;
    country: Attribute.String;
    cohortName: Attribute.String;
    schedule: Attribute.Component<'schedule.duration', true>;
    instructors: Attribute.Component<'map-json.demo-instructor', true>;
  };
}

export interface ScheduleDuration extends Schema.Component {
  collectionName: 'components_schedule_durations';
  info: {
    displayName: 'duration';
  };
  attributes: {
    day: Attribute.String;
    startTime: Attribute.Time;
    endTime: Attribute.Time;
  };
}

export interface ScheduleOpportunities extends Schema.Component {
  collectionName: 'components_schedule_opportunities';
  info: {
    displayName: 'opportunities';
    description: '';
  };
  attributes: {
    shortDescription: Attribute.Text;
    imageData: Attribute.Component<'map-json.image-and-sub-title', true>;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    MetaDescription: Attribute.Text;
    keywords: Attribute.Text;
  };
}

export interface UploadsResumeData extends Schema.Component {
  collectionName: 'components_uploads_resume_data';
  info: {
    displayName: 'resumeData';
  };
  attributes: {
    firstName: Attribute.String;
    lastName: Attribute.String;
    email: Attribute.Email;
    appliedDate: Attribute.DateTime;
    resume: Attribute.Media;
    phone: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'advantage.advantage-home': AdvantageAdvantageHome;
      'advantage.job-posting': AdvantageJobPosting;
      'assured.accelerated-career': AssuredAcceleratedCareer;
      'assured.assured': AssuredAssured;
      'community.community-data': CommunityCommunityData;
      'community.json': CommunityJson;
      'course.careercoach': CourseCareercoach;
      'course.finance': CourseFinance;
      'course.paytype': CoursePaytype;
      'course.points': CoursePoints;
      'course.variables': CourseVariables;
      'gallery.about-gallery': GalleryAboutGallery;
      'hero.features': HeroFeatures;
      'hero.hero-component': HeroHeroComponent;
      'hiring-cloud.brief-deatail': HiringCloudBriefDeatail;
      'hiring-cloud.hiring-cloud': HiringCloudHiringCloud;
      'map-json.advantage-json': MapJsonAdvantageJson;
      'map-json.assured-json': MapJsonAssuredJson;
      'map-json.coursedetails': MapJsonCoursedetails;
      'map-json.demo-course': MapJsonDemoCourse;
      'map-json.demo-instructor': MapJsonDemoInstructor;
      'map-json.faq-json': MapJsonFaqJson;
      'map-json.feature-json': MapJsonFeatureJson;
      'map-json.gallery-json': MapJsonGalleryJson;
      'map-json.hiring-json': MapJsonHiringJson;
      'map-json.image-and-sub-title': MapJsonImageAndSubTitle;
      'map-json.jobs-json': MapJsonJobsJson;
      'map-json.members-json': MapJsonMembersJson;
      'map-json.mentor-json': MapJsonMentorJson;
      'map-json.news-json': MapJsonNewsJson;
      'map-json.partner-json': MapJsonPartnerJson;
      'map-json.stats-json': MapJsonStatsJson;
      'notification.notification': NotificationNotification;
      'our-team.team': OurTeamTeam;
      'partnerlogo.partners': PartnerlogoPartners;
      'public.review-testimonial': PublicReviewTestimonial;
      'public.success-reviews': PublicSuccessReviews;
      'public.testimonials': PublicTestimonials;
      'qa-type.qa-type': QaTypeQaType;
      'schedule.course-schedule': ScheduleCourseSchedule;
      'schedule.duration': ScheduleDuration;
      'schedule.opportunities': ScheduleOpportunities;
      'seo.seo': SeoSeo;
      'uploads.resume-data': UploadsResumeData;
    }
  }
}
