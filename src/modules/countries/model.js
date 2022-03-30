const { fetch, fetchAll } = require('../../lib/postgres')

const COUNTRIES = `
    SELECT
        *
    FROM
        countries
`

const REGIONS = `
    SELECT
        *
    FROM
        regions
    WHERE
        country_id = $1
`

const NEW_REGION = `
    INSERT INTO regions(
        region_name,
        country_id,
        region_price
    )
    VALUES($1, $2,$3)
    RETURNING *
`
const DEL_REGION = `
DELETE FROM regions WHERE region_id = $1;
`

const countries = () => fetchAll(COUNTRIES)
const regions = (id) => fetchAll(REGIONS, id)
const newRegion = (name, countryID,price) => fetchAll(NEW_REGION, name, countryID,price)
const delRegion = (id) => fetchAll(DEL_REGION, id)

module.exports = {
    countries,
    regions,
    newRegion,
    delRegion
}