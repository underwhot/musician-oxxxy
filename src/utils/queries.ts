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

export const newsCollectionQuery = `
{
  newsCollection {
    items {
      title
      date
      cover {
        url
      }
      sys {
        id
      }
    }
  }
}`;

export const newsItemQuery = (id: string) => `
{
  news(id: "${id}") {
    sys {
      id
    }
    title
    date
    cover {
      url
    }
    description {
      json
    }
  }
}`;
