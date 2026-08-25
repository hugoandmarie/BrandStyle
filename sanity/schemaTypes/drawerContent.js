import {
    defineType,
    defineField,
    defineArrayMember
} from "sanity";

export const drawerContent = defineType({
    name: "drawerContent",
    title: "Drawer Content",
    type: "document",

    description:
        "Manage the content displayed inside the website navigation drawers.",

    groups: [
        {
            name: "about",
            title: "About",
            default: true,
        },
        {
            name: "about-detail",
            title: "About Detail",
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
            name: "toolkit",
            title: "The Visibility Advantage",
        },
        {
            name: "contact",
            title: "Contact",
        },
    ],

    fields: [

        // =====================================================
        // ABOUT
        // =====================================================

        defineField({
            name: "aboutTitle",
            title: "Drawer Title 1",
            type: "string",
            group: "about",
            description:
                "Title of drawer.",
        }),

        defineField({
            name: "aboutMainText",
            title: "Main Introduction",
            type: "text",
            rows: 6,
            group: "about",
            description:
                "Main introductory text displayed when the About drawer opens.",
        }),

        defineField({
            name: "aboutLink1",
            title: "About Drawer Link 1",
            type: "object",
            group: "about",
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
            name: "aboutMissionText",
            title: "Our Mission",
            type: "text",
            rows: 6,
            group: "about",
            description:
                'Text displayed beneath the "Our Mission" heading.',
        }),

        defineField({
            name: "aboutServicesText",
            title: "Services Introduction",
            type: "text",
            rows: 6,
            group: "about",
            description:
                "Introductory text shown above the expandable service list.",
        }),

        defineField({
            name: "aboutCollapsibleContent",
            title: "Service Details",
            type: "array",
            group: "about",
            description:
                "Expandable service sections shown in the About drawer. Drag items to reorder them.",

            of: [
                defineArrayMember({
                    name: "aboutServiceItem",
                    title: "Service",
                    type: "object",

                    fields: [
                        defineField({
                            name: "title",
                            title: "Service Title",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text",
                            rows: 5,
                            validation: (Rule) => Rule.required(),
                        }),
                    ],

                    preview: {
                        select: {
                            title: "title",
                            subtitle: "description",
                        },
                    },
                }),
            ],
        }),

        defineField({
            name: "aboutLink2",
            title: "About Drawer Link 2",
            type: "object",
            group: "about",
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
            name: "aboutFounderImage",
            title: "Founder Image",
            type: "image",
            group: "about",
            description:
                "Image shown in the founder section of the About drawer.",
            options: {
                hotspot: true,
            },
        }),

        defineField({
            name: "aboutFounderText",
            title: "Founder Biography",
            type: "text",
            rows: 8,
            group: "about",
            description:
                "Biography shown in the founder section of the About drawer.",
        }),

        defineField({
            name: "aboutLink3",
            title: "About Drawer Link 3",
            type: "object",
            group: "about",
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

        // =====================================================
        // ABOUT (DETAIL)
        // =====================================================

        defineField({
            name: "aboutDetailFounderImage",
            title: "Founder Image",
            type: "image",
            group: "about-detail",
            description:
                "Image shown in the founder section of the About DETAIL drawer.",
            options: {
                hotspot: true,
            },
        }),


        defineField({
            name: "aboutDetailFounderText",
            title: "Founder Biography",
            type: "text",
            rows: 8,
            group: "about-detail",
            description:
                "Biography shown in the founder section of the About DETAIL drawer.",
        }),

        defineField({
            name: "aboutDetailLink1",
            title: "About Detail Drawer Link 1",
            type: "object",
            group: "about-detail",
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
            name: "aboutPodcastText",
            title: "Podcast Text",
            type: "array",
            group: "about-detail",
            description:
                "Paragraphs used for the podcast section within the About DETAIL view.",

            of: [
                defineArrayMember({
                    type: "text",
                    rows: 4,
                }),
            ],
        }),

        defineField({
            name: "aboutVisibilityAdvText",
            title: "Visibility Advantage Text",
            type: "array",
            group: "about-detail",
            description:
                "Paragraphs describing The Visibility Advantage inside the About DETAIL view.",

            of: [
                defineArrayMember({
                    type: "text",
                    rows: 4,
                }),
            ],
        }),

        defineField({
            name: "aboutDetailLink2",
            title: "About Detail Drawer Link 2",
            type: "object",
            group: "about-detail",
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
            name: "aboutDetailLink3",
            title: "About Detail Drawer Link 3",
            type: "object",
            group: "about-detail",
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

        // =====================================================
        // SERVICES
        // =====================================================

        defineField({
            name: "servicesTitle",
            title: "Drawer Title 2",
            type: "string",
            group: "services",
            description:
                "Title of drawer.",
        }),

        defineField({
            name: "servicesMainText",
            title: "Main Introduction",
            type: "text",
            rows: 6,
            group: "services",
            description:
                "Main introductory copy displayed when the Services drawer opens.",
        }),

        defineField({
            name: "servicesLink1",
            title: "Services Drawer Link 1",
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
            name: "servicesClientsText",
            title: "Clients Text",
            type: "text",
            rows: 5,
            group: "services",
            description:
                "Copy describing Brandstyle's clients.",
        }),

        defineField({
            name: "servicesSubText",
            title: "Services Subtext",
            type: "text",
            rows: 5,
            group: "services",
            description:
                "Supporting text displayed within the Services drawer.",
        }),

        defineField({
            name: "servicesCollapsibleContent",
            title: "Services Collapsible Content",
            type: "array",
            group: "services",
            description:
                "Expandable service sections. Drag items to change their display order.",

            of: [
                defineArrayMember({
                    name: "servicesItem",
                    title: "Services",
                    type: "object",

                    fields: [
                        defineField({
                            name: "title",
                            title: "Service Name",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text",
                            rows: 5,
                            validation: (Rule) => Rule.required(),
                        }),
                    ],

                    preview: {
                        select: {
                            title: "title",
                            subtitle: "description",
                        },
                    },
                }),
            ],
        }),

        defineField({
            name: "servicesLink2",
            title: "Services Drawer Link 2",
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
            name: "sectorsSubText",
            title: "Sectors Subtext",
            type: "text",
            rows: 5,
            group: "services",
            description:
                "Supporting text displayed within the Sectors drawer.",
        }),

        defineField({
            name: "servicesSectorCollapsibleContent",
            title: "Client Sectors",
            type: "array",
            group: "services",
            description:
                "Expandable industry/sector sections. Drag items to change their display order.",

            of: [
                defineArrayMember({
                    name: "sectorItem",
                    title: "Sector",
                    type: "object",

                    fields: [
                        defineField({
                            name: "title",
                            title: "Sector Name",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text",
                            rows: 5,
                            validation: (Rule) => Rule.required(),
                        }),
                    ],

                    preview: {
                        select: {
                            title: "title",
                            subtitle: "description",
                        },
                    },
                }),
            ],
        }),

        defineField({
            name: "servicesLink3",
            title: "Services Drawer Link 3",
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
            name: "clientLogos",
            title: "Clients Logos",
            type: "array",
            group: "services",
            description: "Upload client logos to feature.",

            of: [
                defineArrayMember({
                    name: "clientLogo",
                    title: "Client Logo",
                    type: "object",

                    fields: [
                        defineField({
                            name: "image",
                            title: "Logo",
                            type: "image",
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "text",
                            title: "Client Title",
                            type: "string",
                            description: "Enter client name.",
                        }),

                        defineField({
                            name: "url",
                            title: "External Link",
                            type: "string",
                            description:
                                'Enter a full external URL, e.g. "https://example.com".',
                            validation: (Rule) =>
                                Rule.custom((value) => {
                                    if (!value) return true;

                                    return (
                                        value.startsWith("https://") ||
                                        value.startsWith("http://") ||
                                        'URL must start with "https://" or "http://".'
                                    );
                                }),
                        }),
                    ],

                    preview: {
                        select: {
                            title: "text",
                            subtitle: "url",
                            media: "image",
                        },
                    },
                }),
            ],
        }),

        // =====================================================
        // PODCAST
        // =====================================================

        defineField({
            name: "podcastTitle",
            title: "Drawer Title 3",
            type: "string",
            group: "podcast",
            description:
                "Title of drawer.",
        }),

        defineField({
            name: "podcastMainText",
            title: "Podcast Introduction",
            type: "array",
            group: "podcast",
            description:
                "Introductory paragraphs displayed at the top of the Podcast drawer.",

            of: [
                defineArrayMember({
                    type: "text",
                    rows: 4,
                }),
            ],
        }),

        defineField({
            name: "podcastCards",
            title: "Podcast Episodes",
            type: "array",
            group: "podcast",
            description:
                "Podcast episode cards displayed in the drawer. Drag to reorder.",

            of: [
                defineArrayMember({
                    name: "podcastEpisode",
                    title: "Podcast Episode",
                    type: "object",

                    fields: [
                        defineField({
                            name: "date",
                            title: "Date",
                            type: "string",
                            description:
                                'Display date, for example "May 20".',
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "length",
                            title: "Episode Length",
                            type: "string",
                            description:
                                'For example "33 min".',
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "description",
                            title: "Episode Title / Description",
                            type: "text",
                            rows: 3,
                            validation: (Rule) => Rule.required(),
                        }),
                    ],

                    preview: {
                        select: {
                            title: "description",
                            date: "date",
                            length: "length",
                        },

                        prepare({title, date, length}) {
                            return {
                                title,
                                subtitle: `${date || ""}${date && length ? " · " : ""}${length || ""}`,
                            };
                        },
                    },
                }),
            ],
        }),

        defineField({
            name: "podcastSubText",
            title: "Podcast Supporting Text",
            type: "text",
            rows: 6,
            group: "podcast",
            description:
                "Additional copy displayed beneath the podcast episodes.",
        }),


        // =====================================================
        // VISIBILITY ADV
        // =====================================================

        defineField({
            name: "toolkitTitle",
            title: "Drawer Title 4",
            type: "string",
            group: "toolkit",
            description:
                "Title of drawer.",
        }),

        defineField({
            name: "toolkitMainText",
            title: "Main Introduction",
            type: "text",
            rows: 6,
            group: "toolkit",
            description:
                "Main introductory text for The Visibility Advantage.",
        }),

        defineField({
            name: "toolkitImages",
            title: "Toolkit Cards",
            type: "array",
            group: "toolkit",
            description:
                "Add, remove, or reorder the toolkits displayed on the website.",

            validation: (Rule) => Rule.min(1),

            of: [
                defineArrayMember({
                    name: "toolkitItem",
                    title: "Toolkit",
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
                                "Image displayed with this toolkit.",
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "text",
                            title: "Toolkit Description",
                            type: "string",
                            description:
                                'Description displayed under the image.',
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


        // =====================================================
        // CONTACT
        // =====================================================

        defineField({
            name: "contactTitle",
            title: "Drawer Title 5",
            type: "string",
            group: "contact",
            description:
                "Title of drawer.",
        }),

        defineField({
            name: "contactMainText",
            title: "Contact Message",
            type: "text",
            rows: 4,
            group: "contact",
            description:
                "Primary message displayed at the top of the Contact drawer.",
        }),

        defineField({
            name: "contactAddress",
            title: "Office Address",
            type: "object",
            group: "contact",

            fields: [
                defineField({
                    name: "street",
                    title: "Street Address",
                    type: "string",
                }),

                defineField({
                    name: "cityStateZip",
                    title: "City, State & ZIP",
                    type: "string",
                }),
            ],
        }),

        defineField({
            name: "contactEmail1",
            title: "General Email",
            type: "string",
            group: "contact",

            validation: (Rule) =>
                Rule.email().error("Enter a valid email address."),
        }),

        defineField({
            name: "contactEmail2",
            title: "Careers Email",
            type: "string",
            group: "contact",

            validation: (Rule) =>
                Rule.email().error("Enter a valid email address."),
        }),
    ],

    preview: {
        prepare() {
            return {
                title: "Drawer Content",
                subtitle: "About, Services, Podcast, Toolkit & Contact",
            };
        },
    },
});