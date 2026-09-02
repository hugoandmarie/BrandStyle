import {
    defineType,
    defineField,
    defineArrayMember
} from "sanity";

export const headerFooterContent = defineType({
    name: "headerFooterContent",
    title: "Header & Footer Content",
    type: "document",

    description:
        "Manage navigation, social links, address, and footer content.",

    groups: [
        {
            name: "header",
            title: "Header",
            default: true,
        },
        {
            name: "footer",
            title: "Footer",
        },
    ],

    fields: [
        // =====================================================
        // HEADER
        // =====================================================

        defineField({
            name: "headerNavItems",
            title: "Header Navigation",
            type: "array",
            group: "header",
            description:
                "Navigation items displayed in the site header. Drag to reorder.",

            of: [
                defineArrayMember({
                    name: "headerNavItem",
                    title: "Navigation Item",
                    type: "object",

                    fields: [
                        defineField({
                            name: "label",
                            title: "Label",
                            type: "string",
                            description:
                                'Text displayed in the navigation, for example "About".',
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "path",
                            title: "Link",
                            type: "string",
                        }),

                        defineField({
                            name: "showOnMobile",
                            title: "Show on Mobile",
                            type: "boolean",
                            description: "For design and development purposes only. Cannot be edited.",
                            readOnly: true,
                            initialValue: true,
                        }),

                        defineField({
                            name: "showOnDesktop",
                            title: "Show on Desktop",
                            type: "boolean",
                            description: "For design and development purposes only. Cannot be edited.",
                            readOnly: true,
                            initialValue: true,
                        }),
                    ],

                    preview: {
                        select: {
                            title: "label",
                            subtitle: "path",
                        },
                    },
                }),
            ],
        }),

        // =====================================================
        // FOOTER NAVIGATION
        // =====================================================

        defineField({
            name: "footerNavItems",
            title: "Footer Navigation",
            type: "array",
            group: "footer",
            description:
                "Navigation items displayed in the footer. Drag to reorder.",

            of: [
                defineArrayMember({
                    name: "footerNavItem",
                    title: "Footer Navigation Item",
                    type: "object",

                    fields: [
                        defineField({
                            name: "label",
                            title: "Label",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "path",
                            title: "Link",
                            type: "string",
                        }),

                    ],

                    preview: {
                        select: {
                            title: "label",
                            subtitle: "path",
                        },
                    },
                }),
            ],
        }),

        defineField({
            name: "newsletterSignup",
            title: "Newsletter Signup text",
            type: "string",
            group: "footer",
        }),

        // =====================================================
        // SOCIAL LINKS
        // =====================================================

        defineField({
            name: "socialLinks",
            title: "Social Links",
            type: "array",
            group: "footer",
            description:
                "Social media links displayed in the footer.",

            of: [
                defineArrayMember({
                    name: "socialLink",
                    title: "Social Link",
                    type: "object",

                    fields: [
                        defineField({
                            name: "label",
                            title: "Label",
                            type: "string",
                            description:
                                'Short display label, for example "IG", "FB", or "LI".',
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "url",
                            title: "URL",
                            type: "url",
                            validation: (Rule) => Rule.required(),
                        }),
                    ],

                    preview: {
                        select: {
                            title: "label",
                            subtitle: "url",
                        },
                    },
                }),
            ],
        }),

        // =====================================================
        // FOOTER DETAILS
        // =====================================================

        defineField({
            name: "addressText",
            title: "Address",
            type: "string",
            group: "footer",
            description:
                "Address displayed at the bottom of the website.",
        }),

        defineField({
            name: "copyrightText",
            title: "Copyright Text",
            type: "string",
            group: "footer",
            description:
                "Copyright notice.",
            initialValue: "Copyright © 2026 Brandstyle Communications, LLC. All Rights Reserved.",
        }),

        defineField({
            name: "privacyPolicyLabel",
            title: "Privacy Policy Label",
            type: "string",
            group: "footer",
            initialValue: "Privacy Policy",
        }),

        defineField({
            name: "privacyPolicyLink",
            title: "Privacy Policy URL",
            type: "url",
            group: "footer",
        }),
    ],

    preview: {
        prepare() {
            return {
                title: "Header & Footer Content",
                subtitle: "Navigation, social links, address & legal",
            };
        },
    },
});