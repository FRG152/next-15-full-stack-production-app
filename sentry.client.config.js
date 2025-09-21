import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://fd0d4986fb28a90e422248904be36b3f@o4510058969169920.ingest.de.sentry.io/4510058970415184",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
      isNameRequired: true,
      isEmailRequired: true,
    }),
  ],
});
