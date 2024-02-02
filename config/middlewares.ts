export default [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

module.exports = ({ env }) => ({
  settings: {
    parser: {
      enabled: true,
      multipart: true,
      formidable: {
        maxFileSize:  2.5 * 1024 * 1024, // Adjust the value according to your needs (100MB in this example)
      },
    },
  },
});