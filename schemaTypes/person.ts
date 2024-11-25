import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "First Name Last Name" format',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Business Title',
    }),
    defineField({
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
      description: 'Business Position',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block', // Regular text blocks
        },
        {
          type: 'image', // Inline images
          options: {
            hotspot: true,
          },
        },
        {
          type: 'object', // Custom block for an image gallery
          name: 'imageGallery',
          title: 'Image Gallery',
          fields: [
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
              ],
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Optional caption for the image gallery',
            },
          ],
          preview: {
            select: {
              title: 'caption',
              media: 'images.0', // Use the first image as the preview thumbnail
            },
            prepare({ title, media }) {
              return {
                title: title || 'Image Gallery',
                media,
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})
