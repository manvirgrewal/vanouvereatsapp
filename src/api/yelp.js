import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer iIpl8IcVow1xp2JJlA4-LPz5rygdhaFe8bumAkZ9o-iPtuoOSoi31MPyXwJmMpEWk_I0X30IpjBsNg2LTH6rHRokS-dpUq-OIXpjIe2LMmLEanCi4eDXJgeYRynJYHYx'
    }
});

