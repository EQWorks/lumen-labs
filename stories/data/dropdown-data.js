import React from 'react'

import { Dollar, Info, Alert } from '../../src/icons'


export const sampleDataBasic = ['test', 'hello', 'sample']

export const sampleDataGroups = [
  {
    items: [
      {
        title: 'mathematics',
      },
      {
        title: 'english',
      },
    ],
  },
  {
    type: {
      title: 'social sciences',
    },
    items: [
      {
        title: 'geography',
      },
      {
        title: 'psychology',
      },
      {
        title: 'history',
      },
      {
        title: 'sociology',
      },
    ],
  },
  {
    type: {
      title: 'Sciences',
    },
    items: [
      {
        title: 'physics',
      },
      {
        title: 'chemistry',
      },
      {
        title: 'biology',
      },
    ],
  },
]

export const sampleDataDivider = [
  {
    items: [
      {
        title: 'copy',
      },
      {
        title: 'download',
      },
      {
        title: 'export',
      },
    ],
    divider: {
      title: 'Reset',
    },
  },
]

export const sampleDataIcons = [
  {
    items: [
      {
        title: 'mathematics',
        startIcon: <Alert size='md'/>,
      },
      {
        title: 'economics',
        startIcon: <Dollar size='md'/>,
      },
      {
        title: 'geography',
        startIcon: <Info size='md'/>,
      },
    ],
  },
]

export const sampleDataDescription = [
  {
    items: [
      {
        title: 'Direct upload',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      },
      {
        title: 'Google Sheets',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      },
      {
        title: 'google analytics V4',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      },
      {
        title: 'shopify',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      },
      {
        title: 'stripe',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      },
      {
        title: 'azure blob',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      },
    ],
  },
]

export const sampleDataMultiselect = [
  {
    items: [
      {
        title: 'apple',
      },
      {
        title: 'peach',
      },
      {
        title: 'orange',
      },
      {
        title: 'watermelon',
      },
      {
        title: 'grapefruit',
      },
      {
        title: 'mangosteen',
      },
      {
        title: 'coconut',
      },
      {
        title: 'pineapple',
      },
      {
        title: 'pear',
      },
      {
        title: 'durian',
      },
    ],
  },
]

export const sampleDataIconsLarge = [
  {
    items: [
      {
        title: 'mathematics',
        startIcon: <Alert size='lg'/>,
      },
      {
        title: 'economics',
        startIcon: <Dollar size='lg'/>,
      },
      {
        title: 'geography',
        startIcon: <Info size='lg'/>,
      },
    ],
  },
]

export const sampleDataSteps = [
  {
    type: 'brands',
    title: 'microsoft',
    items: [
      {
        type: 'products',
        title: 'products option',
        items: [
          {
            title: 'option1',
          },
          {
            title: 'option2',
          },
        ],
      },
      {
        type: 'products',
        title: 'products option1',
      },
      {
        type: 'products',
        title: 'products option2',
      },
    ],
  },
  {
    type: 'brands',
    title: 'apple',
    items: [
      {
        type: 'products',
        title: 'Mac',
        items: [
          {
            title: 'MacBook Air',
          },
          {
            title: 'MacBook Pro',
          },
          {
            title: 'iMac Pro',
          },
          {
            title: 'iMac 24"',
          },
        ],
      },
      {
        type: 'products',
        title: 'iPad',
      },
      {
        type: 'products',
        title: 'iPhone',
      },
      {
        type: 'products',
        title: 'Watch',
      },
    ],
  },
  {
    type: 'brands',
    title: 'huawei',
    items: [
      {
        type: 'products',
        title: 'products option',
        items: [
          {
            title: 'option1',
          },
          {
            title: 'option2',
          },
        ],
      },
      {
        type: 'products',
        title: 'products option1',
      },
      {
        type: 'products',
        title: 'products option2',
      },
    ],
  },
  {
    type: 'brands',
    title: 'google',
    items: [
      {
        type: 'products',
        title: 'products option',
        items: [
          {
            title: 'option',
          },
          {
            title: 'option',
          },
        ],
      },
      {
        type: 'products',
        title: 'products option',
      },
      {
        type: 'products',
        title: 'products option',
      },
      {
        type: 'products',
        title: 'products option',
      },
      {
        type: 'products',
        title: 'products option',
      },
      {
        type: 'products',
        title: 'products option',
      },
    ],
  },
]

export const sampleDataLinked = [
  {
    items: [
      {
        title: 'checkout',
      },
      {
        title: 'billing',
      },
      {
        title: 'connect',
      },
      {
        title: 'fraud',
      },
      {
        title: 'terminal',
      },
      {
        title: 'orders',
      },
    ],
  },
]

export const sampleDataSubLinked = [
  {
    type: 'checkout',
    items: [
      {
        title: 'option1',
      },
      {
        title: 'option2',
      },
    ],
  },
  {
    type: 'billing',
    items: [
      {
        title: 'option1',
      },
    ],
  },
  {
    type: 'connect',
    items: [
      {
        title: 'option1',
      },
    ],
  },
  {
    type: 'fraud',
    items: [
      {
        title: 'early fraud warnings',
      },
      {
        title: 'reviews',
      },
      {
        title: 'value lists',
      },
      {
        title: 'value lists items',
      },
    ],
  },
  {
    type: 'terminal',
    items: [
      {
        title: 'option1',
      },
      {
        title: 'option2',
      },
      {
        title: 'option3',
      },
    ],
  },
  {
    type: 'orders',
    items: [
      {
        title: 'option1',
      },
      {
        title: 'option2',
      },
    ],
  },
]
