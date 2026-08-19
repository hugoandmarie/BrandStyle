import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,

    apiVersion: "2026-08-17",

    useCdn: false,

    perspective: import.meta.env.DEV
        ? "drafts"
        : "published",

    token: import.meta.env.DEV
        ? import.meta.env.SANITY_API_READ_TOKEN
        : undefined,
});