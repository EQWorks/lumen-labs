import React from 'react'

import { Dollar, Info, Alert } from '../icons'


export const sampleDataBasic = ['test', 'hello', 'sample']

export const sampleData = [
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
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      },
      {
        title: 'psychology',
      },
      {
        title: 'history',
      },
      {
        title: 'sociology',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      },
    ],
  },
  {
    type: {
      title: 'Sciences',
      endIcon: <Info size='md'/>,
    },
    items: [
      {
        title: 'physics',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        startIcon: <Alert size='md'/>,
      },
      {
        title: 'chemistry',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        endIcon: <Dollar size='md'/>,
      },
      {
        title: 'biology',
        startIcon: <Info size='md'/>,
      },
    ],
    divider: {
      title: 'Divider',
    },
  },
]

export const sampleDataLarge = [
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
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      },
      {
        title: 'psychology',
      },
      {
        title: 'history',
      },
      {
        title: 'sociology',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      },
    ],
  },
  {
    type: {
      title: 'Sciences',
      endIcon: <Info size='lg'/>,
    },
    items: [
      {
        title: 'physics',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        startIcon: <Alert size='lg'/>,
      },
      {
        title: 'chemistry',
        description: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        endIcon: <Dollar size='lg'/>,
      },
      {
        title: 'biology',
        startIcon: <Info size='lg'/>,
      },
    ],
    divider: {
      title: 'Divider',
    },
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
