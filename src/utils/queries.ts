export const tourCollectionQuery = `
{
  tourCollection {
    items {
      date
      place
      city
      soldOut
      country
      ticketLink
      videoLink
      sys {
        id
      }
    }
  }
}`;

export const trackCollectionQuery = `
{
  trackCollection {
    items {
      date
      title
      link
      cover {
        url
      }
      sys {
        id
      }
    }
  }
}`;
