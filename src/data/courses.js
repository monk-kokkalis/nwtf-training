const courses = [
    {
        category: 'Agriculture',
        courses: [
            {
                name: 'Agro-Entrepreneurship NC II',
                description: "This qualification consists of competencies that a person must achieve to assess market opportunities, establish farm production plan, handle finances, and market produce.",
                modules: [
                    {
                        name: 'Introduction to Agro-Entrepreneurship',
                        description: "This module covers the knowledge, skills, and attitudes required to gain basic and common competencies for Agro-Entrepreneurship NC II. This is a prerequisite course for Assessing Market Opportunities, Establishing the Farm Production Plan, Handling Finances, and Marketing Farm Produce."
                    },
                    {
                        name: 'Assessing Market Opportunities',
                        description: "This module covers the knowledge, skills, and attitude required to assess market opportunities. This module includes an introduction to basic marketing concepts and the procedures in preparing a market plan."
                    },
                    {
                        name: 'Establishing the Farm Production Plan',
                        description: "This module covers the knowledge, skills, and attitudes required to establish a farm production plan. It includes an introduction to farm operations and activities, basic farm assessment procedures, components of a farm production plan, and the selection of suppliers and service providers for farm production. It also includes the procedures and principles in reviewing and improving the farm production plan."
                    },
                    {
                        name: 'Handling Finances',
                        description: "This module covers the knowledge, skills, and attitudes required to manage the financial aspect of farm production. This module begins with an introduction to basic terms and principles in finance. It includes a discussion of financial service providers for agriculture, loan application, and cooperative membership application. This module also includes investment options for farm operators."
                    },
                    {
                        name: 'Marketing Farm Produce',
                        description: "This module covers the knowledge, skills, and attitudes required to market farm produce. It covers price monitoring, market selection, marketing strategies, pricing strategies, and preparing products for selling."
                    }
                ]
            },
            {
                name: 'Aquaponic Food Production',
                description: "Aquaponics is a cooperation between plants and fish and the term originates from the two words aquaculture (the growing of fish in a closed environment) and hydroponics (the growing of plants usually in a soil-less environment).",
                modules: [
                    {
                        name: 'Introduction to Aquaponic Food Production',
                        description: "This module is the fundamental course for aquaponic food production. Learn all about aquaponics, hydroponics, and aquaculture in this module as well as the important water quality parameters and necessary occupational health and safety practices observed in the aquaponic farm!"
                    },
                    {
                        name: 'Setting up Aquaponics Systems',
                        description: "This module is the heart of the aquaponic food production online course. It is expected that you have finished the Introduction course before proceeding. Learn the science behind aquaponics, the different aquaponic culture techniques, and how to design and build the aquaponics unit!"
                    },
                    {
                        name: 'Maintaining Aquaponics Systems',
                        description: "This module is all about maintenance and managing the aquaponics system. From kickstarting the aquaponics unit to feeding fish, planting seedlings, up to the actual harvest! Also learn about the different ways aquaponics is applied and integrated with other farming systems. You are expected to have finished the first two modules before taking this module. Learn all the skills required of an aquaponic farmer!"
                    }
                ]
            },
            {
                name: 'Organic Agriculture Production NC II',
                description: "Hi there, Farmer of the Future! Welcome to Organic Agriculture Production NC II. We're so glad to have you on board. Whether you want to grow your own food or you're considering a career in agriculture - you have come to the right place. Watch this video to learn more about this qualification",
                modules: [
                    {
                        name: 'Introduction to Organic Agriculture',
                        description: "This module covers the knowledge, skills, and attitudes to begin your pursuit of a National Certificate for Organic Agriculture. It includes an overview of the Organic Agriculture Industry in the Philippines, the Fundamentals of Organic Agriculture, and Organic Certification. This is a prerequisite course for Raising Organic Chickens, Producing Organic Vegetables, Producing Organic Fertilizers, and Making Organic Concoctions and Extracts."
                    },
                    {
                        name: 'Formulating Organic Concoctions & Extracts',
                        description: "This module covers the knowledge, skills, and attitude required to produce organic concoctions and extracts for owned farm consumptions. This module includes procedures for the preparation and production of 11 known organic concoctions and extracts."
                    },
                    {
                        name: 'Producing Organic Fertilizers',
                        description: "This module covers the knowledge, skills, and attitude required to produce organic fertilizers which include tasks such as preparing compost site and raw materials, carrying out composting methods, and harvesting compost. This module focuses on the production of dry organic soil amendments. "
                    },
                    {
                        name: 'Producing Organic Vegetables',
                        description: "This module covers the knowledge, skills, and attitude required to establish a nursery, plant seedlings, perform plant care, and perform harvest and post-harvest."
                    },
                    {
                        name: 'Raising Organic Chickens',
                        description: "This module covers the knowledge, skills, and attitudes required to raise organic chicken efficiently and effectively. It includes lessons on selecting healthy stocks, determining suitable chicken house materials and equipment, installing a brooding facility, feeding chickens, managing the health and growth of chicken, and harvesting broilers and layers."
                    }
                ]
            },
            {
                name: 'Agricultural Crops Production NC II',
                description: "Qualification consists of competencies that a person must achieve to produce various agricultural crops which include performing nursery operations, planting, caring and maintaining of crops and carrying-out harvest and postharvest operations.",
                modules: [
                    {
                        name: 'Introduction to Agricultural Crops Production',
                        description: "This course includes the knowledge, skills, and attitude that you must have before working in the agricultural crops production sector. Help us improve this course by filling out the Course Evaluation Form. Thank you very much, and Happy eLearning!"
                    },
                    {
                        name: 'Performing Nursery Operations',
                        description: "This course includes the knowledge, skills, and attitude that you must have in order to perform nursery operations and procedures. Help us improve this course by filling out the Course Evaluation Form. Thank you very much, and Happy eLearning!"
                    },
                    {
                        name: 'Planting Crops',
                        description: "This course includes the knowledge, skills, and attitude that you must have in order to plant different agricultural crops. Help us improve this course by filling out the Course Evaluation Form. Thank you very much, and Happy eLearning!"
                    },
                    {
                        name: 'Caring and Maintaining Crops',
                        description: "This course includes the knowledge, skills, and attitude that you must have in order to perform plant care and maintenance procedures. Help us improve this course by filling out the Course Evaluation Form. Thank you very much, and Happy eLearning!"
                    },
                    {
                        name: 'Performing Harvest and Postharvest Operations',
                        description: "This course includes the knowledge, skills, and attitude that you must have in order to perform harvest and postharvest operations. Help us improve this course by filling out the Course Evaluation Form. Thank you very much, and Happy eLearning!"
                    }
                ]
            }
        ]
    },
    {
        category: 'Automotive',
        description: " Qualification consists of competencies that a person must achieve to inspect, clean and repair mechanical or electrical parts, components, assemblies and sub-assemblies of light and heavy-duty automotive vehicle with diesel or gas engine in accordance with manufacturer’s specification",
        courses: [
            {
                name: 'Automotive Servicing NC II',
                description: 'This qualification consists of competencies that a person must achieve to inspect, clean and repair mechanical or electrical parts, components, assemblies and sub-assemblies of light and heavy-duty automotive vehicle with diesel or gas engine in accordance with manufacturer’s specification'
            }
        ]
    },
    {
        category: 'Construction',
        description: "Qualification consists of competencies that a person must achieve that will enable him / her to prepare tools, painting materials and equipment; prepare surfaces (wood, concrete, drywall and metal) for painting and assembling access equipment; and perform painting work.",
        courses: [
            {
                name: 'Painting NC II',
                description: 'This course is designed to enhance the knowledge, skills, positive attitude and work values of a painter in accordance with international standards. It covers competencies in preparing tools, painting materials and equipment; preparing surface for painting; and performing painting works'
            }
        ]
    },
    {
        category: 'Electrical and Electronics',
        courses: [
            {
                name: 'Computer System Servicing NC II',
                modules: [
                    {
                        name: 'Introduction to CSS',
                        description: "This is the prerequisite module for Computer Systems Servicing NC II. Make sure to take this module before proceeding to other modules for CSS. This module will teach you the fundamentals and basics of the computer system before you proceed to the actual and hands-on computer servicing."
                    },
                    {
                        name: 'Installing and Configuring Computer Systems',
                        description: "This module will be all about installing and configuring computer hardware and software. This is the second module for CSS, so make sure you've taken the Intro to CSS course before proceeding here. You will learn how to disassemble and assemble a computer, as well as install the operating system and necessary program applications."
                    },
                    {
                        name: 'Setting Up Computer Networks',
                        description: "This module will be all about setting up computer networks! This is the third module for CSS, it is important that you've completed taking Intro to CSS and Installing and Configuring Computer Systems. This module will teach you how to create network cables and configure the network. You will learn how to configure the router and terminate and connect cables for a workstation."
                    },
                    {
                        name: 'Setting Up Computer Servers',
                        description: "This module will be all about setting up computer servers. This is the fourth module for CSS, it is important that you've completed taking Intro to CSS and Installing and Configuring Computer Systems. This module will teach you how to set up computer servers. This includes setting up user access, configuring network services, and performing testing and documentation procedures."
                    },
                    {
                        name: 'Maintaining Computer Systems and Networks',
                        description: "This module will be all about maintaining computer systems and networks. This is the last module for CSS, it is recommended that you've completed all of the previous modules. However, it is only necessary to take Intro to CSS, Installing and Configuring Computer Systems, and Setting Up Computer Networks for this module. This module will teach you how to plan and prepare for the maintenance of computer systems and networks and inspect and test configured and repaired computer systems and networks."
                    }
                ]
            },
            {
                name: 'Electrical Installation and Maintenance NC II',
                description: "The Electrical Installation and Maintenance NC II Qualification consists of competencies that a person must achieve to enable him/her to install and maintain electrical wiring, lighting and related equipment.",
                modules: [
                    {
                        name: 'Solar Night Light Assembly',
                        description: "Solar Night Light Assembly covers knowledge and skills needed to assemble, test, and troubleshoot solar night lamp. This material can also be used to deepen one's understanding on the process and the system used of turning solar energy into consumable energy using solar-powered generation technology. This learning material is a self-paced course."
                    }
                ]
            },
            {
                name: 'ELECTRONIC PRODUCTS ASSEMBLY AND SERVICING NC II',
                description: "The ELECTRONIC PRODUCTS ASSEMBLY AND SERVICING NC II Qualification consists of competencies that a person must possess to assemble electronic products, prepare printed circuit boards (PCB) modules and to install and service consumer and industrial electronic products and systems.",
            }
        ]
    },
    {
        category: 'Health Care',
        courses: [
            {
                name: 'Massage Therapy NC II',
                modules: [
                    {
                        name: "Foundations of Massage Practice (1 of 4)",
                        description: "This is the one of the introductory courses for Swedish, Shiatsu, and Thai massage, and is a requirement, whether you want to study all the three modalities or just want to focus on one."
                    },
                    {
                        name: "Fundamentals of Massage Therapy (2 of 4)",
                        description: "This is the other introductory course that covers the basic knowledge of Massage Therapy. It tackles the three stages of massage therapy - the pre-massage, massage proper, and post-massage."
                    },
                    {
                        name: "Performing Swedish Massage (3 of 4)",
                        description: "This course contains the knowledge one must have to perform a Swedish Massage."
                    },
                    {
                        name: "Performing Shiatsu (4 of 4)",
                        description: "This course contains the knowledge one must have to perform a Shiatsu Massage. "
                    }
                ]
            }
        ]
    },
    {
        category: 'Medical',
        description: "Qualification consists of competencies that a person must achieve to transcribe dictated recordings made by physician and other health care professionals and transcribe them into medical reports.",
        courses: [
            {
                name: "Medical Transcription NC II",
                description: "This qualification consists of competencies that a person must achieve to transcribe dictated recordings made by physician and other health care professionals and transcribe them into medical reports."
            },
            {
                name: "Medical Coding and Billing NC II",
                description: "This qualification consists of competencies that a person must achieve to demonstrate a proficiency in assigning diagnostic and procedural code using the ICD-9, CPT manuals and perform tasks associated with billing and reimbursement, including insurance and patient billing, payment processing, and claims review, correction, and appeals."
            }
        ]
    },
    {
        category: 'Process Food and Beverages',
        description: "It also includes competencies of a person in the production line of manufacturing processed food who is responsible for routinary works such as inspection of simple defects of packing materials, seal integrity and correct product label.",
        courses: [
            {
                name: "FOOD AND BEVERAGE SERVICES NC II",
                description: "This qualification consists of competencies that a person must achieve to provide food and beverage service to guests in various food and beverage service facilities."
            }
        ]
    },
    {
        category: 'Tourism',
        description: "Tourism Promotion Services NC II is a short TESDA course in the Philippines that will train you in boosting the tourism in a certain area by promoting its products and services.",
        courses: [
            {
                name: 'Preparing Hot Meals (COC1)',
                modules: [
                    {
                        name: 'Preparing Egg, Vegetable and Farinaceous Dishes',
                        description: "In this module, we will present to you the knowledge and skills that you must have in order to perform the basic techniques of egg cookery. This module will also present to you the basic procedures for preparing vegetables and starch dishes."
                    },
                    {
                        name: 'Preparing Meat Dishes',
                        description: "This module will present the knowledge and skills that you must have in order to perform the procedures for cooking beef, pork and lamb. Preparing meat from other sources such as fowls and game animals will be discussed in a separate module."
                    },
                    {
                        name: 'Preparing Poultry and Game Dishes',
                        description: "This module will present the knowledge and skills that you must have in order to perform the procedures for cooking poultry meat such as chicken, turkey, duck and quail and both furred and feathered game animals."
                    },
                    {
                        name: 'Preparing Seafood Dishes',
                        description: "This module will present the knowledge and skills that you must have in order to perform the procedures for cooking fish and shellfish dishes."
                    },
                    {
                        name: 'Preparing Stocks, Sauces, and Soup',
                        description: "In this module, we will discuss the procedures for preparing and storing, as well as standard recipes for stocks, sauces and soups."
                    }
                ]
            },
            {
                name: 'Preparing Cold Meals (COC2)',
                modules: [
                    {
                        name: "Preparing Appetizers and Hors d'oeuvres",
                        description: "Cookery NC II: Preparing Appetizers and Hors d’oeuvres covers the competency required to prepare and present appetizers and hors d’oeuvres. This self-paced module is part of the cluster Cookery NC II: Preparing Cold Meals. In this module, we will present to you the knowledge and skills that you must have in order to perform the procedures for preparing appetizers and hors d’oeuvres properly."
                    },
                    {
                        name: "Preparing Salads and Salad Dressings",
                        description: "Cookery NC II: Preparing Salads and Dressings covers the unit of competency required to prepare and present salads and dressings. This self-paced module is part of the cluster Cookery NC II: Preparing Cold Meals. In this module, we will present to you the knowledge and skills that you must have in order to perform the procedures for preparing salads and dressings properly."
                    },
                    {
                        name: "Preparing Sandwiches",
                        description: "Cookery NC II: Preparing Salads and Dressings covers the unit of competency required to prepare and present salads and dressings. This self-paced module is part of the cluster Cookery NC II: Preparing Cold Meals. In this module, we will present to you the knowledge and skills that you must have in order to perform the procedures for preparing salads and dressings properly."
                    }
                ]
            },
            {
                name: "Food and Beverage Services NC II",
                modules: [
                    {
                        name: "Introduction to Food and Beverage Services",
                        description: "Introduction to Food and Beverage (F&B) Service covers topics that will help you understand the duties and responsibilities of a food and beverage service staff, the F&B department and its role in the tourism industry. This course also consists of topics on preparing the F&B environment for service and handling complaints from the guests."
                    },
                    {
                        name: "Providing Room Service",
                        description: "Providing Room Service includes lessons presenting the important knowledge and skills you must have in order to properly and effectively provide in-room dining. Room service gives guests with food and beverage service in the privacy of their own room or suite. Room service is a feature in establishments that offer accommodation. Different establishments including hotels and resorts from five (5) or six (6) to one (1) star, serviced apartments or villas and residential clubs offer different types of room service. This can range from a 24-hour to breakfast-only service."
                    },
                    {
                        name: "Providing Table Service",
                        description: "Providing Table Service presents topics to help you understand the duties and responsibilities of waitstaff or a food and beverage service attendant. This course covers topics on the activities a waitstaff needs to undertake in order to fulfill his/her responsibilities such as meeting and greeting of guests, taking food and beverage orders, serving orders, ensuring guest satisfaction, presenting guest accounts, concluding food and beverage service, and preparing for the next service."
                    }
                ]
            },
            {
                name: "Housekeeping NC II",
                modules: [
                    {
                        name: "Providing Housekeeping Services",
                        description: "This course deals with the skills and knowledge required to provide housekeeping services to guests within the tourism industry. This course also provides a glimpse on the duties and responsibilities of the different positions under the Housekeeping department."
                    },
                    {
                        name: "Providing Valet Services",
                        description: "Valet Servicing covers skills and knowledge required to provide valet/butler services in a commercial accommodation establishment. This self-paced course is one of the competencies in Housekeeping NC II."
                    }
                ]
            }
        ]
    },
]

export default courses;