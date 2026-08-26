import {
    defineType,
    defineField,
    defineArrayMember
} from "sanity";

export const mainContent = defineType({
    name: "mainContent",
    title: "Main Website Content",
    type: "document",

    description:
        "Manage the primary editable content shown across the website.",

    groups: [
        {
            name: "hero",
            title: "Hero",
            default: true,
        },
        {
            name: "services",
            title: "Services",
        },
        {
            name: "podcast",
            title: "Podcast",
        },
        {
            name: "visibility",
            title: "Visibility Advantage",
        },
        {
            name: "contact",
            title: "Contact",
        },
        {
            name: "footer",
            title: "Footer",
        },
    ],

    fields: [
        // HERO
        defineField({
            name: "heroText",
            title: "Main Heading",
            type: "string",
            group: "hero",
            description:
                "The large heading displayed in the main hero section.",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "orgDesc",
            title: "Introductory Description",
            type: "text",
            rows: 4,
            group: "hero",
            description:
                "Short description displayed beneath the main heading.",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "learnMoreLink1",
            title: "Learn More Link",
            type: "object",
            group: "hero",
            fields: [
                defineField({
                    name: "text",
                    title: "Link Text",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: "url",
                    title: "Link URL",
                    type: "string",
                    description:
                        'Use a relative path for internal links (e.g. "/about") or a full URL for external links (e.g. "https://google.com").',
                    validation: (Rule) =>
                        Rule.custom((value) => {
                            if (!value) return true;

                            const isInternal = value.startsWith("/");
                            const isExternal =
                                value.startsWith("https://") ||
                                value.startsWith("http://");

                            return (
                                isInternal ||
                                isExternal ||
                                'Link must start with "/" or "http://"/"https://".'
                            );
                        }),
                }),
            ],
        }),

        // SERVICES
        defineField({
            name: "servicesImages",
            title: "Service Cards",
            type: "array",
            group: "services",
            description:
                "Add, remove, or reorder the services displayed on the website.",

            validation: (Rule) => Rule.min(1),

            of: [
                defineArrayMember({
                    name: "serviceItem",
                    title: "Service",
                    type: "object",

                    fields: [
                        defineField({
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: {
                                hotspot: true,
                            },
                            description:
                                "Image displayed with this service.",
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "text",
                            title: "Service Name",
                            type: "string",
                            description:
                                'For example: "Brand Positioning".',
                            validation: (Rule) => Rule.required(),
                        }),
                    ],

                    preview: {
                        select: {
                            title: "text",
                            media: "image",
                        },
                    },
                }),
            ],
        }),

        defineField({
            name: "learnMoreLink2",
            title: "Learn More Link",
            type: "object",
            group: "services",
            fields: [
                defineField({
                    name: "text",
                    title: "Link Text",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: "url",
                    title: "Link URL",
                    type: "string",
                    description:
                        'Use a relative path for internal links (e.g. "/about") or a full URL for external links (e.g. "https://google.com").',
                    validation: (Rule) =>
                        Rule.custom((value) => {
                            if (!value) return true;

                            const isInternal = value.startsWith("/");
                            const isExternal =
                                value.startsWith("https://") ||
                                value.startsWith("http://");

                            return (
                                isInternal ||
                                isExternal ||
                                'Link must start with "/" or "http://"/"https://".'
                            );
                        }),
                }),
            ],
        }),

        defineField({
            name: "founderStatement",
            title: "Founder Statement",
            type: "array",
            group: "services",

            of: [
                defineArrayMember({
                    type: "object",
                    name: "textSegment",
                    title: "Text",

                    fields: [
                        defineField({
                            name: "text",
                            title: "Text",
                            type: "string",
                        }),
                    ],

                    preview: {
                        select: {
                            title: "text",
                        },
                    },
                }),

                defineArrayMember({
                    type: "image",
                    name: "inlineImage",
                    title: "Image",
                }),
            ],
        }),

        defineField({
            name: "learnMoreLink3",
            title: "Learn More Link",
            type: "object",
            group: "services",
            fields: [
                defineField({
                    name: "text",
                    title: "Link Text",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: "url",
                    title: "Link URL",
                    type: "string",
                    description:
                        'Use a relative path for internal links (e.g. "/about") or a full URL for external links (e.g. "https://google.com").',
                    validation: (Rule) =>
                        Rule.custom((value) => {
                            if (!value) return true;

                            const isInternal = value.startsWith("/");
                            const isExternal =
                                value.startsWith("https://") ||
                                value.startsWith("http://");

                            return (
                                isInternal ||
                                isExternal ||
                                'Link must start with "/" or "http://"/"https://".'
                            );
                        }),
                }),
            ],
        }),

        // PODCAST
        defineField({
            name: "podcastImage",
            title: "Podcast Thumbnail",
            type: "image",
            group: "podcast",
            description:
                "Thumbnail shown in the podcast card.",
            options: {
                hotspot: true,
            },
        }),

        defineField({
            name: "podcastDesc1",
            title: "Podcast Intro",
            type: "text",
            rows: 5,
            group: "podcast",
            description:
                "Introductory text for the podcast section.",
        }),

        defineField({
            name: "spotifyLink",
            title: "Spotify URL",
            type: "url",
            group: "podcast",
            description:
                "Link to the podcast on Spotify.",
        }),

        defineField({
            name: "appleLink",
            title: "Apple Podcasts URL",
            type: "url",
            group: "podcast",
            description:
                "Link to the podcast on Apple Podcasts.",
        }),

        // VISIBILITY ADVANTAGE
        defineField({
            name: "visibilityAdvDesc",
            title: "Section Description",
            type: "text",
            rows: 5,
            group: "visibility",
            description:
                "Main description displayed in the Visibility Advantage section.",
        }),

        defineField({
            name: "visibilityAdvImages",
            title: "Visibility Advantage Cards",
            type: "array",
            group: "visibility",
            description:
                "Add, remove, or reorder the cards shown in this section.",

            of: [
                defineArrayMember({
                    name: "visibilityAdvantageItem",
                    title: "Visibility Advantage Card",
                    type: "object",

                    fields: [
                        defineField({
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: {
                                hotspot: true,
                            },
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "text",
                            title: "Card Title",
                            type: "string",
                            description:
                                'For example: "Authority" or "Clarity".',
                            validation: (Rule) => Rule.required(),
                        }),
                    ],

                    preview: {
                        select: {
                            title: "text",
                            media: "image",
                        },
                    },
                }),
            ],
        }),

        defineField({
            name: "learnMoreLink4",
            title: "Learn More Link",
            type: "object",
            group: "visibility",
            fields: [
                defineField({
                    name: "text",
                    title: "Link Text",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: "url",
                    title: "Link URL",
                    type: "string",
                    description:
                        'Use a relative path for internal links (e.g. "/about") or a full URL for external links (e.g. "https://google.com").',
                    validation: (Rule) =>
                        Rule.custom((value) => {
                            if (!value) return true;

                            const isInternal = value.startsWith("/");
                            const isExternal =
                                value.startsWith("https://") ||
                                value.startsWith("http://");

                            return (
                                isInternal ||
                                isExternal ||
                                'Link must start with "/" or "http://"/"https://".'
                            );
                        }),
                }),
            ],
        }),

        defineField({
            name: "purchaseLink",
            title: "Purchase URL",
            type: "url",
            group: "visibility",
            description:
                "Use a relative path for internal links (e.g. \"/about\") or a full URL for external links (e.g. \"https://google.com\").",
        }),

        // CONTACT
        defineField({
            name: "contactText",
            title: "Contact Message",
            type: "text",
            rows: 3,
            group: "contact",
            description:
                "Call-to-action text displayed in the contact section.",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "contactLink",
            title: "Contact Link",
            type: "string",
            group: "contact",
            description:
                "Destination for the contact call-to-action.",
        }),
    ],

    preview: {
        prepare() {
            return {
                title: "Main Website Content",
                subtitle: "Edit content displayed on homepage",
            };
        },
    },
});