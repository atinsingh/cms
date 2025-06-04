import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAcceleratedprogramPageAcceleratedprogramPage
  extends Schema.SingleType {
  collectionName: 'acceleratedprogram_pages';
  info: {
    singularName: 'acceleratedprogram-page';
    pluralName: 'acceleratedprogram-pages';
    displayName: 'AcceleratedprogramPage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    SeoAccelerated: Attribute.Component<'seo.seo'>;
    AcceleratedHero: Attribute.Component<'hero.hero-component'>;
    acceleratedHiringCloud: Attribute.Component<'hiring-cloud.hiring-cloud'>;
    acceleratedFeature: Attribute.Component<'assured.accelerated-career'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::acceleratedprogram-page.acceleratedprogram-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::acceleratedprogram-page.acceleratedprogram-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAnnouncementAnnouncement extends Schema.CollectionType {
  collectionName: 'announcements';
  info: {
    singularName: 'announcement';
    pluralName: 'announcements';
    displayName: 'lms-announcement';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    lms_course: Attribute.Relation<
      'api::announcement.announcement',
      'manyToOne',
      'api::lms-course.lms-course'
    >;
    lms_mentor: Attribute.Relation<
      'api::announcement.announcement',
      'oneToOne',
      'api::lms-mentor.lms-mentor'
    >;
    lms_users: Attribute.Relation<
      'api::announcement.announcement',
      'manyToMany',
      'api::lms-user.lms-user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::announcement.announcement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::announcement.announcement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCareerpathPageCareerpathPage extends Schema.SingleType {
  collectionName: 'careerpath_pages';
  info: {
    singularName: 'careerpath-page';
    pluralName: 'careerpath-pages';
    displayName: 'CareerpathPage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    SeoCareerPage: Attribute.Component<'seo.seo'>;
    CareerHero: Attribute.Component<'hero.hero-component'>;
    careerHiringCloud: Attribute.Component<'hiring-cloud.hiring-cloud'>;
    financialAssistance: Attribute.Component<'advantage.advantage-home'>;
    careerFeaturePath: Attribute.Component<'advantage.advantage-home'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::careerpath-page.careerpath-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::careerpath-page.careerpath-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCloudServicePageCloudServicePage extends Schema.SingleType {
  collectionName: 'cloud_service_pages';
  info: {
    singularName: 'cloud-service-page';
    pluralName: 'cloud-service-pages';
    displayName: 'CloudServicePage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seoServiceCloud: Attribute.Component<'seo.seo'>;
    partners: Attribute.Component<'partnerlogo.partners'>;
    Features: Attribute.Component<'hero.features'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cloud-service-page.cloud-service-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cloud-service-page.cloud-service-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCompanyCareerPageCompanyCareerPage
  extends Schema.SingleType {
  collectionName: 'company_career_pages';
  info: {
    singularName: 'company-career-page';
    pluralName: 'company-career-pages';
    displayName: 'CompanyCareerPage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    SeoCompanyCareer: Attribute.Component<'seo.seo'>;
    jobs: Attribute.Component<'advantage.job-posting'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::company-career-page.company-career-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::company-career-page.company-career-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEmployersPageEmployersPage extends Schema.SingleType {
  collectionName: 'employers_pages';
  info: {
    singularName: 'employers-page';
    pluralName: 'employers-pages';
    displayName: 'employersPage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    SeoEmployers: Attribute.Component<'seo.seo'>;
    employersHero: Attribute.Component<'hero.hero-component'>;
    employersFeature: Attribute.Component<'hero.features'>;
    employerProcess: Attribute.Component<'hero.features'>;
    pragraAdvantage: Attribute.Component<'advantage.advantage-home'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::employers-page.employers-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::employers-page.employers-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEnterprisePageEnterprisePage extends Schema.SingleType {
  collectionName: 'enterprise_pages';
  info: {
    singularName: 'enterprise-page';
    pluralName: 'enterprise-pages';
    displayName: 'enterprise-page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heroComponent: Attribute.Component<'enterprise.enterprise-hero'>;
    globalPartners: Attribute.Component<'partnerlogo.partners'>;
    featureData: Attribute.Component<'assured.assured', true>;
    partnersMarque: Attribute.Component<'schedule.opportunities'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::enterprise-page.enterprise-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::enterprise-page.enterprise-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEventsPageEventsPage extends Schema.CollectionType {
  collectionName: 'events_pages';
  info: {
    singularName: 'events-page';
    pluralName: 'events-pages';
    displayName: 'eventsPage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    courseName: Attribute.String;
    courseType: Attribute.String;
    description: Attribute.Text;
    startTime: Attribute.String;
    endTime: Attribute.String;
    duration: Attribute.String;
    coursePosterUrl: Attribute.Text;
    posterImage: Attribute.Media;
    date: Attribute.String;
    courseUrl: Attribute.Text;
    redirectUrl: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::events-page.events-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::events-page.events-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqPageFaqPage extends Schema.SingleType {
  collectionName: 'faq_pages';
  info: {
    singularName: 'faq-page';
    pluralName: 'faq-pages';
    displayName: 'FaqPage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    SeoFaq: Attribute.Component<'seo.seo'>;
    faqData: Attribute.Component<'map-json.faq-json', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faq-page.faq-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::faq-page.faq-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFinancialSupportFinancialSupport extends Schema.SingleType {
  collectionName: 'financial_supports';
  info: {
    singularName: 'financial-support';
    pluralName: 'financial-supports';
    displayName: 'FinancialSupport';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    features: Attribute.Component<'advantage.advantage-home'>;
    seoFinancialPage: Attribute.Component<'seo.seo'>;
    Faqs: Attribute.Component<'map-json.faq-json', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::financial-support.financial-support',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::financial-support.financial-support',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageHomePage extends Schema.SingleType {
  collectionName: 'home_pages';
  info: {
    singularName: 'home-page';
    pluralName: 'home-pages';
    displayName: 'homePage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Seo: Attribute.Component<'seo.seo'>;
    hero: Attribute.Component<'hero.hero-component'>;
    homeStats: Attribute.Component<'map-json.stats-json', true>;
    advantageHome: Attribute.Component<'advantage.advantage-home'>;
    assuredHome: Attribute.Component<'advantage.advantage-home'>;
    communityHome: Attribute.Component<'community.community-data'>;
    reviewTestimonial: Attribute.Component<'public.review-testimonial', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInterestInterest extends Schema.CollectionType {
  collectionName: 'interests';
  info: {
    singularName: 'interest';
    pluralName: 'interests';
    displayName: 'interest';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    interest: Attribute.String;
    lms_user: Attribute.Relation<
      'api::interest.interest',
      'manyToOne',
      'api::lms-user.lms-user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::interest.interest',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::interest.interest',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsBudgeLmsBudge extends Schema.CollectionType {
  collectionName: 'lms_budges';
  info: {
    singularName: 'lms-budge';
    pluralName: 'lms-budges';
    displayName: 'lms-budge';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    user_ID: Attribute.String;
    badge_name: Attribute.String;
    badge_url: Attribute.String;
    picture: Attribute.Media;
    lms_users: Attribute.Relation<
      'api::lms-budge.lms-budge',
      'manyToMany',
      'api::lms-user.lms-user'
    >;
    type: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-budge.lms-budge',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-budge.lms-budge',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsCertificateLmsCertificate extends Schema.CollectionType {
  collectionName: 'lms_certificates';
  info: {
    singularName: 'lms-certificate';
    pluralName: 'lms-certificates';
    displayName: 'lms-certificate';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    user_ID: Attribute.String;
    technology: Attribute.String;
    certificate_name: Attribute.String;
    certificate: Attribute.Media;
    lms_courses: Attribute.Relation<
      'api::lms-certificate.lms-certificate',
      'oneToMany',
      'api::lms-course.lms-course'
    >;
    description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-certificate.lms-certificate',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-certificate.lms-certificate',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsConversationLmsConversation
  extends Schema.CollectionType {
  collectionName: 'lms_conversations';
  info: {
    singularName: 'lms-conversation';
    pluralName: 'lms-conversations';
    displayName: 'lms-conversation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    lms_users: Attribute.Relation<
      'api::lms-conversation.lms-conversation',
      'manyToMany',
      'api::lms-user.lms-user'
    >;
    lms_messages: Attribute.Relation<
      'api::lms-conversation.lms-conversation',
      'manyToMany',
      'api::lms-message.lms-message'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-conversation.lms-conversation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-conversation.lms-conversation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsCourseLmsCourse extends Schema.CollectionType {
  collectionName: 'lms_courses';
  info: {
    singularName: 'lms-course';
    pluralName: 'lms-courses';
    displayName: 'lms-course';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    courseID: Attribute.String;
    technology: Attribute.String;
    level: Attribute.Integer;
    lms_lessons: Attribute.Relation<
      'api::lms-course.lms-course',
      'oneToMany',
      'api::lms-lesson.lms-lesson'
    >;
    lms_mentors: Attribute.Relation<
      'api::lms-course.lms-course',
      'manyToMany',
      'api::lms-mentor.lms-mentor'
    >;
    course_id: Attribute.UID;
    start_date: Attribute.DateTime;
    end_date: Attribute.DateTime;
    lms_modules: Attribute.Relation<
      'api::lms-course.lms-course',
      'oneToMany',
      'api::lms-module.lms-module'
    >;
    description: Attribute.Text;
    price: Attribute.Decimal;
    duration: Attribute.String;
    lms_quizs: Attribute.Relation<
      'api::lms-course.lms-course',
      'oneToMany',
      'api::quiz.quiz'
    >;
    lms_technologies: Attribute.Relation<
      'api::lms-course.lms-course',
      'oneToMany',
      'api::lms-technology.lms-technology'
    >;
    lms_quiz: Attribute.Relation<
      'api::lms-course.lms-course',
      'oneToOne',
      'api::quiz.quiz'
    >;
    lms_course_images: Attribute.Relation<
      'api::lms-course.lms-course',
      'manyToMany',
      'api::lms-course-image.lms-course-image'
    >;
    imageUrl: Attribute.Media;
    lms_certificate: Attribute.Relation<
      'api::lms-course.lms-course',
      'manyToOne',
      'api::lms-certificate.lms-certificate'
    >;
    announcements: Attribute.Relation<
      'api::lms-course.lms-course',
      'oneToMany',
      'api::announcement.announcement'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-course.lms-course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-course.lms-course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsCourseImageLmsCourseImage extends Schema.CollectionType {
  collectionName: 'lms_course_images';
  info: {
    singularName: 'lms-course-image';
    pluralName: 'lms-course-images';
    displayName: 'lms-course-image';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    course_image: Attribute.Media;
    lms_courses: Attribute.Relation<
      'api::lms-course-image.lms-course-image',
      'manyToMany',
      'api::lms-course.lms-course'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-course-image.lms-course-image',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-course-image.lms-course-image',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsExampleLmsExample extends Schema.CollectionType {
  collectionName: 'lms_examples';
  info: {
    singularName: 'lms-example';
    pluralName: 'lms-examples';
    displayName: 'lms-example';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    test_field: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-example.lms-example',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-example.lms-example',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsLessonLmsLesson extends Schema.CollectionType {
  collectionName: 'lms_lessons';
  info: {
    singularName: 'lms-lesson';
    pluralName: 'lms-lessons';
    displayName: 'lms-lesson';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    video: Attribute.Media;
    image: Attribute.Media;
    course_ID: Attribute.String;
    lesson_number: Attribute.Integer;
    finish: Attribute.Boolean;
    lesson_id: Attribute.UID;
    lms_users: Attribute.Relation<
      'api::lms-lesson.lms-lesson',
      'oneToMany',
      'api::lms-user.lms-user'
    >;
    duration: Attribute.Integer;
    type: Attribute.String;
    pdf: Attribute.Media;
    videoUrl: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-lesson.lms-lesson',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-lesson.lms-lesson',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsMentorLmsMentor extends Schema.CollectionType {
  collectionName: 'lms_mentors';
  info: {
    singularName: 'lms-mentor';
    pluralName: 'lms-mentors';
    displayName: 'lms-mentor';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    lastName: Attribute.String;
    mentor_id: Attribute.UID;
    profilePicture: Attribute.Media;
    lms_courses: Attribute.Relation<
      'api::lms-mentor.lms-mentor',
      'manyToMany',
      'api::lms-course.lms-course'
    >;
    lms_technologies: Attribute.Relation<
      'api::lms-mentor.lms-mentor',
      'manyToMany',
      'api::lms-technology.lms-technology'
    >;
    lms_user_type: Attribute.Relation<
      'api::lms-mentor.lms-mentor',
      'manyToOne',
      'api::lms-user-type.lms-user-type'
    >;
    uid: Attribute.Text;
    email: Attribute.String;
    description: Attribute.Text;
    ratings: Attribute.Decimal;
    announcement: Attribute.Relation<
      'api::lms-mentor.lms-mentor',
      'oneToOne',
      'api::announcement.announcement'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-mentor.lms-mentor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-mentor.lms-mentor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsMessageLmsMessage extends Schema.CollectionType {
  collectionName: 'lms_messages';
  info: {
    singularName: 'lms-message';
    pluralName: 'lms-messages';
    displayName: 'lms-message';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    from: Attribute.String;
    messages: Attribute.JSON;
    lms_user: Attribute.Relation<
      'api::lms-message.lms-message',
      'oneToOne',
      'api::lms-user.lms-user'
    >;
    to: Attribute.String;
    message: Attribute.String;
    lms_conversations: Attribute.Relation<
      'api::lms-message.lms-message',
      'manyToMany',
      'api::lms-conversation.lms-conversation'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-message.lms-message',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-message.lms-message',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsModuleLmsModule extends Schema.CollectionType {
  collectionName: 'lms_modules';
  info: {
    singularName: 'lms-module';
    pluralName: 'lms-modules';
    displayName: 'lms-module';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    module_id: Attribute.String;
    lms_lessons: Attribute.Relation<
      'api::lms-module.lms-module',
      'oneToMany',
      'api::lms-lesson.lms-lesson'
    >;
    module_name: Attribute.String;
    lms_quiz: Attribute.Relation<
      'api::lms-module.lms-module',
      'oneToOne',
      'api::quiz.quiz'
    >;
    lms_users: Attribute.Relation<
      'api::lms-module.lms-module',
      'oneToMany',
      'api::lms-user.lms-user'
    >;
    duration: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-module.lms-module',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-module.lms-module',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsNotificationLmsNotification
  extends Schema.CollectionType {
  collectionName: 'lms_notifications';
  info: {
    singularName: 'lms-notification';
    pluralName: 'lms-notifications';
    displayName: 'lms-notification';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    type: Attribute.String;
    lms_user: Attribute.Relation<
      'api::lms-notification.lms-notification',
      'manyToOne',
      'api::lms-user.lms-user'
    >;
    read: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-notification.lms-notification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-notification.lms-notification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsNotificationServiceLmsNotificationService
  extends Schema.CollectionType {
  collectionName: 'lms_notification_services';
  info: {
    singularName: 'lms-notification-service';
    pluralName: 'lms-notification-services';
    displayName: 'lms-notification-service';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    addNotification: Attribute.Component<'notification.notification', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-notification-service.lms-notification-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-notification-service.lms-notification-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsQuestionLmsQuestion extends Schema.CollectionType {
  collectionName: 'lms_questions';
  info: {
    singularName: 'lms-question';
    pluralName: 'lms-questions';
    displayName: 'lms-question';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    question: Attribute.Text;
    image: Attribute.Media;
    video: Attribute.Media;
    wrong_answer_1: Attribute.Text;
    wrong_answer_2: Attribute.Text;
    wrong_answer_3: Attribute.Text;
    correct_answer_1: Attribute.Text;
    lms_quiz: Attribute.Relation<
      'api::lms-question.lms-question',
      'manyToOne',
      'api::quiz.quiz'
    >;
    question_id: Attribute.UID;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-question.lms-question',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-question.lms-question',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsQuizzScoreLmsQuizzScore extends Schema.CollectionType {
  collectionName: 'lms_quizz_scores';
  info: {
    singularName: 'lms-quizz-score';
    pluralName: 'lms-quizz-scores';
    displayName: 'lms-quizz-score';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    score: Attribute.Decimal;
    lms_quiz: Attribute.Relation<
      'api::lms-quizz-score.lms-quizz-score',
      'oneToOne',
      'api::quiz.quiz'
    >;
    lms_user: Attribute.Relation<
      'api::lms-quizz-score.lms-quizz-score',
      'oneToOne',
      'api::lms-user.lms-user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-quizz-score.lms-quizz-score',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-quizz-score.lms-quizz-score',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsQuizzTrieLmsQuizzTrie extends Schema.CollectionType {
  collectionName: 'lms_quizz_tries';
  info: {
    singularName: 'lms-quizz-trie';
    pluralName: 'lms-quizz-tries';
    displayName: 'lms-quizz-trie';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    lms_quiz: Attribute.Relation<
      'api::lms-quizz-trie.lms-quizz-trie',
      'oneToOne',
      'api::quiz.quiz'
    >;
    lms_user: Attribute.Relation<
      'api::lms-quizz-trie.lms-quizz-trie',
      'oneToOne',
      'api::lms-user.lms-user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-quizz-trie.lms-quizz-trie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-quizz-trie.lms-quizz-trie',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsTechnologyLmsTechnology extends Schema.CollectionType {
  collectionName: 'lms_technologies';
  info: {
    singularName: 'lms-technology';
    pluralName: 'lms-technologies';
    displayName: 'lms-technology';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    technology: Attribute.String;
    lms_mentors: Attribute.Relation<
      'api::lms-technology.lms-technology',
      'manyToMany',
      'api::lms-mentor.lms-mentor'
    >;
    lms_course: Attribute.Relation<
      'api::lms-technology.lms-technology',
      'manyToOne',
      'api::lms-course.lms-course'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-technology.lms-technology',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-technology.lms-technology',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsUserLmsUser extends Schema.CollectionType {
  collectionName: 'lms_users';
  info: {
    singularName: 'lms-user';
    pluralName: 'lms-users';
    displayName: 'lms-user';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    user_ID: Attribute.String;
    name: Attribute.String;
    last_name: Attribute.String;
    email: Attribute.String;
    pass: Attribute.String;
    test: Attribute.String;
    profilePicture: Attribute.Media;
    userid: Attribute.UID;
    points: Attribute.BigInteger;
    lms_certificates: Attribute.Relation<
      'api::lms-user.lms-user',
      'oneToMany',
      'api::lms-certificate.lms-certificate'
    >;
    lms_user_courses: Attribute.Relation<
      'api::lms-user.lms-user',
      'oneToMany',
      'api::lms-user-course.lms-user-course'
    >;
    birth: Attribute.Date;
    street_name: Attribute.String;
    postal_code: Attribute.String;
    city: Attribute.String;
    country: Attribute.String;
    province: Attribute.String;
    phone: Attribute.String;
    CV: Attribute.Media;
    interests: Attribute.Relation<
      'api::lms-user.lms-user',
      'oneToMany',
      'api::interest.interest'
    >;
    academic_qualifications: Attribute.Text;
    lms_user_type: Attribute.Relation<
      'api::lms-user.lms-user',
      'manyToOne',
      'api::lms-user-type.lms-user-type'
    >;
    lms_budges: Attribute.Relation<
      'api::lms-user.lms-user',
      'manyToMany',
      'api::lms-budge.lms-budge'
    >;
    lms_notification_services: Attribute.Relation<
      'api::lms-user.lms-user',
      'oneToMany',
      'api::lms-notification-service.lms-notification-service'
    >;
    announcements: Attribute.Relation<
      'api::lms-user.lms-user',
      'manyToMany',
      'api::announcement.announcement'
    >;
    lms_notifications: Attribute.Relation<
      'api::lms-user.lms-user',
      'oneToMany',
      'api::lms-notification.lms-notification'
    >;
    lms_conversations: Attribute.Relation<
      'api::lms-user.lms-user',
      'manyToMany',
      'api::lms-conversation.lms-conversation'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-user.lms-user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-user.lms-user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsUserCourseLmsUserCourse extends Schema.CollectionType {
  collectionName: 'lms-user_courses';
  info: {
    singularName: 'lms-user-course';
    pluralName: 'lms-user-courses';
    displayName: 'lms-user-course';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    user_ID: Attribute.String;
    courseID: Attribute.String;
    finish: Attribute.Boolean & Attribute.DefaultTo<false>;
    lesson1: Attribute.Boolean;
    lesson2: Attribute.Boolean;
    lesson3: Attribute.Boolean;
    lesson4: Attribute.Boolean;
    lesson5: Attribute.Boolean;
    lesson6: Attribute.Boolean;
    lesson7: Attribute.Boolean;
    lesson8: Attribute.Boolean;
    lesson9: Attribute.Boolean;
    lesson10: Attribute.Boolean;
    lms_lessons: Attribute.Relation<
      'api::lms-user-course.lms-user-course',
      'oneToMany',
      'api::lms-lesson.lms-lesson'
    >;
    user_coruse_id: Attribute.UID;
    start_date: Attribute.DateTime;
    end_date: Attribute.DateTime;
    lms_course: Attribute.Relation<
      'api::lms-user-course.lms-user-course',
      'oneToOne',
      'api::lms-course.lms-course'
    >;
    percentage: Attribute.Decimal;
    name: Attribute.String;
    imageUrl: Attribute.String;
    total_lessons: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-user-course.lms-user-course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-user-course.lms-user-course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLmsUserTypeLmsUserType extends Schema.CollectionType {
  collectionName: 'lms_user_types';
  info: {
    singularName: 'lms-user-type';
    pluralName: 'lms-user-types';
    displayName: 'lms-user-type';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    type: Attribute.String;
    lms_users: Attribute.Relation<
      'api::lms-user-type.lms-user-type',
      'oneToMany',
      'api::lms-user.lms-user'
    >;
    lms_mentors: Attribute.Relation<
      'api::lms-user-type.lms-user-type',
      'oneToMany',
      'api::lms-mentor.lms-mentor'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lms-user-type.lms-user-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lms-user-type.lms-user-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMentorMentor extends Schema.CollectionType {
  collectionName: 'mentors';
  info: {
    singularName: 'mentor';
    pluralName: 'mentors';
    displayName: 'mentor';
  };
  options: {
    draftAndPublish: true;
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
    tech_tut: Attribute.Relation<
      'api::mentor.mentor',
      'manyToOne',
      'api::tech-tut.tech-tut'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::mentor.mentor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::mentor.mentor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewsPageNewsPage extends Schema.CollectionType {
  collectionName: 'news_pages';
  info: {
    singularName: 'news-page';
    pluralName: 'news-pages';
    displayName: 'newsPage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    newsData: Attribute.Component<'map-json.news-json'>;
    SeoNews: Attribute.Component<'seo.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::news-page.news-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::news-page.news-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiQuizQuiz extends Schema.CollectionType {
  collectionName: 'quizzes';
  info: {
    singularName: 'quiz';
    pluralName: 'quizzes';
    displayName: 'lms-quiz';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    quizz_title: Attribute.String;
    course_ID: Attribute.String;
    lms_questions: Attribute.Relation<
      'api::quiz.quiz',
      'oneToMany',
      'api::lms-question.lms-question'
    >;
    lms_module: Attribute.Relation<
      'api::quiz.quiz',
      'oneToOne',
      'api::lms-module.lms-module'
    >;
    lms_quizz_score: Attribute.Relation<
      'api::quiz.quiz',
      'oneToOne',
      'api::lms-quizz-score.lms-quizz-score'
    >;
    lms_user: Attribute.Relation<
      'api::quiz.quiz',
      'oneToOne',
      'api::lms-user.lms-user'
    >;
    max_tries: Attribute.Integer;
    lms_quizz_trie: Attribute.Relation<
      'api::quiz.quiz',
      'oneToOne',
      'api::lms-quizz-trie.lms-quizz-trie'
    >;
    lms_course: Attribute.Relation<
      'api::quiz.quiz',
      'oneToOne',
      'api::lms-course.lms-course'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::quiz.quiz', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::quiz.quiz', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiReskillPageReskillPage extends Schema.SingleType {
  collectionName: 'reskill_pages';
  info: {
    singularName: 'reskill-page';
    pluralName: 'reskill-pages';
    displayName: 'ReskillPage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    SeoReskillPage: Attribute.Component<'seo.seo'>;
    ReskillHero: Attribute.Component<'hero.hero-component'>;
    companyBrief: Attribute.Component<'hiring-cloud.brief-deatail'>;
    reskillSteps: Attribute.Component<'assured.assured'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::reskill-page.reskill-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::reskill-page.reskill-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiResumeUploadResumeUpload extends Schema.CollectionType {
  collectionName: 'resume_uploads';
  info: {
    singularName: 'resume-upload';
    pluralName: 'resume-uploads';
    displayName: 'resumeUpload';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    firstName: Attribute.String;
    lastName: Attribute.String;
    email: Attribute.Email;
    phone: Attribute.BigInteger;
    resume: Attribute.Media;
    country: Attribute.String;
    tenthPercentage: Attribute.String;
    twelvethPercentage: Attribute.String;
    highestQualification: Attribute.String;
    graduationPercentage: Attribute.String;
    createdDate: Attribute.String;
    collegeName: Attribute.String;
    state: Attribute.String;
    graduationYear: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::resume-upload.resume-upload',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::resume-upload.resume-upload',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiScheduleDemoScheduleDemo extends Schema.CollectionType {
  collectionName: 'schedule_demos';
  info: {
    singularName: 'schedule-demo';
    pluralName: 'schedule-demos';
    displayName: 'scheduleDemo';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    canonicalName: Attribute.String;
    courseName: Attribute.String;
    courseType: Attribute.String;
    cohorts: Attribute.Component<'map-json.demo-course', true>;
    courseImage: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::schedule-demo.schedule-demo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::schedule-demo.schedule-demo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeoAboutSeoAbout extends Schema.SingleType {
  collectionName: 'seo_abouts';
  info: {
    singularName: 'seo-about';
    pluralName: 'seo-abouts';
    displayName: 'AboutPage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    SeoAbout: Attribute.Component<'seo.seo'>;
    pageHeader: Attribute.String;
    longDescription: Attribute.Text;
    AboutGallery: Attribute.Component<'gallery.about-gallery'>;
    aboutPartner: Attribute.Component<'partnerlogo.partners'>;
    ourTeam: Attribute.Component<'our-team.team'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seo-about.seo-about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seo-about.seo-about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeperateBlogSeperateBlog extends Schema.CollectionType {
  collectionName: 'seperate_blogs';
  info: {
    singularName: 'seperate-blog';
    pluralName: 'seperate-blogs';
    displayName: 'seperateBlog';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    authorTitle: Attribute.String;
    authorName: Attribute.String;
    blogTitle: Attribute.String;
    shortDescription: Attribute.Text;
    blogContent: Attribute.RichText;
    category: Attribute.String;
    blogImageUrl: Attribute.Text;
    slug: Attribute.UID<'api::seperate-blog.seperate-blog', 'blogTitle'> &
      Attribute.Required;
    authorImageUrl: Attribute.Text;
    blogDate: Attribute.Date;
    blogImageUrl2: Attribute.Text;
    seoBlogs: Attribute.Component<'seo.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seperate-blog.seperate-blog',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seperate-blog.seperate-blog',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeperateCareerSeperateCareer extends Schema.CollectionType {
  collectionName: 'seperate_careers';
  info: {
    singularName: 'seperate-career';
    pluralName: 'seperate-careers';
    displayName: 'SeperateCareer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Attribute.String;
    ShortDescription: Attribute.Text;
    JobType: Attribute.String;
    Location: Attribute.String;
    SalaryRange: Attribute.String;
    JobStatus: Attribute.String;
    JobDescription: Attribute.RichText;
    slug: Attribute.UID<'api::seperate-career.seperate-career', 'heading'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seperate-career.seperate-career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seperate-career.seperate-career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServicesConsultingServicesConsulting
  extends Schema.SingleType {
  collectionName: 'services_consultings';
  info: {
    singularName: 'services-consulting';
    pluralName: 'services-consultings';
    displayName: 'ServicesConsulting';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    SeoConsulting: Attribute.Component<'seo.seo'>;
    pageHeader: Attribute.String;
    qaType: Attribute.Component<'qa-type.qa-type'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::services-consulting.services-consulting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::services-consulting.services-consulting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServicesDevelopmentQaPageServicesDevelopmentQaPage
  extends Schema.SingleType {
  collectionName: 'services_development_qa_pages';
  info: {
    singularName: 'services-development-qa-page';
    pluralName: 'services-development-qa-pages';
    displayName: 'ServicesDevelopmentQaPage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    seoDevelopmentQa: Attribute.Component<'seo.seo'>;
    pageHeader: Attribute.String;
    testingService: Attribute.Component<'advantage.advantage-home'>;
    FocusFeature: Attribute.Component<'public.testimonials'>;
    Features: Attribute.Component<'public.testimonials'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::services-development-qa-page.services-development-qa-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::services-development-qa-page.services-development-qa-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSkilldevelopmentPageSkilldevelopmentPage
  extends Schema.CollectionType {
  collectionName: 'skilldevelopment_pages';
  info: {
    singularName: 'skilldevelopment-page';
    pluralName: 'skilldevelopment-pages';
    displayName: 'skilldevelopmentPage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    canonicalName: Attribute.String;
    courseName: Attribute.String;
    courseType: Attribute.String;
    deliveryMode: Attribute.String;
    shortDescription: Attribute.Text;
    imageUrl: Attribute.Text;
    image: Attribute.Media;
    slug: Attribute.UID<
      'api::skilldevelopment-page.skilldevelopment-page',
      'canonicalName'
    > &
      Attribute.Required;
    curriculam: Attribute.Component<'map-json.advantage-json', true>;
    marketOverview: Attribute.Component<'map-json.assured-json', true>;
    faqs: Attribute.Component<'map-json.faq-json', true>;
    review: Attribute.Component<'public.review-testimonial'>;
    cohorts: Attribute.Component<'schedule.course-schedule', true>;
    mentors: Attribute.Component<'map-json.members-json', true>;
    careerOpportunities: Attribute.Component<'schedule.opportunities'>;
    careerCoach: Attribute.Component<'course.careercoach'>;
    finance: Attribute.Component<'course.finance'>;
    seoCourse: Attribute.Component<'seo.seo'>;
    techStacks: Attribute.Component<'partnerlogo.partners'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::skilldevelopment-page.skilldevelopment-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::skilldevelopment-page.skilldevelopment-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSuccessStoriesPageSuccessStoriesPage
  extends Schema.SingleType {
  collectionName: 'success_stories_pages';
  info: {
    singularName: 'success-stories-page';
    pluralName: 'success-stories-pages';
    displayName: 'SuccessStoriesPage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    SeoSuccess: Attribute.Component<'seo.seo'>;
    ClientReviews: Attribute.Component<'public.success-reviews', true>;
    reviewTestimonial: Attribute.Component<'public.review-testimonial', true>;
    StudentReviewedVideo: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::success-stories-page.success-stories-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::success-stories-page.success-stories-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTalentFactoryPageTalentFactoryPage
  extends Schema.SingleType {
  collectionName: 'talent_factory_pages';
  info: {
    singularName: 'talent-factory-page';
    pluralName: 'talent-factory-pages';
    displayName: 'TalentFactoryPage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    talentSeo: Attribute.Component<'seo.seo'>;
    talentFactoryHero: Attribute.Component<'hero.hero-component'>;
    hireTalent: Attribute.Component<'assured.assured'>;
    assessmentProcess: Attribute.Component<'advantage.advantage-home'>;
    hiringSolution: Attribute.Component<'advantage.advantage-home'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::talent-factory-page.talent-factory-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::talent-factory-page.talent-factory-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTechTutTechTut extends Schema.CollectionType {
  collectionName: 'tech_tuts';
  info: {
    singularName: 'tech-tut';
    pluralName: 'tech-tuts';
    displayName: 'techtuts';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    slug: Attribute.UID<'api::tech-tut.tech-tut', 'title'>;
    title: Attribute.String & Attribute.Required;
    shortDesc: Attribute.Text;
    tutorial: Attribute.RichText;
    create_date: Attribute.Date;
    mentors: Attribute.Relation<
      'api::tech-tut.tech-tut',
      'oneToMany',
      'api::mentor.mentor'
    >;
    images: Attribute.Media;
    coverphoto: Attribute.Media;
    thumbnail: Attribute.Media;
    author: Attribute.String;
    authorImageUrl: Attribute.Text;
    authorImage: Attribute.Media;
    position: Attribute.String;
    buttonText: Attribute.String;
    tags: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tech-tut.tech-tut',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tech-tut.tech-tut',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTermsPrivacyPageTermsPrivacyPage extends Schema.SingleType {
  collectionName: 'terms_privacy_pages';
  info: {
    singularName: 'terms-privacy-page';
    pluralName: 'terms-privacy-pages';
    displayName: 'TermsPrivacyPage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    SeoPrivacyandTerms: Attribute.Component<'seo.seo'>;
    contents: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::terms-privacy-page.terms-privacy-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::terms-privacy-page.terms-privacy-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTutorialPageTutorialPage extends Schema.CollectionType {
  collectionName: 'tutorial_pages';
  info: {
    singularName: 'tutorial-page';
    pluralName: 'tutorial-pages';
    displayName: 'tutorialPage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    courseName: Attribute.String;
    slug: Attribute.UID<'api::tutorial-page.tutorial-page', 'courseName'>;
    contents: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tutorial-page.tutorial-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tutorial-page.tutorial-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::acceleratedprogram-page.acceleratedprogram-page': ApiAcceleratedprogramPageAcceleratedprogramPage;
      'api::announcement.announcement': ApiAnnouncementAnnouncement;
      'api::careerpath-page.careerpath-page': ApiCareerpathPageCareerpathPage;
      'api::cloud-service-page.cloud-service-page': ApiCloudServicePageCloudServicePage;
      'api::company-career-page.company-career-page': ApiCompanyCareerPageCompanyCareerPage;
      'api::employers-page.employers-page': ApiEmployersPageEmployersPage;
      'api::enterprise-page.enterprise-page': ApiEnterprisePageEnterprisePage;
      'api::events-page.events-page': ApiEventsPageEventsPage;
      'api::faq-page.faq-page': ApiFaqPageFaqPage;
      'api::financial-support.financial-support': ApiFinancialSupportFinancialSupport;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::interest.interest': ApiInterestInterest;
      'api::lms-budge.lms-budge': ApiLmsBudgeLmsBudge;
      'api::lms-certificate.lms-certificate': ApiLmsCertificateLmsCertificate;
      'api::lms-conversation.lms-conversation': ApiLmsConversationLmsConversation;
      'api::lms-course.lms-course': ApiLmsCourseLmsCourse;
      'api::lms-course-image.lms-course-image': ApiLmsCourseImageLmsCourseImage;
      'api::lms-example.lms-example': ApiLmsExampleLmsExample;
      'api::lms-lesson.lms-lesson': ApiLmsLessonLmsLesson;
      'api::lms-mentor.lms-mentor': ApiLmsMentorLmsMentor;
      'api::lms-message.lms-message': ApiLmsMessageLmsMessage;
      'api::lms-module.lms-module': ApiLmsModuleLmsModule;
      'api::lms-notification.lms-notification': ApiLmsNotificationLmsNotification;
      'api::lms-notification-service.lms-notification-service': ApiLmsNotificationServiceLmsNotificationService;
      'api::lms-question.lms-question': ApiLmsQuestionLmsQuestion;
      'api::lms-quizz-score.lms-quizz-score': ApiLmsQuizzScoreLmsQuizzScore;
      'api::lms-quizz-trie.lms-quizz-trie': ApiLmsQuizzTrieLmsQuizzTrie;
      'api::lms-technology.lms-technology': ApiLmsTechnologyLmsTechnology;
      'api::lms-user.lms-user': ApiLmsUserLmsUser;
      'api::lms-user-course.lms-user-course': ApiLmsUserCourseLmsUserCourse;
      'api::lms-user-type.lms-user-type': ApiLmsUserTypeLmsUserType;
      'api::mentor.mentor': ApiMentorMentor;
      'api::news-page.news-page': ApiNewsPageNewsPage;
      'api::quiz.quiz': ApiQuizQuiz;
      'api::reskill-page.reskill-page': ApiReskillPageReskillPage;
      'api::resume-upload.resume-upload': ApiResumeUploadResumeUpload;
      'api::schedule-demo.schedule-demo': ApiScheduleDemoScheduleDemo;
      'api::seo-about.seo-about': ApiSeoAboutSeoAbout;
      'api::seperate-blog.seperate-blog': ApiSeperateBlogSeperateBlog;
      'api::seperate-career.seperate-career': ApiSeperateCareerSeperateCareer;
      'api::services-consulting.services-consulting': ApiServicesConsultingServicesConsulting;
      'api::services-development-qa-page.services-development-qa-page': ApiServicesDevelopmentQaPageServicesDevelopmentQaPage;
      'api::skilldevelopment-page.skilldevelopment-page': ApiSkilldevelopmentPageSkilldevelopmentPage;
      'api::success-stories-page.success-stories-page': ApiSuccessStoriesPageSuccessStoriesPage;
      'api::talent-factory-page.talent-factory-page': ApiTalentFactoryPageTalentFactoryPage;
      'api::tech-tut.tech-tut': ApiTechTutTechTut;
      'api::terms-privacy-page.terms-privacy-page': ApiTermsPrivacyPageTermsPrivacyPage;
      'api::tutorial-page.tutorial-page': ApiTutorialPageTutorialPage;
    }
  }
}
