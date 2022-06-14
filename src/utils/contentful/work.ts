import {fetchGraphQL} from "./contentful"

const WORK_EXPERIENCE_FIELDS = `
    slug
    title
    bannerImage
    excerpt
    startTime
    endTime
    author{
        __typename
        ... on Author {
            name
            description
            status
            image
        }
    }
    sys{
        publishedAt
        firstPublishedAt
    }
    content
    timeRead
`

export type Work = { 
    slug : string ; 
    title : string ; 
    bannerImage : any ; 
    excerpt : string ; 
    startTime : string ; 
    endTime : string ;
    author : { 
        name : string ; 
        description : string  ; 
        status : string  ; 
        image : any; 
    }  ; 
    sys : { 
        publishedAt : string; 
        firstPublishedAt : string  ; 
    } ; 
    content : string; 
    timeRead: string 
}



function extractWork (fetchResponse : any ) : Work { 
    return fetchResponse?.data?.workExperienceCollection?.items?.[0] ; 
}

function extractWorkEntries( fetchResponse: any ) : Work[ ] { 
    return fetchResponse?.data?.workExperienceCollection?.items;
}

export const getAllWorkWithSlug = async (limit?: number ) => { 
    const response  = await fetchGraphQL(`
    query {
          workExperienceCollection(where:{slug_exists: true} , order: startTime_DESC ${limit? `,limit: ${limit}` : ""}) {
          items{
            ${WORK_EXPERIENCE_FIELDS}
          }
        }
      }
    `)
    return extractWorkEntries(response)
}

export const getWorkBySlug = async (slug : string ) => { 
    const response  = await fetchGraphQL(`
    query {
          workExperienceCollection(where:{slug: "${slug}"} ,limit:1) {
          items{
            ${WORK_EXPERIENCE_FIELDS}
          }
        }
      }
    `)
    return extractWork(response)
}

export const getAllSlugs = async () : Promise<string []> => { 
    const response  = await fetchGraphQL(`
    query {
          workExperienceCollection(where:{slug_exists:true}) {
          items{
            slug
          }
        }
      }
    `)
    return extractWorkEntries(response).map( i => i.slug)
}