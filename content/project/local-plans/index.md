---
title: "Local plans"
status: alpha
label: "project:local-plans"
hasContent: true
pageFeedback: true
summary: We’re working with local planning authorities to design an improved format for publishing local plan data so that it’s easy to find, use and trust.
---

## Current areas of investigation

The following areas of investigation explore how the data could be used and made easier to work with:

{{< in-progress-issue title="What needs are we trying to address through opening up local plan data?" number="52" >}}

#### Questions we’re asking

To identify what data we want to make usable in local plans, we need to first understand [who local plans are for](https://github.com/digital-land/digital-land/issues/51) and [what people need from them](https://github.com/digital-land/digital-land/issues/57).

#### What we’re testing

We're conducting user research with local planning authorities, specifically investigating the quality and characteristics of the data – Is it binary? How often is it replicated? Who owns it?

#### What we’ve learned

* few authorities have adequate record keeping systems that create reliable data, aside from a record of the plan being submitted (Regulation 19)

* systems for tracking the progress of local plans are minimal or non-existent, as are standards for publishing local plans or related evidence or documentation

* decisions that are normally communicated in a narrative often aren’t easy to record as binary data

* the timing of the examination process isn’t clear, which creates uncertainty for local planning authorities and developers

{{< in-progress-issue title="A timetable for local plan production" number="61" >}}

#### Questions we’re asking

There is no central record of where local planning authorities are in the process of producing their local plans. Would creating a central record be useful to users of local plans?

What would a useful record of local plan production look like?

What are the obstacles to creating one?

#### What we're testing

Our current [local plan explorer](https://local-plans-prototype.herokuapp.com/local-plans) allows planning authorities to update their planning timetables and others to view it.

#### What we've learned

We are continuing to test the prototype and analyse our findings for this area of investigation.

We’ve meanwhile arrived at a number of insights from our research around local plans:

* creating a local plan is a very lengthy, involved process, and it’s often difficult to know the status of a local plan in the publication process, even by those involved in its creation

* the length of the publication process means that accurate, up-to-date information isn’t always available

* both of the above can result in uncertainty, which can slow or stop development and undermine a local planning authority’s ability to make decisions

* there are tensions between the desire to produce a comprehensive local plan of the highest quality and the need to make the production process efficient and cost effective

* a lack of standardisation in the process makes it difficult to create and maintain a central record

{{< in-progress-issue title="How are local plans created?" number="50" >}}

#### Questions we’re asking

What is the process for creating a local plan?

What steps are required, what data is needed, who is involved and what are their roles?

How does the process vary between local planning authorities and what are the implications of differences?

How much are communities consulted on plans and is there a role for data to support that?

What are the pain points in generating the data?

#### What we’re testing

We are researching the barriers, opportunities and challenges to data / record-keeping at different stages of plan production:

* assembling plans

* consulting on plans

* approving / examining plans

* using plans for future planning decisions

#### What we’ve learned

A lack of standardisation in the process of creating local plans mean that different local planning authorities create local plans in different ways, and with widely different outcomes that make the data difficult to extract and use. For example, the way authorities represent their [targets for housing units](https://digital-land.github.io/project/housing-numbers/) varies widely, which means it’s difficult to make meaningful comparisons or contrasts between areas.

{{< govuk-section-break "xl" >}}

## Upcoming areas of investigation

{{% include-content "/project/local-plans/_upcoming-areas-of-investigation.md" "upcoming-areas-section" %}}

{{< govuk-section-break "xl" >}}


## Local plans project discovery report

The Digital Land team carried out a discovery project on local plans during summer 2019.

Local plans are extensive documents that are complex to produce. Developing one involves gathering a huge amount of evidence about needs related to housing, the environment, infrastructure and communities. Local plans state planning commitments such as:

*   site allocations
*   housing need and projected housing numbers
*   infrastructure projects and spending

Going into discovery, it was clear that there are issues around how usable the data contained in local plans is, particularly for purposes other than local plan decision making.  

The data isn’t consistently measured and represented across local plans, for example. This means that data must be validated manually. National housing numbers, for example, can only be determined by finding, reading and verifying the data in 327 local plans.

Our discovery phase explored these issues as well as how data is used in the different stages of making local plans.  

### Who we talked to

As part of the discovery we spoke to:

*   Local authorities
	*   We had in-depth conversations with the planning teams of 9 local authorities from across the country and at different stages in the development of their local plans. Some of these were involved in producing joint and strategic plans.
*   Planning Development Policy Team
	*   We held sessions with the planning development policy team to map the local plan lifecycle, from the setting of the local development scheme to a local plan being approved.
*   The Planning Inspectorate
	*   We held 3 sessions with the Planning Inspectorate (PINS) to map their business processes and to understand the inspection process and how they manage data.
*   MHCLG Planning and Policy Directorate
	*   We held 2 workshops – one with colleagues from the Planning Directorate and another with the Housing Directorate – to explore their needs.  
*   Neighbourhood planning
	*   We conducted an extended interview with a neighbourhood planning expert from Reading University to understand how neighbourhood planning groups contribute to and use local plans and what data requirements they might have in the future.  
*   Proptech and consultancies supporting local plan making
	*   We attended a session led by the Future Cities Catapult with proptech companies and consultancies working in this space.  

### Insights (by user group)

We broadly mapped user needs across 3 main users of local plans – the Ministry of Housing, Communities and Local Government (MHCLG), local authorities and the Planning Inspectorate (PINS).  

#### MHCLG

We identified a number of challenges in the department’s work related to local plans. These related to:  

*   oversight of policy delivery
*   whether local authorities are on track to meet required housing figures
*   where to support or intervene in local authorities and their plan making process
*   how best to support local plan making
*   how to measure the impact of planning policies

Further investigation revealed 2 clear user needs: the first around tracking local plan making and the second related to using content or decisions in a local plan.

There are typically 3 main barriers to using the content of local plans:

*   visibility of information
*   difficulty assessing the context of local plans
*   challenges in determining how current, accurate and feasible the planning commitments within the documents are

Our research revealed that not much data is easily extractable from local plans. The format and presence of any given data varies widely and the numbers in local plans are often derived from data that doesn’t appear in the local plan in its raw format. As a result, it’s often impossible to use local plan data to provide UK-wide information about a planning concern.

#### Local authorities

Local authorities oversee the entire process of making local plans. We separated local authorities’ needs into 2 broad categories: those relating to policy and processes surrounding local plan making and those directly relating to data.

_Policy and processes_

It became evident early in the discovery that there is a clear tension between the making of local plans as a quick and easy step-by-step process, as opposed to a political process for building legitimacy and trust for a planning vision.

There are a number of challenges around syncing local plan making with local government political cycles, especially in the case of combined authorities. It can also be a challenge for local authorities to reconcile policy requirements and meet local needs while also managing a shifting market environment. With housing numbers, for example, local authorities are being asked to forecast a planning commitment in a shifting market environment while having little control over developers to enforce housing delivery targets. Unsurprisingly, this affects the quality of data.

Local authorities also reported that the process of making local plans has become increasingly adversarial. In order to manage this, they tend to gather excessive amounts of evidence to back up decisions. Local authorities report that not enough advice is provided in regards to how much evidence they should gather and how it should be represented. The resulting inconsistency between local authorities in terms of how data is represented (and how much) makes it difficult to aggregate the data on a national level or to use it for wider ranging applications.

_Data-related_

It can take a local authority anywhere from 2 to 5 years to produce a local plan. The longer the process goes on, the higher the risk of evidence going out of date or changes in policy affecting intended outcomes.

Regarding data capability, local authorities have limited expertise of producing and publishing data and are stretched for resources in this area – although there were a number of examples of data being used successfully.  

Access to reliable and accurate data about neighboring authorities was a clear blocker to cross-authority collaboration on issues such as housing delivery.

#### The Planning Inspectorate

The Planning Inspectorate (PINS) is tasked with examining plans and managing the inspection process, and has direct oversight over the local plan making process between when a plan is submitted for examination (Regulation 24) and when a plan is found sound and completes examination (Regulation 25).

It is difficult for PINS to know where local plans are in their production, which in turn makes it difficult for them to resource and plan examinations. This is in part because:

*   the local development schemes that provide information about emerging local plans are irregularly updated and often not published (local authorities are required to publish them but this policy requirement isn’t enforced)
*   local authorities can delay examination at any point and once plans complete examination there is little sight of when they become adopted (as a result, the collection of emerging local plan intel is a manual process)
*   there is no methodology to guide the documentation submitted and therefore the examination, which means inspectors develop bespoke assessments for each Local Plan under examination
*   of the increasingly complex nature of plans (for example joint plans, scope of planning policies, statutory documents) and the consequent legal considerations further increase inspectors’ workloads – as well as the duration of examinations  

The core mandate of PINS is to arrange inspections of local plans to assess their soundness. To carry out their work they need a reliable overview of:

*   local development schemes (which give a provisional overview of a local plan’s content and timetable for publication)
*   the policy areas under review in an emerging local plan at the point it is submitted for examination and when it is adopted
*   the date a local plan is due for submission for examination
*   the date a local plan is adopted

The systems that PINS use to carry out their work don’t support the extraction and collection of this data, however. PINS collects much of the data they need from local authorities on a manual, ad hoc basis – often through desk research. Neither PINS nor the inspectors keep track of what’s in these local plans, so they aren’t able, for example, to generate data on local plans nationally without manually investigating each time.

### Insights related to data extraction

#### Problems with data extraction

Discovery led to a wide range of insights on the local plan making process, but perhaps our most important observation was that it is often impossible to extract ‘finished’ data from local plans, either during their production or even when published. This is for a number of reasons, but there are 3 main ones:

1. The plan making process is cyclical rather than linear, with policy decisions in flux rather than ever truly finished. By the time one local plan is published, the process of producing the next one has already started. Even if there were data extraction systems in place, a snapshot of the data at any given stage in the plan development process would reveal many policy decisions that aren’t yet fully formed.

2. There are no effective systems or processes in place to extract the data, so this needs to be done manually.  

3. No one party has complete oversight of local plans in development from start to finish, and the progress of a local plan towards publication can be delayed by a wide range of external factors. As a result it’s often difficult to know what stage of development a local plan is in and when it will actually be published.

Other considerations that make it more difficult to extract data from local plans, some of which are the result of how local plans policy and the plan making process have been designed, include:

*   a lack of standardisation to ensure consistent methods, formats for production of evidence and publication (which flags a need to provide local authorities with more guidance that defines what good looks like and how to supply evidence)
*   an objective requirement for housing numbers when the local process for determining this is, judging from initial feedback from local authorities and examiners, a very subjective one
*   authorities self publishing data, which affects the quality and reliability of that data - especially given many are not data experts

We also developed a prototype to extract housing numbers from local plans as part of our discovery and to test our assumptions about collecting data at source. This revealed that:

*   the web addresses of published local plans and local development scheme timetables were inconsistent and unpredictable
*   housing numbers were, when they could be found, expressed in a variety of ways
*   it’s difficult to know which document on a local authority’s website is most up to date

#### Opportunities for data extraction

We can start to build a useful picture of where a plan is in its development by looking at emerging data that can be extracted at certain established milestones in the local plan lifecycle. This data is available when:

*   the local development scheme is published (it proposes both a timetable for local plan publication and what general policy areas will be covered in it)
*   the local plan is opened up for formal consultation with residents and stakeholders, which gives further details about areas of policy involved
*   the local plan is submitted to PINS for examination
*   the local plan is formally adopted by the local authority (and published)

At the third milestone (when a plan is submitted for examination according to Regulation 24), it could be possible to create a standardised executive summary of the plan containing policy areas and commitments etc, which could help examiners in their task of assessing the local plan. This could then be revised when the plan is adopted by the local authority. However, this may be beyond the remit of this discovery, which has a specific focus on data.

### Hypotheses

We arrived at 3 hypotheses based on our analysis of the discovery research.

1. Better information about the status and stage of local plans in development could help:

*   determine the accuracy of content
*   better resourcing of local plan examination
*   reduce uncertainty relating to planning permissions
*   support intervention

2. Better visibility and accessibility of the overarching content of emerging and existing local plans could improve:

*   transparency and efficiency of planning decisions
*   clarity of what local authorities are planning for and the feasibility of delivery
*   opportunities for successful support or intervention
*   the efficiency of the local plan examination process

3. Greater consistency of part or all of the local plan content and supporting evidence could improve:

*   users’ ability to aggregate and analyse content as data at scale
*   collaboration across authorities and at a regional level
*   efficiency of the end-to-end local plan making process
*   the transparency of planning decisions
*   the ability of local authorities and PINS to measure the delivery of local plans

### Recommendations

We recommend testing the first 2 hypotheses (tracking the status of local plans and establishing what is covered by them) through the following interventions:

*   setting a data standard for the timetable of local plan making
	*   to be kept and maintained by each local authority and based on the existing local development scheme – this will help build a national picture of the plan making process.  
*   setting a data standard for the policy areas contained in each local plan
	*   this will help to index policy areas covered in a local plan, which will help build a national picture of planning policy
*   tracking datasets needed for each planning policy (tentative)
	*   this could help us prioritise the Digital Land work, assessing which data impacts the highest number of local planning policies

We are currently preparing to investigate these interventions as part of an alpha for prototyping, building and testing.   

Other possible projects include:

*   developing the geospatial element of the data alongside the Geospatial Commission
*   further discovery work on housing delivery and numbers, which will help us to:
	*   better understand the relationship between this measurement and the housing delivery test metrics
	*   explore how we might monitor the actual delivery of housing from systems such as Council Tax and the address register

#### Principles for further investigation

We suggest using the following principles across projects:

*   it isn’t necessary to overhaul or reinvent the entire process of local plan making
*   where possible keep data as close to its original source as possible
*   avoid adding unnecessary burdens on local authorities

## Timeline

**Late July**

We will present our findings and agree next steps with the planning directorate steering group.

**Mid July**

We will be running workshops internally with the Local Digital team and stakeholders to share results and plan for alpha.

**Late June**

We completed a full analysis of discovery findings, ID user traits, pain points and user needs. We also created hypotheses for moving into alpha (or breaking the project down into several different alphas).

**Early June**

We completed interviews with 9 local authorities across England who are at various stages in their plan making process. We also completed interviews with neighbourhood planning experts to understand the use of local plans after they have been adopted.

**24 May 2019**

We ran a workshop with the housing policy team to learn about how they use local plans.

**March - May 2019**

We are meeting with local authorities across the country to understand the different Local Plan making processes, the challenges faced by those involved, and the data used throughout the process. This is a key part of our research into how digital tools could support the process of collecting and publishing data, and making local plans.

**24 April 2019**

We met with the [Planning Inspectorate](https://www.gov.uk/government/organisations/planning-inspectorate) to learn about their involvement in monitoring emerging plans.

**April 2019**

We met with 2 councils in April to learn about their plan-making process.

**28 February 2019**

We ran a workshop with the planning policy team to learn about their needs around creating, monitoring and reviewing local plans.

**February 2019**

We started the discovery phase.

**10 January 2019**

We attended the ‘Answering the Housing Land Question - Building a Knowledge Base’ conference in Reading and participated in a panel on ‘Land: The State of Data and Information Availability’.
