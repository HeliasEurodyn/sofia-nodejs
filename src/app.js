const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const sofiaRoutes = require('./routes/sofiaRoutes');
app.use('/api/sofia', sofiaRoutes);

/* SOFIA CMS GENERATED CODE - START */



/* LIST 3a2499ab-082d-4cb5-8cb1-3062044bd405 - START */
const MessagesListRoutes = require('../routes/list/MessagesListRoutes');
app.use('/api/list/3a2499ab-082d-4cb5-8cb1-3062044bd405', MessagesListRoutes);
/* LIST 3a2499ab-082d-4cb5-8cb1-3062044bd405 - END */






/* LIST 5c6d8a23-e37b-4bfa-9a78-dd459b6687ad - START */
const MessageReceivedDashboardListRoutes = require('../routes/list/MessageReceivedDashboardListRoutes');
app.use('/api/list/5c6d8a23-e37b-4bfa-9a78-dd459b6687ad', MessageReceivedDashboardListRoutes);
/* LIST 5c6d8a23-e37b-4bfa-9a78-dd459b6687ad - END */






/* LIST b530782b-9530-4cd1-b2fe-a96507982f0e - START */
const MessagesReceivedListRoutes = require('../routes/list/MessagesReceivedListRoutes');
app.use('/api/list/b530782b-9530-4cd1-b2fe-a96507982f0e', MessagesReceivedListRoutes);
/* LIST b530782b-9530-4cd1-b2fe-a96507982f0e - END */






/* LIST cf7b5a31-4daa-40fd-9bc0-16023f1ec6a2 - START */
const MessagesDashboardListRoutes = require('../routes/list/MessagesDashboardListRoutes');
app.use('/api/list/cf7b5a31-4daa-40fd-9bc0-16023f1ec6a2', MessagesDashboardListRoutes);
/* LIST cf7b5a31-4daa-40fd-9bc0-16023f1ec6a2 - END */






/* LIST 9b592eda-970e-4b83-9664-249c5d0177d5 - START */
const ConsumeDataListRoutes = require('../routes/list/ConsumeDataListRoutes');
app.use('/api/list/consume-data', ConsumeDataListRoutes);
/* LIST 9b592eda-970e-4b83-9664-249c5d0177d5 - END */






/* LIST b2f30c5c-c513-4917-9483-bd5df748e57a - START */
const ConsumeDataGalleryListRoutes = require('../routes/list/ConsumeDataGalleryListRoutes');
app.use('/api/list/b2f30c5c-c513-4917-9483-bd5df748e57a', ConsumeDataGalleryListRoutes);
/* LIST b2f30c5c-c513-4917-9483-bd5df748e57a - END */






/* LIST 7c208ba6-662f-4353-acd9-06b15cdfb8fa - START */
const BusinessTagSelectorListRoutes = require('../routes/list/BusinessTagSelectorListRoutes');
app.use('/api/list/7c208ba6-662f-4353-acd9-06b15cdfb8fa', BusinessTagSelectorListRoutes);
/* LIST 7c208ba6-662f-4353-acd9-06b15cdfb8fa - END */






/* LIST 92255481-5d8b-4ea1-afea-16b060ef6002 - START */
const BusinessTagsListRoutes = require('../routes/list/BusinessTagsListRoutes');
app.use('/api/list/92255481-5d8b-4ea1-afea-16b060ef6002', BusinessTagsListRoutes);
/* LIST 92255481-5d8b-4ea1-afea-16b060ef6002 - END */






/* LIST 0e4f7bbc-dc73-454b-9738-c009fbc8a6aa - START */
const CountriesListRoutes = require('../routes/list/CountriesListRoutes');
app.use('/api/list/0e4f7bbc-dc73-454b-9738-c009fbc8a6aa', CountriesListRoutes);
/* LIST 0e4f7bbc-dc73-454b-9738-c009fbc8a6aa - END */






/* LIST 356af82d-11bd-47b7-aadd-3273f9d174d0 - START */
const CountriesSelectorListRoutes = require('../routes/list/CountriesSelectorListRoutes');
app.use('/api/list/356af82d-11bd-47b7-aadd-3273f9d174d0', CountriesSelectorListRoutes);
/* LIST 356af82d-11bd-47b7-aadd-3273f9d174d0 - END */






/* LIST 36f3b704-9a94-4b44-9740-fbce121e6b76 - START */
const CategoriesListRoutes = require('../routes/list/CategoriesListRoutes');
app.use('/api/list/36f3b704-9a94-4b44-9740-fbce121e6b76', CategoriesListRoutes);
/* LIST 36f3b704-9a94-4b44-9740-fbce121e6b76 - END */






/* LIST 60630e57-4f56-480d-91de-c4e2ec083d0a - START */
const DataCatalogueCategorySelectorListRoutes = require('../routes/list/DataCatalogueCategorySelectorListRoutes');
app.use('/api/list/60630e57-4f56-480d-91de-c4e2ec083d0a', DataCatalogueCategorySelectorListRoutes);
/* LIST 60630e57-4f56-480d-91de-c4e2ec083d0a - END */






/* LIST d895bda8-9da5-4263-a7bf-ea678267b72b - START */
const DataCatalogueCategoryApiListRoutes = require('../routes/list/DataCatalogueCategoryApiListRoutes');
app.use('/api/list/cross_platform_service_categories', DataCatalogueCategoryApiListRoutes);
/* LIST d895bda8-9da5-4263-a7bf-ea678267b72b - END */






/* LIST 0822a139-5367-44c7-b958-debdae8e0cc3 - START */
const MySubscriptionsApiListRoutes = require('../routes/list/MySubscriptionsApiListRoutes');
app.use('/api/list/my_subscriptions', MySubscriptionsApiListRoutes);
/* LIST 0822a139-5367-44c7-b958-debdae8e0cc3 - END */






/* LIST 607fe472-e51d-44c5-a9c3-ba8ec09208d0 - START */
const RequestsListRoutes = require('../routes/list/RequestsListRoutes');
app.use('/api/list/requests_on_offered_services', RequestsListRoutes);
/* LIST 607fe472-e51d-44c5-a9c3-ba8ec09208d0 - END */






/* LIST 924ecd9b-820c-43a4-abe7-161f49c0909c - START */
const RequestsAdminListRoutes = require('../routes/list/RequestsAdminListRoutes');
app.use('/api/list/924ecd9b-820c-43a4-abe7-161f49c0909c', RequestsAdminListRoutes);
/* LIST 924ecd9b-820c-43a4-abe7-161f49c0909c - END */






/* LIST 9c4e7981-e44e-4659-96ab-7505baf8559a - START */
const MySubscriptionsListRoutes = require('../routes/list/MySubscriptionsListRoutes');
app.use('/api/list/9c4e7981-e44e-4659-96ab-7505baf8559a', MySubscriptionsListRoutes);
/* LIST 9c4e7981-e44e-4659-96ab-7505baf8559a - END */






/* LIST 58d1ed87-b844-4e83-88d2-515e44552aa7 - START */
const ClustersSelectorListRoutes = require('../routes/list/ClustersSelectorListRoutes');
app.use('/api/list/58d1ed87-b844-4e83-88d2-515e44552aa7', ClustersSelectorListRoutes);
/* LIST 58d1ed87-b844-4e83-88d2-515e44552aa7 - END */






/* LIST b1e55db3-22be-4460-832d-41d80af8fd6b - START */
const ClustersListRoutes = require('../routes/list/ClustersListRoutes');
app.use('/api/list/b1e55db3-22be-4460-832d-41d80af8fd6b', ClustersListRoutes);
/* LIST b1e55db3-22be-4460-832d-41d80af8fd6b - END */






/* LIST 1dcc18cd-dfb7-4ac3-a2b1-5433e3437cf0 - START */
const DataConsumedForLocalApiListRoutes = require('../routes/list/DataConsumedForLocalApiListRoutes');
app.use('/api/list/data_consumed', DataConsumedForLocalApiListRoutes);
/* LIST 1dcc18cd-dfb7-4ac3-a2b1-5433e3437cf0 - END */






/* LIST 99b8c68b-ab79-4641-84a9-ff12194b00cd - START */
const DataTransactionsPivotListRoutes = require('../routes/list/DataTransactionsPivotListRoutes');
app.use('/api/list/99b8c68b-ab79-4641-84a9-ff12194b00cd', DataTransactionsPivotListRoutes);
/* LIST 99b8c68b-ab79-4641-84a9-ff12194b00cd - END */






/* LIST c03d282a-b524-438c-ab0e-b66017924439 - START */
const DataConsumedDashboardListRoutes = require('../routes/list/DataConsumedDashboardListRoutes');
app.use('/api/list/c03d282a-b524-438c-ab0e-b66017924439', DataConsumedDashboardListRoutes);
/* LIST c03d282a-b524-438c-ab0e-b66017924439 - END */






/* LIST f2c905fe-6597-4dd5-b648-7d76d07c787f - START */
const ConsumeDataListRoutes = require('../routes/list/ConsumeDataListRoutes');
app.use('/api/list/f2c905fe-6597-4dd5-b648-7d76d07c787f', ConsumeDataListRoutes);
/* LIST f2c905fe-6597-4dd5-b648-7d76d07c787f - END */






/* LIST 2e5776ec-0f54-4540-94ba-76f9ead579bd - START */
const ProcessTagsSelectorListRoutes = require('../routes/list/ProcessTagsSelectorListRoutes');
app.use('/api/list/2e5776ec-0f54-4540-94ba-76f9ead579bd', ProcessTagsSelectorListRoutes);
/* LIST 2e5776ec-0f54-4540-94ba-76f9ead579bd - END */






/* LIST b31282f2-6d58-4a2f-8bbf-d2802b9fe88c - START */
const ProcessTagsListRoutes = require('../routes/list/ProcessTagsListRoutes');
app.use('/api/list/b31282f2-6d58-4a2f-8bbf-d2802b9fe88c', ProcessTagsListRoutes);
/* LIST b31282f2-6d58-4a2f-8bbf-d2802b9fe88c - END */






/* LIST 4e0959bf-025d-4e58-8316-0a9495874366 - START */
const MySubscriptionsGalleryListRoutes = require('../routes/list/MySubscriptionsGalleryListRoutes');
app.use('/api/list/subscribed', MySubscriptionsGalleryListRoutes);
/* LIST 4e0959bf-025d-4e58-8316-0a9495874366 - END */






/* LIST c2314383-7917-41cd-8413-5812e5ac67dc - START */
const SubscriptionsListRoutes = require('../routes/list/SubscriptionsListRoutes');
app.use('/api/list/c2314383-7917-41cd-8413-5812e5ac67dc', SubscriptionsListRoutes);
/* LIST c2314383-7917-41cd-8413-5812e5ac67dc - END */






/* LIST c4495a90-be2c-4060-a2fe-fb2e46407350 - START */
const IncomingRequestsListRoutes = require('../routes/list/IncomingRequestsListRoutes');
app.use('/api/list/request-to-my-offerings', IncomingRequestsListRoutes);
/* LIST c4495a90-be2c-4060-a2fe-fb2e46407350 - END */






/* LIST a00dc4e2-b8e3-472e-829f-32b30d44f0b6 - START */
const WizardsListRoutes = require('../routes/list/WizardsListRoutes');
app.use('/api/list/a00dc4e2-b8e3-472e-829f-32b30d44f0b6', WizardsListRoutes);
/* LIST a00dc4e2-b8e3-472e-829f-32b30d44f0b6 - END */






/* LIST da1bec62-fe3b-4516-8b59-0e352d9f6461 - START */
const ProvideDataListRoutes = require('../routes/list/ProvideDataListRoutes');
app.use('/api/list/provide-data', ProvideDataListRoutes);
/* LIST da1bec62-fe3b-4516-8b59-0e352d9f6461 - END */






/* LIST 07dafa14-c2ab-4a47-bb29-4e55241a65a9 - START */
const ServiceSelectorListRoutes = require('../routes/list/ServiceSelectorListRoutes');
app.use('/api/list/07dafa14-c2ab-4a47-bb29-4e55241a65a9', ServiceSelectorListRoutes);
/* LIST 07dafa14-c2ab-4a47-bb29-4e55241a65a9 - END */






/* LIST 158958b5-d816-4c6d-bafe-eb6235cb4e69 - START */
const ServiceListRoutes = require('../routes/list/ServiceListRoutes');
app.use('/api/list/158958b5-d816-4c6d-bafe-eb6235cb4e69', ServiceListRoutes);
/* LIST 158958b5-d816-4c6d-bafe-eb6235cb4e69 - END */






/* LIST f145ad3b-8b92-4e74-9af5-b16916bab93f - START */
const ServiceDashboardListRoutes = require('../routes/list/ServiceDashboardListRoutes');
app.use('/api/list/f145ad3b-8b92-4e74-9af5-b16916bab93f', ServiceDashboardListRoutes);
/* LIST f145ad3b-8b92-4e74-9af5-b16916bab93f - END */






/* LIST 6806cee5-6f15-430e-8436-fce6ab6c7af5 - START */
const UsersSelectorListRoutes = require('../routes/list/UsersSelectorListRoutes');
app.use('/api/list/6806cee5-6f15-430e-8436-fce6ab6c7af5', UsersSelectorListRoutes);
/* LIST 6806cee5-6f15-430e-8436-fce6ab6c7af5 - END */






/* LIST 68b9cf5f-e241-4c37-a26d-2ccd9e4bf63f - START */
const UsersSelectorListRoutes = require('../routes/list/UsersSelectorListRoutes');
app.use('/api/list/68b9cf5f-e241-4c37-a26d-2ccd9e4bf63f', UsersSelectorListRoutes);
/* LIST 68b9cf5f-e241-4c37-a26d-2ccd9e4bf63f - END */






/* LIST 8e4c0bb7-dbcf-48ba-ae25-3ee8e0b525d1 - START */
const UsersApiListRoutes = require('../routes/list/UsersApiListRoutes');
app.use('/api/list/users', UsersApiListRoutes);
/* LIST 8e4c0bb7-dbcf-48ba-ae25-3ee8e0b525d1 - END */






/* LIST ca01eaf6-b8cd-46db-a19e-8e606b9bab0b - START */
const UsersSysadminListRoutes = require('../routes/list/UsersSysadminListRoutes');
app.use('/api/list/ca01eaf6-b8cd-46db-a19e-8e606b9bab0b', UsersSysadminListRoutes);
/* LIST ca01eaf6-b8cd-46db-a19e-8e606b9bab0b - END */






/* LIST fbbebd4d-3401-4201-8bf4-e54602b0bcaa - START */
const UsersListRoutes = require('../routes/list/UsersListRoutes');
app.use('/api/list/fbbebd4d-3401-4201-8bf4-e54602b0bcaa', UsersListRoutes);
/* LIST fbbebd4d-3401-4201-8bf4-e54602b0bcaa - END */






/* LIST 25de047b-158b-4f80-9e23-26e1611a316f - START */
const CompaniesListRoutes = require('../routes/list/CompaniesListRoutes');
app.use('/api/list/25de047b-158b-4f80-9e23-26e1611a316f', CompaniesListRoutes);
/* LIST 25de047b-158b-4f80-9e23-26e1611a316f - END */






/* LIST b5ad57f4-7fd1-4509-8e21-1b72abe42c91 - START */
const CompaniesSelectorListRoutes = require('../routes/list/CompaniesSelectorListRoutes');
app.use('/api/list/b5ad57f4-7fd1-4509-8e21-1b72abe42c91', CompaniesSelectorListRoutes);
/* LIST b5ad57f4-7fd1-4509-8e21-1b72abe42c91 - END */






/* LIST 733a3d6b-8fb8-4d6d-bc0b-c9090bb04e2e - START */
const FindOfferingsGalleryListRoutes = require('../routes/list/FindOfferingsGalleryListRoutes');
app.use('/api/list/find-offerings', FindOfferingsGalleryListRoutes);
/* LIST 733a3d6b-8fb8-4d6d-bc0b-c9090bb04e2e - END */






/* LIST b29bf4e3-834b-48f8-a075-3bfaf8bc0433 - START */
const AllOfferingsSelectorListRoutes = require('../routes/list/AllOfferingsSelectorListRoutes');
app.use('/api/list/b29bf4e3-834b-48f8-a075-3bfaf8bc0433', AllOfferingsSelectorListRoutes);
/* LIST b29bf4e3-834b-48f8-a075-3bfaf8bc0433 - END */






/* LIST d80530e9-c368-46a2-a880-ac041312c0e3 - START */
const MyOfferingsListRoutes = require('../routes/list/MyOfferingsListRoutes');
app.use('/api/list/my_offerings', MyOfferingsListRoutes);
/* LIST d80530e9-c368-46a2-a880-ac041312c0e3 - END */






/* LIST daca5303-deac-4a9c-95cf-7ccc5006f7f1 - START */
const MyOfferingsSelectorListRoutes = require('../routes/list/MyOfferingsSelectorListRoutes');
app.use('/api/list/daca5303-deac-4a9c-95cf-7ccc5006f7f1', MyOfferingsSelectorListRoutes);
/* LIST daca5303-deac-4a9c-95cf-7ccc5006f7f1 - END */






/* LIST b70407f6-80af-463f-912b-523337362a51 - START */
const TransuctionsPivotListRoutes = require('../routes/list/TransuctionsPivotListRoutes');
app.use('/api/list/b70407f6-80af-463f-912b-523337362a51', TransuctionsPivotListRoutes);
/* LIST b70407f6-80af-463f-912b-523337362a51 - END */






/* LIST 1afc37c2-f2f5-43fa-9e9f-90434420eea9 - START */
const CrossPlatformServiceCommentsListRoutes = require('../routes/list/CrossPlatformServiceCommentsListRoutes');
app.use('/api/list/1afc37c2-f2f5-43fa-9e9f-90434420eea9', CrossPlatformServiceCommentsListRoutes);
/* LIST 1afc37c2-f2f5-43fa-9e9f-90434420eea9 - END */






/* LIST de8be8d7-cb0b-4431-a050-4b7d2f6f1cf4 - START */
const CrossPlatformServiceCommentsUserListRoutes = require('../routes/list/CrossPlatformServiceCommentsUserListRoutes');
app.use('/api/list/de8be8d7-cb0b-4431-a050-4b7d2f6f1cf4', CrossPlatformServiceCommentsUserListRoutes);
/* LIST de8be8d7-cb0b-4431-a050-4b7d2f6f1cf4 - END */






/* LIST 8206b744-4c40-4a47-bc8c-0e9e38e3d589 - START */
const DataCatalogueServicesListRoutes = require('../routes/list/DataCatalogueServicesListRoutes');
app.use('/api/list/8206b744-4c40-4a47-bc8c-0e9e38e3d589', DataCatalogueServicesListRoutes);
/* LIST 8206b744-4c40-4a47-bc8c-0e9e38e3d589 - END */






/* LIST a5de5426-f8cd-4b54-874c-3116497e622b - START */
const DataCatalogueServicesSelectorListRoutes = require('../routes/list/DataCatalogueServicesSelectorListRoutes');
app.use('/api/list/a5de5426-f8cd-4b54-874c-3116497e622b', DataCatalogueServicesSelectorListRoutes);
/* LIST a5de5426-f8cd-4b54-874c-3116497e622b - END */






/* LIST d66539a0-96db-4fb2-83dd-56509f5b0db3 - START */
const DataCatalogueServicesApiListRoutes = require('../routes/list/DataCatalogueServicesApiListRoutes');
app.use('/api/list/cross_platform_service_services', DataCatalogueServicesApiListRoutes);
/* LIST d66539a0-96db-4fb2-83dd-56509f5b0db3 - END */






/* LIST 02d4de64-8faa-4d25-a39d-9238c7b419cd - START */
const UsersListRoutes = require('../routes/list/UsersListRoutes');
app.use('/api/list/02d4de64-8faa-4d25-a39d-9238c7b419cd', UsersListRoutes);
/* LIST 02d4de64-8faa-4d25-a39d-9238c7b419cd - END */






/* LIST 7fe82982-45f1-4b10-b3ee-1280a277a3de - START */
const DataProvidedForLocalApiListRoutes = require('../routes/list/DataProvidedForLocalApiListRoutes');
app.use('/api/list/data_provided', DataProvidedForLocalApiListRoutes);
/* LIST 7fe82982-45f1-4b10-b3ee-1280a277a3de - END */






/* LIST 93970b10-fccc-45ba-9908-806d2e9a3b5e - START */
const DataProvidedDashboardListRoutes = require('../routes/list/DataProvidedDashboardListRoutes');
app.use('/api/list/93970b10-fccc-45ba-9908-806d2e9a3b5e', DataProvidedDashboardListRoutes);
/* LIST 93970b10-fccc-45ba-9908-806d2e9a3b5e - END */






/* LIST f3e5b2f4-aa2c-4eb5-a4d1-afc5e3d36d21 - START */
const ProvideDataListRoutes = require('../routes/list/ProvideDataListRoutes');
app.use('/api/list/f3e5b2f4-aa2c-4eb5-a4d1-afc5e3d36d21', ProvideDataListRoutes);
/* LIST f3e5b2f4-aa2c-4eb5-a4d1-afc5e3d36d21 - END */






/* LIST 44a11e62-07f8-4d1e-9dec-f343a7be7d79 - START */
const VocabularyKeywordsListRoutes = require('../routes/list/VocabularyKeywordsListRoutes');
app.use('/api/list/44a11e62-07f8-4d1e-9dec-f343a7be7d79', VocabularyKeywordsListRoutes);
/* LIST 44a11e62-07f8-4d1e-9dec-f343a7be7d79 - END */






/* LIST 23c5e533-9547-485f-b294-157f5b40883f - START */
const OnenetRolesSelectorListRoutes = require('../routes/list/OnenetRolesSelectorListRoutes');
app.use('/api/list/23c5e533-9547-485f-b294-157f5b40883f', OnenetRolesSelectorListRoutes);
/* LIST 23c5e533-9547-485f-b294-157f5b40883f - END */






/* LIST 96f8a56b-b3e8-4c11-bfbf-361065cc93c0 - START */
const OnenetRolesListRoutes = require('../routes/list/OnenetRolesListRoutes');
app.use('/api/list/96f8a56b-b3e8-4c11-bfbf-361065cc93c0', OnenetRolesListRoutes);
/* LIST 96f8a56b-b3e8-4c11-bfbf-361065cc93c0 - END */






/* LIST 20d33c97-6426-45bc-8988-a3f5921b6879 - START */
const MyOfferedServicesForLocalApiListRoutes = require('../routes/list/MyOfferedServicesForLocalApiListRoutes');
app.use('/api/list/offered_services', MyOfferedServicesForLocalApiListRoutes);
/* LIST 20d33c97-6426-45bc-8988-a3f5921b6879 - END */






/* LIST 3878c122-7fb7-40fb-97b0-bfb66c8b35ca - START */
const AvailableServicesSelectorListRoutes = require('../routes/list/AvailableServicesSelectorListRoutes');
app.use('/api/list/3878c122-7fb7-40fb-97b0-bfb66c8b35ca', AvailableServicesSelectorListRoutes);
/* LIST 3878c122-7fb7-40fb-97b0-bfb66c8b35ca - END */






/* LIST 41d2a5af-d7fd-4455-93f8-4260470bb6ce - START */
const DataOfferingsSysadminListRoutes = require('../routes/list/DataOfferingsSysadminListRoutes');
app.use('/api/list/41d2a5af-d7fd-4455-93f8-4260470bb6ce', DataOfferingsSysadminListRoutes);
/* LIST 41d2a5af-d7fd-4455-93f8-4260470bb6ce - END */






/* LIST 4631baf0-32b0-444c-a031-4947578f37f8 - START */
const MyOfferedServicesListRoutes = require('../routes/list/MyOfferedServicesListRoutes');
app.use('/api/list/4631baf0-32b0-444c-a031-4947578f37f8', MyOfferedServicesListRoutes);
/* LIST 4631baf0-32b0-444c-a031-4947578f37f8 - END */






/* LIST 739c8a45-7811-496e-a3f5-05c15a2354f6 - START */
const MyOfferedServicesApiListRoutes = require('../routes/list/MyOfferedServicesApiListRoutes');
app.use('/api/list/my_offered_services', MyOfferedServicesApiListRoutes);
/* LIST 739c8a45-7811-496e-a3f5-05c15a2354f6 - END */






/* LIST b27f851e-9a2d-4d8b-8695-dde591a0b8be - START */
const MyDataOfferingsSelectorListRoutes = require('../routes/list/MyDataOfferingsSelectorListRoutes');
app.use('/api/list/b27f851e-9a2d-4d8b-8695-dde591a0b8be', MyDataOfferingsSelectorListRoutes);
/* LIST b27f851e-9a2d-4d8b-8695-dde591a0b8be - END */






/* LIST 10631e49-0c7c-4aec-b8bf-fe034edb1590 - START */
const BusinessObjectApiListRoutes = require('../routes/list/BusinessObjectApiListRoutes');
app.use('/api/list/cross_platform_service_business_objects', BusinessObjectApiListRoutes);
/* LIST 10631e49-0c7c-4aec-b8bf-fe034edb1590 - END */






/* LIST 19068e51-d124-40c2-8773-0954d41719b7 - START */
const ServiceCatalogueListRoutes = require('../routes/list/ServiceCatalogueListRoutes');
app.use('/api/list/19068e51-d124-40c2-8773-0954d41719b7', ServiceCatalogueListRoutes);
/* LIST 19068e51-d124-40c2-8773-0954d41719b7 - END */






/* LIST 7cd54b25-50bf-40eb-9dbb-638138f4836f - START */
const BusinessObjectSelectorListRoutes = require('../routes/list/BusinessObjectSelectorListRoutes');
app.use('/api/list/7cd54b25-50bf-40eb-9dbb-638138f4836f', BusinessObjectSelectorListRoutes);
/* LIST 7cd54b25-50bf-40eb-9dbb-638138f4836f - END */






/* LIST 8dff7c98-7fa3-4014-a815-0a6a4e6cee1f - START */
const CrossPlatformServicesForServiceEditorAndAdminListRoutes = require('../routes/list/CrossPlatformServicesForServiceEditorAndAdminListRoutes');
app.use('/api/list/8dff7c98-7fa3-4014-a815-0a6a4e6cee1f', CrossPlatformServicesForServiceEditorAndAdminListRoutes);
/* LIST 8dff7c98-7fa3-4014-a815-0a6a4e6cee1f - END */






/* LIST dd1b3d16-a743-41ca-80e8-1f53eed55c95 - START */
const CrossPlatformServicesApiListRoutes = require('../routes/list/CrossPlatformServicesApiListRoutes');
app.use('/api/list/cross_platform_service', CrossPlatformServicesApiListRoutes);
/* LIST dd1b3d16-a743-41ca-80e8-1f53eed55c95 - END */






/* LIST 3c5fffd3-e733-4ecb-8ff4-e5fbabe061de - START */
const CloudConnectorSettingsListRoutes = require('../routes/list/CloudConnectorSettingsListRoutes');
app.use('/api/list/3c5fffd3-e733-4ecb-8ff4-e5fbabe061de', CloudConnectorSettingsListRoutes);
/* LIST 3c5fffd3-e733-4ecb-8ff4-e5fbabe061de - END */






/* LIST de562c99-70de-413e-9cb6-de711e73c8d2 - START */
const CloudConnectorSettingsSelectorListRoutes = require('../routes/list/CloudConnectorSettingsSelectorListRoutes');
app.use('/api/list/de562c99-70de-413e-9cb6-de711e73c8d2', CloudConnectorSettingsSelectorListRoutes);
/* LIST de562c99-70de-413e-9cb6-de711e73c8d2 - END */






/* LIST d0c25428-5a07-493e-8f9a-f36ea3c29937 - START */
const MarketsSelectorListRoutes = require('../routes/list/MarketsSelectorListRoutes');
app.use('/api/list/d0c25428-5a07-493e-8f9a-f36ea3c29937', MarketsSelectorListRoutes);
/* LIST d0c25428-5a07-493e-8f9a-f36ea3c29937 - END */






/* LIST f32da28f-3d93-4149-bb43-6c6d19d3ec39 - START */
const MarketsListRoutes = require('../routes/list/MarketsListRoutes');
app.use('/api/list/f32da28f-3d93-4149-bb43-6c6d19d3ec39', MarketsListRoutes);
/* LIST f32da28f-3d93-4149-bb43-6c6d19d3ec39 - END */




/* SOFIA CMS GENERATED CODE - END */

app.listen(3010, () => console.log('Server running on port 3010'));