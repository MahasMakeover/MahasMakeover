import { defineType, defineField } from 'sanity'

export const schemaTypes = [
  defineType({
    name: 'galleryImage',
    title: 'Gallery Image',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Bridal', value: 'Bridal' },
            { title: 'Haldi', value: 'Haldi' },
            { title: 'Photoshoot', value: 'Photoshoot' },
            { title: 'Saree', value: 'Saree' },
            { title: 'Before/After', value: 'Before/After' },
          ],
        },
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
      }),
      defineField({
        name: 'instagramPost',
        title: 'Instagram Post',
        type: 'boolean',
        description: 'Is this image from Instagram?',
        initialValue: false,
      }),
      defineField({
        name: 'approved',
        title: 'Approved',
        type: 'boolean',
        description: 'Approve this image to show in gallery',
        initialValue: false,
      }),
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
        category: 'category',
      },
      prepare({ title, media, category }) {
        return {
          title: title || 'Untitled',
          subtitle: category,
          media,
        }
      },
    },
  }),

  defineType({
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Client Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: (Rule) => Rule.required().min(1).max(5),
      }),
      defineField({
        name: 'reviewText',
        title: 'Review Text',
        type: 'text',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'eventType',
        title: 'Event Type',
        type: 'string',
        options: {
          list: [
            { title: 'Bridal', value: 'Bridal' },
            { title: 'Haldi', value: 'Haldi' },
            { title: 'Engagement', value: 'Engagement' },
            { title: 'Reception', value: 'Reception' },
            { title: 'Photoshoot', value: 'Photoshoot' },
            { title: 'Class', value: 'Class' },
          ],
        },
      }),
      defineField({
        name: 'image',
        title: 'Client Image (Optional)',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'approved',
        title: 'Approved',
        type: 'boolean',
        description: 'Approve this review to show publicly',
        initialValue: false,
      }),
      defineField({
        name: 'featured',
        title: 'Featured',
        type: 'boolean',
        description: 'Show on homepage',
        initialValue: false,
      }),
    ],
  }),

  defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Service Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'price',
        title: 'Price',
        type: 'string',
      }),
      defineField({
        name: 'duration',
        title: 'Duration',
        type: 'string',
      }),
      defineField({
        name: 'features',
        title: 'Features',
        type: 'array',
        of: [{ type: 'string' }],
      }),
      defineField({
        name: 'order',
        title: 'Display Order',
        type: 'number',
        initialValue: 0,
      }),
    ],
  }),

  defineType({
    name: 'class',
    title: 'Class',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Class Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'duration',
        title: 'Duration',
        type: 'string',
      }),
      defineField({
        name: 'price',
        title: 'Price',
        type: 'string',
      }),
      defineField({
        name: 'maxStudents',
        title: 'Max Students',
        type: 'number',
      }),
      defineField({
        name: 'schedule',
        title: 'Schedule',
        type: 'text',
      }),
      defineField({
        name: 'curriculum',
        title: 'Curriculum',
        type: 'array',
        of: [{ type: 'string' }],
      }),
    ],
  }),

  defineType({
    name: 'booking',
    title: 'Booking',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule) => Rule.required().email(),
      }),
      defineField({
        name: 'phone',
        title: 'Phone',
        type: 'string',
      }),
      defineField({
        name: 'eventDate',
        title: 'Event Date',
        type: 'date',
      }),
      defineField({
        name: 'eventType',
        title: 'Event Type',
        type: 'string',
      }),
      defineField({
        name: 'location',
        title: 'Location',
        type: 'string',
      }),
      defineField({
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Confirmed', value: 'confirmed' },
            { title: 'Completed', value: 'completed' },
            { title: 'Cancelled', value: 'cancelled' },
          ],
        },
        initialValue: 'pending',
      }),
    ],
  }),
]

