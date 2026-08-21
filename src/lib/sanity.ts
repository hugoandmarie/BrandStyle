import { createClient } from "@sanity/client";

const isPreview =
    import.meta.env.SANITY_PREVIEW === "true";

export const sanityClient = createClient({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    apiVersion: "2026-08-17",
    useCdn: false,

    perspective: isPreview
        ? "drafts"
        : "published",

    token: isPreview
        ? import.meta.env.SANITY_API_READ_TOKEN
        : undefined,
});