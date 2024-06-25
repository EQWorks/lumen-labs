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

export const categoriesData = [
  'Accounting, Auditing, and Bookkeeping Services',
  'Advertising Services',
  'Agricultural Cooperatives',
  'Air Conditioning and Refrigeration Repair Shops',
  'Airlines and Air Carriers',
  'Airlines and Air Carriers (Not Elsewhere Classified)',
  'Airports, Flying Fields, and Airport Terminals',
  'Ambulance Services',
  'Amusement Parks, Circuses, Carnivals, and Fortune Tellers',
  'Antique Shops - Sales, Repairs, and Restoration Services',
  'Aquariums, Seaquariums, Dolphinariums, and Zoos',
  'Architectural, Engineering, and Surveying Services',
  'Art Dealers and Galleries',
  "Artist's Supply and Craft Shops",
  'Automated Fuel Dispensers',
  'Automobile Associations',
  'Automobile Rental Agency',
  'Automotive Body Repair Shops',
  'Automotive Parts and Accessories Stores',
  'Automotive Service Shops (Non-Dealer)',
  'Automotive Tire Stores',
  'Bakeries',
  'Bands, Orchestras, and Miscellaneous Entertainers (Not Elsewhere Classified)',
  'Beauty and Barber Shops',
  'Betting, including Lottery Tickets, Casino Gaming Chips, Off- Track Betting, Wagers at Race Tracks and games of chance to win prizes of monetary value',
  'Bicycle Shops - Sales and Service',
  'Billiard and Pool Establishments',
  'Boat Dealers',
  'Book Stores',
  'Books, Periodicals and Newspapers',
  'Bowling Alleys',
  'Bus Lines',
  'Business Services (Not Elsewhere Classified)',
  'Business and Secretarial Schools',
  'Buying and Shopping Services and Clubs',
  'Cable, Satellite and Other Pay Television/Radio/Streaming Services',
  'Camera and Photographic Supply Stores',
  'Candy, Nut, and Confectionery Stores',
  'Car Washes',
  'Car and Truck Dealers (New and Used) Sales, Service, Repairs, Parts, and Leasing',
  'Car and Truck Dealers (Used Only) Sales, Service, Repairs, Parts, and Leasing',
  'Caterers',
  'Charitable Social Service Organizations',
  'Chemicals and Allied Products (Not Elsewhere Classified)',
  "Children's and Infants' Wear Stores",
  'Chiropractors',
  'Cigar Stores and Stands',
  'Civic, Social, and Fraternal Associations',
  'Cleaning, Maintenance, and Janitorial Services',
  'Clothing Rental - Costumes, Uniforms, Formal Wear',
  'Colleges, Universities, Professional Schools, and Junior Colleges',
  'Commercial Equipment (Not Elsewhere Classified)',
  'Commercial Footwear',
  'Commercial Photography, Art, and Graphics',
  'Commercial Sports, Professional Sports Clubs, Athletic Fields, and Sports Promoters',
  'Computer Maintenance, Repair and Services (Not Elsewhere Classified)',
  'Computer Network/Information Services',
  'Computer Programming, Data Processing, and Integrated Systems Design Services',
  'Computer Software Stores',
  'Computers and Computer Peripheral Equipment and Software',
  'Construction Materials (Not Elsewhere Classified)',
  'Consumer Credit Reporting Agencies',
  'Convenience Stores',
  'Cosmetic Stores',
  'Counseling Services - Debt, Marriage, and Personal',
  'Courier Services - Air and Ground, and Freight Forwarders',
  'DVD/Video Tape Rental Stores',
  'Dairy Products Stores',
  'Dating Services',
  'Dentists and Orthodontists',
  'Department Stores',
  'Detective Agencies, Protective Services, and Security Services, including Armored Cars, and Guard Dogs',
  'Digital Goods - Applications (Excludes Games)',
  'Digital Goods - Games',
  'Digital Goods - Large Digital Goods Merchant',
  'Digital Goods Media - Books, Movies, Digital artwork/images, Music',
  'Direct Marketing - Catalog Merchant',
  'Direct Marketing - Combination Catalog and Retail Merchant',
  'Direct Marketing - Continuity/Subscription Merchant',
  'Direct Marketing - Inbound Teleservices Merchant',
  'Direct Marketing - Insurance Services',
  'Direct Marketing - Other Direct Marketers (Not Elsewhere Classified)',
  'Discount Stores',
  'Doctors and Physicians (Not Elsewhere Classified)',
  'Drapery, Window Covering, and Upholstery Stores',
  'Drinking Places (Alcoholic Beverages) - Bars, Taverns, Nightclubs, Cocktail Lounges, and Discotheques',
  'Drug Stores and Pharmacies',
  'Drugs, Drug Proprietaries, and Druggist Sundries',
  'Dry Cleaners',
  'Durable Goods (Not Elsewhere Classified)',
  'Duty Free Stores',
  'Eating Places and Restaurants',
  'Electric Razor Stores - Sales and Service',
  'Electric Vehicle Charging',
  'Electrical Contractors',
  'Electrical Parts and Equipment',
  'Electronics Repair Shops',
  'Electronics Stores',
  'Elementary and Secondary Schools',
  'Employment Agencies and Temporary Help Services',
  'Equipment, Tool, Furniture, and Appliance Rental and Leasing',
  'Family Clothing Stores',
  'Fast Food Restaurants',
  'Financial Institutions - Automated Cash Disbursements',
  'Financial Institutions - Manual Cash Disbursements',
  'Financial Institutions - Merchandise, Services, and Debt Repayment',
  'Fines',
  'Fireplace, Fireplace Screens and Accessories Stores',
  'Floor Covering Stores',
  'Florists',
  'Florists Supplies, Nursery Stock and Flowers',
  'Freezer and Locker Meat Provisioners',
  'Fuel Dealers - Fuel Oil, Wood, Coal, and Liquefied Petroleum',
  'Funeral Services and Crematories',
  'Furniture, Home Furnishings and Equipment Stores, Except Appliances',
  'Furniture, Home Furnishings, and Equipment Stores, Except Appliances',
  'Furriers and Fur Shops',
  'General Contractors - Residential and Commercial',
  'Gift, Card, Novelty and Souvenir Shops',
  'Glass, Paint, and Wallpaper Stores',
  'Government Services (Not Elsewhere Classified)',
  'Government-Owned Lotteries (Non-U.S. region)',
  'Grocery Stores and Supermarkets',
  'Hardware Stores',
  'Hardware, Equipment and Supplies',
  'Health and Beauty Spas',
  'Heating, Plumbing, and Air Conditioning Contractors',
  'Hobby, Toy, and Game Shops',
  'Home Supply Warehouse Stores',
  'Hospitals',
  'Household Appliance Stores',
  'Industrial Supplies (Not Elsewhere Classified)',
  'Information Retrieval Services',
  'Insurance Premiums, (no longer valid for first presentment work)',
  'Insurance Sales, Underwriting, and Premiums',
  'Jewelry Stores, Watches, Clocks, and Silverware Stores',
  'Landscaping and Horticultural Services',
  'Laundries - Family and Commercial',
  'Laundry, Cleaning, and Garment Services',
  'Legal Services and Attorneys',
  'Local and Suburban Commuter Passenger Transportation, Including Ferries',
  'Lodging - Hotels, Motels, Resorts, Central Reservation Services',
  'Luggage and Leather Goods Stores',
  'Lumber and Building Materials Stores',
  'Management, Consulting, and Public Relations Services',
  'Marinas, Marine Service, and Supplies',
  'Marketplaces',
  'Massage Parlors',
  'Medical Services and Health Practitioners (Not Elsewhere Classified)',
  'Medical and Dental Laboratories',
  'Medical, Dental, Ophthalmic and Hospital Equipment and Supplies',
  'Membership Clubs (Sports, Recreation, Athletic), Country Clubs, and Private Golf Courses',
  'Membership Organizations (Not Elsewhere Classified)',
  "Men's and Boys' Clothing and Accessories Stores",
  "Men's and Women's Clothing Stores",
  "Men's, Women's, and Children's Uniforms and Commercial Clothing",
  'Metal Service Centers and Offices',
  'Miscellaneous Apparel and Accessory Shops',
  'Miscellaneous Automotive, Aircraft, and Farm Equipment Dealers (Not Elsewhere Classified)',
  'Miscellaneous Food Stores - Convenience Stores and Specialty Markets',
  'Miscellaneous General Merchandise',
  'Miscellaneous Home Furnishing Specialty Stores',
  'Miscellaneous Personal Services (Not Elsewhere Classified)',
  'Miscellaneous Publishing and Printing',
  'Miscellaneous Repair Shops and Related Services',
  'Miscellaneous and Specialty Retail Shops',
  'Money Transfer',
  'Motion Picture Theaters',
  'Motion Picture and Video Tape Production and Distribution',
  'Motor Freight Carriers and Trucking - Local and Long Distance, Moving and Storage Companies, and Local Delivery Services',
  'Motor Homes Dealers',
  'Motor Vehicle Supplies and New Parts',
  'Motorcycle Shops and Dealers',
  'Music Stores - Musical Instruments, Pianos, and Sheet Music',
  'News Dealers and Newsstands',
  'Non-Financial Institutions - Foreign Currency, Non-Fiat Currency (for example: Cryptocurrency), Money Orders (Not Money Transfer), Account Funding (not Stored Value Load), Travelers Cheques, and Debt Repayment',
  'Non-Financial Institutions - Stored Value Card Purchase/Load',
  'Nondurable Goods (Not Elsewhere Classified)',
  'Nurseries and Lawn and Garden Supply Stores',
  'Office and Commercial Furniture ...',
  'Opticians, Optical Goods, and Eyeglasses',
  'Optometrists and Ophthalmologists',
  'Orthopedic Goods - Prosthetic Devices',
  'Osteopaths',
  'Package Stores - Beer, Wine, and Liquor',
  'Paints, Varnishes and Supplies',
  'Parking Lots, Parking Meters and Garages',
  'Passenger Railways',
  'Pawn Shops',
  'Payment Transaction - Member Financial I',
  'Pet Shops, Pet Foods and Supplies Stores',
  'Petroleum and Petroleum Products',
  'Photofinishing Laboratories and Photo Developing',
  'Photographic Studios',
  'Plumbing and Heating Equipment and Supplies',
  'Podiatrists and Chiropodists',
  'Political Organizations',
  'Postal Services - Government Only',
  'Precious Stones and Metals, Watches and Jewelry',
  'Professional Services (Not Elsewhere Classified)',
  'Public Golf Courses',
  'Public Warehousing and Storage - Farm Products, Refrigerated Goods, Household Goods, and Storage',
  'Real Estate Agents and Managers',
  'Record Stores',
  'Recreation Services (Not Elsewhere Classified)',
  'Religious Goods Stores',
  'Religious Organizations',
  'Roofing, Siding, and Sheet Metal Work Contractors',
  'Schools and Educational Services (Not Elsewhere Classified)',
  'Security Brokers/Dealers',
  'Service Stations (With or without Ancillary Services)',
  'Sewing, Needlework, Fabric and Piece Goods Stores',
  'Shoe Stores',
  'Special Trade Contractors (Not Elsewhere Classified)',
  'Specialty Cleaning, Polishing and Sanitation Preparations',
  'Sporting Goods Stores',
  'Sporting and Recreational Camps',
  'Sports and Riding Apparel Stores',
  'Stamp and Coin Stores',
  'Stationery Stores, Office and School Supply Stores',
  'Stationery, Office Supplies, Printing and Writing Paper',
  'Steamship and Cruise Lines',
  'Swimming Pools - Sales and Service',
  'Tailors, Seamstresses, Mending, and Alterations',
  'Tax Preparation Services',
  'Taxicabs and Limousines',
  'Telecommunication Equipment and Telephone Sales',
  'Telecommunication Services, including Local and Long Distance Calls, Credit Card Calls, Calls Through Use of Magnetic Stripe Reading Telephones, and Fax Services',
  'Ticket Agencies and Theatrical Producers (Except Motion Pictures)',
  'Timeshares',
  'Tolls and Bridge Fees',
  'Tourist Attractions and Exhibits',
  'Trailer Parks and Campgrounds',
  'Transportation Services (Not Elsewhere Classified)',
  'Travel Agencies and Tour Operators',
  'Truck and Utility Trailer Rentals',
  'Typesetting, Plate Making and Related Services',
  'Used Merchandise and Secondhand Stores',
  'Utilities - Electric, Gas, Water, and Sanitary',
  'Variety Stores',
  'Veterinary Services',
  'Video Amusement Game Supplies',
  'Video Game Arcades/Establishments',
  'Wholesale Clubs',
  "Women's Accessory and Specialty Shops",
  "Women's Ready-To-Wear Stores ..",
]
