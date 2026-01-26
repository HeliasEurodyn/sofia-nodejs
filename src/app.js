require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const sofiaRoutes = require('./routes/sofiaRoutes');
const studentRoutes = require('./routes/studentRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');


const app = express();


if (process.env.NODE_ENV === 'production') {
  // αν είσαι πίσω από nginx / load balancer
  app.set('trust proxy', 1);
}

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/sofia', sofiaRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);

/* SOFIA CMS GENERATED CODE - START */
/* LIST MessagesListRoutes - START */
const MessagesListRoutes = require('./routes/list/MessagesListRoutes');
app.use('/api/list/3a2499ab-082d-4cb5-8cb1-3062044bd405', MessagesListRoutes);
/* LIST MessagesListRoutes - END */
/* LIST MessageReceivedDashboardListRoutes - START */
const MessageReceivedDashboardListRoutes = require('./routes/list/MessageReceivedDashboardListRoutes');
app.use('/api/list/5c6d8a23-e37b-4bfa-9a78-dd459b6687ad', MessageReceivedDashboardListRoutes);
/* LIST MessageReceivedDashboardListRoutes - END */
/* LIST MessagesReceivedListRoutes - START */
const MessagesReceivedListRoutes = require('./routes/list/MessagesReceivedListRoutes');
app.use('/api/list/b530782b-9530-4cd1-b2fe-a96507982f0e', MessagesReceivedListRoutes);
/* LIST MessagesReceivedListRoutes - END */
/* LIST MessagesDashboardListRoutes - START */
const MessagesDashboardListRoutes = require('./routes/list/MessagesDashboardListRoutes');
app.use('/api/list/cf7b5a31-4daa-40fd-9bc0-16023f1ec6a2', MessagesDashboardListRoutes);
/* LIST MessagesDashboardListRoutes - END */
/* LIST ConsumeDataListRoutes - START */
const ConsumeDataListRoutes = require('./routes/list/ConsumeDataListRoutes');
app.use('/api/list/f2c905fe-6597-4dd5-b648-7d76d07c787f', ConsumeDataListRoutes);
/* LIST ConsumeDataListRoutes - END */
/* LIST ConsumeDataGalleryListRoutes - START */
const ConsumeDataGalleryListRoutes = require('./routes/list/ConsumeDataGalleryListRoutes');
app.use('/api/list/b2f30c5c-c513-4917-9483-bd5df748e57a', ConsumeDataGalleryListRoutes);
/* LIST ConsumeDataGalleryListRoutes - END */
/* LIST BusinessTagSelectorListRoutes - START */
const BusinessTagSelectorListRoutes = require('./routes/list/BusinessTagSelectorListRoutes');
app.use('/api/list/7c208ba6-662f-4353-acd9-06b15cdfb8fa', BusinessTagSelectorListRoutes);
/* LIST BusinessTagSelectorListRoutes - END */
/* LIST BusinessTagsListRoutes - START */
const BusinessTagsListRoutes = require('./routes/list/BusinessTagsListRoutes');
app.use('/api/list/92255481-5d8b-4ea1-afea-16b060ef6002', BusinessTagsListRoutes);
/* LIST BusinessTagsListRoutes - END */
/* LIST CountriesListRoutes - START */
const CountriesListRoutes = require('./routes/list/CountriesListRoutes');
app.use('/api/list/0e4f7bbc-dc73-454b-9738-c009fbc8a6aa', CountriesListRoutes);
/* LIST CountriesListRoutes - END */
/* LIST CountriesSelectorListRoutes - START */
const CountriesSelectorListRoutes = require('./routes/list/CountriesSelectorListRoutes');
app.use('/api/list/356af82d-11bd-47b7-aadd-3273f9d174d0', CountriesSelectorListRoutes);
/* LIST CountriesSelectorListRoutes - END */
/* LIST CategoriesListRoutes - START */
const CategoriesListRoutes = require('./routes/list/CategoriesListRoutes');
app.use('/api/list/36f3b704-9a94-4b44-9740-fbce121e6b76', CategoriesListRoutes);
/* LIST CategoriesListRoutes - END */
/* LIST DataCatalogueCategorySelectorListRoutes - START */
const DataCatalogueCategorySelectorListRoutes = require('./routes/list/DataCatalogueCategorySelectorListRoutes');
app.use('/api/list/60630e57-4f56-480d-91de-c4e2ec083d0a', DataCatalogueCategorySelectorListRoutes);
/* LIST DataCatalogueCategorySelectorListRoutes - END */
/* LIST DataCatalogueCategoryApiListRoutes - START */
const DataCatalogueCategoryApiListRoutes = require('./routes/list/DataCatalogueCategoryApiListRoutes');
app.use('/api/list/cross_platform_service_categories', DataCatalogueCategoryApiListRoutes);
/* LIST DataCatalogueCategoryApiListRoutes - END */
/* LIST MySubscriptionsApiListRoutes - START */
const MySubscriptionsApiListRoutes = require('./routes/list/MySubscriptionsApiListRoutes');
app.use('/api/list/my_subscriptions', MySubscriptionsApiListRoutes);
/* LIST MySubscriptionsApiListRoutes - END */
/* LIST RequestsListRoutes - START */
const RequestsListRoutes = require('./routes/list/RequestsListRoutes');
app.use('/api/list/requests_on_offered_services', RequestsListRoutes);
/* LIST RequestsListRoutes - END */
/* LIST RequestsAdminListRoutes - START */
const RequestsAdminListRoutes = require('./routes/list/RequestsAdminListRoutes');
app.use('/api/list/924ecd9b-820c-43a4-abe7-161f49c0909c', RequestsAdminListRoutes);
/* LIST RequestsAdminListRoutes - END */
/* LIST MySubscriptionsListRoutes - START */
const MySubscriptionsListRoutes = require('./routes/list/MySubscriptionsListRoutes');
app.use('/api/list/9c4e7981-e44e-4659-96ab-7505baf8559a', MySubscriptionsListRoutes);
/* LIST MySubscriptionsListRoutes - END */
/* LIST ClustersSelectorListRoutes - START */
const ClustersSelectorListRoutes = require('./routes/list/ClustersSelectorListRoutes');
app.use('/api/list/58d1ed87-b844-4e83-88d2-515e44552aa7', ClustersSelectorListRoutes);
/* LIST ClustersSelectorListRoutes - END */
/* LIST ClustersListRoutes - START */
const ClustersListRoutes = require('./routes/list/ClustersListRoutes');
app.use('/api/list/b1e55db3-22be-4460-832d-41d80af8fd6b', ClustersListRoutes);
/* LIST ClustersListRoutes - END */
/* LIST DataConsumedForLocalApiListRoutes - START */
const DataConsumedForLocalApiListRoutes = require('./routes/list/DataConsumedForLocalApiListRoutes');
app.use('/api/list/data_consumed', DataConsumedForLocalApiListRoutes);
/* LIST DataConsumedForLocalApiListRoutes - END */
/* LIST DataTransactionsPivotListRoutes - START */
const DataTransactionsPivotListRoutes = require('./routes/list/DataTransactionsPivotListRoutes');
app.use('/api/list/99b8c68b-ab79-4641-84a9-ff12194b00cd', DataTransactionsPivotListRoutes);
/* LIST DataTransactionsPivotListRoutes - END */
/* LIST DataConsumedDashboardListRoutes - START */
const DataConsumedDashboardListRoutes = require('./routes/list/DataConsumedDashboardListRoutes');
app.use('/api/list/c03d282a-b524-438c-ab0e-b66017924439', DataConsumedDashboardListRoutes);
/* LIST DataConsumedDashboardListRoutes - END */
/* LIST ProcessTagsSelectorListRoutes - START */
const ProcessTagsSelectorListRoutes = require('./routes/list/ProcessTagsSelectorListRoutes');
app.use('/api/list/2e5776ec-0f54-4540-94ba-76f9ead579bd', ProcessTagsSelectorListRoutes);
/* LIST ProcessTagsSelectorListRoutes - END */
/* LIST ProcessTagsListRoutes - START */
const ProcessTagsListRoutes = require('./routes/list/ProcessTagsListRoutes');
app.use('/api/list/b31282f2-6d58-4a2f-8bbf-d2802b9fe88c', ProcessTagsListRoutes);
/* LIST ProcessTagsListRoutes - END */
/* LIST MySubscriptionsGalleryListRoutes - START */
const MySubscriptionsGalleryListRoutes = require('./routes/list/MySubscriptionsGalleryListRoutes');
app.use('/api/list/subscribed', MySubscriptionsGalleryListRoutes);
/* LIST MySubscriptionsGalleryListRoutes - END */
/* LIST SubscriptionsListRoutes - START */
const SubscriptionsListRoutes = require('./routes/list/SubscriptionsListRoutes');
app.use('/api/list/c2314383-7917-41cd-8413-5812e5ac67dc', SubscriptionsListRoutes);
/* LIST SubscriptionsListRoutes - END */
/* LIST IncomingRequestsListRoutes - START */
const IncomingRequestsListRoutes = require('./routes/list/IncomingRequestsListRoutes');
app.use('/api/list/request-to-my-offerings', IncomingRequestsListRoutes);
/* LIST IncomingRequestsListRoutes - END */
/* LIST WizardsListRoutes - START */
const WizardsListRoutes = require('./routes/list/WizardsListRoutes');
app.use('/api/list/a00dc4e2-b8e3-472e-829f-32b30d44f0b6', WizardsListRoutes);
/* LIST WizardsListRoutes - END */
/* LIST ProvideDataListRoutes - START */
const ProvideDataListRoutes = require('./routes/list/ProvideDataListRoutes');
app.use('/api/list/f3e5b2f4-aa2c-4eb5-a4d1-afc5e3d36d21', ProvideDataListRoutes);
/* LIST ProvideDataListRoutes - END */
/* LIST ServiceSelectorListRoutes - START */
const ServiceSelectorListRoutes = require('./routes/list/ServiceSelectorListRoutes');
app.use('/api/list/07dafa14-c2ab-4a47-bb29-4e55241a65a9', ServiceSelectorListRoutes);
/* LIST ServiceSelectorListRoutes - END */
/* LIST ServiceListRoutes - START */
const ServiceListRoutes = require('./routes/list/ServiceListRoutes');
app.use('/api/list/158958b5-d816-4c6d-bafe-eb6235cb4e69', ServiceListRoutes);
/* LIST ServiceListRoutes - END */
/* LIST ServiceDashboardListRoutes - START */
const ServiceDashboardListRoutes = require('./routes/list/ServiceDashboardListRoutes');
app.use('/api/list/f145ad3b-8b92-4e74-9af5-b16916bab93f', ServiceDashboardListRoutes);
/* LIST ServiceDashboardListRoutes - END */
/* LIST UsersSelectorListRoutes - START */
const UsersSelectorListRoutes = require('./routes/list/UsersSelectorListRoutes');
app.use('/api/list/68b9cf5f-e241-4c37-a26d-2ccd9e4bf63f', UsersSelectorListRoutes);
/* LIST UsersSelectorListRoutes - END */
/* LIST UsersApiListRoutes - START */
const UsersApiListRoutes = require('./routes/list/UsersApiListRoutes');
app.use('/api/list/users', UsersApiListRoutes);
/* LIST UsersApiListRoutes - END */
/* LIST UsersSysadminListRoutes - START */
const UsersSysadminListRoutes = require('./routes/list/UsersSysadminListRoutes');
app.use('/api/list/ca01eaf6-b8cd-46db-a19e-8e606b9bab0b', UsersSysadminListRoutes);
/* LIST UsersSysadminListRoutes - END */
/* LIST UsersListRoutes - START */
const UsersListRoutes = require('./routes/list/UsersListRoutes');
app.use('/api/list/02d4de64-8faa-4d25-a39d-9238c7b419cd', UsersListRoutes);
/* LIST UsersListRoutes - END */
/* LIST CompaniesListRoutes - START */
const CompaniesListRoutes = require('./routes/list/CompaniesListRoutes');
app.use('/api/list/25de047b-158b-4f80-9e23-26e1611a316f', CompaniesListRoutes);
/* LIST CompaniesListRoutes - END */
/* LIST CompaniesSelectorListRoutes - START */
const CompaniesSelectorListRoutes = require('./routes/list/CompaniesSelectorListRoutes');
app.use('/api/list/b5ad57f4-7fd1-4509-8e21-1b72abe42c91', CompaniesSelectorListRoutes);
/* LIST CompaniesSelectorListRoutes - END */
/* LIST FindOfferingsGalleryListRoutes - START */
const FindOfferingsGalleryListRoutes = require('./routes/list/FindOfferingsGalleryListRoutes');
app.use('/api/list/find-offerings', FindOfferingsGalleryListRoutes);
/* LIST FindOfferingsGalleryListRoutes - END */
/* LIST AllOfferingsSelectorListRoutes - START */
const AllOfferingsSelectorListRoutes = require('./routes/list/AllOfferingsSelectorListRoutes');
app.use('/api/list/b29bf4e3-834b-48f8-a075-3bfaf8bc0433', AllOfferingsSelectorListRoutes);
/* LIST AllOfferingsSelectorListRoutes - END */
/* LIST MyOfferingsListRoutes - START */
const MyOfferingsListRoutes = require('./routes/list/MyOfferingsListRoutes');
app.use('/api/list/my_offerings', MyOfferingsListRoutes);
/* LIST MyOfferingsListRoutes - END */
/* LIST MyOfferingsSelectorListRoutes - START */
const MyOfferingsSelectorListRoutes = require('./routes/list/MyOfferingsSelectorListRoutes');
app.use('/api/list/daca5303-deac-4a9c-95cf-7ccc5006f7f1', MyOfferingsSelectorListRoutes);
/* LIST MyOfferingsSelectorListRoutes - END */
/* LIST TransuctionsPivotListRoutes - START */
const TransuctionsPivotListRoutes = require('./routes/list/TransuctionsPivotListRoutes');
app.use('/api/list/b70407f6-80af-463f-912b-523337362a51', TransuctionsPivotListRoutes);
/* LIST TransuctionsPivotListRoutes - END */
/* LIST CrossPlatformServiceCommentsListRoutes - START */
const CrossPlatformServiceCommentsListRoutes = require('./routes/list/CrossPlatformServiceCommentsListRoutes');
app.use('/api/list/1afc37c2-f2f5-43fa-9e9f-90434420eea9', CrossPlatformServiceCommentsListRoutes);
/* LIST CrossPlatformServiceCommentsListRoutes - END */
/* LIST CrossPlatformServiceCommentsUserListRoutes - START */
const CrossPlatformServiceCommentsUserListRoutes = require('./routes/list/CrossPlatformServiceCommentsUserListRoutes');
app.use('/api/list/de8be8d7-cb0b-4431-a050-4b7d2f6f1cf4', CrossPlatformServiceCommentsUserListRoutes);
/* LIST CrossPlatformServiceCommentsUserListRoutes - END */
/* LIST DataCatalogueServicesListRoutes - START */
const DataCatalogueServicesListRoutes = require('./routes/list/DataCatalogueServicesListRoutes');
app.use('/api/list/8206b744-4c40-4a47-bc8c-0e9e38e3d589', DataCatalogueServicesListRoutes);
/* LIST DataCatalogueServicesListRoutes - END */
/* LIST DataCatalogueServicesSelectorListRoutes - START */
const DataCatalogueServicesSelectorListRoutes = require('./routes/list/DataCatalogueServicesSelectorListRoutes');
app.use('/api/list/a5de5426-f8cd-4b54-874c-3116497e622b', DataCatalogueServicesSelectorListRoutes);
/* LIST DataCatalogueServicesSelectorListRoutes - END */
/* LIST DataCatalogueServicesApiListRoutes - START */
const DataCatalogueServicesApiListRoutes = require('./routes/list/DataCatalogueServicesApiListRoutes');
app.use('/api/list/cross_platform_service_services', DataCatalogueServicesApiListRoutes);
/* LIST DataCatalogueServicesApiListRoutes - END */
/* LIST DataProvidedForLocalApiListRoutes - START */
const DataProvidedForLocalApiListRoutes = require('./routes/list/DataProvidedForLocalApiListRoutes');
app.use('/api/list/data_provided', DataProvidedForLocalApiListRoutes);
/* LIST DataProvidedForLocalApiListRoutes - END */
/* LIST DataProvidedDashboardListRoutes - START */
const DataProvidedDashboardListRoutes = require('./routes/list/DataProvidedDashboardListRoutes');
app.use('/api/list/93970b10-fccc-45ba-9908-806d2e9a3b5e', DataProvidedDashboardListRoutes);
/* LIST DataProvidedDashboardListRoutes - END */
/* LIST VocabularyKeywordsListRoutes - START */
const VocabularyKeywordsListRoutes = require('./routes/list/VocabularyKeywordsListRoutes');
app.use('/api/list/44a11e62-07f8-4d1e-9dec-f343a7be7d79', VocabularyKeywordsListRoutes);
/* LIST VocabularyKeywordsListRoutes - END */
/* LIST OnenetRolesSelectorListRoutes - START */
const OnenetRolesSelectorListRoutes = require('./routes/list/OnenetRolesSelectorListRoutes');
app.use('/api/list/23c5e533-9547-485f-b294-157f5b40883f', OnenetRolesSelectorListRoutes);
/* LIST OnenetRolesSelectorListRoutes - END */
/* LIST OnenetRolesListRoutes - START */
const OnenetRolesListRoutes = require('./routes/list/OnenetRolesListRoutes');
app.use('/api/list/96f8a56b-b3e8-4c11-bfbf-361065cc93c0', OnenetRolesListRoutes);
/* LIST OnenetRolesListRoutes - END */
/* LIST MyOfferedServicesForLocalApiListRoutes - START */
const MyOfferedServicesForLocalApiListRoutes = require('./routes/list/MyOfferedServicesForLocalApiListRoutes');
app.use('/api/list/offered_services', MyOfferedServicesForLocalApiListRoutes);
/* LIST MyOfferedServicesForLocalApiListRoutes - END */
/* LIST AvailableServicesSelectorListRoutes - START */
const AvailableServicesSelectorListRoutes = require('./routes/list/AvailableServicesSelectorListRoutes');
app.use('/api/list/3878c122-7fb7-40fb-97b0-bfb66c8b35ca', AvailableServicesSelectorListRoutes);
/* LIST AvailableServicesSelectorListRoutes - END */
/* LIST MyOfferedServicesListRoutes - START */
const MyOfferedServicesListRoutes = require('./routes/list/MyOfferedServicesListRoutes');
app.use('/api/list/4631baf0-32b0-444c-a031-4947578f37f8', MyOfferedServicesListRoutes);
/* LIST MyOfferedServicesListRoutes - END */
/* LIST MyOfferedServicesApiListRoutes - START */
const MyOfferedServicesApiListRoutes = require('./routes/list/MyOfferedServicesApiListRoutes');
app.use('/api/list/my_offered_services', MyOfferedServicesApiListRoutes);
/* LIST MyOfferedServicesApiListRoutes - END */
/* LIST MyDataOfferingsSelectorListRoutes - START */
const MyDataOfferingsSelectorListRoutes = require('./routes/list/MyDataOfferingsSelectorListRoutes');
app.use('/api/list/b27f851e-9a2d-4d8b-8695-dde591a0b8be', MyDataOfferingsSelectorListRoutes);
/* LIST MyDataOfferingsSelectorListRoutes - END */
/* LIST BusinessObjectApiListRoutes - START */
const BusinessObjectApiListRoutes = require('./routes/list/BusinessObjectApiListRoutes');
app.use('/api/list/cross_platform_service_business_objects', BusinessObjectApiListRoutes);
/* LIST BusinessObjectApiListRoutes - END */
/* LIST ServiceCatalogueListRoutes - START */
const ServiceCatalogueListRoutes = require('./routes/list/ServiceCatalogueListRoutes');
app.use('/api/list/19068e51-d124-40c2-8773-0954d41719b7', ServiceCatalogueListRoutes);
/* LIST ServiceCatalogueListRoutes - END */
/* LIST BusinessObjectSelectorListRoutes - START */
const BusinessObjectSelectorListRoutes = require('./routes/list/BusinessObjectSelectorListRoutes');
app.use('/api/list/7cd54b25-50bf-40eb-9dbb-638138f4836f', BusinessObjectSelectorListRoutes);
/* LIST BusinessObjectSelectorListRoutes - END */
/* LIST CrossPlatformServicesForServiceEditorAndAdminListRoutes - START */
const CrossPlatformServicesForServiceEditorAndAdminListRoutes = require('./routes/list/CrossPlatformServicesForServiceEditorAndAdminListRoutes');
app.use('/api/list/8dff7c98-7fa3-4014-a815-0a6a4e6cee1f', CrossPlatformServicesForServiceEditorAndAdminListRoutes);
/* LIST CrossPlatformServicesForServiceEditorAndAdminListRoutes - END */
/* LIST CrossPlatformServicesApiListRoutes - START */
const CrossPlatformServicesApiListRoutes = require('./routes/list/CrossPlatformServicesApiListRoutes');
app.use('/api/list/cross_platform_service', CrossPlatformServicesApiListRoutes);
/* LIST CrossPlatformServicesApiListRoutes - END */
/* LIST CloudConnectorSettingsListRoutes - START */
const CloudConnectorSettingsListRoutes = require('./routes/list/CloudConnectorSettingsListRoutes');
app.use('/api/list/3c5fffd3-e733-4ecb-8ff4-e5fbabe061de', CloudConnectorSettingsListRoutes);
/* LIST CloudConnectorSettingsListRoutes - END */
/* LIST CloudConnectorSettingsSelectorListRoutes - START */
const CloudConnectorSettingsSelectorListRoutes = require('./routes/list/CloudConnectorSettingsSelectorListRoutes');
app.use('/api/list/de562c99-70de-413e-9cb6-de711e73c8d2', CloudConnectorSettingsSelectorListRoutes);
/* LIST CloudConnectorSettingsSelectorListRoutes - END */
/* LIST MarketsSelectorListRoutes - START */
const MarketsSelectorListRoutes = require('./routes/list/MarketsSelectorListRoutes');
app.use('/api/list/d0c25428-5a07-493e-8f9a-f36ea3c29937', MarketsSelectorListRoutes);
/* LIST MarketsSelectorListRoutes - END */
/* LIST MarketsListRoutes - START */
const MarketsListRoutes = require('./routes/list/MarketsListRoutes');
app.use('/api/list/f32da28f-3d93-4149-bb43-6c6d19d3ec39', MarketsListRoutes);
/* LIST MarketsListRoutes - END */
/* LIST MyOfferingsCopyGalleryListRoutes - START */
const MyOfferingsCopyGalleryListRoutes = require('./routes/list/MyOfferingsCopyGalleryListRoutes');
app.use('/api/list/d0d60cf9-6f9c-49af-bc37-bc9657dd8d30', MyOfferingsCopyGalleryListRoutes);
/* LIST MyOfferingsCopyGalleryListRoutes - END */
/* LIST DataOfferingsSysAdminListRoutes - START */
const DataOfferingsSysAdminListRoutes = require('./routes/list/DataOfferingsSysAdminListRoutes');
app.use('/api/list/41d2a5af-d7fd-4455-93f8-4260470bb6ce', DataOfferingsSysAdminListRoutes);
/* LIST DataOfferingsSysAdminListRoutes - END */
/* FORM MessagesReceivedFormRoutes - START */
const MessagesReceivedFormRoutes = require('./routes/form/MessagesReceivedFormRoutes');
app.use('/api/form/c4930347-95ee-411a-8a29-b2bfdd9fec2c', MessagesReceivedFormRoutes);
/* FORM MessagesReceivedFormRoutes - END */
/* FORM MessagesFormRoutes - START */
const MessagesFormRoutes = require('./routes/form/MessagesFormRoutes');
app.use('/api/form/d94a72d1-e89c-4f81-afb9-a8e276dfe88d', MessagesFormRoutes);
/* FORM MessagesFormRoutes - END */
/* FORM ConsumeDataFormRoutes - START */
const ConsumeDataFormRoutes = require('./routes/form/ConsumeDataFormRoutes');
app.use('/api/form/data_consumed', ConsumeDataFormRoutes);
/* FORM ConsumeDataFormRoutes - END */
/* FORM BusinessTagFormRoutes - START */
const BusinessTagFormRoutes = require('./routes/form/BusinessTagFormRoutes');
app.use('/api/form/00d4903f-2496-4234-9e7e-0139970a0179', BusinessTagFormRoutes);
/* FORM BusinessTagFormRoutes - END */
/* FORM CountryFormRoutes - START */
const CountryFormRoutes = require('./routes/form/CountryFormRoutes');
app.use('/api/form/07a50cb5-f7d0-4591-9369-f471af5c68cf', CountryFormRoutes);
/* FORM CountryFormRoutes - END */
/* FORM DataCatalogueCategoryFormRoutes - START */
const DataCatalogueCategoryFormRoutes = require('./routes/form/DataCatalogueCategoryFormRoutes');
app.use('/api/form/2b764260-1694-4976-bde8-2f2c58fcf89f', DataCatalogueCategoryFormRoutes);
/* FORM DataCatalogueCategoryFormRoutes - END */
/* FORM Sample1FormRoutes - START */
const Sample1FormRoutes = require('./routes/form/Sample1FormRoutes');
app.use('/api/form/43219680-083e-4b7c-9d1b-af125910ed09', Sample1FormRoutes);
/* FORM Sample1FormRoutes - END */
/* FORM OnenetSettingsFormRoutes - START */
const OnenetSettingsFormRoutes = require('./routes/form/OnenetSettingsFormRoutes');
app.use('/api/form/c7e71bb8-5b63-4865-acd8-2ce83e45c36f', OnenetSettingsFormRoutes);
/* FORM OnenetSettingsFormRoutes - END */
/* FORM RequestFormRoutes - START */
const RequestFormRoutes = require('./routes/form/RequestFormRoutes');
app.use('/api/form/requests_on_offered_services', RequestFormRoutes);
/* FORM RequestFormRoutes - END */
/* FORM MySubscriptionFormRoutes - START */
const MySubscriptionFormRoutes = require('./routes/form/MySubscriptionFormRoutes');
app.use('/api/form/my_subscriptions', MySubscriptionFormRoutes);
/* FORM MySubscriptionFormRoutes - END */
/* FORM ClusterFormRoutes - START */
const ClusterFormRoutes = require('./routes/form/ClusterFormRoutes');
app.use('/api/form/5e6372e5-94e7-4c02-bf78-25e227db9c45', ClusterFormRoutes);
/* FORM ClusterFormRoutes - END */
/* FORM ProcessTagFormRoutes - START */
const ProcessTagFormRoutes = require('./routes/form/ProcessTagFormRoutes');
app.use('/api/form/e962608f-0c44-4238-9920-a08f2d5110ca', ProcessTagFormRoutes);
/* FORM ProcessTagFormRoutes - END */
/* FORM IncomingRequestFormRoutes - START */
const IncomingRequestFormRoutes = require('./routes/form/IncomingRequestFormRoutes');
app.use('/api/form/request-to-my-offering', IncomingRequestFormRoutes);
/* FORM IncomingRequestFormRoutes - END */
/* FORM SubscriptionViewFormRoutes - START */
const SubscriptionViewFormRoutes = require('./routes/form/SubscriptionViewFormRoutes');
app.use('/api/form/subscription', SubscriptionViewFormRoutes);
/* FORM SubscriptionViewFormRoutes - END */
/* FORM SubscriptionFormRoutes - START */
const SubscriptionFormRoutes = require('./routes/form/SubscriptionFormRoutes');
app.use('/api/form/subscription', SubscriptionFormRoutes);
/* FORM SubscriptionFormRoutes - END */
/* FORM ProvideDataFormRoutes - START */
const ProvideDataFormRoutes = require('./routes/form/ProvideDataFormRoutes');
app.use('/api/form/data_provided', ProvideDataFormRoutes);
/* FORM ProvideDataFormRoutes - END */
/* FORM ServiceFormRoutes - START */
const ServiceFormRoutes = require('./routes/form/ServiceFormRoutes');
app.use('/api/form/b16e1552-72f1-4c90-a8ab-b3bd7bbe8d61', ServiceFormRoutes);
/* FORM ServiceFormRoutes - END */
/* FORM DataCreationServiceOfferingFormRoutes - START */
const DataCreationServiceOfferingFormRoutes = require('./routes/form/DataCreationServiceOfferingFormRoutes');
app.use('/api/form/data_creation_and_service_offering ', DataCreationServiceOfferingFormRoutes);
/* FORM DataCreationServiceOfferingFormRoutes - END */
/* FORM UserWeFormingFormRoutes - START */
const UserWeFormingFormRoutes = require('./routes/form/UserWeFormingFormRoutes');
app.use('/api/form/16bbb204-fa19-44ee-86b2-bdfceaa4b46c', UserWeFormingFormRoutes);
/* FORM UserWeFormingFormRoutes - END */
/* FORM UserFormRoutes - START */
const UserFormRoutes = require('./routes/form/UserFormRoutes');
app.use('/api/form/user', UserFormRoutes);
/* FORM UserFormRoutes - END */
/* FORM UserWeFormingAdminFormRoutes - START */
const UserWeFormingAdminFormRoutes = require('./routes/form/UserWeFormingAdminFormRoutes');
app.use('/api/form/test-api-for-user', UserWeFormingAdminFormRoutes);
/* FORM UserWeFormingAdminFormRoutes - END */
/* FORM ConnectorSettingsFormRoutes - START */
const ConnectorSettingsFormRoutes = require('./routes/form/ConnectorSettingsFormRoutes');
app.use('/api/form/aca2bb64-9cf0-4454-8386-ac466768d52b', ConnectorSettingsFormRoutes);
/* FORM ConnectorSettingsFormRoutes - END */
/* FORM ServiceOfferingApiFormRoutes - START */
const ServiceOfferingApiFormRoutes = require('./routes/form/ServiceOfferingApiFormRoutes');
app.use('/api/form/service_offering', ServiceOfferingApiFormRoutes);
/* FORM ServiceOfferingApiFormRoutes - END */
/* FORM ProvideDataApiFormRoutes - START */
const ProvideDataApiFormRoutes = require('./routes/form/ProvideDataApiFormRoutes');
app.use('/api/form/provide_data', ProvideDataApiFormRoutes);
/* FORM ProvideDataApiFormRoutes - END */
/* FORM IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormRoutes - START */
const IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormRoutes = require('./routes/form/IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormRoutes');
app.use('/api/form/30b2961d-e0ce-4d48-8148-c4a7f7d8a1c3', IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormRoutes);
/* FORM IClassfaSolidFaFileInvoiceiInvoiceSampleFormFormRoutes - END */
/* FORM CompanyFormRoutes - START */
const CompanyFormRoutes = require('./routes/form/CompanyFormRoutes');
app.use('/api/form/9c4968e8-abeb-4a45-bc20-e84a84905134', CompanyFormRoutes);
/* FORM CompanyFormRoutes - END */
/* FORM MyOfferingsFormRoutes - START */
const MyOfferingsFormRoutes = require('./routes/form/MyOfferingsFormRoutes');
app.use('/api/form/my_offering', MyOfferingsFormRoutes);
/* FORM MyOfferingsFormRoutes - END */
/* FORM DataCatalogueBusinessObjectFormRoutes - START */
const DataCatalogueBusinessObjectFormRoutes = require('./routes/form/DataCatalogueBusinessObjectFormRoutes');
app.use('/api/form/795191ee-36ff-4b85-b215-a3ecdf031b87', DataCatalogueBusinessObjectFormRoutes);
/* FORM DataCatalogueBusinessObjectFormRoutes - END */
/* FORM CrossPlatformServiceCommentsAdminFormRoutes - START */
const CrossPlatformServiceCommentsAdminFormRoutes = require('./routes/form/CrossPlatformServiceCommentsAdminFormRoutes');
app.use('/api/form/9254d973-8b15-4a66-ae8f-1d706c08c5d0', CrossPlatformServiceCommentsAdminFormRoutes);
/* FORM CrossPlatformServiceCommentsAdminFormRoutes - END */
/* FORM CrossPlatformServiceCommentsFormRoutes - START */
const CrossPlatformServiceCommentsFormRoutes = require('./routes/form/CrossPlatformServiceCommentsFormRoutes');
app.use('/api/form/a34c8be4-d62e-4b7a-bab5-37b83b8dfb5f', CrossPlatformServiceCommentsFormRoutes);
/* FORM CrossPlatformServiceCommentsFormRoutes - END */
/* FORM DataCatalogueServiceFormRoutes - START */
const DataCatalogueServiceFormRoutes = require('./routes/form/DataCatalogueServiceFormRoutes');
app.use('/api/form/f4cb5e1e-f16e-4f8e-8e05-ed8fdaea205e', DataCatalogueServiceFormRoutes);
/* FORM DataCatalogueServiceFormRoutes - END */
/* FORM VocabularyKeywordsFormRoutes - START */
const VocabularyKeywordsFormRoutes = require('./routes/form/VocabularyKeywordsFormRoutes');
app.use('/api/form/4da354ed-8076-4fb5-a67a-91e1b63f6613', VocabularyKeywordsFormRoutes);
/* FORM VocabularyKeywordsFormRoutes - END */
/* FORM OnenetRoleFormRoutes - START */
const OnenetRoleFormRoutes = require('./routes/form/OnenetRoleFormRoutes');
app.use('/api/form/2c35f870-8a55-42a0-9454-fba83004bfad', OnenetRoleFormRoutes);
/* FORM OnenetRoleFormRoutes - END */
/* FORM OfferedServiceFormRoutes - START */
const OfferedServiceFormRoutes = require('./routes/form/OfferedServiceFormRoutes');
app.use('/api/form/my_offered_services', OfferedServiceFormRoutes);
/* FORM OfferedServiceFormRoutes - END */
/* FORM CrossPlatformServiceFormRoutes - START */
const CrossPlatformServiceFormRoutes = require('./routes/form/CrossPlatformServiceFormRoutes');
app.use('/api/form/cross_platform_service', CrossPlatformServiceFormRoutes);
/* FORM CrossPlatformServiceFormRoutes - END */
/* FORM CrossPlatformServiceViewOnlyFormRoutes - START */
const CrossPlatformServiceViewOnlyFormRoutes = require('./routes/form/CrossPlatformServiceViewOnlyFormRoutes');
app.use('/api/form/e6760e37-5fcf-45fd-9c0a-79df0375519a', CrossPlatformServiceViewOnlyFormRoutes);
/* FORM CrossPlatformServiceViewOnlyFormRoutes - END */
/* FORM CloudConnectorSettingsFormRoutes - START */
const CloudConnectorSettingsFormRoutes = require('./routes/form/CloudConnectorSettingsFormRoutes');
app.use('/api/form/7f4f75a7-4f79-47ae-8cfe-269c594bbd1c', CloudConnectorSettingsFormRoutes);
/* FORM CloudConnectorSettingsFormRoutes - END */
/* FORM MarketFormRoutes - START */
const MarketFormRoutes = require('./routes/form/MarketFormRoutes');
app.use('/api/form/f82ed048-6890-4d13-8639-ed27c3d0eea4', MarketFormRoutes);
/* FORM MarketFormRoutes - END */
/* SOFIA CMS GENERATED CODE - END */

// error handler
app.use((err, req, res, next) => {
  const msg = err?.message;

  if (msg === 'INVALID_CREDENTIALS') return res.status(401).json({ message: 'Invalid credentials' });
  if (msg === 'USER_DISABLED') return res.status(403).json({ message: 'User disabled' });

  if (msg === 'SESSION_MISSING') return res.status(401).json({ message: 'Missing session cookie' });
  if (msg === 'SESSION_INVALID') return res.status(401).json({ message: 'Invalid session' });

  if (msg === 'REFRESH_INVALID') return res.status(401).json({ message: 'Invalid refresh token' });
  if (msg === 'REFRESH_REVOKED') return res.status(401).json({ message: 'Refresh token revoked' });
  if (msg === 'REFRESH_EXPIRED') return res.status(401).json({ message: 'Refresh token expired' });

  console.error(err);
  return res.status(500).json({ message: 'Internal server error' });
});

app.listen(3010, () => console.log('Server running on port 3010'));
